"use client";

import { useState } from "react";
import { X, Lock, Mail } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  mode?: "login";
  onClose: () => void;
  onSuccess: () => void;
}

export default function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.success) {
        onSuccess();
      } else {
        setError(data.error || "Login failed. Please check your credentials.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-gray-100">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h3 className="font-extrabold text-gray-900 text-xl tracking-tight">
              Log in to Wonderlust
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Welcome back! Access your account, host dashboard, and stays.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 hover:bg-gray-100 rounded-full transition text-gray-400 hover:text-black cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-2xl text-rose-700 text-xs font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">Email address</label>
            <div className="flex items-center border border-gray-200 focus-within:border-black rounded-2xl px-3.5 py-3 bg-gray-50/50 transition">
              <Mail className="w-4 h-4 text-gray-400 mr-2.5 shrink-0" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-sm font-medium outline-none text-gray-900 placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">Password</label>
            <div className="flex items-center border border-gray-200 focus-within:border-black rounded-2xl px-3.5 py-3 bg-gray-50/50 transition">
              <Lock className="w-4 h-4 text-gray-400 mr-2.5 shrink-0" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-sm font-medium outline-none text-gray-900 placeholder-gray-400"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 btn-airbnb font-bold text-sm rounded-2xl transition shadow-lg shadow-[#ff385c]/25 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 mt-3 cursor-pointer"
          >
            {isSubmitting ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* Footer info */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-500">
          <span>Default Admin: </span>
          <span className="font-semibold text-gray-800">admin@gmail.com</span> · <span className="font-semibold text-gray-800">password</span>
        </div>
      </div>
    </div>
  );
}
