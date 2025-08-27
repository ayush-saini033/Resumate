"use client";
import React, { useState } from "react";
import Sidebar from "./_components/sidebar";
import {usePathname} from "next/navigation"

const DashboardLayoutPage = ({ children }) => {
  const [activeTab, setActiveTab] = useState("");
  const path = usePathname();
  return (
    <div className="bg-black h-[100vh] overflow-y-auto">
      <div className={`${path.includes("/edit-resume") ? "hidden" : ""  }`}>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {children}
    </div>
  );
};

export default DashboardLayoutPage;
