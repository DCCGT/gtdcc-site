import { Footer } from "../components/Footer";

const APPLICATION_FORM_URL = "https://forms.gle/eNRqDHHhhWy6eNi27";

export default function Apply() {
  return (
    <div>
      <div className="min-h-screen pt-24 pb-20 px-6" style={{ backgroundColor: '#ebebeb' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
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

          {/* Application Form */}
          <div className="flex justify-center">
            <a
              href={APPLICATION_FORM_URL}
              className="w-full px-8 py-5 rounded-lg text-center transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{
                backgroundColor: '#141414',
                color: '#ebebeb',
                fontWeight: 600,
                fontSize: '18px'
              }}
            >
              Apply
            </a>
          </div>

          <p className="text-center mt-8" style={{ color: '#555555' }}>
            Questions? Email us at <a href="mailto:contact@gtdcc.org" style={{ color: '#2e44de', fontWeight: 600 }}>contact@gtdcc.org</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
