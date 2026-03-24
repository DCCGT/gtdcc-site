export function Contact() {
  return (
    <section className="px-6 py-24" id="contact" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-8" style={{ fontWeight: 600 }}>
          Let's Connect
        </h2>
        <p className="text-xl leading-relaxed mb-12" style={{ color: '#444444' }}>
          Ready to start a conversation? Whether you have a project in mind, want to collaborate,
          or simply learn more about what we do, we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:hello@gtdcc.org"
            className="px-10 py-5 rounded-lg hover:opacity-90 text-lg"
            style={{ backgroundColor: '#141414', color: '#ebebeb', fontWeight: 600, transition: 'opacity 0.2s' }}
          >
            Get in Touch
          </a>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/design-consulting-club-at-georgia-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full flex items-center justify-center hover:opacity-90"
              style={{ backgroundColor: '#dccd2e', transition: 'opacity 0.2s' }}
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="#141414"/>
                <path d="M6 9H2V21H6V9Z" fill="#141414"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="#141414"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/gt.dcc?igsh=MTZ6YTFkdzF5cDRubg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full flex items-center justify-center hover:opacity-90"
              style={{ backgroundColor: '#2e44de', transition: 'opacity 0.2s' }}
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#ebebeb" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="#ebebeb" strokeWidth="2"/>
                <circle cx="18" cy="6" r="1" fill="#ebebeb"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
