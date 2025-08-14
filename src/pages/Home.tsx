import { Button } from "@/components/ui/button";
import styles from "./Home.module.css";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceCard from "@/components/ui/ServiceCard";
import { Textarea } from "@/components/ui/textarea";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  

  // Scroll animation hooks for different sections
  const aboutAnimation = useScrollAnimation({ threshold: 0.2 });
  const visionAnimation = useScrollAnimation({ threshold: 0.2 });
  const servicesAnimation = useScrollAnimation({ threshold: 0.2 });
  const valueAnimation = useScrollAnimation({ threshold: 0.2 });
  const channelAnimation = useScrollAnimation({ threshold: 0.2 });
  const partnersAnimation = useScrollAnimation({ threshold: 0.2 });
  const teamAnimation = useScrollAnimation({ threshold: 0.2 });
  const contactAnimation = useScrollAnimation({ threshold: 0.2 });

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

  const teamMembers = [
    {
      name: "Mr. APS Ahluwalia",
      position: "Business Strategy & Operations",
      // description: "Leading strategic business operations with decades of industry experience in FMCG and distribution management.",
     photo: "/team.jpg"
    },
    {
      name: "Mr. Santosh Rane",
      position: "Operations Director",
      // description: "Expert in operational excellence and strategic planning, driving organizational growth and business development.",
      photo: "/team.jpg"
    },
    {
      name: "Ms. Priya Sharma",
      position: "Marketing Lead",
      // description: "Driving brand strategy and digital marketing initiatives for growth.",
      photo: "/team.jpg"
    },
    {
      name: "Mr. Rahul Verma",
      position: "Finance Manager",
      // description: "Managing financial operations and ensuring sustainable business growth.",
    photo: "/team.jpg"
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
      textColor: "text-white",
      icon: <span className="text-3xl">🏪</span>
    },
    {
      title: "MTF",
      subtitle: "Modern Trade Format",
      description: "Organized retail chains, supermarkets, and hypermarkets for premium reach",
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      textColor: "text-white",
      icon: <span className="text-3xl">🏬</span>
    },
    {
      title: "E-Commerce & Quick Commerce",
      subtitle: "Digital Platforms",
      description: "Online marketplaces and quick delivery platforms for modern consumers",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-white",
      icon: <span className="text-3xl">💻</span>
    },
    {
      title: "Food Service & Institutions",
      subtitle: "B2B Solutions",
      description: "Hotels, restaurants, cafes, and institutional buyers for bulk solutions",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      textColor: "text-white",
      icon: <span className="text-3xl">🍽️</span>
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
    <section 
      id="home" 
  className="relative flex flex-col lg:flex-row items-center justify-between min-h-[600px] bg-gradient-to-br from-[#5da0d5] via-[#84c23d] to-[#5da0d5] overflow-hidden p-8 lg:p-20 font-sans "
    >
      {/* Animated Bubbles Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {[...Array(18)].map((_, i) => {
          const size = 18 + Math.random() * 28; // 18px to 46px
          const color = i % 2 === 0 ? '#5da0d5' : '#84c23d';
          return (
            <span
              key={i}
              className="absolute rounded-full opacity-30 animate-bubble border border-white"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 95}%`,
                bottom: `-${Math.random() * 100}px`,
                background: color,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${5 + Math.random() * 6}s`,
              }}
            />
          );
        })}
      </div>

      {/* Left side: Text content and button */}
      <div className="relative z-10 text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
          Nurturing the Seeds<br />of Business Growth
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white max-w-xl mx-auto lg:mx-0">
          Over four decades of excellence in FMCG, Warehousing, Finance, Manpower, Export, and Distribution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button
            size="lg"
            className="bg-white text-[#5da0d5] font-bold px-8 py-4 rounded-2xl shadow-lg w-full sm:w-auto text-base hover:bg-blue-100 transition"
            onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}
          >
            Our Services
          </Button>
          <Button
            size="lg"
            className="bg-[#84c23d] hover:bg-green-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg w-full sm:w-auto text-base transition"
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
          >
            Partner with Us
          </Button>
        </div>
      </div>

      {/* Right side: Image and overlay elements */}
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
        {/* Large, blurry orb in the background */}
        <div className="absolute w-[500px] h-[500px] bg-[#5da0d5] rounded-full blur-3xl opacity-40 right-0 top-1/2 transform -translate-y-1/2" />

        {/* Main hero image */}
        {/* <img
          src="/team.jpg"
          alt="Fava Team"
          className="relative z-20 w-full max-w-md lg:max-w-lg object-cover rounded-3xl shadow-2xl border-4 border-white"
        /> */}

      </div>
      <style>{`
        @keyframes bubble {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          20% {
            opacity: 0.5;
          }
          80% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-700px) scale(1.2);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation: bubble linear infinite;
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float1 {
          animation: float1 3.5s ease-in-out infinite;
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        .animate-float2 {
          animation: float2 4.2s ease-in-out infinite;
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float3 {
          animation: float3 3.8s ease-in-out infinite;
        }
      `}</style>
    </section>

      {/* About Section */}
      <section 
        ref={aboutAnimation.ref as React.RefObject<HTMLElement>}
        id="about" 
        className={`py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 w-full relative overflow-hidden transition-all duration-700 ${
          aboutAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#5da0d5]/20 to-[#84c23d]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-[#84c23d]/20 to-[#5da0d5]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-tr from-blue-200/30 to-green-200/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-[#5da0d5] via-[#84c23d] to-[#5da0d5] bg-clip-text text-transparent drop-shadow-lg tracking-tight text-center w-full">
              ABOUT US
            </h2>
            <div className="h-2 w-32 bg-gradient-to-r from-[#5da0d5] via-[#84c23d] to-[#5da0d5] rounded-full mx-auto mb-6 shadow-lg"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our journey of excellence spanning over four decades
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="w-full flex flex-col items-center justify-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-full text-gray-800 text-lg md:text-xl leading-relaxed font-medium space-y-6 text-center lg:text-left px-2 md:px-8">
                <p>
                  <span className="font-bold">Fava Group</span> is a growing enterprise with over 40 years of multi-sector expertise across FMCG, Finance, Export, Warehousing, Distribution, Manpower, and Marketing. Guided by our core vision — <span className="italic">"Nurturing the Seeds"</span> — we are committed to fostering sustainable business growth through innovation, integrity, and excellence.
                </p>
                <p>
                  With deep-rooted expertise in the FMCG space and a proven track record, we have built one of the most extensive multi-brand distribution networks in India. Our operations span West, North, and South India, where our sales strategists and operational experts leverage regional and cultural insights to deliver impactful market penetration.
                </p>
                {/* ...removed BDaaS paragraph and bullet list as requested... */}
                <p>
                  By offering end-to-end business solutions under one roof, Fava Group empowers brands to enter, expand, and thrive in competitive markets — making us the trusted partner for sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - Enhanced with Animation */}
      <section 
        ref={visionAnimation.ref as React.RefObject<HTMLElement>}
        className={`relative py-20 bg-gradient-to-br from-[#f0f7ff] via-[#e3fcec] to-[#5da0d5] overflow-hidden transition-all duration-700 ${
          visionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-10 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-[#5da0d5] via-[#84c23d] to-[#5da0d5] bg-clip-text text-transparent drop-shadow-lg tracking-tight text-center w-full">Vision & Mission</h2>
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl items-stretch justify-center">
            {/* Mission Card */}
            <div className="flex-1 flex flex-col items-center">
              <div className="relative bg-white rounded-2xl shadow-xl border-t-4 border-[#5da0d5] px-6 pt-10 pb-6 flex flex-col items-center w-full h-full">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#5da0d5] flex items-center justify-center rounded-full shadow-lg">
                  {/* Mission Icon: Mountain with flag */}
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#5da0d5" opacity="0.12"/><path d="M10 26l6-10 4 7 3-5 5 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 16l2-4 2 4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 12V8l3 1.5-3 1.5z" fill="#fff"/></svg>
                </div>
                <div className="flex flex-col items-center mt-8">
                  <span className="text-lg font-bold text-[#5da0d5] mb-2">Mission</span>
                  <div className="text-gray-700 text-sm text-center mb-2 space-y-1 animate-fade-in">
                    <span className="block font-semibold text-[#5da0d5]">To establish a strong and growing presence across Indian markets by:</span>
                    <ul className="list-disc list-inside text-left mx-auto max-w-xs">
                      <li className="text-[#5da0d5] font-semibold">Building a robust, multi-channel distribution network</li>
                      <li className="text-[#5da0d5] font-semibold">Leveraging technology for deep data analysis and informed, scientific decision-making</li>
                      <li className="text-[#5da0d5] font-semibold">Cultivating a culture that ensures long-term retention and growth of our field force</li>
                      <li className="text-[#5da0d5] font-semibold">Driving innovation in distribution and business models to adapt to evolving market needs</li>
                    </ul>
                    <span className="block font-semibold text-[#5da0d5] mt-2">Our solutions are crafted to inculcate:</span>
                    <ul className="list-disc list-inside text-left mx-auto max-w-xs">
                      <li className="text-[#84c23d] font-semibold">Cost-efficient</li>
                      <li className="text-[#84c23d] font-semibold">ROI-focused</li>
                      <li className="text-[#84c23d] font-semibold">Agile, scalable, and sustainable</li>
                    </ul>
                    <span className="block italic text-[#5da0d5] font-bold mt-2">"Nurturing the Seeds of Growth."</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Vision Card */}
            <div className="flex-1 flex flex-col items-center">
              <div className="relative bg-white rounded-2xl shadow-xl border-t-4 border-[#84c23d] px-6 pt-10 pb-6 flex flex-col items-center w-full h-full">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#84c23d] flex items-center justify-center rounded-full shadow-lg">
                  {/* Vision Icon: Eye */}
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#84c23d" opacity="0.12"/><ellipse cx="18" cy="18" rx="10" ry="6" fill="#fff"/><ellipse cx="18" cy="18" rx="4" ry="4" fill="#84c23d"/><circle cx="18" cy="18" r="2" fill="#fff"/></svg>
                </div>
                <div className="flex flex-col items-center mt-8">
                  <span className="text-lg font-bold text-[#84c23d] mb-2">Vision</span>
                  <div className="text-gray-700 text-sm text-center mb-2 space-y-1 animate-fade-in">
                    <span className="block font-semibold text-[#5da0d5]">Our objective is to establish <span className="text-[#84c23d] font-bold">Fava Glocal</span> as a leading solutions provider for start-ups and emerging brands in the fast-moving consumer goods (FMCG) sector,</span>
                    <span className="block font-semibold text-[#5da0d5] animate-fade-in" style={{animationDelay: '0.1s'}}>develop sustainable distribution network across India, accompanied with highly skilled and dedicated sales force.</span>
                    <span className="block font-semibold text-[#5da0d5] animate-fade-in" style={{animationDelay: '0.2s'}}>Deployment of innovative digital marketing strategies and pursuing discontinuous growth strategies</span>
                    <span className="block font-semibold text-[#5da0d5] animate-fade-in" style={{animationDelay: '0.3s'}}>in the space of processed foods, branded commodities, and non-food categories.</span>
                  </div>
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Channel Wise Coverage Section - Enhanced */}
      <section 
        ref={channelAnimation.ref as React.RefObject<HTMLElement>}
        className={`relative py-20 bg-gradient-to-br from-[#f0f7ff] via-[#e0f7fa] to-[#e3fcec] overflow-hidden transition-all duration-700 ${
          channelAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Decorative Blobs */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#5da0d5] opacity-20 rounded-full blur-3xl z-0 animate-float2" />
        <div className="absolute -bottom-24 left-0 w-80 h-80 bg-[#84c23d] opacity-20 rounded-full blur-3xl z-0 animate-float1" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in bg-gradient-to-r from-[#5da0d5] via-[#84c23d] to-[#5da0d5] bg-clip-text text-transparent drop-shadow-lg">
              Channel Wise Coverage
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
              Comprehensive market penetration across all major distribution channels, tailored for your business growth.
            </p>
          </div>
          {/* Animated Channel Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {channelCoverage.map((channel, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl shadow-2xl border-0 p-8 flex flex-col items-center text-center transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-slide-in-right ${channel.color}`}
                style={{animationDelay: `${0.3 + 0.1 * index}s`}}
              >
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20 shadow-lg group-hover:scale-110 transition-transform duration-300 text-4xl">
                  {channel.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${channel.textColor} group-hover:text-yellow-200 transition-colors duration-300`}>{channel.title}</h3>
                <div className={`text-sm font-medium mb-2 ${channel.textColor} opacity-90`}>{channel.subtitle}</div>
                <p className={`${channel.textColor} opacity-95 leading-relaxed mb-4`}>{channel.description}</p>
                {/* Decorative floating icon */}
                <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#fff" fillOpacity="0.10"/></svg>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @keyframes slide-in-right {
              0% { opacity: 0; transform: translateX(80px); }
              100% { opacity: 1; transform: none; }
            }
            .animate-slide-in-right {
              animation: slide-in-right 0.8s cubic-bezier(0.4,0,0.2,1) both;
            }
          `}</style>
          {/* Coverage Stats - Enhanced */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Coverage Stats removed as requested */}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section 
        ref={servicesAnimation.ref as React.RefObject<HTMLElement>}
        id="services" 
        className={`relative py-20 bg-gradient-to-br from-[#e0f7fa] via-[#f0f7ff] to-[#e3fcec] overflow-hidden transition-all duration-700 ${
          servicesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Decorative Blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[cornflowerblue] opacity-20 rounded-full blur-3xl z-0 animate-float1" />
        <div className="absolute -bottom-32 right-0 w-96 h-96 bg-[#84c23d] opacity-20 rounded-full blur-3xl z-0 animate-float2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in bg-gradient-to-r from-[#5da0d5] via-[#84c23d] to-[#5da0d5] bg-clip-text text-transparent drop-shadow-lg">
              Comprehensive Digital Solutions<br className="hidden md:block" /> Tailored For Your Success
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
              Unlock your business potential with our innovative, end-to-end growth services. We empower startups and brands to thrive through strategy, technology, and partnership.
            </p>
          </div>
          {/* Animated Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-blue-200 border border-blue-100 p-8 flex flex-col items-center text-center transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#5da0d5] to-[#84c23d] shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl md:text-4xl text-white drop-shadow-lg">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-[cornflowerblue] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 text-base mb-4 min-h-[72px]">{service.description}</p>
                <div className="mt-auto">
                  <button className="mt-4 px-6 py-2 rounded-full bg-[cornflowerblue] hover:bg-blue-500 text-white font-semibold shadow-md transition-all duration-300 group-hover:scale-105">
                    Learn More
                  </button>
                </div>
                {/* Decorative floating icon */}
                <div className="absolute -top-6 -right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#5da0d5" fillOpacity="0.15"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse & Facilities Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#f0f7ff] via-[#e0f7fa] to-[#e3fcec] overflow-hidden duration-700">
        {/* Animated Blobs & Sparkles */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[cornflowerblue] opacity-20 rounded-full blur-3xl z-0 animate-float1" />
        <div className="absolute -bottom-24 right-0 w-80 h-80 bg-[#84c23d] opacity-20 rounded-full blur-3xl z-0 animate-float2" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-200 opacity-10 rounded-full blur-2xl z-0 animate-pulse-slow" style={{transform: 'translate(-50%, -50%)'}} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 animate-gradient-text bg-gradient-to-r from-[#5da0d5] via-[#84c23d] to-[#5da0d5] bg-clip-text text-transparent drop-shadow-lg tracking-tight">Our Warehouse & Facilities</h2>
            <p className="text-xl text-gray-700 font-semibold animate-fade-in" style={{animationDelay: '0.1s'}}>
              State-of-the-art facilities equipped for modern FMCG operations and business excellence
            </p>
          </div>

          {/* Animated Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {warehouseImages.map((image, index) => (
              <Card key={index} className="group h-full bg-white/90 rounded-3xl shadow-2xl border-2 border-blue-100 hover:shadow-blue-200 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in overflow-hidden relative" style={{animationDelay: `${0.1 * index}s`}}>
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-br from-[#5da0d5] to-[#84c23d] opacity-30 rounded-full blur-xl animate-float1" />
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-yellow-200 opacity-30 rounded-full blur-xl animate-float2" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardHeader className="flex flex-col items-center justify-center pt-6 pb-2 animate-fade-in">
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-[cornflowerblue] transition-colors duration-300 animate-gradient-text">{image.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center pb-6 animate-fade-in">
                  <CardDescription className="text-gray-600 text-center animate-fade-in">
                    {image.alt}
                  </CardDescription>
                </CardContent>
                {/* Animated Icon Overlay */}
                <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow">
                  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" fill="#5da0d5" fillOpacity="0.10"/></svg>
                </div>
              </Card>
            ))}
          </div>

          {/* Facility Features - Animated */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="text-4xl font-extrabold text-[#5da0d5] mb-2 drop-shadow animate-bounce-slow">15,000 sq ft</div>
              <div className="text-gray-700 font-medium">Warehouse Space</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.9s'}}>
              <div className="text-4xl font-extrabold text-[#5da0d5] mb-2 drop-shadow animate-bounce-slow">Climate</div>
              <div className="text-gray-700 font-medium">Controlled Storage</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '1.0s'}}>
              <div className="text-4xl font-extrabold text-[#5da0d5] mb-2 drop-shadow animate-bounce-slow">24/7</div>
              <div className="text-gray-700 font-medium">Security & Monitoring</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '1.1s'}}>
              <div className="text-4xl font-extrabold text-[#5da0d5] mb-2 drop-shadow animate-bounce-slow">Strategic</div>
              <div className="text-gray-700 font-medium">Location Access</div>
            </div>
          </div>
        </div>
        {/* Custom Animations for Warehouse Section */}
        <style>{`
          @keyframes gradient-text {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.2); }
          }
          .animate-gradient-text {
            animation: gradient-text 3s ease-in-out infinite;
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2.2s infinite;
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
          }
        `}</style>
      </section>

      {/* Business Associates Section */}
      <section 
        ref={partnersAnimation.ref as React.RefObject<HTMLElement>}
        id="business-associates" 
        className={`py-16 bg-white transition-all duration-700 ${
          partnersAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#5da0d5] via-[#84c23d] to-[#5da0d5] bg-clip-text text-transparent drop-shadow-lg">Our Business Associates</h2>
            <p className="text-lg text-gray-700 font-semibold">
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
      <section id="approach" className="py-16 bg-gray-50 duration-700">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-2 animate-gradient-text bg-gradient-to-r from-[#5da0d5] via-[#84c23d] to-[#5da0d5] bg-clip-text text-transparent drop-shadow-lg">Our Approach</h2>
            <p className="text-lg text-[#27b18a] font-semibold">Strategic execution models designed for sustainable growth</p>
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Card with Steps (No Animation) */}
            <div className="relative">
              <div className="bg-white/90 rounded-3xl shadow-2xl border-2 border-blue-100 p-10 flex flex-col gap-8 relative overflow-hidden">
                {/* Decorative Blobs (static, no animation) */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[cornflowerblue] opacity-20 rounded-full blur-2xl z-0" />
                <div className="absolute -bottom-10 right-0 w-32 h-32 bg-[#84c23d] opacity-20 rounded-full blur-2xl z-0" />
                <h3 className="text-3xl font-bold text-gray-800 mb-6 z-10">Why Choose Our Services?</h3>
                <div className="space-y-8 z-10">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#5da0d5] to-[#84c23d] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <span className="text-white text-2xl">🏆</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">End-to-End Solutions</h4>
                      <p className="text-gray-600">Complete business solutions under one roof, eliminating the need for multiple vendors.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#5da0d5] to-[#84c23d] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <span className="text-white text-2xl">🎓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">40+ Years of Experience</h4>
                      <p className="text-gray-600">Proven track record with decades of industry expertise across multiple sectors.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#5da0d5] to-[#84c23d] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <span className="text-white text-2xl">📈</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">ROI-Focused Approach</h4>
                      <p className="text-gray-600">Data-driven strategies designed to maximize return on investment and business growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Animated Image Card */}
            <div className="relative animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center justify-center w-full h-full min-h-[420px]">
                <div className="w-full max-w-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Digital Marketing */}
                    <div className={`relative p-6 rounded-2xl bg-gradient-to-br from-[#5da0d5] to-[#84c23d] text-white shadow-xl flex flex-col items-start transition-all duration-700 ${aboutAnimation.isVisible ? 'marketing-card-animate' : 'opacity-0 translate-y-8'}`} style={{animationDelay: '0.1s'}}>
                      <div className="mb-4">{/* PointerIcon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m20 18-6-6h-3.8l-7-7" /><path d="M14.5 14.5 10 19l-7-7" /><path d="M19 19-3-3" /></svg>
                      </div>
                      <div className="font-bold text-lg mb-2">DIGITAL MARKETING</div>
                      <ul className="text-sm list-disc pl-5 space-y-1">
                        <li>Online media. Social Media / Palm top devices</li>
                        <li>Creating Festive & Event</li>
                      </ul>
                    </div>
                    {/* Promotion */}
                    <div className={`relative p-6 rounded-2xl bg-gradient-to-br from-[#5da0d5] to-[#84c23d] text-white shadow-xl flex flex-col items-start transition-all duration-700 ${aboutAnimation.isVisible ? 'marketing-card-animate' : 'opacity-0 translate-y-8'}`} style={{animationDelay: '0.2s'}}>
                      <div className="mb-4">{/* MegaphoneIcon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11h3.5a2 2 0 0 1 0 4H3" /><path d="m14 12-3.3-3.3A2 2 0 0 1 8 10v4c0 .87.5 1.63 1.3 2.07L14 12Z" /><path d="M19 12h2" /><path d="M16 3.5c1.47 2.05 2 4.67 2 6.5s-1.47 4.45-2 6.5" /></svg>
                      </div>
                      <div className="font-bold text-lg mb-2">PROMOTION</div>
                      <ul className="text-sm list-disc pl-5 space-y-1">
                        <li>Mass Media such as TV</li>
                        <li>Outdoor, Print</li>
                        <li>BTL Promotional Activities</li>
                      </ul>
                    </div>
                    {/* Influencing */}
                    <div className={`relative p-6 rounded-2xl bg-gradient-to-br from-[#5da0d5] to-[#84c23d] text-white shadow-xl flex flex-col items-start transition-all duration-700 ${aboutAnimation.isVisible ? 'marketing-card-animate' : 'opacity-0 translate-y-8'}`} style={{animationDelay: '0.3s'}}>
                      <div className="mb-4">{/* MegaphoneIcon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11h3.5a2 2 0 0 1 0 4H3" /><path d="m14 12-3.3-3.3A2 2 0 0 1 8 10v4c0 .87.5 1.63 1.3 2.07L14 12Z" /><path d="M19 12h2" /><path d="M16 3.5c1.47 2.05 2 4.67 2 6.5s-1.47 4.45-2 6.5" /></svg>
                      </div>
                      <div className="font-bold text-lg mb-2">INFLUENCING</div>
                      <ul className="text-sm list-disc pl-5 space-y-1">
                        <li>Effective planning with influencers & Approach to all relevant channels</li>
                      </ul>
                    </div>
                    {/* PR Activities */}
                    <div className={`relative p-6 rounded-2xl bg-gradient-to-br from-[#5da0d5] to-[#84c23d] text-white shadow-xl flex flex-col items-start transition-all duration-700 ${aboutAnimation.isVisible ? 'marketing-card-animate' : 'opacity-0 translate-y-8'}`} style={{animationDelay: '0.4s'}}>
                      <div className="mb-4">{/* DocumentIcon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M8 12h8" /><path d="M8 16h8" /><path d="M8 20h5" /></svg>
                      </div>
                      <div className="font-bold text-lg mb-2">PR ACTIVITIES</div>
                      <ul className="text-sm list-disc pl-5 space-y-1">
                        <li>Blogs, Print Media, Magazines, Medical Journals</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Custom Animation for Marketing Cards */}
                <style>{`
                  @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(32px); }
                    100% { opacity: 1; transform: none; }
                  }
                  .marketing-card-animate {
                    opacity: 1 !important;
                    transform: none !important;
                    animation: fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) both;
                  }
                `}</style>
              </div>
            </div>
          </div>
          {/* Custom Animations for Approach Section */}
          <style>{`
            @keyframes gradient-text {
              0%, 100% { filter: brightness(1); }
              50% { filter: brightness(1.2); }
            }
            .animate-gradient-text {
              animation: gradient-text 3s ease-in-out infinite;
            }
            @keyframes bounce-slow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-12px); }
            }
            .animate-bounce-slow {
              animation: bounce-slow 2.2s infinite;
            }
            @keyframes scale-in {
              0% { transform: scale(0.95); opacity: 0; }
              100% { transform: scale(1); opacity: 1; }
            }
            .animate-scale-in {
              animation: scale-in 0.7s cubic-bezier(0.4,0,0.2,1) both;
            }
          `}</style>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamAnimation.ref as React.RefObject<HTMLElement>}
        id="team" 
  className={`py-16 bg-white transition-all duration-700 ${
          teamAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="container mx-auto px-4 relative z-10">
          {/* Decorative Blobs */}
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-[cornflowerblue] opacity-20 rounded-full blur-2xl animate-float1 z-0" />
          <div className="absolute -bottom-16 right-0 w-40 h-40 bg-[#84c23d] opacity-20 rounded-full blur-2xl animate-float2 z-0" />
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 animate-gradient-text bg-gradient-to-r from-[#5da0d5] via-[#84c23d] to-[#5da0d5] bg-clip-text text-transparent drop-shadow-lg">Our Core Leadership</h2>
            <p className="text-xl text-teal-600 font-semibold animate-fade-in" style={{animationDelay: '0.1s'}}>
              Driving strategy, operations, and business growth with expertise
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {teamMembers.map((member, index) => (
                <Card key={index} className="group h-full bg-white/90 rounded-3xl shadow-2xl border-2 border-blue-100 hover:shadow-blue-200 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in overflow-hidden relative flex flex-col" style={{animationDelay: `${0.2 * index}s`}}>
                  <div className="relative flex flex-col items-center pt-8 pb-4 px-4">
                    {/* Floating Decorative Icon */}
                    <div className="absolute -top-6 -right-6 opacity-70 animate-spin-slow pointer-events-none">
                      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="22" stroke="#5da0d5" strokeOpacity="0.15" strokeWidth="4"/></svg>
                    </div>
                    <div className="w-full h-48 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500 rounded-2xl overflow-hidden" style={{background: 'repeating-linear-gradient(135deg, #e0f7fa 0px, #e0f7fa 8px, #f0f7ff 8px, #f0f7ff 16px)'}}>
                      {member.photo ? (
                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover rounded-2xl" />
                      ) : (
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="32" cy="32" r="28" fill="#84c23d" fillOpacity="0.12" />
                          <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle" fontSize="28" fontFamily="Segoe UI, Arial, sans-serif" fill="#5da0d5">👤</text>
                        </svg>
                      )}
                    </div>
                    <CardHeader className="pb-2 text-center">
                      <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-[cornflowerblue] transition-colors duration-300 animate-gradient-text">{member.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-semibold text-base animate-fade-in" style={{animationDelay: '0.1s'}}>
                        {member.position}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-2 pb-2">
                      {/* Description removed as requested */}
                    </CardContent>
                  </div>
                  {/* Animated Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5da0d5]/10 via-[#84c23d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                </Card>
              ))}
            </div>
          </div>
          {/* Custom Animations for Team Section */}
          <style>{`
            @keyframes gradient-text {
              0%, 100% { filter: brightness(1); }
              50% { filter: brightness(1.2); }
            }
            .animate-gradient-text {
              animation: gradient-text 3s ease-in-out infinite;
            }
            @keyframes spin-slow {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .animate-spin-slow {
              animation: spin-slow 12s linear infinite;
            }
            @keyframes fade-in {
              0% { opacity: 0; transform: translateY(16px); }
              100% { opacity: 1; transform: none; }
            }
            .animate-fade-in {
              animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
            }
            @keyframes float1 {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-12px); }
            }
            .animate-float1 {
              animation: float1 3.5s ease-in-out infinite;
            }
            @keyframes float2 {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(12px); }
            }
            .animate-float2 {
              animation: float2 4.2s ease-in-out infinite;
            }
          `}</style>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={contactAnimation.ref as React.RefObject<HTMLElement>}
        id="contact" 
        className={`py-16 bg-gray-50 transition-all duration-700 ${
          contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#5da0d5] via-[#84c23d] to-[#5da0d5] bg-clip-text text-transparent drop-shadow-lg">Contact Us</h2>
            <p className="text-lg text-gray-700 font-semibold">
              Ready to start your business journey? Let's connect and discuss your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/90 rounded-3xl shadow-2xl border-2 border-blue-100 p-10">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px] bg-white/80"
                    placeholder="Tell us about your business needs..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-[cornflowerblue] hover:bg-blue-500">
                  Send Message
                </Button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="space-y-8 bg-gradient-to-br from-[#e0f7fa] via-[#f0f7ff] to-[#e3fcec] rounded-3xl shadow-2xl border-2 border-blue-100 p-10 flex flex-col justify-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <p className="text-gray-600 mb-8">
                  We're here to help you grow your business. Reach out to us through any of the following channels.
                </p>
              </div>
              <div className="space-y-6">
                <Card className="bg-white/80">
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
                <Card className="bg-white/80">
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
                <Card className="bg-white/80">
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

      {/* CTA Section className="relative flex items-center justify-center min-h-[400px] bg-gradient-to-b from-[#84c23d] to-[#5da0d5] overflow-hidden"> */}
      <section className="py-16 bg-gradient-to-r from-[#5da0d5] to-[#84c23d] overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-6 animate-fade-in text-white"
          >
            Ready To Embark On Your Digital Journey?
          </h2>
          <p className="text-xl mb-8 text-white animate-fade-in" style={{animationDelay: '0.1s'}}>
            Let's Get Started.
          </p>
          <Button size="lg" className="bg-[cornflowerblue] hover:bg-blue-500 px-8 transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}} onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
