# SnapLoad Setup Instructions

SnapLoad is a premium social media video/image downloader built with Next.js 14 and `yt-dlp`.

## Prerequisites

1.  **Node.js**: Ensure you have Node.js 18+ installed.
2.  **yt-dlp**: This is the core engine for downloading. You must have it installed and available in your system's PATH.

### Installing yt-dlp

**Windows (via winget):**
```bash
winget install yt-dlp
```

**Linux/Mac (via pip):**
```bash
pip install yt-dlp
```

**Verify installation:**
```bash
yt-dlp --version
```

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Open the app:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Engine**: yt-dlp (CLI)
- **Design**: Dark Futuristic Editorial

## Features

- **Platform Detection**: Automatically identifies YouTube, Instagram, TikTok, and Facebook links.
- **Quality Selector**: Choose between different video resolutions or MP3 audio.
- **Streaming Downloads**: Files are processed on the server and streamed directly to your browser.
- **Premium UI**: Glassmorphism, animated gradients, and smooth transitions.
