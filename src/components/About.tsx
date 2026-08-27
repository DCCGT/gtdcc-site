export function About() {
  return (
    <section className="px-6 py-24" id="about" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[#dc442e]" />
            <span className="h-3 w-3 rounded-full bg-[#2e44de]" />
            <span className="h-3 w-3 rounded-full bg-[#dccd2e]" />
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#6e6e6e]">About Us</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 max-w-3xl" style={{ fontWeight: 700, color: '#141414' }}>
            Real design work for real experience.
          </h2>

          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-[#555555]">
              The Design Consulting Club is a student-led organization that takes on design projects for
              businesses, startups, and organizations.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-[#555555]">
              Our design teams work across industrial and product design, software design, graphic design,
              and UI/UX, while giving students real-world experience along the way.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[1.75rem] bg-[#ebebeb] p-6 md:p-7 border border-black/5 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#d9d9d9] hover:shadow-[0_12px_28px_rgba(20,20,20,0.08)] cursor-pointer">
            <p className="text-sm uppercase tracking-[0.3em] text-[#6e6e6e]">What we do</p>
            <ul className="mt-5 space-y-4 text-[#141414]">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#dc442e]" />
                <span>Design for client needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#2e44de]" />
                <span>Hands-on student collaboration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#dccd2e]" />
                <span>Accessible, quality design outcomes</span>
              </li>
            </ul>
          </div>

          <div className="rounded-[1.75rem] bg-[#ebebeb] p-6 md:p-7 border border-black/5 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#d9d9d9] hover:shadow-[0_12px_28px_rgba(20,20,20,0.08)] cursor-pointer">
            <p className="text-sm uppercase tracking-[0.3em] text-[#6e6e6e]">Who we serve</p>
            <ul className="mt-5 space-y-4 text-[#141414]">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#dc442e]" />
                <span>Startups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#2e44de]" />
                <span>Student organizations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#dccd2e]" />
                <span>Groups needing fresh design support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
