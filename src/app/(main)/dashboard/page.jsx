import Script from "next/script";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://resumate-henna.vercel.app"),
  title: "Dashboard | Resumate",
  description:
    "Access your personal Resumate dashboard. Create, edit, and manage your resumes, billing, favorites, settings, and more — all in one place.",

  keywords: [
    "resume dashboard",
    "manage resumes",
    "edit resume online",
    "resume account",
    "ATS resume management",
    "professional resume builder",
  ],

  alternates: {
    canonical: "https://resumate-henna.vercel.app",
  },
};


const DashboardPage = () => {
  return (
    <>
      {" "}
      <Script id="ld-dashboard" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "User Dashboard – Resumate",
          url: "https://resumate-henna.vercel.app/dashboard",
          description:
            "Manage resumes, edit templates, view billing, and more in your personal dashboard.",
        })}
      </Script>
      <div>DashboardPage</div>
    </>
  );
};

export default DashboardPage;
