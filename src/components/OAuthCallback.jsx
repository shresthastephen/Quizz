// src/components/OAuthCallback.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (!code) {
      console.error("Authorization code not found in URL");
      navigate("/signin");
      return;
    }

    const fetchAccessToken = async () => {
      try {
        const response = await axios.post("http://localhost:8080/api/auth/google", {
          code,
          redirectUri: "http://localhost:5175/callback", // this must match exactly what you registered
        });

        const { token, user } = response.data;

        if (token) {
          localStorage.setItem("token", token);
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
          }
          navigate("/");
        } else {
          console.error("Token not received from backend");
          navigate("/signin");
        }
      } catch (error) {
        console.error("OAuth login failed:", error.response?.data || error.message);
        navigate("/signin");
      }
    };

    fetchAccessToken();
  }, [navigate]);

  return <div className="text-center p-6">Logging you in via Google...</div>;
};

export default OAuthCallback;
