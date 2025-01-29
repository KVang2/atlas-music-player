import { useEffect, useRef } from "react";

interface AudioPlayerProps {
  song: string;
  isPlaying: boolean;
  volume: number;
  playbackSpeed: number;
}

export default function AudioPlayer({ song, isPlaying, volume, playbackSpeed }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(song);
      return;
    }

    audioRef.current.src = song;
    if (isPlaying) {
      audioRef.current.play().catch((error) => console.error("Playback error:", error));
    } else {
      audioRef.current.pause();
    }
  }, [song, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  return <audio ref={audioRef} />;
}
