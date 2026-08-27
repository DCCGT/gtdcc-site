import { Link } from "react-router-dom";

export function Partner() {
  return (
    <section className="px-6 py-24" id="partner" style={{ backgroundColor: '#141414' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#dc442e]" />
          <span className="h-3 w-3 rounded-full bg-[#2e44de]" />
          <span className="h-3 w-3 rounded-full bg-[#dccd2e]" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#a3a3a3]">Partner with DCC</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[0.95]" style={{ fontWeight: 700, color: '#ebebeb' }}>
              Let&apos;s make something useful together.
            </h2>
            <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-[#c4c4c4]">
              We work with organizations that need thoughtful design support and a collaborative student team.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-[#ebebeb] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10 cursor-pointer">Branding</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-[#ebebeb] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10 cursor-pointer">UI / UX</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-[#ebebeb] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10 cursor-pointer">Product Design</span>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-[#ebebeb] p-7 md:p-8 border border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#6e6e6e]">What to expect</p>
            <div className="mt-6 space-y-4 text-[#141414]">
              <div>
                <p className="font-semibold text-[#dc442e]">A clear process</p>
                <p className="mt-1 text-sm leading-relaxed text-[#555555]">
                  We start by understanding your goals, timeline, and what success looks like.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#2e44de]">A flexible team</p>
                <p className="mt-1 text-sm leading-relaxed text-[#555555]">
                  Our student designers adapt to the project and work closely with your needs.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#dccd2e]">A polished handoff</p>
                <p className="mt-1 text-sm leading-relaxed text-[#555555]">
                  You get work that is practical, thoughtful, and ready to use.
                </p>
              </div>
            </div>

            <Link
              to="/inquiry"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#141414] px-7 py-4 text-base font-semibold text-[#ebebeb] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-black"
            >
              Inquiry Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
