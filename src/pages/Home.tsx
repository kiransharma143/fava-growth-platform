import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceCard from "@/components/ui/ServiceCard";
import { Textarea } from "@/components/ui/textarea";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Star } from "lucide-react";
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
      image: "/lovable-uploads/d69cc0d2-fe5d-41e3-b850-240b87e50459.png"
    },
    {
      name: "Mr. Santosh Rane",
      position: "Operations Director",
      description: "Expert in operational excellence and strategic planning, driving organizational growth and business development.",
      image: "/lovable-uploads/05549fb8-c37d-40ac-ac04-7ffea9117e85.png"
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

  const businessAssociates = [
    {
      name: "Ming's Magic",
      logo: "/lovable-uploads/03bd0a0f-9291-42cf-be2f-63737d95df20.png",
      description: "Adding CHI to Your Chinese Cuisine"
    },
    {
      name: "Food Philosophy",
      logo: "/lovable-uploads/7d4feae1-c467-4275-a37b-d2e8dfd1a54a.png",
      description: "Innovative Food Solutions"
    },
    {
      name: "UMA Global Foods",
      logo: "/lovable-uploads/990d9879-3687-4b37-b253-87b31382b8cb.png",
      description: "Premium Food Products"
    },
    {
      name: "K17",
      logo: "/lovable-uploads/9b4284ba-1b33-429b-be90-51f007a4b5cb.png",
      description: "The Master of Taste"
    },
    {
      name: "Royal King",
      logo: "/lovable-uploads/856d6cc7-8575-4050-9dfd-7da51dd17996.png",
      description: "Extra Long Grain Sella Basmati Rice"
    },
    {
      name: "Jasmer",
      logo: "/lovable-uploads/f666123c-da36-4f37-9aa4-95595164ab18.png",
      description: "Evolving Responsibly"
    },
    {
      name: "Bonn & Americana",
      logo: "/lovable-uploads/849c781d-195e-4d36-8bbe-6ddfd59bacf1.png",
      description: "Trusted Food Brands"
    },
    {
      name: "Annapurna & Captain Cook",
      logo: "/lovable-uploads/d7014acd-a945-4269-aaa7-d5728fb5e4f5.png",
      description: "Trusted Pantry Partner & Culinary Adventurer"
    },
    {
      name: "Mr. Munchido",
      logo: "/lovable-uploads/0d48fe80-84da-407a-96a9-702d48e245e5.png",
      description: "Munching all around"
    },
    {
      name: "MASALA Products",
      logo: "/lovable-uploads/3f85f986-a0b2-4726-b81f-8da6e067f4d9.png",
      description: "Premium Spice Collection"
    }
  ];

  const channelCoverage = [
    {
      title: "GT",
      subtitle: "General Trade",
      description: "Traditional retail channels with extensive reach across urban and rural markets",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-white"
    },
    {
      title: "MTF",
      subtitle: "Modern Trade Format",
      description: "Organized retail chains, supermarkets, and hypermarkets for premium reach",
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      textColor: "text-white"
    },
    {
      title: "E-Commerce & Quick Commerce",
      subtitle: "Digital Platforms",
      description: "Online marketplaces and quick delivery platforms for modern consumers",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-white"
    },
    {
      title: "Food Service & Institutions",
      subtitle: "B2B Solutions",
      description: "Hotels, restaurants, cafes, and institutional buyers for bulk solutions",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      textColor: "text-white"
    }
  ];

  const warehouseImages = [
    {
      src: "/lovable-uploads/cafabd12-e589-441a-aa7c-7e4349f95840.png",
      alt: "Modern office workspace with team collaboration",
      title: "Collaborative Workspace"
    },
    {
      src: "/lovable-uploads/7f0c1b30-a01b-4130-be1d-b66b1b5d62aa.png",
      alt: "Warehouse product shelving with FMCG products",
      title: "Product Storage & Organization"
    },
    {
      src: "/lovable-uploads/9338f6ca-7da6-4355-a25c-06d2a6188447.png",
      alt: "Organized warehouse inventory with food products",
      title: "Inventory Management"
    },
    {
      src: "/lovable-uploads/097fad37-7bb1-4a0f-868b-a8f1cbaca545.png",
      alt: "Professional meeting room setup",
      title: "Business Meeting Facilities"
    },
    {
      src: "/lovable-uploads/49494ae4-1768-4a86-8b8d-64d918f432f9.png",
      alt: "Executive office with product displays",
      title: "Executive Operations Center"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Nurturing the Seeds
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Over four decades of excellence in FMCG, Warehousing, Finance, Manpower, Export, and Distribution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 transform hover:scale-105 transition-all duration-300" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 transform hover:scale-105 transition-all duration-300" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">ABOUT US</h2>
            <p className="text-xl text-teal-600 font-semibold animate-fade-in" style={{animationDelay: '0.1s'}}>GET TO KNOW US BETTER</p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="space-y-6">
                  <div className="transform hover:translate-x-2 transition-transform duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">◊</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-teal-600">Fava Group</span> is a growing enterprise that has <span className="font-semibold">comprehensive experience more than 4 decade</span> to Sectors such as <span className="text-teal-600 font-medium">FMCG, Finance, Export, Warehousing, Distribution, Manpower and Marketing</span> underscoring its depth of knowledge and proficiency and envisaging the vision of <span className="font-semibold">"Nurturing the Seeds"</span>.
                      </p>
                    </div>
                  </div>

                  <div className="transform hover:translate-x-2 transition-transform duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">◊</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Fava's innovative methodology of <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">"Business Development as a Service"</span> solution effectively addresses the complexities of <span className="font-semibold">sales and revenue generation</span> along with other major market challenges faced by start-ups, <span className="font-semibold">geographical expansions, scaling the business</span> in a distinctive manner.
                      </p>
                    </div>
                  </div>

                  <div className="transform hover:translate-x-2 transition-transform duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">◊</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Fava's team of <span className="font-semibold">sales strategists and operational experts</span> located across West- North & South Zones of India possess a deep understanding geographies and cultures with and are unwaveringly dedicated to fostering your business growth.
                      </p>
                    </div>
                  </div>

                  <div className="transform hover:translate-x-2 transition-transform duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">◊</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Fava group offers to <span className="font-semibold">develops most extensive and comprehensive distribution network for FMCG businesses</span>. Our multi-brand organizational structure is highly relevant and attractive to channel partners.
                      </p>
                    </div>
                  </div>

                  <div className="transform hover:translate-x-2 transition-transform duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">◊</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        We provide our clients with India's <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-medium">"Plug-N-Play"</span> Long term <span className="font-semibold">sustainable infrastructure as END to END Business Solutions under One Roof</span> with regard to <span className="font-semibold">DB network, Team, SCM Business analysis with effective Dash Boards</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
                <img 
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=500&fit=crop" 
                  alt="Modern business building" 
                  className="w-full h-96 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">Vision & Mission</h2>
            <p className="text-lg text-gray-600 animate-fade-in" style={{animationDelay: '0.1s'}}>
              "Nurturing the Seeds"
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Box */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl shadow-xl animate-fade-in transform hover:scale-105 transition-all duration-500" style={{animationDelay: '0.2s'}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold">VISION</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-lg font-medium leading-relaxed">
                    "To Develop Fava Glocal as leading Solution Providing Organization to the FMCG Space largely Process food, commodities & non-food sectors"
                  </p>
                  <div className="bg-white bg-opacity-15 rounded-lg p-4">
                    <p className="text-sm leading-relaxed italic">
                      "Lending a hand to Start ups and Emerging brands a delightful experience by providing END to END solution under one roof towards Key business aspects such as Channel wise Presence, Distribution network, sustainable revenues, marketing/ branding, SCM & most important Skillful field force"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Box */}
            <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-2xl shadow-xl animate-fade-in transform hover:scale-105 transition-all duration-500" style={{animationDelay: '0.4s'}}>
              <div className="absolute top-0 left-0 w-28 h-28 bg-white bg-opacity-10 rounded-full -translate-y-14 -translate-x-14"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full translate-y-10 translate-x-10"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold">MISSION</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-lg font-medium mb-4">Achieved through</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <span className="text-yellow-300 mt-1">•</span>
                      <p>Providing hassle free operation, Channel wise strong Presence data analysis</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-yellow-300 mt-1">•</span>
                      <p>Actionable MIS, Sustainable network, Skillful Field force, Innovative distribution</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-yellow-300 mt-1">•</span>
                      <p>Models and scaling the business within time frame across Indian Markets</p>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-15 rounded-lg p-4 mt-6">
                    <p className="font-medium text-sm mb-2">By offering: <span className="text-yellow-200">Cost Efficient, ROI Efficient, Scalable Efficient with agility</span></p>
                    <p className="font-medium text-sm">In a: <span className="text-yellow-200">Knowledge-driven, entrepreneurial & fun work environment</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in">Our Value Proposition</h3>
            <p className="text-lg text-gray-600 animate-fade-in" style={{animationDelay: '0.1s'}}>We deliver comprehensive business solutions through strategic partnerships and innovative approaches</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
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
      </section>

      {/* Channel Wise Coverage Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">Channel Wise Coverage</h2>
            <p className="text-lg text-gray-600 animate-fade-in" style={{animationDelay: '0.1s'}}>
              Comprehensive market penetration across all major distribution channels
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Channel Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {channelCoverage.map((channel, index) => (
                <Card key={index} className={`h-full ${channel.color} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in overflow-hidden`} style={{animationDelay: `${0.1 * index}s`}}>
                  <CardHeader className="pb-4">
                    <CardTitle className={`text-2xl font-bold ${channel.textColor} mb-2`}>
                      {channel.title}
                    </CardTitle>
                    <CardDescription className={`text-sm font-medium ${channel.textColor} opacity-90`}>
                      {channel.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className={`${channel.textColor} opacity-95 leading-relaxed`}>
                      {channel.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coverage Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
                <div className="text-gray-600">GT Outlets</div>
              </div>
              <div className="text-center animate-fade-in" style={{animationDelay: '0.7s'}}>
                <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
                <div className="text-gray-600">Modern Trade Stores</div>
              </div>
              <div className="text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
                <div className="text-3xl font-bold text-gray-800 mb-2">10+</div>
                <div className="text-gray-600">E-commerce Platforms</div>
              </div>
              <div className="text-center animate-fade-in" style={{animationDelay: '0.9s'}}>
                <div className="text-3xl font-bold text-gray-800 mb-2">100+</div>
                <div className="text-gray-600">Institutional Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
              Comprehensive Digital Solutions Tailored For Your Success
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
              Our end-to-end business development services help startups and emerging brands achieve sustainable growth through strategic partnerships and innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse & Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">Our Warehouse & Facilities</h2>
            <p className="text-lg text-gray-600 animate-fade-in" style={{animationDelay: '0.1s'}}>
              State-of-the-art facilities equipped for modern FMCG operations and business excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {warehouseImages.map((image, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{image.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {image.alt}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Facility Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="text-3xl font-bold text-gray-800 mb-2">15,000 sq ft</div>
              <div className="text-gray-600">Warehouse Space</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.9s'}}>
              <div className="text-3xl font-bold text-gray-800 mb-2">Climate</div>
              <div className="text-gray-600">Controlled Storage</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '1.0s'}}>
              <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
              <div className="text-gray-600">Security & Monitoring</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '1.1s'}}>
              <div className="text-3xl font-bold text-gray-800 mb-2">Strategic</div>
              <div className="text-gray-600">Location Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Associates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">Our Business Associates</h2>
            <p className="text-lg text-gray-600 animate-fade-in" style={{animationDelay: '0.1s'}}>
              Proud partners working together to deliver excellence in the FMCG industry
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {businessAssociates.map((associate, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border-0 shadow-md" style={{animationDelay: `${0.1 * index}s`}}>
                      <CardContent className="p-6 text-center">
                        <div className="h-32 flex items-center justify-center mb-4 bg-gray-50 rounded-lg overflow-hidden">
                          <img 
                            src={associate.logo} 
                            alt={associate.name}
                            className="max-h-28 max-w-full object-contain hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2">{associate.name}</h3>
                        <p className="text-sm text-gray-600">{associate.description}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">Our Approach</h2>
            <p className="text-lg text-gray-600 animate-fade-in" style={{animationDelay: '0.1s'}}>Strategic execution models designed for sustainable growth</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our Services?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">End-to-End Solutions</h4>
                    <p className="text-gray-600">Complete business solutions under one roof, eliminating the need for multiple vendors.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">40+ Years of Experience</h4>
                    <p className="text-gray-600">Proven track record with decades of industry expertise across multiple sectors.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300">
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
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=500&fit=crop" 
                alt="Business innovation" 
                className="w-full h-96 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">Trusted Partnerships & Success Stories</h2>
            <p className="text-lg text-gray-600 animate-fade-in" style={{animationDelay: '0.1s'}}>We've helped numerous brands achieve their business objectives through our comprehensive solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyPartnerships.map((project, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
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
      <section id="team" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
              Meet the experienced professionals who lead our organization with vision, expertise, and dedication
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="h-full hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 text-center animate-fade-in bg-white overflow-hidden group" style={{animationDelay: `${0.2 * index}s`}}>
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 overflow-hidden bg-gray-100">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                        style={{ objectPosition: 'center 20%' }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{member.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-semibold">
                      {member.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
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
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Ready To Embark On Your Digital Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100 animate-fade-in" style={{animationDelay: '0.1s'}}>
            Let's Get Started.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-8 transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}} onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
