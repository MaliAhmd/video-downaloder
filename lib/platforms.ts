export type PlatformKey = "youtube" | "instagram" | "tiktok" | "facebook" | "x";

export interface PlatformConfig {
  key: PlatformKey;
  name: string;
  slug: string;
  title: string;
  description: string;
  cardDescription: string;
  introduction: string;
  instructions: readonly string[];
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
      "Use the online YouTube video downloader for supported public videos and Shorts, then choose an available MP4 video or MP3 audio option.",
    cardDescription:
      "Generate available video and audio options for supported YouTube links.",
    introduction:
      "Paste a supported public YouTube video or Shorts URL. Vidspry checks the source and displays the video and audio choices currently available for that link.",
    instructions: [
      "Open the public YouTube video or Short and copy its URL.",
      "Paste the URL below and select Generate.",
      "Review the available resolution or audio option, then download your selection.",
    ],
    supportedContent: [
      "Public standard video URLs",
      "Public YouTube Shorts URLs",
      "Audio extraction when an audio stream is available",
    ],
    troubleshooting: [
      {
        title: "Use the full video or Shorts link",
        text: "Channel pages, search results, and playlist pages may not identify one downloadable item. Open the individual video first.",
      },
      {
        title: "Check access at the source",
        text: "Private, members-only, age-restricted, region-restricted, or otherwise protected videos may not be available to the server.",
      },
    ],
    faqs: [
      {
        question: "Can Vidspry process YouTube Shorts?",
        answer: "Public Shorts links can be processed when the media is available to the server.",
      },
      {
        question: "Why do the available YouTube qualities vary?",
        answer: "YouTube exposes different streams for each upload. Vidspry only shows compatible choices found for the submitted video.",
      },
      {
        question: "Can I download a private YouTube video?",
        answer: "No. Vidspry is designed for publicly accessible links and does not bypass account or access controls.",
      },
    ],
  },
  {
    key: "instagram",
    name: "Instagram",
    slug: "instagram-video-downloader",
    title: "Instagram Video Downloader",
    description:
      "Use the online Instagram video downloader to save available media from supported public Reel and video-post links.",
    cardDescription:
      "Process supported public Instagram Reels and video-post links.",
    introduction:
      "Use Vidspry with a publicly accessible Instagram Reel or video-post URL. Available output depends on what Instagram exposes for that specific post.",
    instructions: [
      "Open the public Instagram Reel or video post you are permitted to save.",
      "Copy its share URL and paste it into the downloader.",
      "Generate the available media choices and download the option you need.",
    ],
    supportedContent: [
      "Public Instagram Reels",
      "Public video posts",
      "Media options exposed for the submitted post",
    ],
    troubleshooting: [
      {
        title: "Confirm that the post is public",
        text: "Content behind a private account, login prompt, or other access restriction cannot be processed reliably.",
      },
      {
        title: "Copy the post link itself",
        text: "Profile pages and feed URLs do not point to one media item. Use the share link for the individual Reel or post.",
      },
    ],
    faqs: [
      {
        question: "Does Vidspry work with private Instagram accounts?",
        answer: "No. Vidspry does not sign in to Instagram or bypass private-account access controls.",
      },
      {
        question: "Can I use an Instagram Reel share link?",
        answer: "Yes, a public Reel share link can be processed when its media is available to the server.",
      },
      {
        question: "Why does an Instagram link stop working?",
        answer: "The post may have been removed, made private, restricted, or changed by the source platform.",
      },
    ],
  },
  {
    key: "tiktok",
    name: "TikTok",
    slug: "tiktok-video-downloader",
    title: "TikTok Video Downloader",
    description:
      "Use the online TikTok video downloader with supported public video and share links, then choose from the detected media options.",
    cardDescription:
      "Generate media choices for supported public TikTok and short share links.",
    introduction:
      "Paste a public TikTok video URL or short share link. Vidspry resolves supported short links and presents the media choices detected for the post without promising a particular resolution or watermark result.",
    instructions: [
      "Use TikTok's share action to copy the public post link.",
      "Paste either the full link or a supported TikTok short link below.",
      "Generate the result, review the detected options, and download your selection.",
    ],
    supportedContent: [
      "Public TikTok video URLs",
      "Supported vm.tiktok.com and vt.tiktok.com share links",
      "A photo option when suitable source metadata is detected",
    ],
    troubleshooting: [
      {
        title: "Let short links resolve",
        text: "TikTok share links redirect to the post. If generation fails, open the link in a browser and copy the final post URL.",
      },
      {
        title: "Verify that the post remains public",
        text: "Removed, private, region-limited, or login-gated posts may not be accessible to Vidspry.",
      },
    ],
    faqs: [
      {
        question: "Does Vidspry accept TikTok short links?",
        answer: "It attempts to resolve common vm.tiktok.com and vt.tiktok.com links before processing them.",
      },
      {
        question: "Does Vidspry guarantee watermark-free TikTok videos?",
        answer: "No. The result depends on the media streams made available for the submitted post.",
      },
      {
        question: "Can Vidspry open private TikTok posts?",
        answer: "No. It does not bypass private accounts, login requirements, or other platform restrictions.",
      },
    ],
  },
  {
    key: "facebook",
    name: "Facebook",
    slug: "facebook-video-downloader",
    title: "Facebook Video Downloader",
    description:
      "Use the online Facebook video downloader to generate available media options for supported public video posts and Watch links.",
    cardDescription:
      "Process supported public Facebook video posts and Watch links.",
    introduction:
      "Vidspry can inspect supported public Facebook video URLs and show the media options available for the selected post. It does not sign in to Facebook or access private content.",
    instructions: [
      "Open the public Facebook video post or Watch page and copy its link.",
      "Paste that individual video URL into Vidspry and select Generate.",
      "Choose from the detected media options and download the file.",
    ],
    supportedContent: [
      "Public Facebook video posts",
      "Supported Facebook Watch links",
      "Video and audio choices exposed for the submitted URL",
    ],
    troubleshooting: [
      {
        title: "Use a publicly viewable video",
        text: "Videos limited to friends, groups, logged-in viewers, or specific regions may not be available.",
      },
      {
        title: "Avoid feed and profile URLs",
        text: "Copy the link for the individual video rather than the page, profile, or feed containing it.",
      },
    ],
    faqs: [
      {
        question: "Can Vidspry download a friends-only Facebook video?",
        answer: "No. Vidspry does not authenticate as a user or bypass Facebook privacy controls.",
      },
      {
        question: "Are Facebook Watch links supported?",
        answer: "Supported public Watch links can be processed when Facebook makes the media available to the server.",
      },
      {
        question: "Why does my Facebook link show no options?",
        answer: "The video may require login, have limited visibility, be removed, or use a URL that does not identify an individual video.",
      },
    ],
  },
  {
    key: "x",
    name: "X",
    slug: "x-video-downloader",
    title: "X Video Downloader",
    description:
      "Use the online X video downloader with supported public x.com and Twitter post links, then choose an available media option.",
    cardDescription:
      "Generate available media choices for supported public posts on X.",
    introduction:
      "Paste a public post URL from X, including older twitter.com links. Vidspry checks the post and presents the video or audio choices its media engine can access.",
    instructions: [
      "Open the public post on X that contains the media you are permitted to save.",
      "Copy its x.com or twitter.com status URL and paste it into the downloader.",
      "Generate the available options, choose a file, and start the download.",
    ],
    supportedContent: [
      "Public x.com status links containing media",
      "Supported legacy twitter.com status links",
      "Video and audio choices exposed for the submitted post",
    ],
    troubleshooting: [
      {
        title: "Use the individual post URL",
        text: "Profile pages, timelines, and search URLs do not identify one media item. Copy the status link for the post itself.",
      },
      {
        title: "Confirm that the post is public",
        text: "Protected accounts, deleted posts, login-gated media, and region-restricted content may not be available to the server.",
      },
    ],
    faqs: [
      {
        question: "Does Vidspry accept both x.com and twitter.com links?",
        answer: "Yes. Supported public status links using either hostname can be submitted to the downloader.",
      },
      {
        question: "Can Vidspry access posts from protected X accounts?",
        answer: "No. Vidspry does not sign in to X or bypass protected-account and other access controls.",
      },
      {
        question: "Why are no media options shown for an X post?",
        answer: "The post may not contain downloadable media, may be unavailable to the server, or may have been removed or restricted.",
      },
    ],
  },
] as const;

export function getPlatformBySlug(slug: string) {
  return platforms.find((platform) => platform.slug === slug);
}
