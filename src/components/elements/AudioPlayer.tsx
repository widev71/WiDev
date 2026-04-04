"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayer() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tracks, setTracks] = useState<string[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 1. Ambil daftar lagu dari API
  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const res = await fetch('/api/music');
        const data = await res.json();
        if (data.tracks && data.tracks.length > 0) {
          // Acak urutan lagu agar variatif
          const shuffled = [...data.tracks].sort(() => Math.random() - 0.5);
          setTracks(shuffled);
        }
      } catch (err) {
        console.error("Gagal memuat list musik:", err);
      }
    };
    fetchMusic();
  }, []);

  // 2. Munculkan modal prompt setelah Splash Screen selesai (~3.2 detik)
  useEffect(() => {
    if (tracks.length > 0) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [tracks]);

  // 3. Logika inti pemutaran audio
  useEffect(() => {
    if (isPlaying && audioRef.current && tracks.length > 0) {
      const trackName = tracks[currentTrackIndex];

      // Set path yang mengarah ke folder public/music/
      audioRef.current.src = `/music/${encodeURIComponent(trackName)}`;
      audioRef.current.volume = 0.4; // Atur volume (0.0 sampai 1.0)

      // Load ulang buffer dan putar
      audioRef.current.load();
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Playback error atau diblokir browser:", error);
        });
      }
    }
  }, [isPlaying, currentTrackIndex, tracks]);

  const acceptMusic = () => {
    setShowPrompt(false);
    setIsPlaying(true);
  };

  const declineMusic = () => {
    setShowPrompt(false);
    setIsPlaying(false);
  };

  const playNextTrack = () => {
    // Putar lagu berikutnya secara looping
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        onEnded={playNextTrack}
        style={{ display: "none" }}
      />

      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
          >
            <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center flex flex-col gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Immersive Experience</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Would you like to play background music to enhance your visit?
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={declineMusic}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-white/10 text-neutral-400 hover:bg-white/5 hover:text-white transition-all text-sm font-medium"
                >
                  No, thanks
                </button>
                <button
                  onClick={acceptMusic}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-white text-black hover:bg-neutral-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] text-sm font-bold"
                >
                  Hell Yes!
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}