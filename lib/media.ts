export interface MediaFormat {
  format_id: string;
  ext: string;
  height?: number;
  filesize?: number;
  quality?: string;
  is_photo?: boolean;
  photo_url?: string;
}

export interface VideoData {
  title: string;
  thumbnail: string;
  duration?: number;
  duration_string?: string;
  uploader?: string;
  platform: string;
  formats: MediaFormat[];
}
