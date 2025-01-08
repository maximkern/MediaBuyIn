import React from "react";
import { FileText, CheckCircle, BarChart2, Rocket, Mail, HelpCircle } from "lucide-react";

function RequirementsPartnership() {
  const requiredInformation = [
    "Company/Product/Service Name",
    "Contact Information",
    "Product or Service Details",
    "Customer Demographics",
    "Inventory & Manufacturing",
    "Competition Analysis",
    "Current Advertising",
    "Sales History",
    "Value Proposition"
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1B365D] to-[#2A4A7F] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Partnership Requirements</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Join our network of success. We're looking for promising companies ready to expand their market presence.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <FileText className="w-8 h-8 mb-4 text-[#1B365D]" />,
              title: "Submit Information",
              description: "Provide details about your product or service"
            },
            {
              icon: <CheckCircle className="w-8 h-8 mb-4 text-[#1B365D]" />,
              title: "Evaluation",
              description: "Receive our evaluation and acceptance letter"
            },
            {
              icon: <BarChart2 className="w-8 h-8 mb-4 text-[#1B365D]" />,
              title: "Media Plan",
              description: "Review and approve your custom media strategy"
            },
            {
              icon: <Rocket className="w-8 h-8 mb-4 text-[#1B365D]" />,
              title: "Launch",
              description: "Begin your media campaign"
            }
          ].map((step, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1B365D]">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Information Required Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#1B365D] mb-6">Information We'll Need</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {requiredInformation.map((info, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-[#008B8B] rounded-full mr-3"></div>
                <span className="text-gray-700">{info}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Requirements */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#1B365D] mb-6">Additional Requirements</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">Media Campaign Agreement:</span> We'll discuss and agree on campaign costs 
              and Media Buy In's investment percentage.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Product Samples:</span> If applicable, samples of your product will be 
              required for evaluation.
            </p>
          </div>
        </div>

        {/* Ready to Start Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1B365D] rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6">
              Take the first step towards expanding your market presence. Contact us to begin the partnership process.
            </p>
            <button className="flex items-center bg-white text-[#1B365D] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </button>
          </div>
          <div className="bg-[#008B8B] rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p className="mb-6">
              Not sure if your product or service qualifies? We're here to help you understand our partnership process.
            </p>
            <button className="flex items-center bg-white text-[#008B8B] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              <HelpCircle className="w-5 h-5 mr-2" />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequirementsPartnership;