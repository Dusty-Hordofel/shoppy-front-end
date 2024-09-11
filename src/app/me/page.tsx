"use client";
import React, { useEffect } from "react";

type Props = {};

const page = (props: Props) => {
  useEffect(() => {
    const getMe = async () => {
      try {
        const res = await fetch("http://localhost:5500/api/v1/users/me", {
          method: "GET",
          credentials: "include", // Assure que les cookies sont envoyés avec la requête
        });
        console.log("HEADERS", res.headers);

        const data = await res.json();
        console.log("🚀 ~ getMe ~ data:", data);
        return data;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    };

    getMe();
  }, []);
  return <div>page</div>;
};

export default page;
