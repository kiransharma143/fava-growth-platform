
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. APS Ahluwalia",
      position: "Business Strategy & Operations",
      description: "Leading strategic business operations with decades of industry experience in FMCG and distribution management.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Mrs. Rekha Suthar",
      position: "Finance Controller",
      description: "Expert in financial management and control systems, ensuring operational efficiency and strategic financial planning.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2e47494?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Ms. Priyaa Sindher",
      position: "Head, HR & Admin",
      description: "Driving human resource strategies and administrative excellence to support organizational growth and development.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Mr. Vibhor Kala",
      position: "CA & IT Head",
      description: "Leading financial compliance and technology initiatives to drive digital transformation and operational efficiency.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const departments = [
    {
      title: "Business Strategy",
      description: "Strategic planning and business development initiatives",
      icon: "🎯"
    },
    {
      title: "Operations",
      description: "Day-to-day operational management and process optimization",
      icon: "⚙️"
    },
    {
      title: "Finance & Compliance",
      description: "Financial management and regulatory compliance",
      icon: "💼"
    },
    {
      title: "Human Resources",
      description: "Talent management and organizational development",
      icon: "👥"
    },
    {
      title: "Information Technology",
      description: "Digital transformation and technology solutions",
      icon: "💻"
    },
    {
      title: "Marketing & Sales",
      description: "Brand building and revenue generation strategies",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-blue-100">
              Experienced professionals driving innovation and excellence in business solutions
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead our organization with vision, expertise, and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Team Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide our team's approach to business excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="text-4xl mb-4">🤝</div>
                <CardTitle className="text-xl">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Working together as a unified team to achieve shared goals and deliver exceptional results
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="text-4xl mb-4">💡</div>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Continuously seeking new ways to improve processes and deliver cutting-edge solutions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Maintaining the highest standards of quality and professionalism in everything we do
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Departments
            </h2>
            <p className="text-lg text-gray-600">
              Specialized teams working together to deliver comprehensive business solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-3xl mb-2">{dept.icon}</div>
                  <CardTitle className="text-lg">{dept.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {dept.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented individuals who share our passion for excellence and innovation. 
              If you're ready to make a difference and grow your career with us, we'd love to hear from you.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Current Opportunities:</strong> Business Development, Marketing, Operations, and IT roles
              </p>
              <p className="text-gray-600">
                Send your resume to: <a href="mailto:favaglocal@gmail.com" className="text-blue-600 hover:underline">favaglocal@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
