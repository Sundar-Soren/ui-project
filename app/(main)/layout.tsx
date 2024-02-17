import React from "react";
import { Sidebar } from "./_components/sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="md:ml-[22rem] bg-[#2A2A2A] text-white min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
