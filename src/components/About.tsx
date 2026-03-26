export function About() {
  return (
    <section className="px-6 py-24" id="about" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-8" style={{ fontWeight: 600 }}>
          About Us
        </h2>
        <div className="space-y-6">
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#444444' }}>
            The Design Consulting Club is a student-led organization that takes on design projects for
            businesses, startups, and organizations. Our design teams specialize in either industrial and product 
            design or software design, including graphic design and UI/UX.
          </p>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#444444' }}>
            We work with clients across different types of projects to deliver high-quality products. We
            enable students to gain design experience by doing real work, and in doing so, we make quality
            design more accessible.
          </p>
        </div>
      </div>
    </section>
  );
}
