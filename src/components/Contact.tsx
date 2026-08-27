export function Contact() {
  return (
    <section
      className="relative overflow-hidden px-6 py-24"
      id="contact"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-[-6rem] top-20 h-72 w-72 rounded-full bg-[#dc442e]/10 blur-3xl" />
        <div className="absolute right-[-5rem] top-0 h-80 w-80 rounded-full bg-[#2e44de]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#dccd2e]/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(20, 20, 20, 0.1) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
        <div className="rounded-[2rem] bg-[#141414] p-8 md:p-10 text-[#ebebeb] shadow-[0_30px_80px_rgba(20,20,20,0.18)]">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[#dc442e]" />
            <span className="h-3 w-3 rounded-full bg-[#2e44de]" />
            <span className="h-3 w-3 rounded-full bg-[#dccd2e]" />
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#a3a3a3]">
            Contact
          </p>
          <h2 className="text-4xl md:text-6xl leading-[0.95] mb-6" style={{ fontWeight: 700 }}>
            Let&apos;s make something sharp.
          </h2>
          <p className="max-w-xl text-lg md:text-xl leading-relaxed text-[#d7d7d7] mb-10">
            Have a project, partnership, or idea for the Design Consulting Club? Send a note and we&apos;ll
            point you to the right place.
          </p>

          <a
            href="mailto:contact@gtdcc.org"
            className="inline-flex items-center gap-3 rounded-full bg-[#ebebeb] px-7 py-4 text-lg font-semibold text-[#141414] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white"
          >
            <span className="h-3 w-3 rounded-full bg-[#dc442e]" />
            contact@gtdcc.org
          </a>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[2rem] bg-[#ebebeb] p-7 md:p-8 shadow-[0_20px_50px_rgba(20,20,20,0.08)] border border-black/5">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#6e6e6e]">Quick links</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="https://www.linkedin.com/company/design-consulting-club-at-georgia-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-white p-5 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#dc442e]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="#ebebeb"/>
                    <path d="M6 9H2V21H6V9Z" fill="#ebebeb"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="#ebebeb"/>
                  </svg>
                </div>
                <p className="text-lg font-semibold text-[#141414]">LinkedIn</p>
                <p className="text-sm text-[#555555]">Updates and club news</p>
              </a>

              <a
                href="https://www.instagram.com/gt.dcc"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-white p-5 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2e44de]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#ebebeb" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" stroke="#ebebeb" strokeWidth="2" />
                    <circle cx="18" cy="6" r="1" fill="#ebebeb" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-[#141414]">Instagram</p>
                <p className="text-sm text-[#555555]">Photos, stories, and events</p>
              </a>

              <a
                href="https://discord.gg/6gjvFRhS5K"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-white p-5 transition-transform duration-200 hover:-translate-y-1 sm:col-span-2"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#dccd2e]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M19.54 5.34A16.1 16.1 0 0 0 15.61 4.1a.06.06 0 0 0-.06.03c-.17.3-.36.7-.49 1.01a14.9 14.9 0 0 0-4.12 0 9.5 9.5 0 0 0-.5-1.01.06.06 0 0 0-.06-.03 16.05 16.05 0 0 0-3.93 1.24.06.06 0 0 0-.03.02C3.9 9.1 3.2 12.74 3.54 16.33a.07.07 0 0 0 .03.05 16.2 16.2 0 0 0 4.83 2.42.06.06 0 0 0 .07-.02c.37-.5.7-1.04.98-1.6a.06.06 0 0 0-.03-.08 10.7 10.7 0 0 1-1.52-.72.06.06 0 0 1 0-.1l.3-.23a.06.06 0 0 1 .06 0 11.55 11.55 0 0 0 9.84 0 .06.06 0 0 1 .06 0l.3.23a.06.06 0 0 1 0 .1c-.48.28-.99.52-1.52.72a.06.06 0 0 0-.03.08c.29.56.62 1.1.98 1.6a.06.06 0 0 0 .07.02 16.15 16.15 0 0 0 4.84-2.42.06.06 0 0 0 .02-.05c.4-4.15-.68-7.76-2.86-10.97a.05.05 0 0 0-.02-.02ZM9.68 14.15c-.96 0-1.74-.87-1.74-1.94s.77-1.95 1.74-1.95c.98 0 1.76.88 1.74 1.95 0 1.07-.77 1.94-1.74 1.94Zm6.45 0c-.95 0-1.73-.87-1.73-1.94s.76-1.95 1.73-1.95c.98 0 1.76.88 1.74 1.95 0 1.07-.76 1.94-1.74 1.94Z" fill="#141414"/>
                  </svg>
                </div>
                <p className="text-lg font-semibold text-[#141414]">Discord</p>
                <p className="text-sm text-[#555555]">Join the community</p>
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#dc442e] p-6 md:p-8 text-[#ebebeb] shadow-[0_20px_50px_rgba(20,20,20,0.12)]">
            <p className="text-xs uppercase tracking-[0.3em] opacity-80">Final note</p>
            <h3 className="mt-3 text-2xl md:text-3xl lg:text-4xl leading-tight" style={{ fontWeight: 700 }}>
              We&apos;re looking forward to hearing from you!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
