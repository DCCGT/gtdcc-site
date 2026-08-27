export function Values() {
  const values = [
    {
      title: "Human-Centered",
      description: "We place people at the heart of everything we do, designing products with the user in mind.",
      color: "#dc442e"
    },
    {
      title: "Collaborative",
      description: "We recognize that different backgrounds and experiences create better ideas and results that work for everyone.",
      color: "#2e44de"
    },
    {
      title: "Accessible",
      description: "Great design shouldn't be gatekept. We believe quality should be available to everyone.",
      color: "#dccd2e"
    }
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24" id="values" style={{ backgroundColor: '#ebebeb' }}>
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-[-7rem] top-4 h-72 w-72 rounded-full bg-[#dc442e]/8 blur-3xl" />
        <div className="absolute right-[-8rem] bottom-[-5rem] h-96 w-96 rounded-full bg-[#2e44de]/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(20, 20, 20, 0.08) 1px, transparent 0)',
            backgroundSize: '34px 34px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
        <div className="max-w-xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#6e6e6e]">Our Values</p>
          <h2 className="text-4xl md:text-6xl leading-[0.92]" style={{ fontWeight: 700 }}>
            The way we think shapes the work we make.
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-[#555555] max-w-lg">
            We like clear ideas, strong collaboration, and design that opens doors instead of closing them.
          </p>

          <div className="mt-10 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#dc442e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#2e44de]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#dccd2e]" />
          </div>
        </div>

        <div className="grid gap-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[1.5rem] border border-black/5 bg-white shadow-[0_14px_35px_rgba(20,20,20,0.06)] transition-transform duration-300 hover:translate-x-2"
            >
              <div className="flex min-h-[8.5rem] flex-col justify-between gap-6 p-6 md:p-7 lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-bold"
                    style={{ backgroundColor: value.color, color: '#141414' }}
                  >
                    0{index + 1}
                  </div>

                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#6e6e6e]">
                      {index === 0 ? 'Core principle' : index === 1 ? 'How we work' : 'Access for all'}
                    </p>
                    <h3 className="text-2xl md:text-3xl" style={{ fontWeight: 700, color: '#141414' }}>
                      {value.title}
                    </h3>
                  </div>
                </div>

                <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[#555555] lg:text-right">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
