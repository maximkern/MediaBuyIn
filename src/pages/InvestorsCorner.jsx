import React, { useState } from "react";
import { 
  TrendingUp, 
  DollarSign, 
  BarChart2, 
  PieChart,
  Building,
  Globe,
  Search,
  Filter
} from "lucide-react";

function InvestorsCorner() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const investmentCategories = ['All', 'Health & Wellness', 'Technology', 'Consumer Goods', 'Services'];
  
  const opportunities = [
    {
      name: "EcoFresh Food Storage",
      category: "Consumer Goods",
      type: "Product Launch",
      investment: "$500K - $1M",
      timing: "Immediate",
      highlights: [
        "Patent-pending preservation technology",
        "Successful test market results",
        "Ready for national rollout",
        "Established retail partnerships"
      ]
    },
    {
      name: "Wellness Plus Program",
      category: "Health & Wellness",
      type: "Business Expansion",
      investment: "$2M - $3M",
      timing: "Q2 2025",
      highlights: [
        "Proven business model",
        "Strong customer retention",
        "Multiple revenue streams",
        "National expansion plan"
      ]
    },
    {
      name: "Smart Home Assistant",
      category: "Technology",
      type: "Product Development",
      investment: "$1.5M - $2M",
      timing: "Q3 2025",
      highlights: [
        "Advanced AI integration",
        "Market-ready prototype",
        "Pre-orders available",
        "Industry partnerships secured"
      ]
    },
    {
      name: "Professional Services Platform",
      category: "Services",
      type: "Market Expansion",
      investment: "$750K - $1.5M",
      timing: "Q2 2025",
      highlights: [
        "Established client base",
        "Proprietary booking system",
        "High customer satisfaction",
        "Ready for market expansion"
      ]
    }
  ];

  const filteredOpportunities = selectedCategory === 'All' 
    ? opportunities 
    : opportunities.filter(opp => opp.category === selectedCategory);

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* Dashboard Header */}
      <div className="bg-[#1B365D] text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Investor's Corner</h1>
              <p className="text-gray-300">A list of Products, Businesses, Services who wish to raise funds to promote their company</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm text-gray-300">Current Opportunities</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">$5M+</div>
                <div className="text-sm text-gray-300">Total Investment Needed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8 flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Search opportunities..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
            />
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            <Filter className="h-5 w-5 text-gray-600" />
            {investmentCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === category
                    ? 'bg-[#1B365D] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Investment Opportunities Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {filteredOpportunities.map((opportunity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1B365D] mb-1">{opportunity.name}</h3>
                    <span className="inline-block bg-[#E5E7EB] text-gray-600 px-2 py-1 rounded text-sm">
                      {opportunity.category}
                    </span>
                  </div>
                  <button className="bg-[#008B8B] text-white px-4 py-2 rounded-lg hover:bg-[#007A7A]">
                    Learn More
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Investment Needed</div>
                    <div className="font-semibold">{opportunity.investment}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Type</div>
                    <div className="font-semibold">{opportunity.type}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Timing</div>
                    <div className="font-semibold">{opportunity.timing}</div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm text-gray-500 mb-2">Highlights</div>
                  <ul className="space-y-1">
                    {opportunity.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <TrendingUp className="w-4 h-4 text-[#008B8B] mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-[#1B365D] to-[#2A4A7F] rounded-xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Have a Business Looking for Investment?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Submit your information to be featured in our Investor's Corner.
          </p>
          <button className="px-6 py-3 bg-white text-[#1B365D] rounded-lg hover:bg-gray-100 transition-colors">
            Submit Your Business
          </button>
        </div>
      </div>
    </div>
  );
}

export default InvestorsCorner;