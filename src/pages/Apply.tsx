import { Footer } from "../components/Footer";

// Update this URL to your actual application form link
const applicationFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeJVHUyMYsB2-uJmb97kBrgBexY2qiiZMTQdatnHjY_4fuVyA/viewform?usp=dialog";

export default function Apply() {
  return (
    <div>
      <div className="min-h-screen pt-24 pb-20 px-6" style={{ backgroundColor: '#ebebeb' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 700, color: '#141414' }}>
              Join Our Team
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#555555' }}>
              Be part of a community dedicated to creating meaningful impact through design thinking and innovation
            </p>
          </div>

          {/* Why Join Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-lg" style={{ boxShadow: '0 4px 12px rgba(20, 20, 20, 0.08)' }}>
              <div className="w-12 h-1 mb-4 rounded" style={{ backgroundColor: '#dc442e' }} />
              <h3 className="text-xl mb-3" style={{ fontWeight: 600, color: '#141414' }}>
                Real Experience
              </h3>
              <p style={{ color: '#555555' }}>
                Work on real projects with startups and organizations
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg" style={{ boxShadow: '0 4px 12px rgba(20, 20, 20, 0.08)' }}>
              <div className="w-12 h-1 mb-4 rounded" style={{ backgroundColor: '#2e44de' }} />
              <h3 className="text-xl mb-3" style={{ fontWeight: 600, color: '#141414' }}>
                Learn & Grow
              </h3>
              <p style={{ color: '#555555' }}>
                Develop skills in design, strategy, and leadership
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg" style={{ boxShadow: '0 4px 12px rgba(20, 20, 20, 0.08)' }}>
              <div className="w-12 h-1 mb-4 rounded" style={{ backgroundColor: '#dccd2e' }} />
              <h3 className="text-xl mb-3" style={{ fontWeight: 600, color: '#141414' }}>
                Build Community
              </h3>
              <p style={{ color: '#555555' }}>
                Connect with passionate designers and innovators
              </p>
            </div>
          </div>

          {/* Application CTA */}
          <div className="bg-white p-12 md:p-20 rounded-lg text-center" style={{ boxShadow: '0 4px 12px rgba(20, 20, 20, 0.08)' }}>
            <h2 className="text-4xl mb-6" style={{ fontWeight: 600, color: '#141414' }}>
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: '#555555' }}>
              Complete our application form to join the Design Consulting Club executive board and start creating meaningful change.
            </p>

            <a
              href={applicationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 rounded-lg hover:opacity-90 text-xl"
              style={{ backgroundColor: '#141414', color: '#ebebeb', fontWeight: 600, transition: 'opacity 0.2s' }}
            >
              Fill Out Application Form
            </a>
          </div>

          <p className="text-center mt-8" style={{ color: '#555555' }}>
            Questions? Email us at <a href="mailto:president.gtdcc@gmail.com" style={{ color: '#2e44de', fontWeight: 600 }}>president.gtdcc@gmail.com</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
