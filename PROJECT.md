# Project: Vidspry Refactoring and Performance Polish

## Architecture
- **Mobile Client**: Flutter application (`F:\Online Video Downaloader App\online_video_downloader_app`) built with Dart, Provider state management, Dio HTTP client, and Material Design UI.
- **Backend API**: Next.js 16 (App Router) with Node.js and TypeScript (`F:\Online Video Downloader`) spawning `yt-dlp` and `ffmpeg` for video inspection, format selection, and streaming downloads.
- **Data Flow**:
  1. Client sends URL to backend `/api/info` to inspect available streams/formats.
  2. Client requests download stream via `/api/download`.
  3. Backend executes `yt-dlp` to download, remux to MP4, and pipe stream chunks to client.
  4. Client writes chunks to local storage via `Dio.download` while displaying in-app and system notification progress.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Stream Remuxing & Transcode Removal | Replace `--recode-video mp4` with stream copying `--merge-output-format mp4 --remux-video mp4` to reduce post-processing from 15-20 min to 1-2 sec | M1 | R3, Explorer 3 |
| 2 | Multi-Fragment Concurrent Download | Add `-N 6`, socket timeouts, and buffer configurations to `lib/ytdlp.ts` to boost fragment download speeds 3x-5x | M1 | R3, Explorer 3 |
| 3 | Backend API Error Response Sanitization | Sanitize `/api/download` failure output, removing internal `stderrOutput` leaks and returning clean JSON error responses | M1 | R1, Explorer 3 |
| 4 | Splash Screen Dark Theme & Flutter Engine Unification | Unify native Android (`launch_background.xml`, `styles.xml`, API 31+ splash) and iOS (`LaunchScreen.storyboard`) to dark `#12141A` so only the Vidspry splash displays upon app launch | M2 | R4, Explorer 1 |
| 5 | Remove "Test Connection" Feature & UI | Remove `_testConnection()`, test button, and dummy YouTube probe from `settings_screen.dart`, replacing with clean endpoint "Save" action | M2 | R4, Explorer 1 |
| 6 | Eradicate Prohibited "AWS" References | Remove all 8 occurrences of "AWS" in Flutter UI text, button labels, and code comments to keep hosting undisclosed | M2 | R4, Explorers 1, 2, 3 |
| 7 | Header "Live Engine" Removal | Remove the "Live Engine" text and green status dot in `app_header.dart` next to the Vidspry brand title | M2 | R4, Explorer 1 |
| 8 | Official YouTube & Instagram Platform Icons | Add official vector SVG brand icons to `assets/icons/` and update `platform_pill_row.dart` to render them via `SvgPicture.asset` | M2 | R4, Explorer 1 |
| 9 | Dynamic Responsive Header & Layout Adjustments | Eliminate redundant `SafeArea`, scale header dynamically via `MediaQuery`, and add overflow guards for short/landscape screens | M2 | R4, Explorer 1 |
| 10 | Real-Time Connectivity Detection & Offline Notice | Add `connectivity_plus`, `ConnectivityService`, `ConnectivityProvider`, and global `OfflineBannerWidget` with explicit "Internet connection lost" notice | M3 | R1, Explorer 2 |
| 11 | Robust Download & API Error Handling | Prevent false cancellation errors in `DownloaderProvider`, map network failures to friendly messages, and surface errors across all screens | M3 | R1, Explorer 2 |
| 12 | System Download Progress Notifications | Integrate `flutter_local_notifications`, declare `POST_NOTIFICATIONS` permission, and dispatch active status & percentage progress to system notification tray | M4 | R2, Explorer 2 |
| 13 | Comprehensive Automated Verification Suite | Expand Flutter unit/widget tests and backend endpoint verification scripts covering all requirements | M5 | Acceptance Criteria |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | M1: Backend Download Speed & API Error Sanitization | yt-dlp remuxing, `-N 6` flags, error sanitization, clean part files | none | PLANNED |
| 2 | M2: Mobile UI, Branding, Splash & Layout Polish | Splash screen unification, remove "test connection", remove "AWS", remove "Live Engine", official logos, responsive layout | none | PLANNED |
| 3 | M3: Mobile Connectivity & Graceful Error Handling | `connectivity_plus`, `ConnectivityService`, offline banner, graceful Dio exception handling | M2 | PLANNED |
| 4 | M4: Mobile System Download Progress Notifications | `flutter_local_notifications`, `NotificationService`, notification permissions, tray progress updates | M3 | PLANNED |
| 5 | M5: E2E Integration & Automated Test Suite Verification | Backend API verification, comprehensive Flutter unit/widget tests, zero-AWS audit, full pass | M1, M4 | PLANNED |

## Interface Contracts
### Client ↔ Backend API
- `POST /api/download`:
  - Request body: `{ "url": string, "format": string, "title"?: string }`
  - Success response: Stream (`video/mp4`) with headers `Content-Disposition`, `Content-Length`.
  - Error response: `{ "error": string }` with HTTP 400 or 500 (no raw stderr paths leaked).

### ConnectivityService ↔ Presentation
- Stream of `ConnectivityStatus` (`online`, `offline`).
- `OfflineBannerWidget`: Renders `"Internet connection lost"` banner when status is `offline`.

### DownloaderProvider ↔ NotificationService
- `NotificationService.showDownloadProgress(id, title, progressPercentage, isIndeterminate)`.
- `NotificationService.showDownloadComplete(id, title, filePath)`.
- `NotificationService.cancel(id)`.

## Code Layout
- Backend (`F:\Online Video Downloader`):
  - `app/api/download/route.ts`: Download route handler, yt-dlp process spawn, streaming response.
  - `lib/ytdlp.ts`: Common yt-dlp arguments and helper functions.
  - `scripts/verify_backend.js` (or `.ts`): Verification test script for download speed and error responses.
- Flutter Mobile App (`F:\Online Video Downaloader App\online_video_downloader_app`):
  - `android/app/src/main/res/drawable/launch_background.xml`: Native Android cold launch splash background.
  - `android/app/src/main/res/values/styles.xml`: Launch theme styles.
  - `android/app/src/main/AndroidManifest.xml`: Permissions (`POST_NOTIFICATIONS`).
  - `assets/icons/`: SVG brand assets (YouTube, Instagram, TikTok, etc.).
  - `lib/core/constants/api_endpoints.dart`: API host constants (sanitized of AWS).
  - `lib/data/services/connectivity_service.dart`: Network state monitoring.
  - `lib/data/services/notification_service.dart`: System notification management.
  - `lib/presentation/providers/connectivity_provider.dart`: Reactive offline state provider.
  - `lib/presentation/widgets/app_header.dart`: Cleaned header without "Live Engine".
  - `lib/presentation/widgets/platform_pill_row.dart`: Platform icons row with official SVG logos.
  - `lib/presentation/screens/settings_screen.dart`: Cleaned settings screen without "Test Connection".
  - `lib/presentation/screens/home_screen.dart`: Responsive layout and offline banner integration.
  - `test/`: Comprehensive unit, widget, and mock tests.
