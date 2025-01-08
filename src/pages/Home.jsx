import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Tv, Radio, Newspaper, Globe, ChartBar, Users } from "lucide-react";

function Home() {
  const services = [
    {
      icon: <Tv className="w-8 h-8 mb-4 text-[#1B365D]" />,
      title: "TV Placement",
      description: "National, regional, and local television advertising opportunities."
    },
    {
      icon: <Radio className="w-8 h-8 mb-4 text-[#1B365D]" />,
      title: "Radio Broadcasting",
      description: "Strategic radio placement across satellite, sports, and talk shows."
    },
    {
      icon: <Newspaper className="w-8 h-8 mb-4 text-[#1B365D]" />,
      title: "Print Media",
      description: "Targeted advertising in newspapers and magazines."
    },
    {
      icon: <Globe className="w-8 h-8 mb-4 text-[#1B365D]" />,
      title: "Digital Presence",
      description: "Comprehensive digital solutions including websites and social media."
    },
    {
      icon: <ChartBar className="w-8 h-8 mb-4 text-[#1B365D]" />,
      title: "Campaign Support",
      description: "Full-service campaign management and strategy development."
    },
    {
      icon: <Users className="w-8 h-8 mb-4 text-[#1B365D]" />,
      title: "Partnership Growth",
      description: "Strategic partnerships to accelerate your market presence."
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1B365D] to-[#2A4A7F] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Market Presence
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              MEDIA BUY IN.COM specializes in creating powerful media partnerships 
              that expand your reach and accelerate growth through strategic exposure.
            </p>
            <Link 
              to="/requirements-partnership"
              className="inline-flex items-center px-6 py-3 bg-[#FF7F6B] text-white rounded-lg hover:bg-[#FF6B54] transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Services Grid */}
        <h2 className="text-3xl font-bold text-[#1B365D] mb-12 text-center">
          Comprehensive Media Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-[#1B365D]">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-[#008B8B] rounded-xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Discover Your Media Potential
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Submit your product information today to see if you qualify for our 
            strategic media support. Our team will evaluate your submission and 
            create a customized growth plan.
          </p>
          <Link 
            to="/requirements-partnership"
            className="inline-flex items-center px-6 py-3 bg-white text-[#008B8B] rounded-lg hover:bg-gray-100 transition-colors"
          >
            Submit Your Product
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-12 text-center">
            Why Choose Media Buy In
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#008B8B] mb-2">15+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#008B8B] mb-2">500+</div>
              <p className="text-gray-600">Successful Campaigns</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#008B8B] mb-2">100M+</div>
              <p className="text-gray-600">Audience Reach</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;