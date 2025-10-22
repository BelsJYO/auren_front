'use client'

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/AUREN_FINAL_202509250000-0598_1_thm2_chf3.mp4" type="video/mp4" />
      </video>
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  )
}

