export type PlatformKey = "youtube" | "instagram" | "tiktok" | "facebook" | "x";

export interface PlatformFeature {
  title: string;
  description: string;
}

export interface PlatformFormatSpec {
  format: string;
  resolution: string;
  audioBitrate?: string;
  description: string;
}

export interface PlatformConfig {
  key: PlatformKey;
  name: string;
  slug: string;
  title: string;
  description: string;
  cardDescription: string;
  introduction: string;
  keywords: readonly string[];
  instructions: readonly string[];
  mobileInstructions: readonly string[];
  desktopInstructions: readonly string[];
  features: readonly PlatformFeature[];
  formatSpecs: readonly PlatformFormatSpec[];
  supportedContent: readonly string[];
  troubleshooting: readonly { title: string; text: string }[];
  faqs: readonly { question: string; answer: string }[];
}

export const platforms: readonly PlatformConfig[] = [
  {
    key: "youtube",
    name: "YouTube",
    slug: "youtube-video-downloader",
    title: "YouTube Video Downloader",
    description:
      "Free online YouTube video downloader to save YouTube videos and Shorts in 1080p, 720p, MP4, and high-bitrate MP3 audio without installing software.",
    cardDescription:
      "Download YouTube videos, Shorts, and extract MP3 audio directly in your browser.",
    introduction:
      "Vidspry provides a fast, clean, and reliable YouTube video downloader. Paste any public YouTube video or YouTube Shorts link to inspect available video resolutions from 360p up to 1080p Full HD, or extract pure MP3 audio with crystal-clear fidelity. Zero ads, zero registration, and no third-party extensions required.",
    keywords: [
      "youtube video downloader",
      "download youtube shorts",
      "youtube to mp4",
      "youtube to mp3 320kbps",
      "online youtube downloader",
      "free youtube video saver",
      "save youtube video 1080p",
      "youtube audio downloader",
    ],
    instructions: [
      "Open YouTube in your browser or app and locate the public video or Short you want to download.",
      "Copy the video URL from your browser address bar or tap the Share button and select Copy Link.",
      "Paste the copied URL into the Vidspry input box above and click Generate Options.",
      "Select your preferred MP4 video resolution (e.g. 1080p, 720p) or MP3 audio extraction, then click Download.",
    ],
    mobileInstructions: [
      "Open the YouTube mobile app on Android or iPhone.",
      "Tap the 'Share' icon underneath the video or Short, then tap 'Copy link'.",
      "Open your mobile browser (Safari, Chrome, Firefox) and navigate to Vidspry.",
      "Paste the link into the box, tap 'Generate Options', and download the file directly to your device storage (Files app or Downloads folder).",
    ],
    desktopInstructions: [
      "Go to youtube.com on your computer (Windows, Mac, or Linux).",
      "Copy the full URL from the browser's address bar (e.g. https://www.youtube.com/watch?v=...).",
      "Paste the URL into Vidspry and select 'Generate Options'.",
      "Choose your preferred resolution and click Download to save the file immediately.",
    ],
    features: [
      {
        title: "Full HD 1080p & 720p Support",
        description: "Save YouTube videos with pristine visual clarity and synced audio streams via instant server-side remuxing.",
      },
      {
        title: "High-Bitrate MP3 Extraction",
        description: "Convert YouTube videos directly to standalone MP3 audio files with up to 320kbps clarity for music, podcasts, and speeches.",
      },
      {
        title: "YouTube Shorts Compatible",
        description: "Full native support for vertical YouTube Shorts URLs without quality loss or awkward compression.",
      },
      {
        title: "No Extensions or Software Required",
        description: "100% cloud-based processing. Works effortlessly on Android, iOS, Windows, macOS, and Linux without installing sketchy software.",
      },
    ],
    formatSpecs: [
      { format: "MP4 Video", resolution: "1080p (Full HD)", description: "Crystal-clear high definition with integrated audio." },
      { format: "MP4 Video", resolution: "720p (HD)", description: "High-definition video balanced for compact file size and fast download." },
      { format: "MP4 Video", resolution: "480p / 360p (SD)", description: "Standard definition optimized for limited bandwidth or storage." },
      { format: "MP3 Audio", resolution: "Audio Only", audioBitrate: "Up to 320 kbps", description: "Pure extracted audio track compatible with all music players." },
    ],
    supportedContent: [
      "Standard public YouTube video URLs (youtube.com/watch?v=...)",
      "Shortened YouTube share links (youtu.be/...)",
      "Public vertical YouTube Shorts (youtube.com/shorts/...)",
      "Standalone MP3 audio stream extraction",
    ],
    troubleshooting: [
      {
        title: "Always use individual video or Shorts URLs",
        text: "Vidspry processes one media item at a time. Links to whole channels, user profiles, or playlist pages cannot be parsed directly. Open the individual video first.",
      },
      {
        title: "Ensure video privacy is set to Public",
        text: "Private videos, unlisted content with restrictions, members-only posts, and region-locked clips cannot be accessed by external servers.",
      },
      {
        title: "Check for live streams in progress",
        text: "Ongoing live streams cannot be converted until the broadcast finishes and YouTube publishes the archived VOD.",
      },
    ],
    faqs: [
      {
        question: "Is Vidspry's YouTube downloader completely free?",
        answer: "Yes, Vidspry is 100% free to use. There are no subscription fees, hidden charges, usage limits, or forced account registrations.",
      },
      {
        question: "Can I download YouTube videos on my iPhone or iPad?",
        answer: "Yes! Open Safari on your iPhone or iPad, copy the YouTube video link, paste it into Vidspry, and tap Download. Safari will save the MP4 directly to your device's Files app or Photos.",
      },
      {
        question: "Does Vidspry download YouTube Shorts?",
        answer: "Yes. Simply copy the link of any public YouTube Short and paste it into the downloader to save the vertical MP4 video in high definition.",
      },
      {
        question: "How do I extract audio or convert YouTube to MP3?",
        answer: "Paste the YouTube URL and click 'Generate Options'. In the results table, choose the 'Audio (MP3)' option to download only the sound track.",
      },
      {
        question: "Where are downloaded YouTube videos saved?",
        answer: "Files are saved in your device's default download directory. On Windows and Mac, this is your 'Downloads' folder. On Android and iOS, you can find them in your Files/Downloads folder or Gallery.",
      },
      {
        question: "Why do some 1080p YouTube videos have separate audio?",
        answer: "YouTube stores 1080p video and audio as separate streams. Vidspry automatically combines the high-definition video with the highest-fidelity audio track so your downloaded file plays seamlessly on any player.",
      },
      {
        question: "Is it legal to download YouTube videos?",
        answer: "Downloading content for personal offline viewing, content in the public domain, or videos for which you have explicit permission from the copyright owner is permissible. Users are responsible for complying with copyright regulations and platform policies.",
      },
    ],
  },
  {
    key: "instagram",
    name: "Instagram",
    slug: "instagram-video-downloader",
    title: "Instagram Video Downloader",
    description:
      "Save Instagram Reels, video posts, and Stories online in high-definition MP4. Fast, free, and no Instagram login required.",
    cardDescription:
      "Download public Instagram Reels and video posts in high quality MP4.",
    introduction:
      "Save your favorite Instagram Reels and video posts effortlessly with Vidspry. Paste any public Instagram link to download high-resolution MP4 video directly to your phone or computer. Enjoy clean, ad-free downloads without needing to log in or share your Instagram credentials.",
    keywords: [
      "instagram video downloader",
      "download instagram reels",
      "instagram reel saver",
      "instagram mp4 downloader",
      "save instagram video online",
      "instagram reel to mp4",
      "free ig downloader",
    ],
    instructions: [
      "Open the Instagram app or website and locate the public Reel or video post.",
      "Tap the three dots (...) or the Share paper airplane icon and tap 'Copy Link'.",
      "Paste the Instagram URL into Vidspry's input field and click 'Generate Options'.",
      "Click the 'Download' button to save the original high-resolution MP4 video file.",
    ],
    mobileInstructions: [
      "Open Instagram on your mobile phone (Android or iOS).",
      "Navigate to the Reel or post, tap the Share icon, and select 'Copy link'.",
      "Open your browser and visit Vidspry's Instagram Downloader.",
      "Paste the link and tap 'Generate Options' to save the video to your camera roll or downloads.",
    ],
    desktopInstructions: [
      "Open instagram.com on your desktop browser.",
      "Click on the Reel or video post, copy the URL from the browser bar (instagram.com/reel/...).",
      "Paste the link into Vidspry and click 'Generate Options'.",
      "Save the MP4 video directly to your computer.",
    ],
    features: [
      {
        title: "Instagram Reels in Full Quality",
        description: "Save viral Reels with original sound and high visual definition without quality loss.",
      },
      {
        title: "No Account Login Required",
        description: "Protect your privacy. Vidspry never asks for your Instagram password, tokens, or personal account details.",
      },
      {
        title: "Fast Mobile & Desktop Downloads",
        description: "Optimized responsive interface makes saving videos quick on iPhone, Android, Mac, and Windows.",
      },
      {
        title: "Original MP4 Audio & Video Sync",
        description: "Downloads the native MP4 stream with synchronized sound and high frame rates.",
      },
    ],
    formatSpecs: [
      { format: "MP4 Video", resolution: "Original HD", description: "Highest resolution video stream exposed by Instagram." },
      { format: "MP3 Audio", resolution: "Extracted Audio", description: "Audio track extracted from the Reel or video post." },
    ],
    supportedContent: [
      "Public Instagram Reels (instagram.com/reel/...)",
      "Public Instagram Video Posts (instagram.com/p/...)",
      "Public IGTV video links",
    ],
    troubleshooting: [
      {
        title: "Confirm that the Instagram account is public",
        text: "Instagram restricts content posted by private accounts. Vidspry cannot and will not bypass private account boundaries.",
      },
      {
        title: "Use individual post links, not profile pages",
        text: "Make sure you copy the link to the specific Reel or post rather than a user profile link (instagram.com/username).",
      },
      {
        title: "Check if the video was recently deleted or restricted",
        text: "If the creator removed the post or restricted it by country/age, the download cannot be completed.",
      },
    ],
    faqs: [
      {
        question: "Can I download Instagram Reels without logging in?",
        answer: "Yes! Vidspry works entirely without an Instagram account. Simply paste the link and download.",
      },
      {
        question: "Can I save videos from private Instagram accounts?",
        answer: "No. Vidspry respects privacy boundaries and only processes publicly viewable Instagram links.",
      },
      {
        question: "Will the creator know if I download their Reel?",
        answer: "No. Downloading a public Reel via Vidspry is completely anonymous. Instagram does not notify creators when a video is downloaded.",
      },
      {
        question: "How do I save Instagram Reels on my iPhone Camera Roll?",
        answer: "After downloading the MP4 via Safari, open your Files app, tap the downloaded video, tap the Share icon, and select 'Save Video' to place it directly into your Photos app.",
      },
      {
        question: "Is there a limit on how many Instagram videos I can download?",
        answer: "No! There are no daily or hourly limits on Vidspry. You can download as many public videos as you need.",
      },
    ],
  },
  {
    key: "tiktok",
    name: "TikTok",
    slug: "tiktok-video-downloader",
    title: "TikTok Video Downloader",
    description:
      "Download TikTok videos in HD MP4 without watermarks. Free online TikTok video saver supporting mobile share links and MP3 audio.",
    cardDescription:
      "Save TikTok videos without watermarks in crisp HD MP4 quality.",
    introduction:
      "Vidspry's TikTok video downloader allows you to save your favorite public TikTok videos in crisp MP4 format without distracting watermarks. It supports both full TikTok links and short mobile share links (vm.tiktok.com and vt.tiktok.com). Enjoy instant downloads on mobile and PC with zero software installation.",
    keywords: [
      "tiktok video downloader",
      "download tiktok without watermark",
      "save tiktok mp4",
      "tiktok audio downloader",
      "online tiktok downloader",
      "tiktok video saver hd",
      "convert tiktok to mp3",
    ],
    instructions: [
      "Open TikTok and navigate to the video you want to save.",
      "Tap the Share button (arrow icon) on the right side of the screen and select 'Copy Link'.",
      "Paste the TikTok link into Vidspry above and click 'Generate Options'.",
      "Select the MP4 video option to download your video without watermark.",
    ],
    mobileInstructions: [
      "In the TikTok app, tap the Share icon on the video and choose 'Copy link'.",
      "Open your mobile browser (Safari or Chrome) and navigate to Vidspry.",
      "Paste the link and tap 'Generate Options'.",
      "Tap 'Download' to save the video directly to your phone's gallery or download folder.",
    ],
    desktopInstructions: [
      "Go to tiktok.com on your computer and open the video.",
      "Copy the URL from the browser bar or use the 'Copy link' button on the video.",
      "Paste the link into Vidspry and click 'Generate Options'.",
      "Download the high-definition MP4 directly to your PC or Mac.",
    ],
    features: [
      {
        title: "Clean Videos Without Watermarks",
        description: "Save clean TikTok videos without the bouncing logo watermark for optimal offline viewing.",
      },
      {
        title: "Full Support for Short Mobile Links",
        description: "Automatically resolves vm.tiktok.com and vt.tiktok.com share links generated by mobile devices.",
      },
      {
        title: "Audio & Background Sound Extraction",
        description: "Extract the original sound or music track from any TikTok video as an MP3 file.",
      },
      {
        title: "Lightning-Fast Cloud Processing",
        description: "Our high-speed media engine prepares your download in seconds without client-side lag.",
      },
    ],
    formatSpecs: [
      { format: "MP4 Video", resolution: "HD Quality", description: "High definition video with watermark-free visual clarity." },
      { format: "MP3 Audio", resolution: "Original Audio", description: "Extracted music or vocal track from the TikTok video." },
    ],
    supportedContent: [
      "Standard web TikTok URLs (tiktok.com/@user/video/...)",
      "Mobile short share links (vm.tiktok.com/... and vt.tiktok.com/...)",
      "TikTok photo carousel posts where video rendering is supported",
    ],
    troubleshooting: [
      {
        title: "Make sure you copied the full share link",
        text: "When copying links from the TikTok app, ensure the complete URL was copied to your clipboard.",
      },
      {
        title: "Check that the video is public",
        text: "Private TikTok accounts and friends-only videos cannot be processed.",
      },
      {
        title: "Confirm the video hasn't been taken down",
        text: "If a video has been removed by the creator or muted due to copyright, it cannot be downloaded.",
      },
    ],
    faqs: [
      {
        question: "Can I download TikTok videos without watermark?",
        answer: "Yes, Vidspry detects and provides clean MP4 streams without the default TikTok watermark whenever available from the source.",
      },
      {
        question: "Does Vidspry work with mobile short links like vt.tiktok.com?",
        answer: "Yes! Vidspry automatically resolves and follows shortened mobile links (vm.tiktok.com and vt.tiktok.com) to find the original video.",
      },
      {
        question: "Can I extract the audio or sound from a TikTok video?",
        answer: "Yes, select the 'Audio (MP3)' option after generating your link to download just the soundtrack.",
      },
      {
        question: "Do I have to install any apps or browser extensions?",
        answer: "No. Vidspry runs 100% in your web browser. You do not need to install anything on your device.",
      },
      {
        question: "Is Vidspry safe to use for TikTok downloads?",
        answer: "Yes, completely safe. We do not store your personal information, require accounts, or inject malicious pop-ups.",
      },
    ],
  },
  {
    key: "facebook",
    name: "Facebook",
    slug: "facebook-video-downloader",
    title: "Facebook Video Downloader",
    description:
      "Free online Facebook video downloader to save Facebook Watch videos, public posts, and Reels in HD MP4 format.",
    cardDescription:
      "Download public Facebook videos, Watch clips, and Reels in HD MP4.",
    introduction:
      "Vidspry's Facebook video downloader lets you save public Facebook videos, Watch clips, and Reels directly to your device in high-definition MP4. Whether on mobile or desktop, you can quickly download educational videos, tutorials, and entertaining clips without installing additional software.",
    keywords: [
      "facebook video downloader",
      "download facebook video",
      "fb watch downloader",
      "facebook video to mp4",
      "online facebook video saver",
      "save facebook reels",
      "fb video downloader hd",
    ],
    instructions: [
      "Find the public Facebook video or Reel you want to download.",
      "Click the three dots (...) on the post or the Share button and select 'Copy link'.",
      "Paste the Facebook video link into Vidspry and click 'Generate Options'.",
      "Select your desired MP4 video quality (HD or SD) and download your file.",
    ],
    mobileInstructions: [
      "Open the Facebook mobile app, locate the public video, and tap the 'Share' button.",
      "Select 'Copy Link' from the share menu.",
      "Open your web browser, navigate to Vidspry, paste the link, and tap 'Generate Options'.",
      "Download the MP4 file to your mobile storage.",
    ],
    desktopInstructions: [
      "On facebook.com, right-click the video or click the three dots (...) and copy the video URL.",
      "Paste the link into Vidspry's Facebook downloader.",
      "Click 'Generate Options' and save the HD MP4 video to your computer.",
    ],
    features: [
      {
        title: "High Definition Facebook Video Support",
        description: "Save videos in 1080p and 720p HD whenever the source Facebook post provides high-definition streams.",
      },
      {
        title: "Facebook Watch & Reels Compatible",
        description: "Full compatibility with facebook.com/watch and modern Facebook vertical Reels.",
      },
      {
        title: "No Facebook Login Required",
        description: "Download videos completely independently without connecting your Facebook account.",
      },
      {
        title: "Universal Device Compatibility",
        description: "Downloaded MP4 files play smoothly on all media players, TVs, smartphones, and computers.",
      },
    ],
    formatSpecs: [
      { format: "MP4 Video", resolution: "HD Quality (1080p/720p)", description: "Best available visual quality provided by Facebook." },
      { format: "MP4 Video", resolution: "SD Quality (480p/360p)", description: "Standard quality for smaller file size and quick transfer." },
      { format: "MP3 Audio", resolution: "Audio Only", description: "Extracted audio track from the Facebook video." },
    ],
    supportedContent: [
      "Public Facebook video posts (facebook.com/.../videos/...)",
      "Facebook Watch video links (facebook.com/watch/?v=...)",
      "Public Facebook Reels (facebook.com/reel/...)",
      "Mobile Facebook share links (fb.watch/...)",
    ],
    troubleshooting: [
      {
        title: "Check post audience settings",
        text: "Only public videos can be downloaded. If a video is set to 'Friends only' or posted inside a private group, it cannot be fetched.",
      },
      {
        title: "Use the direct video link",
        text: "Make sure to copy the specific video link rather than the link of the Facebook page or group timeline.",
      },
    ],
    faqs: [
      {
        question: "Can I download videos from private Facebook groups?",
        answer: "No. Vidspry only downloads publicly available videos and does not bypass private group or account permissions.",
      },
      {
        question: "Does Vidspry support fb.watch links?",
        answer: "Yes, Vidspry automatically resolves fb.watch shortened URLs and downloads the underlying video.",
      },
      {
        question: "Can I download Facebook Reels with Vidspry?",
        answer: "Yes, copy the link of any public Facebook Reel and paste it into the downloader to save it as an MP4.",
      },
      {
        question: "Why do some Facebook videos only offer SD quality?",
        answer: "Facebook delivers different qualities depending on how the creator uploaded the file. Vidspry provides the highest quality that Facebook makes available.",
      },
    ],
  },
  {
    key: "x",
    name: "X (Twitter)",
    slug: "x-video-downloader",
    title: "Twitter (X) Video Downloader",
    description:
      "Save Twitter and X videos in HD MP4 and convert Twitter GIFs to video. Fast, free online X video downloader supporting all devices.",
    cardDescription:
      "Download public X (Twitter) videos and GIFs in HD MP4 format.",
    introduction:
      "Download Twitter (X) videos and animated GIFs effortlessly with Vidspry. Compatible with both x.com and legacy twitter.com links, our online tool converts tweet media into universal MP4 files with crisp audio and video. Save viral clips, news broadcasts, and memes directly to your device with zero hassle.",
    keywords: [
      "x video downloader",
      "twitter video downloader",
      "download twitter video",
      "download x video",
      "save twitter video mp4",
      "twitter gif downloader",
      "online twitter video converter",
    ],
    instructions: [
      "Open X (formerly Twitter) and find the tweet containing the video or GIF you want to save.",
      "Click or tap the Share button under the post and select 'Copy link'.",
      "Paste the x.com or twitter.com status URL into Vidspry and click 'Generate Options'.",
      "Select your preferred MP4 video resolution and download your file.",
    ],
    mobileInstructions: [
      "In the X / Twitter app on your phone, tap the Share icon on the tweet.",
      "Select 'Copy link' from the pop-up menu.",
      "Open your mobile browser, visit Vidspry's X Downloader, and paste the tweet URL.",
      "Tap 'Generate Options' and download the MP4 directly to your device.",
    ],
    desktopInstructions: [
      "On x.com or twitter.com, copy the status URL from the address bar.",
      "Paste the link into Vidspry and click 'Generate Options'.",
      "Choose from the available resolutions (e.g. 720p, 1080p, 480p) and download.",
    ],
    features: [
      {
        title: "Supports both x.com and twitter.com",
        description: "Seamlessly parses both modern x.com links and legacy twitter.com status URLs.",
      },
      {
        title: "High Definition MP4 Video",
        description: "Inspects all bitrate variants provided by X and offers the crispest available stream.",
      },
      {
        title: "Twitter GIF to MP4 Conversion",
        description: "Easily download looping Twitter GIFs as lightweight, universally playable MP4 video files.",
      },
      {
        title: "Fast, Private & Ad-Free",
        description: "No pop-ups, no registration, and no tracking. Process downloads with maximum security.",
      },
    ],
    formatSpecs: [
      { format: "MP4 Video", resolution: "HD Quality (720p/1080p)", description: "Highest bitrate MP4 provided by X." },
      { format: "MP4 Video", resolution: "SD Quality (480p/360p)", description: "Standard resolution for faster download." },
      { format: "MP3 Audio", resolution: "Extracted Audio", description: "Audio track extracted from the video or speech." },
    ],
    supportedContent: [
      "Public x.com tweet status URLs containing video",
      "Legacy twitter.com tweet status URLs",
      "Twitter looping GIFs (saved as MP4 files)",
    ],
    troubleshooting: [
      {
        title: "Make sure the tweet contains a video or GIF",
        text: "Vidspry downloads embedded video files. Tweets containing only static images or text cannot be processed.",
      },
      {
        title: "Verify that the user's account is public",
        text: "Tweets from protected accounts (accounts with a lock icon) cannot be accessed by external servers.",
      },
    ],
    faqs: [
      {
        question: "Can I download Twitter videos from both x.com and twitter.com?",
        answer: "Yes, Vidspry accepts links from both x.com and twitter.com domains seamlessly.",
      },
      {
        question: "How do I download Twitter GIFs?",
        answer: "Twitter stores GIFs as MP4 video files. Simply copy the link to the tweet with the GIF, paste it into Vidspry, and download the MP4.",
      },
      {
        question: "Can I download videos from protected (private) Twitter accounts?",
        answer: "No, Vidspry does not access content behind private accounts or login walls.",
      },
      {
        question: "Where are Twitter videos saved after downloading?",
        answer: "Videos are saved in your device's default Downloads folder or gallery (Photos on iOS).",
      },
    ],
  },
] as const;

export function getPlatformBySlug(slug: string) {
  return platforms.find((platform) => platform.slug === slug);
}
