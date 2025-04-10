"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CardPageRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to home page
    router.replace("/");
  }, [router]);

  // Display a loading state or message while redirecting
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] via-[#121D34] to-[#0A0F1C] flex items-center justify-center p-4">
      <div className="bg-[#1B2738] rounded-[24px] p-8 max-w-[420px] w-full text-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#2A3653]">
        <h1 className="text-xl mb-2">Redirecting...</h1>
        <p>Please wait while you're being redirected to the new homepage.</p>
      </div>
    </div>
  );
}