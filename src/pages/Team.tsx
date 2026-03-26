import { Footer } from "../components/Footer";

const teamMembers = [
  {
    name: "Jacob Ma",
    position: "President",
    major: "Computer Engineering",
    gradYear: "2027"
  },
  {
    name: "Aiden Dowling",
    position: "Internal VP",
    major: "Computer Engineering",
    gradYear: "2027"
  },
  {
    name: "TBA",
    position: "External VP",
    major: "TBA",
    gradYear: "20XX"
  },
  {
    name: "TBA",
    position: "Marketing Director",
    major: "TBA",
    gradYear: "20XX"
  },
  {
    name: "TBA",
    position: "Company Relations Director",
    major: "TBA",
    gradYear: "20XX"
  },
  {
    name: "TBA",
    position: "Treasurer",
    major: "TBA",
    gradYear: "20XX"
  },
  {
    name: "TBA",
    position: "Industrial Design Team Lead",
    major: "TBA",
    gradYear: "20XX"
  },
  {
    name: "TBA",
    position: "Software Design Team Lead",
    major: "TBA",
    gradYear: "20XX"
  }
];

const getAccentColor = (index: number) => {
  const colors = ['#dc442e', '#2e44de', '#dccd2e'];
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
