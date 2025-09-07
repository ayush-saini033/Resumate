import { NextResponse } from "next/server";
import axios from "axios";

async function getPhonePeToken() {
  try {
    const data = new URLSearchParams({
      client_id: "TEST-M237PPMTNNOVV_25083",
      client_version: "1",
      client_secret: "NWEyMjNkZDktNTQ4MS00NjA3LWFiZjctNjBmOWM0MzJjN2Yy",
      grant_type: "client_credentials",
    }).toString();

    const response = await axios.post(
      "https://api-preprod.phonepe.com/apis/pg-sandbox/v1/oauth/token",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching token:",
      error.response?.data || error.message
    );
  }
}

export async function POST() {
  try {
    const tokenData = await getPhonePeToken();
    const accessToken = tokenData?.access_token;

    if (!accessToken) {
      throw new Error("No access token received from PhonePe");
    }

    // ✅ Correct payload
    const payload = {
      merchantOrderId: "M237PPMTNNOVV", // from your PhonePe account
      merchantTransactionId: `txn_${Date.now()}`, // unique ID
      merchantUserId: "user123", // any internal user ID
      amount: 100, // paise → ₹10
      redirectUrl: "http://localhost:3000",
      redirectMode: "REDIRECT",
      callbackUrl: "https://www.xyz.com/PGIntegration/callback",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const response = await axios.post(
      "https://api-preprod.phonepe.com/apis/pg-sandbox/checkout/v2/pay",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `O-Bearer ${accessToken}`,
        },
      }
    );

    console.log("Payment Response:", response.data);

    return NextResponse.json({
      paymentData: response.data, // return full response
    });
  } catch (error) {
    console.error(
      "Error while making payment:",
      error.response?.data || error.message
    );
    return NextResponse.json({ error: "Payment failed" }, { status: 500 });
  }
}
