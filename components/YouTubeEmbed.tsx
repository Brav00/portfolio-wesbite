'use client';

import { getYouTubeId } from '@/lib/utils';

type Props = {
  url: string;
  title: string;
};

export function YouTubeEmbed({ url, title }: Props) {
  const videoId = getYouTubeId(url);

  return (
    <div className="relative w-full aspect-video bg-dark-block rounded-xl overflow-hidden">
      {videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
            <svg className="w-6 h-6 text-white/60 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-white/40 text-sm">Video coming soon</p>
        </div>
      )}
    </div>
  );
}
