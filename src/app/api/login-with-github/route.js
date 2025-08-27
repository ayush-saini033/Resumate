import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Code is missing" }, { status: 400 });
  }

  const GITHUB_ACCESS_TOKEN_URL = "https://github.com/login/oauth/access_token";

  const tokenResponse = await fetch(GITHUB_ACCESS_TOKEN_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;

  if (!accessToken) {
    return NextResponse.json(
      { error: "Failed to get access token" },
      { status: 400 }
    );
  }

  // Fetch user profile
  const userResponse = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/vnd.github+json",
    },
  });

  const userProfile = await userResponse.json();

  const emailResponse = await fetch("https://api.github.com/user/emails", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const emails = await emailResponse.json();
  const primaryEmail = emails.find((e) => e.primary)?.email;

  console.log(userProfile)

  return NextResponse.json({
    id: userProfile.id,
    name: userProfile.name || userProfile.login,
    email: primaryEmail || userProfile.email,
    avatar: userProfile.avatar_url,
  });
}
