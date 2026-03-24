export function Partner() {
  return (
    <section className="px-6 py-24" id="partner" style={{ backgroundColor: '#141414' }}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-8" style={{ fontWeight: 600, color: '#ebebeb' }}>
          Partner with DCC
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed mb-12" style={{ color: '#a3a3a3' }}>
          Whether you're looking to innovate, grow, or transform your organization, we're here to help.
          Our team brings fresh perspectives, proven methodologies, and a passion for creating meaningful
          change. Let's build something extraordinary together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#startups"
            className="px-8 py-4 rounded-lg hover:opacity-90"
            style={{ backgroundColor: '#dccd2e', color: '#141414', fontWeight: 600, transition: 'opacity 0.2s' }}
          >
            For Startups
          </a>
          <a
            href="#speakers"
            className="px-8 py-4 rounded-lg hover:opacity-90"
            style={{ backgroundColor: '#2e44de', color: '#ebebeb', fontWeight: 600, transition: 'opacity 0.2s' }}
          >
            For Speakers
          </a>
          <a
            href="#sponsors"
            className="px-8 py-4 rounded-lg hover:opacity-90"
            style={{ backgroundColor: '#dc442e', color: '#ebebeb', fontWeight: 600, transition: 'opacity 0.2s' }}
          >
            For Sponsors
          </a>
        </div>
      </div>
    </section>
  );
}
