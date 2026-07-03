import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger)

gsap.registerPlugin(ScrollTrigger)

gsap.config({
  nullTargetWarn: false,
})

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const curtainLeftRef = useRef<HTMLDivElement>(null)
  const curtainRightRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const titleTextRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const heroImageRef = useRef<HTMLDivElement>(null)
  const imageInnerRef = useRef<HTMLImageElement>(null)

  useGSAP(
    () => {
      if (
        !containerRef.current ||
        !curtainLeftRef.current ||
        !curtainRightRef.current ||
        !titleTextRef.current ||
        !subtitleRef.current ||
        !heroImageRef.current ||
        !imageInnerRef.current
      )
        return

      // ═══════════════════════════════════════════════════════════
      // ON-LOAD TITLE ENTRANCE (fires once on page load, NOT scroll)
      // ═══════════════════════════════════════════════════════════
      // Title starts hidden below
      gsap.set(titleTextRef.current, { y: 60, opacity: 0 })
      gsap.set(subtitleRef.current, { y: 30, opacity: 0 })

      // Auto-play title entrance after 1.5s delay
      gsap.to(titleTextRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 1.5,
        ease: 'power3.out',
      })

      gsap.to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay: 1.9,
        ease: 'power3.out',
      })

      // ═══════════════════════════════════════════════════════════
      // SCROLL-TRIGGERED ANIMATIONS (everything else)
      // ═══════════════════════════════════════════════════════════

      // Master timeline with single ScrollTrigger
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })

      // ─── SET INITIAL STATES ───
      gsap.set(curtainLeftRef.current, { x: '0%' })
      gsap.set(curtainRightRef.current, { x: '0%' })
      gsap.set(heroImageRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
      })
      gsap.set(imageInnerRef.current, { scale: 1.1 })

      // ═══════════════════════════════════════════════════
      // PHASE 1: Curtain Reveal (0% - 30% of scroll)
      // White panels slide apart to reveal the scene
      // ═══════════════════════════════════════════════════
      masterTl.to(
        curtainLeftRef.current,
        { x: '-100%', duration: 1, ease: 'power4.inOut' },
        0
      )
      masterTl.to(
        curtainRightRef.current,
        { x: '100%', duration: 1, ease: 'power4.inOut' },
        0
      )

      // ═══════════════════════════════════════════════════
      // PHASE 2: Hold (30% - 60% of scroll)
      // Title is visible — nothing animates here
      // ═══════════════════════════════════════════════════

      // ═══════════════════════════════════════════════════
      // PHASE 3: Title Scale-Down + Photo Reveal (60% - 100% of scroll)
      // Title scales down and fades, clipPath reveals hero photo
      // ═══════════════════════════════════════════════════
      masterTl.to(
        titleTextRef.current,
        { scale: 0.92, opacity: 0.15, duration: 1, ease: 'power3.out' },
        1.2
      )
      masterTl.to(
        subtitleRef.current,
        { scale: 0.95, opacity: 0.1, duration: 1, ease: 'power3.out' },
        1.3
      )

      // Clip-path expands to reveal hero photo beneath
      masterTl.fromTo(
        heroImageRef.current,
        { clipPath: 'inset(50% 50% 50% 50%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          ease: 'power4.inOut',
        },
        1.0
      )

      // Photo inner zoom (subtle Ken Burns as it reveals)
      masterTl.to(
        imageInnerRef.current,
        { scale: 1.0, duration: 1.5, ease: 'power2.out' },
        1.0
      )

      // ═══════════════════════════════════════════════════
      // Cleanup
      // ═══════════════════════════════════════════════════
      return () => {
        masterTl.kill()
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === containerRef.current) st.kill()
        })
      }
    },
    { scope: containerRef }
  )

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', backgroundColor: '#ffffff' }}
    >
      {/* ═══ CURTAIN PANELS ═══ */}
      {/* Left panel — slides left on scroll */}
      <div
        ref={curtainLeftRef}
        className="absolute top-0 left-0 z-[100]"
        style={{
          width: '50vw',
          height: '100vh',
          backgroundColor: '#ff1980',
          willChange: 'transform',
        }}
      />
      {/* Right panel — slides right on scroll */}
      <div
        ref={curtainRightRef}
        className="absolute top-0 right-0 z-[100]"
        style={{
          width: '50vw',
          height: '100vh',
          backgroundColor: '#FFFFFF',
          willChange: 'transform',
        }}
      />

      {/* ═══ HERO PHOTO (behind everything, revealed by clipPath on scroll) ═══ */}
      <div
        ref={heroImageRef}
        className="absolute inset-0 z-0"
        style={{
          clipPath: 'inset(50% 50% 50% 50%)',
          willChange: 'clip-path',
        }}
      >
        <img
          ref={imageInnerRef}
          src="/assets/hero-piano.jpg"
          alt="A grand piano in a bright, elegant living room"
          className="w-full h-full object-cover"
          style={{
            willChange: 'transform',
            filter: 'brightness(1.0)',
          }}
          fetchPriority="high"
        />
        {/* Subtle dark overlay on photo for text readability */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
        />
      </div>

      {/* ═══ TITLE OVERLAY (on top, visible on page load) ═══ */}
      <div
        ref={titleRef}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center"
        style={{ padding: '0 var(--container-padding)' }}
      >
        <h1
          ref={titleTextRef}
          className="font-display text-center"
          style={{
            fontSize: 'var(--font-h1-size)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 0.8,
            color: '#000000',
            willChange: 'transform, opacity',
            textWrap: 'balance',
          }}
        >
          AFFORDABLE
          <br />
          PIANOS
        </h1>

        <p
          ref={subtitleRef}
          className="font-body text-center"
          style={{
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(0, 0, 0, 0.5)',
            marginTop: '24px',
            willChange: 'transform, opacity',
          }}
        >
          SYDNEY&apos;S FINEST USED &amp; RESTORED PIANOS
        </p>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          style={{ gap: '8px' }}
        >
          <span
            className="font-body"
            style={{
              fontSize: '10px',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(0, 0, 0, 0.35)',
            }}
          >
            SCROLL
          </span>
          <div
            className="scroll-indicator"
            style={{
              width: '1px',
              height: '32px',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '1px',
                height: '16px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                position: 'absolute',
                top: '-16px',
                animation: 'scrollPulse 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
