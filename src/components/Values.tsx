export function Values() {
  const values = [
    {
      title: "Human-Centered",
      description: "We place people at the heart of everything we do, creating solutions that genuinely meet user needs and improve lives.",
      color: "#dccd2e"
    },
    {
      title: "Collaborative",
      description: "Great ideas emerge from diverse perspectives. We foster an environment where every voice is heard and valued.",
      color: "#2e44de"
    },
    {
      title: "Impact-Driven",
      description: "We measure our success by the tangible difference we make for our partners and the communities they serve.",
      color: "#dc442e"
    }
  ];

  return (
    <section className="px-6 py-24" id="values" style={{ backgroundColor: '#ebebeb' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-16 text-center" style={{ fontWeight: 600 }}>
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg"
              style={{ boxShadow: '0 4px 12px rgba(20, 20, 20, 0.06)' }}
            >
              <div
                className="w-16 h-1 mb-6 rounded"
                style={{ backgroundColor: value.color }}
              />
              <h3 className="text-2xl mb-4" style={{ fontWeight: 600, color: '#141414' }}>
                {value.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#555555' }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
