import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'

const MainProvider = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <div>MainProvider</div>
    </GoogleOAuthProvider>
  );
}

export default MainProvider