import { Link } from "react-router-dom";

export function Partner() {
  return (
    <section className="px-6 py-24" id="partner" style={{ backgroundColor: '#141414' }}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-8" style={{ fontWeight: 600, color: '#ebebeb' }}>
          Partner with DCC
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed mb-12" style={{ color: '#a3a3a3' }}>
          Whether you're a startup looking to establish your brand or an organization that needs design 
          support, we're here to help. Our student design teams bring fresh thinking and a passion for
          creating. We work with you to understand your needs and deliver a design that works for you.
        </p>
        <Link
          to="/inquiry"
          className="inline-block px-10 py-5 rounded-lg hover:opacity-90 text-lg"
          style={{ backgroundColor: '#ebebeb', color: '#141414', fontWeight: 600, transition: 'opacity 0.2s' }}
        >
          Inquiry Form
        </Link>
      </div>
    </section>
  );
}
