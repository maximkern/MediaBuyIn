import React from "react";
import { Tv, Radio, Newspaper, MonitorPlay, MapPin, Trophy } from "lucide-react";

function MediaInventories() {
  const inventories = [
    {
      icon: <Tv className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "Television Placement",
      options: [
        "National, Regional, Local TV placement",
        "Network and Syndication TV Placement",
        "Paramount, Hallmark Movies, CMT, Cooking, Discovery, OWN etc.",
        "Reach High Income audience CNBC, Bloomberg, Fox Business etc."
      ]
    },
    {
      icon: <Radio className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "Radio Placement",
      options: [
        "National and Regional Radio placement",
        "Satellite Radio",
        "National Sports Radio, News, Sports, Talk etc."
      ]
    },
    {
      icon: <Newspaper className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "Print Media",
      options: [
        "Print (Newspaper and Magazines)",
        "Brand your business, product or service in editorial format"
      ]
    },
    {
      icon: <MonitorPlay className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "Digital & Social",
      options: [
        "Internet and Social Media",
        "Streaming Advertising Video Advertising",
        "Reach Health Conscience Consumers",
        "Reach 50+ Audience"
      ]
    },
    {
      icon: <MapPin className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "Out of Home",
      options: [
        "Out of Home advertising (Billboards, Buses, Bus Benches)",
        "MALLS",
        "Taxi's, Mall and many more"
      ]
    },
    {
      icon: <Trophy className="w-12 h-12 mb-4 text-[#1B365D]" />,
      title: "Sports",
      options: [
        "Sports NHL, NASCAR, MLB and others"
      ]
    }
  ];

  return (
    <div className="w-full bg-white">
      <div className="bg-gradient-to-r from-[#1B365D] to-[#2A4A7F] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Media Inventories</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Access our extensive media networks and platforms (Available on availability basis)
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {inventories.map((inventory, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                {inventory.icon}
                <h3 className="text-xl font-semibold mb-4 text-[#1B365D]">{inventory.title}</h3>
              </div>
              <ul className="space-y-2">
                {inventory.options.map((option, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#008B8B] rounded-full mr-2"></span>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MediaInventories;