import React from "react";

function Layout({ title, children }) {
  return (
    <div className="p-6 bg-white text-[#1B365D] w-full">
      <div className="w-full px-8">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default Layout;