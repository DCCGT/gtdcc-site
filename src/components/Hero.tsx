import { useTypingWord } from "../hooks/useTypingWord";

export function Hero() {
  const typedWord = useTypingWord("lub");

  return (
    <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(20, 20, 20, 0.12) 1.1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <svg className="absolute left-[6%] top-[12%] h-5 w-5 text-[#dc442e] md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0l2.47 7.53L22 10l-7.53 2.47L12 20l-2.47-7.53L2 10l7.53-2.47L12 0Z" />
        </svg>
        <svg className="absolute left-[14%] top-[30%] h-4 w-4 text-[#2e44de] md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0l2.47 7.53L22 10l-7.53 2.47L12 20l-2.47-7.53L2 10l7.53-2.47L12 0Z" />
        </svg>
        <svg className="absolute right-[8%] top-[10%] h-4 w-4 text-[#dccd2e] md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0l2.47 7.53L22 10l-7.53 2.47L12 20l-2.47-7.53L2 10l7.53-2.47L12 0Z" />
        </svg>
        <svg className="absolute right-[16%] top-[38%] h-5 w-5 text-[#dc442e] md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0l2.47 7.53L22 10l-7.53 2.47L12 20l-2.47-7.53L2 10l7.53-2.47L12 0Z" />
        </svg>
        <svg className="absolute left-[52%] top-[8%] h-3.5 w-3.5 -translate-x-1/2 text-[#2e44de] md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0l2.47 7.53L22 10l-7.53 2.47L12 20l-2.47-7.53L2 10l7.53-2.47L12 0Z" />
        </svg>
        <svg className="absolute left-[48%] bottom-[10%] h-3.5 w-3.5 -translate-x-1/2 text-[#dccd2e] md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0l2.47 7.53L22 10l-7.53 2.47L12 20l-2.47-7.53L2 10l7.53-2.47L12 0Z" />
        </svg>
        <svg className="absolute left-[30%] bottom-[26%] h-4 w-4 text-[#dc442e] md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0l2.47 7.53L22 10l-7.53 2.47L12 20l-2.47-7.53L2 10l7.53-2.47L12 0Z" />
        </svg>
        <svg className="absolute right-[28%] bottom-[18%] h-4 w-4 text-[#2e44de] md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0l2.47 7.53L22 10l-7.53 2.47L12 20l-2.47-7.53L2 10l7.53-2.47L12 0Z" />
        </svg>
        <svg className="absolute left-[2%] top-[42%] h-3.5 w-3.5 text-[#dccd2e] md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0l2.47 7.53L22 10l-7.53 2.47L12 20l-2.47-7.53L2 10l7.53-2.47L12 0Z" />
        </svg>
        <svg className="absolute left-[4%] bottom-[8%] h-4 w-4 text-[#2e44de] md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0l2.47 7.53L22 10l-7.53 2.47L12 20l-2.47-7.53L2 10l7.53-2.47L12 0Z" />
        </svg>
        <svg className="absolute right-[3%] top-[52%] h-4 w-4 text-[#dc442e] md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0l2.47 7.53L22 10l-7.53 2.47L12 20l-2.47-7.53L2 10l7.53-2.47L12 0Z" />
        </svg>
        <svg className="absolute right-[5%] bottom-[6%] h-3.5 w-3.5 text-[#dccd2e] md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0l2.47 7.53L22 10l-7.53 2.47L12 20l-2.47-7.53L2 10l7.53-2.47L12 0Z" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h1
          className="relative mb-6 flex flex-col items-center justify-center gap-y-2 px-2 sm:px-4 md:flex-row md:items-end md:gap-x-5 md:gap-y-0 md:px-10 text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none"
          style={{ fontWeight: 700 }}
        >
          <span style={{ color: '#dc442e', fontFamily: 'Georgia, serif' }}>Design</span>
          <span style={{ color: '#2e44de', fontFamily: 'Arial, sans-serif' }}>Consulting</span>
          <span
            style={{
              color: '#dccd2e',
              fontFamily: 'Apple Chancery, Snell Roundhand, cursive',
              fontStyle: 'normal',
              fontWeight: 500,
              letterSpacing: '0em',
              display: 'inline-flex',
              alignItems: 'baseline',
              whiteSpace: 'nowrap',
            }}
          >
            <span>C</span>
            <span>{typedWord}</span>
            <span
              aria-hidden="true"
              style={{
                display: 'inline-block',
                width: '0.08em',
                height: '0.95em',
                marginLeft: '0.12ch',
                backgroundColor: 'currentColor',
                animation: 'typewriter-caret 0.8s step-end infinite',
              }}
            />
          </span>
        </h1>

        <p className="text-xl md:text-2xl max-w-[15ch] sm:max-w-[18ch] md:max-w-3xl mx-auto" style={{ color: '#555555' }}>
          Design experience for students. Design access for organizations.
        </p>
      </div>
    </section>
  );
}
