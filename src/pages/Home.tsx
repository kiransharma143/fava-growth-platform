
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceCard from "@/components/ui/ServiceCard";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    {
      title: "BDaaS",
      description: "Business Development as a Service - Complete end-to-end business solutions under one roof",
      icon: <span className="text-white text-xl">🚀</span>
    },
    {
      title: "Distribution Network",
      description: "Comprehensive distribution channel setup across GT, Modern Trade, and E-commerce platforms",
      icon: <span className="text-white text-xl">🌐</span>
    },
    {
      title: "Manpower Solutions",
      description: "Strategic field force deployment and manpower management for optimal results",
      icon: <span className="text-white text-xl">👥</span>
    },
    {
      title: "Marketing Support",
      description: "Brand building, digital marketing, and comprehensive marketing strategy implementation",
      icon: <span className="text-white text-xl">📈</span>
    }
  ];

  const mainServices = [
    {
      title: "BDaaS (Business Development as a Service)",
      description: "Complete end-to-end business development solutions tailored for startups and emerging brands. Our comprehensive approach covers every aspect of business growth.",
      icon: <span className="text-white text-xl">🚀</span>
    },
    {
      title: "New Product Development (NPD) & Market Research",
      description: "From concept to market launch, we provide comprehensive NPD support backed by thorough market research and consumer insights.",
      icon: <span className="text-white text-xl">🔍</span>
    },
    {
      title: "Distribution Channel Setup",
      description: "Strategic setup and management of distribution channels across GT, Modern Trade, and E-commerce platforms for maximum market penetration.",
      icon: <span className="text-white text-xl">🌐</span>
    },
    {
      title: "Manpower Strategy & Field Force Deployment",
      description: "Strategic manpower planning and field force deployment to ensure optimal coverage and performance across all market segments.",
      icon: <span className="text-white text-xl">👥</span>
    },
    {
      title: "Marketing Support & Brand Building",
      description: "Comprehensive marketing solutions including digital marketing, brand positioning, and integrated marketing communications.",
      icon: <span className="text-white text-xl">📈</span>
    },
    {
      title: "Logistic & Warehousing Support",
      description: "Complete logistics solutions with state-of-the-art warehousing facilities in strategic locations for efficient supply chain management.",
      icon: <span className="text-white text-xl">📦</span>
    }
  ];

  const keyPartnerships = [
    {
      title: "Sea Buck Essence Cosmetics",
      category: "Beauty & Cosmetics",
      description: "Complete distribution channel setup and brand positioning strategy for premium cosmetics line",
      services: ["Distribution Setup", "Brand Positioning", "Market Penetration"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=200&fit=crop"
    },
    {
      title: "Mr. Munchido",
      category: "Food & Beverage",
      description: "End-to-end market penetration and retail channel development for snack food brand",
      services: ["Market Penetration", "Retail Channel Development", "Brand Building"],
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=200&fit=crop"
    },
    {
      title: "HPCL Partnership",
      category: "Audit Systems",
      description: "Strategic audit system implementation and process optimization",
      services: ["System Implementation", "Process Optimization", "Compliance Management"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=200&fit=crop"
    }
  ];

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

  const values = [
    {
      title: "Distribution Network & Zone-wise Expansion",
      description: "Comprehensive coverage across multiple zones with strategic distribution partnerships"
    },
    {
      title: "Marketing Strategy & Manpower Solutions",
      description: "Integrated approach combining strategic marketing with optimal manpower deployment"
    },
    {
      title: "Channel-wise Strategy",
      description: "Specialized strategies for GT, MTF, E-Commerce, and Corporate channels"
    },
    {
      title: "NPD & Market Research",
      description: "New Product Development support backed by comprehensive market research capabilities"
    },
    {
      title: "ROI-oriented Execution",
      description: "Data-driven execution models focused on maximizing return on investment"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nurturing the Seeds
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Over four decades of excellence in FMCG, Warehousing, Finance, Manpower, Export, and Distribution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                Partner with Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About FAVA Group</h2>
            <p className="text-xl text-gray-600">Four decades of excellence in business solutions and strategic partnerships</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
              <p className="text-lg text-gray-600 mb-6">
                FAVA Group is a growing enterprise with over four decades of experience in sectors like FMCG, Finance, Export, Warehousing, Distribution, Manpower, and Marketing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Our Vision</h4>
                    <p className="text-gray-600">To develop Fava Glocal as a leading solution provider to the FMCG space.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Our Mission</h4>
                    <p className="text-gray-600">Lending a hand to start-ups and emerging brands by providing END-TO-END business solutions under one roof.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=500&fit=crop" 
                alt="Modern business building" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Value Proposition</h3>
              <p className="text-lg text-gray-600">We deliver comprehensive business solutions through strategic partnerships and innovative approaches</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Digital Solutions Tailored For Your Success
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our end-to-end business development services help startups and emerging brands achieve sustainable growth through strategic partnerships and innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600">Strategic execution models designed for sustainable growth</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our Services?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">End-to-End Solutions</h4>
                    <p className="text-gray-600">Complete business solutions under one roof, eliminating the need for multiple vendors.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">40+ Years of Experience</h4>
                    <p className="text-gray-600">Proven track record with decades of industry expertise across multiple sectors.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">ROI-Focused Approach</h4>
                    <p className="text-gray-600">Data-driven strategies designed to maximize return on investment and business growth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=500&fit=crop" 
                alt="Business innovation" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Trusted Partnerships & Success Stories</h2>
            <p className="text-lg text-gray-600">We've helped numerous brands achieve their business objectives through our comprehensive solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyPartnerships.map((project, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-800">Services Provided:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">Ready to start your business journey? Let's connect and discuss your needs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
                    placeholder="Tell us about your business needs..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <p className="text-gray-600 mb-8">
                  We're here to help you grow your business. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">📧</span>
                      <span>Email</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">favaglocal@gmail.com</p>
                    <p className="text-gray-600">lotus.marketing@rediffmail.com</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">📞</span>
                      <span>Phone</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">+91 9223056246</p>
                    <p className="text-gray-600">+91 9930801016</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">📍</span>
                      <span>Locations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-gray-800">Mira Road Office</p>
                        <p className="text-gray-600">Strategic business operations center</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Bhiwandi Warehouse</p>
                        <p className="text-gray-600">Logistics and warehousing facility</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready To Embark On Your Digital Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's Get Started.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
