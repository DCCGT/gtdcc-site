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
