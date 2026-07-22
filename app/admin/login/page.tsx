"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      window.location.href = "/admin";
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0] justify-center items-center px-6 relative">
      {/* Background texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: "url('/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      <div className="relative w-full max-w-md bg-[#FAF6F0] border border-[#2E2522]/10 rounded-lg p-8 md:p-10 shadow-sm z-10">
        {/* Header Ornament */}
        <div className="flex justify-center mb-6">
          <svg className="w-6 h-6 text-[#9E3E26]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>

        <h1 className="font-display text-3xl font-bold text-center text-[#9E3E26] tracking-wider uppercase mb-2">
          LITERATURE EDIT
        </h1>
        <p className="font-serif-body italic text-center text-[#2E2522]/70 text-sm mb-8">
          Studio Content Management System
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs font-serif-body">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[11px] tracking-[0.2em] font-display font-bold uppercase text-[#2E2522] mb-2">
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#2E2522]/20 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26] transition-colors"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block text-[11px] tracking-[0.2em] font-display font-bold uppercase text-[#2E2522] mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#2E2522]/20 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26] transition-colors"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 text-xs font-display font-bold tracking-[0.2em] uppercase bg-[#9E3E26] text-[#FAF6F0] hover:bg-[#85321E] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors rounded"
          >
            {loading ? "Verifying..." : "Sign In"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex text-[10px] font-display font-bold tracking-[0.18em] text-[#9E3E26] hover:text-[#85321E] uppercase"
          >
            ← Back to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
