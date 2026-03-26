import { Footer } from "../components/Footer";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useRef } from "react";

function Confirmation() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      <div
        className="absolute top-20 right-20 w-40 h-40 rounded-full opacity-15"
        style={{ backgroundColor: '#dccd2e' }}
      />
      <div
        className="absolute bottom-40 left-20 w-32 h-32 rotate-45 opacity-20"
        style={{ backgroundColor: '#2e44de' }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-24 h-24 opacity-10"
        style={{ backgroundColor: '#dc442e' }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#dccd2e' }}
          >
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 700, color: '#141414' }}>
          Application Submitted!
        </h1>

        <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: '#141414', opacity: 0.7 }}>
          Thank you for applying to the Design Consulting Club. We'll review your application and get back to you soon.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-4 rounded-lg transition-all hover:scale-105"
            style={{
              backgroundColor: '#2e44de',
              color: '#ebebeb',
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(46, 68, 222, 0.2)'
            }}
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Apply() {
  const [searchParams] = useSearchParams();
  const submitted = searchParams.get("submitted") === "true";
  const [membershipType, setMembershipType] = useState("");
  const subjectRef = useRef<HTMLInputElement>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value.trim();
    if (subjectRef.current) {
      subjectRef.current.value = name ? `[Application] ${name}` : "[Application]";
    }
  };

  if (submitted) {
    return (
      <div>
        <Confirmation />
        <Footer />
      </div>
    );
  }

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
          <form action="https://formsubmit.co/a1e723ab4f854f891f7e3fc7fdf4e67d" method="POST" className="space-y-8">
            <input type="hidden" name="_subject" value="[Application]" ref={subjectRef} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value="https://gtdcc.org/apply?submitted=true" />

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg mb-3"
                style={{ fontWeight: 600, color: '#141414' }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={handleNameChange}
                className="w-full px-6 py-4 rounded-lg border-2 transition-all focus:outline-none"
                style={{ backgroundColor: '#ffffff', borderColor: '#d1d1d1', color: '#141414' }}
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg mb-3"
                style={{ fontWeight: 600, color: '#141414' }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-6 py-4 rounded-lg border-2 transition-all focus:outline-none"
                style={{ backgroundColor: '#ffffff', borderColor: '#d1d1d1', color: '#141414' }}
                placeholder="Your email address"
              />
            </div>

            {/* Year */}
            <div>
              <label
                htmlFor="year"
                className="block text-lg mb-3"
                style={{ fontWeight: 600, color: '#141414' }}
              >
                Year
              </label>
              <select
                id="year"
                name="year"
                required
                className="w-full px-6 py-4 rounded-lg border-2 transition-all focus:outline-none"
                style={{ backgroundColor: '#ffffff', borderColor: '#d1d1d1', color: '#141414' }}
                defaultValue=""
              >
                <option value="" disabled>Select your year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="5th Year+">5th Year+</option>
                <option value="Graduate">Graduate</option>
              </select>
            </div>

            {/* Major */}
            <div>
              <label
                htmlFor="major"
                className="block text-lg mb-3"
                style={{ fontWeight: 600, color: '#141414' }}
              >
                Major
              </label>
              <input
                type="text"
                id="major"
                name="major"
                required
                className="w-full px-6 py-4 rounded-lg border-2 transition-all focus:outline-none"
                style={{ backgroundColor: '#ffffff', borderColor: '#d1d1d1', color: '#141414' }}
                placeholder="Your major"
              />
            </div>

            {/* Membership Type */}
            <div>
              <label
                className="block text-lg mb-3"
                style={{ fontWeight: 600, color: '#141414' }}
              >
                Membership Type
              </label>
              <div className="flex gap-4">
                <label
                  className="flex-1 px-6 py-4 rounded-lg border-2 text-center cursor-pointer transition-all"
                  style={{
                    backgroundColor: membershipType === 'General Body' ? '#dccd2e' : '#ffffff',
                    borderColor: '#d1d1d1',
                    color: '#141414',
                    fontWeight: membershipType === 'General Body' ? 600 : 400
                  }}
                >
                  <input
                    type="radio"
                    name="membership_type"
                    value="General Body"
                    required
                    className="sr-only"
                    onChange={(e) => setMembershipType(e.target.value)}
                  />
                  General Body
                </label>
                <label
                  className="flex-1 px-6 py-4 rounded-lg border-2 text-center cursor-pointer transition-all"
                  style={{
                    backgroundColor: membershipType === 'Executive Board' ? '#dccd2e' : '#ffffff',
                    borderColor: '#d1d1d1',
                    color: '#141414',
                    fontWeight: membershipType === 'Executive Board' ? 600 : 400
                  }}
                >
                  <input
                    type="radio"
                    name="membership_type"
                    value="Executive Board"
                    className="sr-only"
                    onChange={(e) => setMembershipType(e.target.value)}
                  />
                  Executive Board
                </label>
              </div>
            </div>

            {/* Position (conditional) */}
            {membershipType === 'Executive Board' && (
              <div>
                <label
                  htmlFor="position"
                  className="block text-lg mb-3"
                  style={{ fontWeight: 600, color: '#141414' }}
                >
                  Position
                </label>
                <select
                  id="position"
                  name="position"
                  required
                  className="w-full px-6 py-4 rounded-lg border-2 transition-all focus:outline-none"
                  style={{ backgroundColor: '#ffffff', borderColor: '#d1d1d1', color: '#141414' }}
                  defaultValue=""
                >
                  <option value="" disabled>Select a position</option>
                  <option value="External VP">External VP</option>
                  <option value="Marketing Director">Marketing Director</option>
                  <option value="Company Relations Director">Company Relations Director</option>
                  <option value="Treasurer">Treasurer</option>
                  <option value="Industrial Design Team Lead">Industrial Design Team Lead</option>
                  <option value="Software Design Team Lead">Software Design Team Lead</option>
                </select>
              </div>
            )}

            {/* Relevant Experience */}
            <div>
              <label
                htmlFor="experience"
                className="block text-lg mb-3"
                style={{ fontWeight: 600, color: '#141414' }}
              >
                Relevant Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                rows={6}
                required
                className="w-full px-6 py-4 rounded-lg border-2 transition-all focus:outline-none resize-none"
                style={{ backgroundColor: '#ffffff', borderColor: '#d1d1d1', color: '#141414' }}
                placeholder="Tell us about your relevant experience, skills, and what you'd bring to the team..."
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-8 py-5 rounded-lg transition-all hover:scale-[1.02] hover:shadow-lg"
                style={{
                  backgroundColor: '#141414',
                  color: '#ebebeb',
                  fontWeight: 600,
                  fontSize: '18px'
                }}
              >
                Submit Application
              </button>
            </div>
          </form>

          <p className="text-center mt-8" style={{ color: '#555555' }}>
            Questions? Email us at <a href="mailto:contact@gtdcc.org" style={{ color: '#2e44de', fontWeight: 600 }}>contact@gtdcc.org</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
