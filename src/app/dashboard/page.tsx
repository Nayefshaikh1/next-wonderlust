"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingEditModal, { EditableListing } from "@/components/ListingEditModal";
import {
  LayoutDashboard,
  TrendingUp,
  Home,
  CalendarCheck,
  Star,
  PlusCircle,
  Pencil,
  Trash2,
  Eye,
  MapPin,
  Users,
  User,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Search,
  Sparkles,
  BarChart3,
  Calendar,
  CheckCircle2,
  DollarSign
} from "lucide-react";

interface DashboardStats {
  totalEarnings: number;
  totalReservations: number;
  totalListings: number;
  avgRating: number;
  occupancyRate: number;
  isDemoHost?: boolean;
}

interface ReceivedBooking {
  _id: string;
  guestName: string;
  guestEmail: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  createdAt: string;
  listing?: {
    _id: string;
    title: string;
    location: string;
    country: string;
    image?: { url: string };
  };
  buyer?: {
    username?: string;
    email?: string;
    avatar?: string;
  };
}

interface MonthlyData {
  month: string;
  revenue: number;
  bookingsCount: number;
}

interface ManagedUser {
  _id: string;
  username: string;
  email: string;
  role: "admin" | "owner" | "user";
  createdAt: string;
  avatar?: string;
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "listings" | "reservations" | "trips" | "users">("overview");
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [role, setRole] = useState<"admin" | "owner" | "user" | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [accessDenied, setAccessDenied] = useState<string | null>(null);
  const [usersList, setUsersList] = useState<ManagedUser[]>([]);
  const [updatingUserRole, setUpdatingUserRole] = useState<string | null>(null);
  const [userRoleMessage, setUserRoleMessage] = useState<string | null>(null);
  const [userListings, setUserListings] = useState<EditableListing[]>([]);
  const [receivedBookings, setReceivedBookings] = useState<ReceivedBooking[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [myTrips, setMyTrips] = useState<any[]>([]);
  const [monthlyData, setMonthlyData] = useState<MonthlyData[]>([]);
  const [searchFilter, setSearchFilter] = useState("");

  // Edit modal state
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState<EditableListing | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUsersList = async () => {
      try {
        const res = await fetch("/api/admin/users");
        const data = await res.json();
        if (data.success && isMounted) {
          setUsersList(data.users || []);
        }
      } catch (err) {
        console.error("Dashboard fetch users error:", err);
      }
    };

    const fetchDashboardData = async () => {
      try {
        const res = await fetch("/api/dashboard/stats");
        const data = await res.json();
        if (isMounted) {
          if (data.success) {
            setStats(data.stats);
            setRole(data.role);
            setIsAdmin(data.isAdmin || data.role === "admin");
            setUserListings(data.userListings || []);
            setReceivedBookings(data.receivedBookings || []);
            setMyTrips(data.myTrips || []);
            setMonthlyData(data.monthlyData || []);

            if (data.isAdmin || data.role === "admin") {
              fetchUsersList();
            }
          } else {
            setAccessDenied(data.error || "Access denied. Dashboard is restricted to Hosts and Administrators.");
          }
        }
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        if (isMounted) setAccessDenied("Failed to load dashboard. Please log in.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchDashboardData();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleRoleChange = async (userId: string, newRole: "admin" | "owner" | "user") => {
    setUpdatingUserRole(userId);
    setUserRoleMessage(null);
    try {
      const res = await fetch("/api/admin/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, role: newRole }),
      });
      const data = await res.json();
      if (data.success) {
        setUserRoleMessage(data.message || `Role updated to ${newRole}`);
        setUsersList((prev) =>
          prev.map((u) => (u._id === userId ? { ...u, role: newRole } : u))
        );
        setTimeout(() => setUserRoleMessage(null), 3000);
      } else {
        alert(data.error || "Failed to update role");
      }
    } catch {
      alert("Error updating role");
    } finally {
      setUpdatingUserRole(null);
    }
  };

  const handleDeleteListing = async (listingId: string) => {
    if (!confirm("Are you sure you want to delete this listing? This action cannot be undone.")) {
      return;
    }

    try {
      const res = await fetch(`/api/listings/${listingId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setUserListings((prev) => prev.filter((l) => l._id !== listingId));
        if (stats) {
          setStats({ ...stats, totalListings: Math.max(0, stats.totalListings - 1) });
        }
      } else {
        alert(data.error || "Failed to delete listing.");
      }
    } catch {
      alert("Error deleting listing.");
    }
  };

  const filteredListings = userListings.filter((l) =>
    l.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    l.location.toLowerCase().includes(searchFilter.toLowerCase()) ||
    l.country.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const maxMonthlyRevenue = Math.max(...monthlyData.map((d) => d.revenue), 1000);

  if (accessDenied) {
    return (
      <div className="min-h-screen bg-[#F7F7F7] flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-gray-200 shadow-xl text-center space-y-5 animate-in fade-in zoom-in-95">
            <div className="w-16 h-16 bg-red-50 text-[#ff385c] rounded-full mx-auto flex items-center justify-center">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-gray-900">Access Restricted</h2>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                {accessDenied}
              </p>
              <p className="text-xs text-gray-400">
                Regular guests are not authorized to view dashboard statistics or modify system settings.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/"
                className="w-full inline-block bg-[#222222] hover:bg-black text-white py-3 px-6 rounded-xl text-sm font-bold transition shadow-md"
              >
                Return to Explore Stays
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-8 py-8 space-y-8">
        
        {/* Top Welcome & Action Banner */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-rose-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff385c]/10 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-semibold backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              {isAdmin ? "Full Administrator Control" : "Verified Host Operations"}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              {isAdmin ? "Admin Control Center" : "Host Performance & Operations"}
            </h1>
            <p className="text-gray-300 text-sm max-w-xl">
              {isAdmin
                ? "Platform-wide management. You can inspect all listings, manage global reservations, view platform revenue, and promote users to Admin."
                : "Manage your personal properties, inspect guest reservations, monitor earnings, and stay in control of your hospitality business."}
            </p>
          </div>

          <div className="flex items-center gap-3 relative z-10 shrink-0">
            <Link
              href="/listings/new"
              className="bg-[#ff385c] hover:bg-[#e00b41] text-white px-5 py-3 rounded-full font-bold text-sm shadow-lg shadow-[#ff385c]/30 hover:scale-105 transition duration-200 flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4 text-white" />
              Airbnb your home
            </Link>
          </div>
        </div>

        {/* KPI Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Revenue */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Host Earnings</span>
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-gray-900">
                ${stats ? stats.totalEarnings.toLocaleString() : "0"}
              </span>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5 bg-emerald-50 px-2 py-0.5 rounded-full">
                <TrendingUp className="w-3 h-3" /> +14%
              </span>
            </div>
            <p className="text-xs text-gray-400 font-medium">Cumulative gross host earnings</p>
          </div>

          {/* Card 2: Hosted Properties */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Hosted Properties</span>
              <div className="w-10 h-10 rounded-2xl bg-rose-50 text-[#ff385c] flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-gray-900">
                {stats ? stats.totalListings : 0}
              </span>
              <span className="text-xs font-semibold text-gray-500">Active</span>
            </div>
            <p className="text-xs text-gray-400 font-medium">Properties listed on Wonderlust</p>
          </div>

          {/* Card 3: Reservations */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Guest Reservations</span>
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <CalendarCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-gray-900">
                {stats ? stats.totalReservations : 0}
              </span>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Confirmed</span>
            </div>
            <p className="text-xs text-gray-400 font-medium">Incoming stay bookings</p>
          </div>

          {/* Card 4: Rating */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Host Reputation</span>
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center">
                <Star className="w-5 h-5 fill-amber-400" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-gray-900">
                {stats ? stats.avgRating : "4.92"}
              </span>
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Superhost</span>
            </div>
            <p className="text-xs text-gray-400 font-medium">Average guest review rating</p>
          </div>
        </div>

        {/* Tab Bar Navigation */}
        <div className="flex items-center gap-2 border-b border-gray-200 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition shrink-0 ${
              activeTab === "overview"
                ? "bg-gray-900 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-200/60"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Overview & Analytics
          </button>

          <button
            onClick={() => setActiveTab("listings")}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition shrink-0 ${
              activeTab === "listings"
                ? "bg-gray-900 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-200/60"
            }`}
          >
            <Home className="w-4 h-4" />
            {isAdmin ? "All Platform Properties" : "My Hosted Properties"} ({userListings.length})
          </button>

          <button
            onClick={() => setActiveTab("reservations")}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition shrink-0 ${
              activeTab === "reservations"
                ? "bg-gray-900 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-200/60"
            }`}
          >
            <CalendarCheck className="w-4 h-4" />
            {isAdmin ? "All Reservations" : "Guest Reservations"} ({receivedBookings.length})
          </button>

          <button
            onClick={() => setActiveTab("trips")}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition shrink-0 ${
              activeTab === "trips"
                ? "bg-gray-900 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-200/60"
            }`}
          >
            <Compass className="w-4 h-4" />
            My Personal Trips ({myTrips.length})
          </button>

          {isAdmin && (
            <button
              onClick={() => setActiveTab("users")}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition shrink-0 ${
                activeTab === "users"
                  ? "bg-[#ff385c] text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-200/60"
              }`}
            >
              <Users className="w-4 h-4" />
              Manage Users ({usersList.length})
            </button>
          )}
        </div>

        {/* Tab 1: Overview & Analytics */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Chart Section */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Revenue Analytics</h3>
                  <p className="text-xs text-gray-500">Monthly gross earnings breakdown over time</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                  <Calendar className="w-3.5 h-3.5" />
                  Last 6 Months
                </div>
              </div>

              {/* Bar Chart Visual */}
              <div className="h-64 pt-8 flex items-end justify-between gap-3 sm:gap-6 border-b border-gray-100 pb-4">
                {monthlyData.map((item, idx) => {
                  const heightPercent = Math.max(15, Math.round((item.revenue / maxMonthlyRevenue) * 100));
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                      <div className="text-[11px] font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition">
                        ${item.revenue.toLocaleString()}
                      </div>
                      <div className="w-full bg-gray-100 rounded-t-2xl h-48 flex items-end p-1">
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className="w-full bg-gradient-to-t from-[#ff385c] to-rose-400 rounded-t-xl group-hover:from-rose-600 group-hover:to-[#ff385c] transition-all duration-300 shadow-md shadow-[#ff385c]/20"
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-600">{item.month}</span>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <span className="text-xs font-medium text-gray-500">Avg Booking Revenue</span>
                  <p className="text-lg font-bold text-gray-900 mt-1">
                    ${stats ? Math.round(stats.totalEarnings / Math.max(1, stats.totalReservations)) : 0}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <span className="text-xs font-medium text-gray-500">Est. Occupancy Rate</span>
                  <p className="text-lg font-bold text-gray-900 mt-1">
                    {stats ? stats.occupancyRate : 82}%
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <span className="text-xs font-medium text-gray-500">Response Rate</span>
                  <p className="text-lg font-bold text-emerald-600 mt-1">100%</p>
                </div>
              </div>
            </div>

            {/* Quick Actions & Recent Activity Side Panel */}
            <div className="space-y-6">
              
              {/* Quick Host Tips */}
              <div className="bg-gradient-to-br from-rose-500 to-[#ff385c] rounded-3xl p-6 text-white shadow-lg space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  <h4 className="font-bold text-lg">Superhost Pro Tip</h4>
                </div>
                <p className="text-xs text-rose-100 leading-relaxed">
                  Listings with high-resolution hero cover photos and detailed amenities receive up to 3.5x more reservations! Keep your calendar prices updated for maximum revenue.
                </p>
                <Link
                  href="/listings/new"
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-[#ff385c] px-4 py-2 rounded-full hover:bg-rose-50 transition shadow"
                >
                  Post a New Listing <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Recent Activity List */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-4">
                <h4 className="font-bold text-gray-900 text-base flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4 text-[#ff385c]" />
                  Recent Booking Activity
                </h4>

                {receivedBookings.length === 0 ? (
                  <p className="text-xs text-gray-500 py-4 text-center">No recent guest reservations recorded yet.</p>
                ) : (
                  <div className="space-y-3">
                    {receivedBookings.slice(0, 4).map((res) => (
                      <div key={res._id} className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 border border-gray-100 text-xs">
                        <div className="space-y-0.5">
                          <span className="font-bold text-gray-900">{res.guestName}</span>
                          <p className="text-gray-500 truncate max-w-[160px]">{res.listing?.title || "Luxury Property"}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-extrabold text-emerald-600">+${res.totalPrice}</span>
                          <p className="text-[10px] text-gray-400">{new Date(res.createdAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: My Hosted Properties */}
        {activeTab === "listings" && (
          <div className="space-y-6">
            
            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-gray-200 shadow-sm">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Filter your properties..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-800 font-medium outline-none focus:ring-2 focus:ring-[#ff385c]"
                />
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 font-medium">
                  Showing {filteredListings.length} property(ies)
                </span>
                <Link
                  href="/listings/new"
                  className="bg-[#ff385c] hover:bg-[#e00b41] text-white px-4 py-2.5 rounded-full text-xs font-bold transition flex items-center gap-1.5 shadow"
                >
                  <PlusCircle className="w-4 h-4 text-white" /> Airbnb your home
                </Link>
              </div>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                <div className="h-72 bg-gray-200 rounded-3xl" />
                <div className="h-72 bg-gray-200 rounded-3xl" />
                <div className="h-72 bg-gray-200 rounded-3xl" />
              </div>
            ) : filteredListings.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 space-y-4">
                <Home className="w-12 h-12 text-gray-300 mx-auto" />
                <h3 className="text-lg font-bold text-gray-900">No properties found</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Start hosting guests on Wonderlust by creating your first property listing.
                </p>
                <Link
                  href="/listings/new"
                  className="inline-block bg-[#ff385c] text-white px-6 py-3 rounded-full text-xs font-bold shadow-md hover:bg-[#e00b41] transition"
                >
                  Create Listing
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredListings.map((listing) => (
                  <div
                    key={listing._id}
                    className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col group"
                  >
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      <Image
                        src={listing.image?.url || "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80"}
                        alt={listing.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-gray-800 uppercase tracking-wider">
                        {listing.category || "Villa"}
                      </div>
                      <div className="absolute top-3 right-3 bg-gray-900/80 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold">
                        ${listing.price} <span className="text-[10px] font-normal text-gray-300">/ night</span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-900 text-base line-clamp-1 group-hover:text-[#ff385c] transition">
                          {listing.title}
                        </h4>
                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-[#ff385c]" />
                          {listing.location}, {listing.country}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <Link
                          href={`/listings/${listing._id}`}
                          className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition flex items-center gap-1 text-xs font-semibold"
                        >
                          <Eye className="w-4 h-4" /> View
                        </Link>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setSelectedListing(listing);
                              setEditModalOpen(true);
                            }}
                            className="px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition flex items-center gap-1"
                          >
                            <Pencil className="w-3.5 h-3.5 text-indigo-600" /> Edit
                          </button>

                          <button
                            onClick={() => handleDeleteListing(listing._id)}
                            className="p-2 rounded-full text-rose-500 hover:bg-rose-50 transition"
                            title="Delete Listing"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Guest Reservations */}
        {activeTab === "reservations" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Guest Bookings Received</h3>
                  <p className="text-xs text-gray-500">Reservations made by travelers for your properties</p>
                </div>
                <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full border border-indigo-100">
                  {receivedBookings.length} Incoming Stays
                </span>
              </div>

              {receivedBookings.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
                  <CalendarCheck className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">No guest bookings received yet</p>
                  <p className="text-xs text-gray-500">Bookings for your properties will show up here automatically.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-gray-700">
                    <thead className="bg-gray-50 text-gray-500 uppercase tracking-wider font-semibold border-b border-gray-200">
                      <tr>
                        <th className="py-3.5 px-4 rounded-l-2xl">Guest</th>
                        <th className="py-3.5 px-4">Property</th>
                        <th className="py-3.5 px-4">Stay Dates</th>
                        <th className="py-3.5 px-4">Guests</th>
                        <th className="py-3.5 px-4">Payout</th>
                        <th className="py-3.5 px-4 rounded-r-2xl">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {receivedBookings.map((res) => (
                        <tr key={res._id} className="hover:bg-gray-50/80 transition">
                          <td className="py-4 px-4 font-bold text-gray-900">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-full bg-rose-100 text-[#ff385c] font-extrabold flex items-center justify-center text-xs">
                                {res.guestName.charAt(0).toUpperCase()}
                              </div>
                              <div>
                                <span>{res.guestName}</span>
                                <p className="text-[10px] text-gray-400 font-normal">{res.guestEmail}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 font-semibold text-gray-800">
                            {res.listing?.title || "Wonderlust Villa"}
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-1 text-gray-600 font-medium">
                              <Calendar className="w-3.5 h-3.5 text-gray-400" />
                              {new Date(res.checkIn).toLocaleDateString()} — {new Date(res.checkOut).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="py-4 px-4 font-semibold">
                            <div className="flex items-center gap-1">
                              <Users className="w-3.5 h-3.5 text-gray-400" />
                              {res.guests} guest(s)
                            </div>
                          </td>
                          <td className="py-4 px-4 font-extrabold text-emerald-600 text-sm">
                            ${res.totalPrice}
                          </td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              Confirmed
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 4: My Trips (As Guest) */}
        {activeTab === "trips" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Personal Travel Reservations</h3>
                  <p className="text-xs text-gray-500">Stays you have booked as a guest traveler</p>
                </div>
                <Link
                  href="/trips"
                  className="text-xs font-bold text-[#ff385c] hover:underline flex items-center gap-1"
                >
                  Full Trips View →
                </Link>
              </div>

              {myTrips.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
                  <Compass className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">No personal trips booked yet</p>
                  <p className="text-xs text-gray-500 mb-4">Discover unique homes and experiences across the world.</p>
                  <Link
                    href="/"
                    className="inline-block bg-[#ff385c] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow hover:bg-[#e00b41] transition"
                  >
                    Explore Destinations
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {myTrips.map((trip) => (
                    <div key={trip._id} className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-center gap-4">
                      <div className="relative w-20 h-20 bg-gray-200 rounded-xl overflow-hidden shrink-0">
                        <Image
                          src={trip.listing?.image?.url || "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=400&q=80"}
                          alt="Trip"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 className="font-bold text-gray-900 text-sm line-clamp-1">
                          {trip.listing?.title || "Booked Stay"}
                        </h4>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#ff385c]" />
                          {trip.listing?.location}, {trip.listing?.country}
                        </p>
                        <p className="text-xs text-gray-700 font-semibold pt-1">
                          ${trip.totalPrice} • {new Date(trip.checkIn).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 5: Platform User Management (Admin Only) */}
        {activeTab === "users" && isAdmin && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6 animate-in fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
              <div>
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#ff385c]" />
                  Registered Platform Users & Role Assignment
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  As an Administrator, you can promote any user to Admin, assign Host (Owner) privileges, or demote to Guest.
                </p>
              </div>

              {userRoleMessage && (
                <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl text-xs font-bold border border-emerald-200 animate-in fade-in">
                  ✓ {userRoleMessage}
                </div>
              )}
            </div>

            {usersList.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <Users className="w-12 h-12 mx-auto mb-3 opacity-40" />
                <p className="font-semibold text-sm">No registered users found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      <th className="py-3 px-4">User</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">Current Role</th>
                      <th className="py-3 px-4">Joined Date</th>
                      <th className="py-3 px-4 text-right">Role Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {usersList.map((u) => (
                      <tr key={u._id} className="hover:bg-gray-50/80 transition">
                        <td className="py-4 px-4 font-semibold text-gray-900 flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden relative shrink-0">
                            <Image
                              src={u.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
                              alt={u.username}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{u.username}</p>
                            <p className="text-xs text-gray-400">ID: {u._id.slice(-6)}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-600 font-medium">{u.email}</td>
                        <td className="py-4 px-4">
                          {u.role === "admin" && (
                            <span className="bg-red-50 text-[#ff385c] font-bold text-xs px-2.5 py-1 rounded-full border border-red-200 inline-flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              ADMIN
                            </span>
                          )}
                          {u.role === "owner" && (
                            <span className="bg-amber-50 text-amber-700 font-bold text-xs px-2.5 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1">
                              <Home className="w-3.5 h-3.5" />
                              HOST (OWNER)
                            </span>
                          )}
                          {(!u.role || u.role === "user") && (
                            <span className="bg-gray-100 text-gray-600 font-bold text-xs px-2.5 py-1 rounded-full border border-gray-200 inline-flex items-center gap-1">
                              <User className="w-3.5 h-3.5" />
                              GUEST (USER)
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-xs text-gray-500">
                          {new Date(u.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {u.role !== "admin" ? (
                              <button
                                onClick={() => handleRoleChange(u._id, "admin")}
                                disabled={updatingUserRole === u._id}
                                className="bg-[#ff385c] hover:bg-[#e00b41] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm hover:scale-105 active:scale-95 transition disabled:opacity-50 cursor-pointer"
                              >
                                Make Admin
                              </button>
                            ) : (
                              <button
                                onClick={() => handleRoleChange(u._id, "user")}
                                disabled={updatingUserRole === u._id || u.email === "admin@gmail.com"}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg transition disabled:opacity-50 cursor-pointer"
                              >
                                Demote to User
                              </button>
                            )}

                            {u.role !== "owner" && u.role !== "admin" && (
                              <button
                                onClick={() => handleRoleChange(u._id, "owner")}
                                disabled={updatingUserRole === u._id}
                                className="bg-amber-100 hover:bg-amber-200 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-lg transition disabled:opacity-50 cursor-pointer"
                              >
                                Make Host
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />

      {/* Listing Edit Modal */}
      <ListingEditModal
        isOpen={editModalOpen}
        listing={selectedListing}
        onClose={() => setEditModalOpen(false)}
        onSuccess={(updated) => {
          setUserListings((prev) => prev.map((l) => (l._id === updated._id ? updated : l)));
        }}
      />
    </div>
  );
}
