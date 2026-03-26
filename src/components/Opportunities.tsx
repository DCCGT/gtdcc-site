export function Opportunities() {
  return (
    <section className="px-6 py-24" style={{ backgroundColor: '#ebebeb' }}>
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Startups */}
        <div id="startups" className="scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-block px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: '#dc442e', color: '#ebebeb', fontWeight: 600 }}
              >
                For Startups
              </div>
              <h3 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 600 }}>
                Accelerate Your Vision
              </h3>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#444444' }}>
                Early-stage companies need to move fast and make smart decisions. We partner with startups
                to validate ideas, design compelling products, and create brand experiences that resonate
                with your target market.
              </p>
              <ul className="space-y-3">
                {[
                  "Product design and prototyping",
                  "User research and validation",
                  "Brand identity development",
                  "Go-to-market strategy"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: '#dc442e' }}
                    />
                    <span style={{ color: '#444444' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="h-96 rounded-lg"
              style={{ backgroundColor: '#dc442e', opacity: 0.2 }}
            />
          </div>
        </div>

        {/* Speakers */}
        <div id="speakers" className="scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="h-96 rounded-lg order-2 md:order-1"
              style={{ backgroundColor: '#2e44de', opacity: 0.2 }}
            />
            <div className="order-1 md:order-2">
              <div
                className="inline-block px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: '#2e44de', color: '#ebebeb', fontWeight: 600 }}
              >
                For Speakers
              </div>
              <h3 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 600 }}>
                Share Your Expertise
              </h3>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#444444' }}>
                Join us as a guest speaker to inspire our community of designers and innovators. Share
                your insights on design, entrepreneurship, technology, or social impact with an engaged
                audience of students ready to learn.
              </p>
              <ul className="space-y-3">
                {[
                  "Workshop facilitation opportunities",
                  "Panel discussions and fireside chats",
                  "Mentorship programs",
                  "Industry collaboration projects"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: '#2e44de' }}
                    />
                    <span style={{ color: '#444444' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sponsors */}
        <div id="sponsors" className="scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-block px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: '#dccd2e', color: '#141414', fontWeight: 600 }}
              >
                For Sponsors
              </div>
              <h3 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 600 }}>
                Invest in Future Talent
              </h3>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#444444' }}>
                Support the next generation of designers and innovators while connecting with top student
                talent. Our sponsorship opportunities provide meaningful engagement with our community and
                visibility for your brand.
              </p>
              <ul className="space-y-3">
                {[
                  "Recruiting pipeline to talented students",
                  "Brand visibility at events and workshops",
                  "Collaborative project opportunities",
                  "Networking with design leaders"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: '#dccd2e' }}
                    />
                    <span style={{ color: '#444444' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="h-96 rounded-lg"
              style={{ backgroundColor: '#dccd2e', opacity: 0.2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
