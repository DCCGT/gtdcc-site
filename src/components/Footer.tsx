import { Link } from "react-router-dom";

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
              Empowering students to create meaningful impact through design thinking and innovation.
            </p>
          </div>
          <div>
            <h3 className="mb-4" style={{ fontWeight: 600, color: '#ebebeb' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About', 'Values', 'Methodology', 'Partner'].map((item) => (
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
                <Link
                  to="/apply"
                  className="hover:opacity-100"
                  style={{ color: '#a3a3a3', transition: 'opacity 0.2s' }}
                >
                  Apply
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4" style={{ fontWeight: 600, color: '#ebebeb' }}>
              Opportunities
            </h3>
            <ul className="space-y-2">
              {['Startups', 'Speakers', 'Sponsors'].map((item) => (
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
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
