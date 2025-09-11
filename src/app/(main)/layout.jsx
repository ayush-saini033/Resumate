import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

const MainLayoutPage = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <div className={`antialiased text-white bg-black`}>
        {children}
      </div>
    </GoogleOAuthProvider>
  );
};

export default MainLayoutPage;
