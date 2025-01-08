import React from "react";
import { Globe, Wifi, Mic, Share2, Bot, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

function DigitalPresence() {
  const services = [
    {
      icon: <Globe className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "Custom Websites",
      description: "Professional, responsive websites tailored to your brand identity and business goals.",
      features: ["Mobile-First Design", "SEO Optimization", "Content Management", "Analytics Integration"]
    },
    {
      icon: <Wifi className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "Streaming Platforms",
      description: "Custom streaming solutions to reach your audience across all devices.",
      features: ["Multi-Platform Support", "Live Streaming", "Content Delivery", "Audience Analytics"]
    },
    {
      icon: <Mic className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "Voice-Activated Content",
      description: "Alexa and Google Assistant integration for seamless voice interaction.",
      features: ["Custom Skills", "Voice Commands", "Smart Device Integration", "Usage Analytics"]
    },
    {
      icon: <Share2 className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "SEO & Social Media",
      description: "Comprehensive digital marketing strategies to boost your online presence.",
      features: ["Keyword Optimization", "Content Strategy", "Social Media Management", "Performance Tracking"]
    },
    {
      icon: <Bot className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "AI-Driven Solutions",
      description: "Intelligent chatbots and virtual assistants for enhanced customer engagement.",
      features: ["24/7 Support", "Natural Language", "Multi-Channel", "Learning Capabilities"]
    },
    {
      icon: <UserCircle className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "Visual Bots",
      description: "Personalized avatar interfaces for unique brand interactions.",
      features: ["Custom Avatars", "Brand Voice", "Interactive Responses", "Engagement Metrics"]
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1B365D] to-[#2A4A7F] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Digital Presence Solutions</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Transform your digital footprint with our comprehensive suite of modern web technologies and platforms.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-[#1B365D]">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#008B8B] rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-[#008B8B] rounded-xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Enhance Your Digital Presence?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Let's discuss how our digital solutions can help your business thrive in the online space.
          </p>
          <Link 
            to="/requirements-partnership" 
            className="inline-flex items-center px-6 py-3 bg-white text-[#008B8B] rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-8 text-center">
            Benefits of Strong Digital Presence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-[#008B8B] mb-2">24/7</div>
              <p className="text-gray-600">Global Accessibility</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-[#008B8B] mb-2">300%</div>
              <p className="text-gray-600">Increased Engagement</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-[#008B8B] mb-2">50%+</div>
              <p className="text-gray-600">Cost Reduction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalPresence;