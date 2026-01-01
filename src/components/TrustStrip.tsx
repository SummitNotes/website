import React from "react";
import { Shield, Star, Lock, Apple } from "lucide-react";

const TrustStrip: React.FC = () => {
  const items = [
    { icon: <Shield className="w-4 h-4" />, text: "100% Local Processing", color: "text-emerald-600" },
    { icon: <Star className="w-4 h-4 fill-current" />, text: "4.4 App Store Rating", color: "text-amber-500" },
    { icon: <Apple className="w-4 h-4" />, text: "Native macOS App", color: "text-gray-600" },
    { icon: <Lock className="w-4 h-4" />, text: "NDA-Compliant", color: "text-blue-600" },
  ];

  return (
    <div className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              <span className={item.color}>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
