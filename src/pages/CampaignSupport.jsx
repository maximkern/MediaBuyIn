import React from "react";
import { PenTool, FileText, Video, Clock, Briefcase, ChartBar } from "lucide-react";
import { Link } from "react-router-dom";

function CampaignSupport() {
  const services = [
    {
      icon: <PenTool className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "Custom Marketing Plans",
      description: "Tailored strategies aligned with your business goals.",
      features: [
        "Market Analysis",
        "Competitive Research",
        "Target Audience Profiling",
        "Budget Optimization",
        "Performance Metrics"
      ]
    },
    {
      icon: <FileText className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "Media Kit Preparation",
      description: "Professional media kits that showcase your value proposition.",
      features: [
        "Brand Guidelines",
        "Product Information",
        "Market Statistics",
        "Success Stories",
        "Distribution Strategy"
      ]
    },
    {
      icon: <Video className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "TV & Radio Production",
      description: "High-quality commercial production for broadcast media.",
      features: [
        "Script Writing",
        "Professional Filming",
        "Sound Design",
        "Post-Production",
        "Distribution"
      ]
    },
    {
      icon: <Clock className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "Infomercial Creation",
      description: "Compelling half-hour programs that showcase your product.",
      features: [
        "Story Development",
        "Testimonial Collection",
        "Demonstration Filming",
        "Call-to-Action Design",
        "Response Tracking"
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "Investor Packages",
      description: "Professional materials to attract potential investors.",
      features: [
        "Financial Projections",
        "Market Analysis",
        "Growth Strategy",
        "Risk Assessment",
        "Investment Terms"
      ]
    },
    {
      icon: <ChartBar className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "Performance Analytics",
      description: "Comprehensive campaign performance tracking and optimization.",
      features: [
        "Real-time Monitoring",
        "ROI Analysis",
        "Audience Insights",
        "Conversion Tracking",
        "Performance Reports"
      ]
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1B365D] to-[#2A4A7F] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Campaign Support</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive campaign support services to ensure your media initiatives achieve maximum impact.
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

        {/* Process Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#1B365D] mb-8 text-center">Our Campaign Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1B365D] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your goals and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1B365D] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">Developing targeted campaign plans</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1B365D] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Execution</h3>
              <p className="text-gray-600">Implementing across chosen channels</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1B365D] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600">Monitoring and improving performance</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#008B8B] rounded-xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Launch Your Campaign?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Let's create a winning campaign strategy that delivers results for your business.
          </p>
          <Link 
            to="/requirements-partnership"
            className="inline-flex items-center px-6 py-3 bg-white text-[#008B8B] rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CampaignSupport;