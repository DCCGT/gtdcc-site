import { Footer } from "../components/Footer";
import { Link, useSearchParams } from "react-router-dom";
import { useRef } from "react";

function Confirmation() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      {/* Decorative elements */}
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
        {/* Success Icon */}
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

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 700, color: '#141414' }}>
          Inquiry Submitted!
        </h1>

        {/* Message */}
        <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: '#141414', opacity: 0.7 }}>
          Thank you for reaching out to the Design Consulting Club. We've received your message and will get back to you within 2-3 business days.
        </p>

        {/* Action Buttons */}
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
          <Link
            to="/inquiry"
            className="px-8 py-4 rounded-lg transition-all hover:scale-105"
            style={{
              backgroundColor: '#ffffff',
              color: '#141414',
              fontWeight: 600,
              border: '2px solid rgba(20, 20, 20, 0.2)'
            }}
          >
            Submit Another Inquiry
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Inquiry() {
  const [searchParams] = useSearchParams();
  const submitted = searchParams.get("submitted") === "true";
  const subjectRef = useRef<HTMLInputElement>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value.trim();
    if (subjectRef.current) {
      subjectRef.current.value = name ? `[Inquiry] ${name}` : "[Inquiry]";
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
            <h1 className="text-5xl mb-4" style={{ fontWeight: 700, color: '#141414' }}>
              Get in Touch
            </h1>
            <p className="text-xl" style={{ color: '#141414', opacity: 0.6 }}>
              Have a project or partnership opportunity? We'd love to hear from you.
            </p>
          </div>

          <form action="https://formsubmit.co/c37eaf1e1a64041551f6016a6afbab1e" method="POST" className="space-y-8">
            <input type="hidden" name="_subject" value="[Inquiry]" ref={subjectRef} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value="https://gtdcc.org/inquiry?submitted=true" />
            {/* Name Field */}
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
                onChange={handleNameChange}
                className="w-full px-6 py-4 rounded-lg border-2 transition-all focus:outline-none focus:border-opacity-100"
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#dc442e',
                  color: '#141414'
                }}
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
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
                className="w-full px-6 py-4 rounded-lg border-2 transition-all focus:outline-none focus:border-opacity-100"
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#2e44de',
                  color: '#141414'
                }}
                placeholder="Your email address"
              />
            </div>

            {/* Company/Organization Field */}
            <div>
              <label
                htmlFor="company"
                className="block text-lg mb-3"
                style={{ fontWeight: 600, color: '#141414' }}
              >
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-6 py-4 rounded-lg border-2 transition-all focus:outline-none focus:border-opacity-100"
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#dccd2e',
                  color: '#141414'
                }}
                placeholder="Your company or organization"
              />
            </div>

            {/* Message Body */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg mb-3"
                style={{ fontWeight: 600, color: '#141414' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={8}
                className="w-full px-6 py-4 rounded-lg border-2 transition-all focus:outline-none focus:border-opacity-100 resize-none"
                style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#dccd2e',
                  color: '#141414'
                }}
                placeholder="Tell us about your project or inquiry..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-8 py-5 rounded-lg transition-all hover:scale-[1.02] hover:shadow-lg"
                style={{
                  backgroundColor: '#dc442e',
                  color: '#ebebeb',
                  fontWeight: 600,
                  fontSize: '18px'
                }}
              >
                Send Inquiry
              </button>
            </div>
          </form>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-sm" style={{ color: '#141414', opacity: 0.5 }}>
              You can also reach us at <span style={{ fontWeight: 600 }}>contact@gtdcc.org</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
