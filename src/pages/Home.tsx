
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceCard from "@/components/ui/ServiceCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nurturing the Seeds
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Over four decades of excellence in FMCG, Warehousing, Finance, Manpower, Export, and Distribution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8">
                  Partner with Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Growing Enterprise with Proven Excellence
              </h2>
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
            <div className="bg-gray-100 rounded-lg p-8">
              <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop" alt="Modern warehouse facility" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Digital Solutions Tailored For Your Success
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our end-to-end business development services help startups and emerging brands achieve sustainable growth through strategic partnerships and innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Partnerships */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Trusted Partnerships & Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              We've helped numerous brands achieve their business objectives through our comprehensive solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Sea Buck Essence Cosmetics</CardTitle>
                <CardDescription>Beauty & Cosmetics Industry</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Complete distribution channel setup and brand positioning strategy</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mr. Munchido</CardTitle>
                <CardDescription>Food & Beverage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">End-to-end market penetration and retail channel development</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>HPCL Partnership</CardTitle>
                <CardDescription>Audit Systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Strategic audit system implementation and process optimization</p>
              </CardContent>
            </Card>
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
          <Link to="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-8">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
