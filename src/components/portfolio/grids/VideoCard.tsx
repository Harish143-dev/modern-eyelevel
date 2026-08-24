import { useCallback, useEffect, useRef, useState } from "react";
import type { VideoTile } from "@/data/portfolio";

/**
 * Falls back to grabbing a frame off the video itself when the clip has no
 * sibling .jpg poster. It costs a metadata fetch per tile and is blocked
 * outright by CORS, so prefer shipping a real poster — see the README in
 * `src/assets/content/works/portfolio/`.
 */
function useCapturedPoster(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  enabled: boolean,
  posterTime = 0.5,
) {
  const [poster, setPoster] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled) return;

    const capture = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d")?.drawImage(video, 0, 0);
        setPoster(canvas.toDataURL("image/jpeg", 0.8));
      } catch {
        // Cross-origin frame — leave the tile on its dark placeholder.
      }
    };

    const onLoaded = () => {
      video.currentTime = posterTime;
    };

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("seeked", capture);
    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("seeked", capture);
    };
  }, [videoRef, enabled, posterTime]);

  return poster;
}

export default function VideoCard({
  video,
  ratio,
  showBadge = true,
  onRatio,
}: {
  video: VideoTile;
  ratio: number;
  showBadge?: boolean;
  onRatio: (url: string, ratio: number) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  /** The real <video> only mounts once the user has pressed play. */
  const [started, setStarted] = useState(false);

  const capturedPoster = useCapturedPoster(
    videoRef,
    !started && !video.poster,
    video.posterTime,
  );
  const poster = video.poster ?? capturedPoster;

  /**
   * Report the true frame ratio up to the grid, which uses it both to size this
   * tile and to balance the columns. A number rather than a portrait/landscape
   * flag, so the tile can match the footage exactly.
   */
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onMeta = () => {
      if (el.videoWidth > 0 && el.videoHeight > 0) {
        onRatio(video.url, el.videoWidth / el.videoHeight);
      }
    };
    el.addEventListener("loadedmetadata", onMeta);
    return () => el.removeEventListener("loadedmetadata", onMeta);
  }, [onRatio, video.url]);

  // Global event listener to stop other videos when one starts playing
  useEffect(() => {
    const handleStopOtherVideos = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail.src !== video.url) {
        const el = videoRef.current;
        if (el && !el.paused) {
          el.pause();
          setPlaying(false);
        }
      }
    };

    window.addEventListener("stop-other-videos", handleStopOtherVideos);
    return () => {
      window.removeEventListener("stop-other-videos", handleStopOtherVideos);
    };
  }, [video.url]);

  const togglePlay = useCallback(() => {
    const el = videoRef.current;
    if (!el) {
      setStarted(true);
      setPlaying(true);
      window.dispatchEvent(
        new CustomEvent("stop-other-videos", { detail: { src: video.url } })
      );
      return;
    }
    if (el.paused) {
      void el.play();
      setPlaying(true);
      setStarted(true);
      window.dispatchEvent(
        new CustomEvent("stop-other-videos", { detail: { src: video.url } })
      );
    } else {
      el.pause();
      setPlaying(false);
    }
  }, [video.url]);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  }, []);

  const handleFullscreen = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    void videoRef.current?.requestFullscreen();
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const el = videoRef.current;
    if (!el?.duration) return;
    setProgress((el.currentTime / el.duration) * 100);
  }, []);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el?.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.currentTime = ((e.clientX - rect.left) / rect.width) * el.duration;
  }, []);

  return (
    <div
      className="group relative w-full cursor-pointer select-none overflow-hidden rounded-2xl bg-black"
      style={{ aspectRatio: ratio }}
      onClick={togglePlay}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onTouchStart={() => setShowControls(true)} // Show controls on mobile touch
    >
      {/* Before first play: metadata only, so a page of tiles stays light. */}
      {!started && (
        <video
          ref={videoRef}
          src={video.url}
          preload="metadata"
          muted
          playsInline
          className="hidden"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setPlaying(false)}
        />
      )}

      {started && (
        <video
          ref={videoRef}
          src={video.url}
          poster={poster ?? undefined}
          preload="metadata"
          muted={muted}
          playsInline
          autoPlay
          className="h-full w-full object-cover"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setPlaying(false)}
        />
      )}

      {!started && poster && (
        <img
          src={poster}
          alt={video.label}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-200">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <svg
              className="ml-1 h-6 w-6 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Client Name & Type Badge */}
      {showBadge && (
        <div 
          className={`absolute left-0 right-0 top-0 p-4 transition-opacity duration-300 ${
            showControls || !playing ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)",
          }}
        >
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-md">
            <span className="truncate text-xs font-semibold text-white shadow-black drop-shadow-md">
              {video.label}
            </span>
          </div>
        </div>
      )}

      <div
        className={`absolute bottom-0 left-0 right-0 px-3 pb-3 pt-8 transition-opacity duration-200 ${
          showControls || !playing ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="mb-3 h-1 w-full cursor-pointer rounded-full bg-white/30"
          onClick={handleSeek}
        >
          <div
            className="h-full rounded-full bg-white transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={playing ? "Pause" : "Play"}
            className="text-white transition-colors hover:text-white/80"
            onClick={togglePlay}
          >
            {playing ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6zm8-14v14h4V5z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            aria-label={muted ? "Unmute" : "Mute"}
            className="text-white transition-colors hover:text-white/80"
            onClick={toggleMute}
          >
            {muted ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.978 6.978 0 0 1 12 19c-.34 0-.67-.03-1-.08v2.03c.33.04.66.05 1 .05 1.77 0 3.42-.47 4.84-1.31l2.16 2.16L20.27 21 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            aria-label="Fullscreen"
            className="ml-auto text-white transition-colors hover:text-white/80"
            onClick={handleFullscreen}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
