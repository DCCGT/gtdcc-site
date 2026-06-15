import { Link } from "react-router-dom";

const APPLICATION_FORM_URL = "https://forms.gle/eNRqDHHhhWy6eNi27";

export function Footer() {
  return (
    <footer className="px-6 py-12" style={{ backgroundColor: '#141414', color: '#ebebeb' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="mb-4" style={{ fontWeight: 600, color: '#ebebeb' }}>
              Design Consulting Club
            </h3>
            <p style={{ color: '#a3a3a3' }}>
              Design experience for students. Design access for organizations.
            </p>
          </div>
          <div>
            <h3 className="mb-4" style={{ fontWeight: 600, color: '#ebebeb' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About', 'Partner'].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase()}`}
                    className="hover:opacity-100"
                    style={{ color: '#a3a3a3', transition: 'opacity 0.2s' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/team"
                  className="hover:opacity-100"
                  style={{ color: '#a3a3a3', transition: 'opacity 0.2s' }}
                >
                  Team
                </Link>
              </li>
              <li>
                <a
                  href={APPLICATION_FORM_URL}
                  className="hover:opacity-100"
                  style={{ color: '#a3a3a3', transition: 'opacity 0.2s' }}
                >
                  Apply
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4" style={{ fontWeight: 600, color: '#ebebeb' }}>
              Get Involved
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/inquiry"
                  className="hover:opacity-100"
                  style={{ color: '#a3a3a3', transition: 'opacity 0.2s' }}
                >
                  Inquiry Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
