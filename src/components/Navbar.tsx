"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, User, Heart, LogOut, Compass as AppLogo, LayoutDashboard, Compass, Home, ShieldCheck } from "lucide-react";
import AuthModal from "./AuthModal";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [currentUser, setCurrentUser] = useState<{
    id?: string;
    username: string;
    email: string;
    avatar?: string;
    role?: "admin" | "owner" | "user";
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (isMounted) {
          if (data.success && data.user) {
            setCurrentUser(data.user);
          } else {
            setCurrentUser(null);
          }
        }
      } catch {
        if (isMounted) setCurrentUser(null);
      }
    };

    fetchUser();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setCurrentUser(null);
    setIsMenuOpen(false);
    window.location.reload();
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
      setIsMobileSearchOpen(false);
    }
  };

  return (
    <>
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200/80 shadow-2xs">
        <div className="max-w-[1760px] mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-center sm:justify-between gap-3 sm:gap-6 relative">
          
          {/* Logo (Centered on mobile top header) */}
          <Link href="/" className="flex items-center gap-2 text-[#ff385c] font-extrabold text-xl sm:text-2xl tracking-tight shrink-0 mx-auto sm:mx-0">
            <AppLogo className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
            <span className="inline">wonderlust</span>
          </Link>

          {/* Desktop Search Bar (Authentic Airbnb 3-Pill Style) */}
          <form onSubmit={handleSearchSubmit} className="hidden sm:flex flex-1 max-w-lg mx-2 sm:mx-0">
            <div className="flex items-center border border-gray-300 hover:border-gray-400 hover:shadow-md transition duration-200 rounded-full py-1.5 px-4 shadow-2xs text-xs sm:text-sm cursor-pointer bg-white w-full divide-x divide-gray-200">
              <input
                type="text"
                placeholder="Anywhere  ·  Any week  ·  Add guests"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-700 font-semibold px-2 text-base sm:text-xs touch-manipulation truncate"
              />
              <div className="pl-2 shrink-0">
                <button
                  type="submit"
                  aria-label="Search listings"
                  className="bg-[#ff385c] hover:bg-[#e00b41] text-white p-2 rounded-full transition flex items-center justify-center shrink-0 shadow-sm hover:scale-105 active:scale-95"
                >
                  <Search className="w-3.5 h-3.5 stroke-[3]" />
                </button>
              </div>
            </div>
          </form>

          {/* Desktop Right Navigation Profile Pill (Hidden on Mobile Top Header) */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2.5 border border-gray-300 rounded-full p-1.5 pl-3 hover:shadow-md transition duration-200 bg-white"
                aria-label="User menu"
              >
                <Menu className="w-4 h-4 text-gray-600 stroke-[2.5]" />
                <div className="w-7 h-7 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-xs overflow-hidden shadow-xs">
                  {currentUser ? (
                    currentUser.username.charAt(0).toUpperCase()
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Desktop Profile Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-3xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95">
                  {currentUser ? (
                    <>
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-bold text-gray-900">{currentUser.username}</p>
                          {currentUser.role === "admin" && (
                            <span className="bg-red-50 text-[#ff385c] text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-red-200">
                              ADMIN
                            </span>
                          )}
                          {currentUser.role === "owner" && (
                            <span className="bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200">
                              HOST
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 truncate mt-0.5">{currentUser.email}</p>
                      </div>

                      {/* Dashboard visible ONLY for Admin and Owner */}
                      {(currentUser.role === "admin" || currentUser.role === "owner") && (
                        <Link
                          href="/dashboard"
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-3 text-sm text-gray-900 hover:bg-rose-50 transition font-bold text-[#ff385c]"
                        >
                          {currentUser.role === "admin" ? (
                            <>
                              <ShieldCheck className="w-4 h-4 text-[#ff385c]" />
                              Admin Dashboard
                            </>
                          ) : (
                            <>
                              <LayoutDashboard className="w-4 h-4 text-[#ff385c]" />
                              Host Dashboard
                            </>
                          )}
                        </Link>
                      )}

                      <Link
                        href="/trips"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition font-semibold"
                      >
                        <Compass className="w-4 h-4 text-gray-500" />
                        My Trips & Bookings
                      </Link>

                      <Link
                        href="/wishlist"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition font-semibold"
                      >
                        <Heart className="w-4 h-4 text-[#ff385c]" />
                        Wishlists
                      </Link>

                      <hr className="my-1 border-gray-100" />

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2.5 px-4 py-3 text-sm text-rose-600 hover:bg-rose-50 transition font-bold text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        Log out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/dashboard"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-3 text-sm text-gray-900 hover:bg-rose-50 transition font-bold text-[#ff385c]"
                      >
                        <LayoutDashboard className="w-4 h-4 text-[#ff385c]" />
                        Host Dashboard
                      </Link>

                      <button
                        onClick={() => {
                          setAuthMode("register");
                          setAuthModalOpen(true);
                          setIsMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-sm font-bold text-gray-900 hover:bg-gray-50 transition"
                      >
                        Sign up
                      </button>

                      <button
                        onClick={() => {
                          setAuthMode("login");
                          setAuthModalOpen(true);
                          setIsMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition font-medium"
                      >
                        Log in
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>
      </header>

      {/* Mobile Only Fixed Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/90 px-6 py-1 h-13 flex sm:hidden items-center justify-between shadow-xl">
        
        {/* Left: Home Icon Link (Navigates directly to Home Page /) */}
        <Link
          href="/"
          className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-[#ff385c] active:scale-95 transition px-2 py-0.5"
        >
          <Home className="w-4 h-4 text-[#ff385c]" />
          <span className="text-[9px] font-bold text-gray-900 leading-tight">Home</span>
        </Link>

        {/* Middle: Search Logo Icon ONLY */}
        <button
          onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
          aria-label="Toggle mobile search"
          className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-[#ff385c] active:scale-95 transition px-3 py-0.5"
        >
          <div className="w-6 h-6 rounded-full bg-[#ff385c] text-white flex items-center justify-center shadow-xs">
            <Search className="w-3 h-3 stroke-[3]" />
          </div>
          <span className="text-[9px] font-bold text-gray-900 leading-tight">Search</span>
        </button>

        {/* Right: Profile Menu Button */}
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-gray-900 active:scale-95 transition px-2 py-0.5"
            aria-label="User profile menu"
          >
            <div className="w-5 h-5 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-[9px] overflow-hidden shadow-xs">
              {currentUser ? currentUser.username.charAt(0).toUpperCase() : <User className="w-3 h-3" />}
            </div>
            <span className="text-[9px] font-bold text-gray-900 leading-tight">{currentUser ? currentUser.username : "Profile"}</span>
          </button>

          {/* Mobile Profile Dropdown Menu (Upward Popup) */}
          {isMenuOpen && (
            <div className="fixed inset-x-4 bottom-14 bg-white rounded-3xl shadow-2xl border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-bottom-4">
              {currentUser ? (
                <>
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-gray-900">{currentUser.username}</p>
                      {currentUser.role === "admin" && (
                        <span className="bg-red-50 text-[#ff385c] text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-red-200">
                          ADMIN
                        </span>
                      )}
                      {currentUser.role === "owner" && (
                        <span className="bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200">
                          HOST
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 truncate mt-0.5">{currentUser.email}</p>
                  </div>

                  {/* Dashboard visible ONLY for Admin and Owner */}
                  {(currentUser.role === "admin" || currentUser.role === "owner") && (
                    <Link
                      href="/dashboard"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-3 text-sm text-gray-900 hover:bg-rose-50 transition font-bold text-[#ff385c]"
                    >
                      {currentUser.role === "admin" ? (
                        <>
                          <ShieldCheck className="w-4 h-4 text-[#ff385c]" />
                          Admin Dashboard
                        </>
                      ) : (
                        <>
                          <LayoutDashboard className="w-4 h-4 text-[#ff385c]" />
                          Host Dashboard
                        </>
                      )}
                    </Link>
                  )}

                  <Link
                    href="/trips"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition font-semibold"
                  >
                    <Compass className="w-4 h-4 text-gray-500" />
                    My Trips & Bookings
                  </Link>

                  <Link
                    href="/wishlist"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition font-semibold"
                  >
                    <Heart className="w-4 h-4 text-[#ff385c]" />
                    Wishlists
                  </Link>

                  <hr className="my-1 border-gray-100" />

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 px-4 py-3 text-sm text-rose-600 hover:bg-rose-50 transition font-bold text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    Log out
                  </button>
                </>
              ) : (
                <>

                  <button
                    onClick={() => {
                      setAuthMode("register");
                      setAuthModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm font-bold text-gray-900 hover:bg-gray-50 transition"
                  >
                    Sign up
                  </button>

                  <button
                    onClick={() => {
                      setAuthMode("login");
                      setAuthModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition font-medium"
                  >
                    Log in
                  </button>
                </>
              )}
            </div>
          )}
        </div>

      </div>

      {/* Mobile Search Overlay Input Drawer */}
      {isMobileSearchOpen && (
        <div className="fixed inset-x-4 bottom-18 z-50 bg-white rounded-3xl p-3 shadow-2xl border border-gray-200 animate-in fade-in slide-in-from-bottom-3 sm:hidden">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
            <input
              type="text"
              autoFocus
              placeholder="Search destinations, villas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-base font-semibold text-gray-900 outline-none focus:ring-2 focus:ring-[#ff385c] touch-manipulation"
            />
            <button
              type="submit"
              className="bg-[#ff385c] text-white px-4 py-2.5 rounded-full text-xs font-bold shadow"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        mode={authMode}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={() => {
          setAuthModalOpen(false);
          window.location.reload();
        }}
      />
    </>
  );
}
