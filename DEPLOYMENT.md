# Hosting Multiple Websites on One DigitalOcean VPS

Since you already have **1 website running on this VPS**, Vidspry is configured to run alongside it without interfering with your existing site.

---

## How It Works Together on One VPS

1. **Port Separation**: Your existing website might be using port `80/443` via Nginx and an internal port like `3000` or `8080`. Vidspry runs inside its own isolated Docker container bound locally to `127.0.0.1:3001` (so it never clashes with your first site).
2. **Domain-based Routing (Nginx)**: Nginx receives all traffic on ports `80/443` and routes:
   - `existing-site.com` ➔ Your 1st website
   - `vidspry.yourdomain.com` (or `yournewdomain.com`) ➔ `http://127.0.0.1:3001` (Vidspry)
3. **Directory Separation**: Vidspry lives in its own folder `/var/www/vidspry`.

---

## 1. Quick One-Time Setup on VPS

SSH into your DigitalOcean Droplet:

```bash
ssh root@your_server_ip
```

Create the directory for Vidspry:

```bash
sudo mkdir -p /var/www/vidspry
sudo chown -R $USER:$USER /var/www/vidspry
```

*(Ensure Docker and Docker Compose are installed on the VPS if you haven't already installed them).*

---

## 2. Configure GitHub Secrets for Automatic Deployment

Go to your Vidspry repository on GitHub:
**Settings ➔ Secrets and variables ➔ Actions ➔ New repository secret**

Add these secrets:

| Secret Name | Value | Description |
| :--- | :--- | :--- |
| `DO_HOST` | `your_vps_ip` | VPS IP address |
| `DO_USERNAME` | `root` (or `ubuntu`) | SSH user |
| `DO_SSH_KEY` | `-----BEGIN OPENSSH PRIVATE KEY-----...` | Your private SSH key |
| `APP_PORT` | `3001` (default) | Local internal port for Vidspry |
| `DO_APP_DIR` | `/var/www/vidspry` | Folder on VPS |
| `NEXT_PUBLIC_APP_URL` | `https://your-new-domain.com` | Domain for Vidspry |
| `GOOGLE_SITE_VERIFICATION` | *(Optional)* | Google Console token |

---

## 3. Add Nginx Server Block for Your Second Domain

Create a new Nginx configuration file for your new domain (do **not** touch your existing website's config file):

```bash
sudo nano /etc/nginx/sites-available/vidspry
```

Paste the following block (replace `newdomain.com` with your actual domain/subdomain):

```nginx
server {
    listen 80;
    server_name newdomain.com www.newdomain.com;

    # Buffer size for streaming
    client_max_body_size 100M;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;

        # Disable buffering for real-time video/audio streaming
        proxy_buffering off;
        proxy_read_timeout 300s;
        proxy_send_timeout 300s;
    }
}
```

Enable the new site and reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/vidspry /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Add SSL for the Second Website

Run Certbot to secure the second domain with HTTPS without affecting your existing certificates:

```bash
sudo certbot --nginx -d newdomain.com -d www.newdomain.com
```

---

## 4. Trigger Deployment

Push a commit to GitHub:

```bash
git add .
git commit -m "Deploy second website via CI/CD"
git push origin main
```

GitHub Actions will connect to your VPS, build and start Vidspry on `127.0.0.1:3001`, and your new website will immediately be live alongside your first website.
