import { Footer } from "../components/Footer";

const teamMembers = [
  {
    name: "Alex Chen",
    position: "President",
    major: "Computer Science",
    gradYear: "2026"
  },
  {
    name: "Sarah Martinez",
    position: "Internal VP",
    major: "Business Administration",
    gradYear: "2026"
  },
  {
    name: "Jordan Taylor",
    position: "External VP",
    major: "Design",
    gradYear: "2027"
  },
  {
    name: "Maya Patel",
    position: "Marketing Director",
    major: "Communications",
    gradYear: "2027"
  },
  {
    name: "Chris Wong",
    position: "Company Relations Director",
    major: "Economics",
    gradYear: "2026"
  },
  {
    name: "Jamie Foster",
    position: "Treasurer",
    major: "Finance",
    gradYear: "2027"
  },
  {
    name: "Riley Anderson",
    position: "Industrial Design Team Lead",
    major: "Industrial Design",
    gradYear: "2026"
  },
  {
    name: "Sam Kim",
    position: "Software Design Team Lead",
    major: "Computer Science",
    gradYear: "2027"
  }
];

const getAccentColor = (index: number) => {
  const colors = ['#dccd2e', '#2e44de', '#dc442e'];
  return colors[index % colors.length];
};

export default function Team() {
  return (
    <div>
      <div className="min-h-screen pt-24 pb-20 px-6" style={{ backgroundColor: '#ebebeb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 700, color: '#141414' }}>
              Meet Our Team
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#555555' }}>
              The passionate leaders driving innovation and impact at the Design Consulting Club
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden hover:scale-105"
                style={{ boxShadow: '0 4px 12px rgba(20, 20, 20, 0.08)', transition: 'transform 0.2s' }}
              >
                <div
                  className="w-full h-80 flex items-center justify-center"
                  style={{ backgroundColor: '#f5f5f5' }}
                >
                  <div
                    className="w-24 h-24 rounded-full"
                    style={{ backgroundColor: getAccentColor(index), opacity: 0.3 }}
                  />
                </div>

                <div className="p-6">
                  <div
                    className="w-12 h-1 mb-4 rounded"
                    style={{ backgroundColor: getAccentColor(index) }}
                  />
                  <h3 className="text-xl mb-2" style={{ fontWeight: 600, color: '#141414' }}>
                    {member.name}
                  </h3>
                  <p className="mb-3" style={{ fontWeight: 600, color: getAccentColor(index) }}>
                    {member.position}
                  </p>
                  <p style={{ color: '#555555' }}>
                    {member.major} • '{member.gradYear.slice(-2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
