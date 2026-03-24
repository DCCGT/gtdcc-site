export function Methodology() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "We immerse ourselves in understanding your challenge, users, and context through research and stakeholder engagement.",
      color: "#dccd2e"
    },
    {
      number: "02",
      title: "Define",
      description: "We synthesize insights to clearly articulate the problem space and identify opportunities for innovation.",
      color: "#2e44de"
    },
    {
      number: "03",
      title: "Design",
      description: "We ideate, prototype, and iterate rapidly to develop solutions that balance user needs with business objectives.",
      color: "#dc442e"
    },
    {
      number: "04",
      title: "Deliver",
      description: "We refine and implement the solution, ensuring smooth handoff and measurable impact for your organization.",
      color: "#141414"
    }
  ];

  return (
    <section className="px-6 py-24" id="methodology" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-16 text-center" style={{ fontWeight: 600 }}>
          Our Methodology
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div
                className="text-6xl shrink-0"
                style={{ fontWeight: 700, color: step.color, opacity: 0.3 }}
              >
                {step.number}
              </div>
              <div>
                <h3 className="text-2xl mb-3" style={{ fontWeight: 600, color: '#141414' }}>
                  {step.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#555555' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
