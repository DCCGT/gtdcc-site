export function About() {
  return (
    <section className="px-6 py-24" id="about" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-8" style={{ fontWeight: 600 }}>
          About Us
        </h2>
        <div className="space-y-6">
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#444444' }}>
            The Design Consulting Club is a student-led organization dedicated to helping businesses,
            startups, and organizations solve complex challenges through human-centered design. We bring
            together passionate students from diverse backgrounds to deliver innovative solutions that
            create real impact.
          </p>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#444444' }}>
            Our team combines design thinking, strategic consulting, and technical expertise to tackle
            problems ranging from product development to organizational transformation. We believe that
            great design is not just about aesthetics—it's about creating meaningful experiences that
            drive results.
          </p>
        </div>
      </div>
    </section>
  );
}
