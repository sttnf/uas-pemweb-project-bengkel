import { useState, useEffect, PropsWithChildren } from "react";
import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Calendar,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  Bell,
  Car,
  Menu,
  X,
  LogOut,
  ChevronDown,
} from "lucide-react";

import { useAuth } from "../hooks/useAuth";
import SEO from "./Seo";

export default function DashboardLayout({
  title,
  children,
}: PropsWithChildren<{
  title?: string;
}>) {
  const { user } = useAuth();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar");
      const toggleButton = document.getElementById("sidebar-toggle");

      if (
        isMobile &&
        isSidebarOpen &&
        sidebar &&
        toggleButton &&
        !sidebar.contains(event.target as Node) &&
        !toggleButton.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, isSidebarOpen]);

  const navigationItems = [
    { icon: <LayoutDashboard />, label: "Overview", id: "" },
    { icon: <Calendar />, label: "Jadwal", id: "appointments" },
    { icon: <Users />, label: "Pelanggan", id: "customers" },
    { icon: <ShoppingCart />, label: "Inventaris", id: "inventory" },
    { icon: <BarChart3 />, label: "Analitik", id: "analytics" },
    { icon: <Settings />, label: "Pengaturan", id: "settings" },
  ];

  if (!user) return null;

  return (
    <>
      <SEO title={`Dashboard - ${title}`} />

      <div className="flex h-screen bg-gray-50">
        {/* Overlay for mobile */}
        {isMobile && isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar Toggle Button */}
        <button
          id="sidebar-toggle"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`
            lg:hidden fixed z-50 p-2 rounded-lg transition-all duration-300 ease-in-out
            ${
              isSidebarOpen
                ? "left-[240px] top-4 bg-white shadow-lg"
                : "left-4 top-4 bg-blue-600 text-white hover:bg-blue-700"
            }
            `}
        >
          {isSidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Sidebar */}
        <aside
          id="sidebar"
          className={`
            fixed lg:static inset-y-0 left-0 z-40
            w-60 bg-white shadow-lg transform transition-all duration-300 ease-in-out
            ${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
            `}
        >
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="p-4 border-b bg-blue-50">
              <div className="flex items-center space-x-2">
                <Car className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-blue-900">
                  Bengkel Kita
                </span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-4 overflow-y-auto">
              {navigationItems.map((item) => {
                const currentPath = location.pathname
                  .replace(/\/$/, "")
                  .toLowerCase();
                const targetPath = `/dashboard/${item.id}`.toLowerCase();

                return (
                  <Link
                    key={item.id}
                    to={{
                      pathname: `/dashboard/${item.id}`,
                    }}
                    className={`
                    flex items-center w-full px-4 py-3 space-x-3
                    transition-all duration-200 ease-in-out
                    ${
                      currentPath === targetPath ||
                      (currentPath === "/dashboard" && item.id === "")
                        ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                  >
                    <span className="h-5 w-5">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* User Profile */}
            <div className="relative border-t bg-gray-50">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="w-full p-4 flex items-center space-x-3 hover:bg-gray-100 transition-colors"
              >
                <img
                  src="https://cdn.kita.blue/kita/logo.png"
                  alt="Profile"
                  className="h-10 w-10 rounded-full border-2 border-white shadow-sm"
                />
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-gray-900">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                    isProfileDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute bottom-full left-0 w-full bg-white border-t shadow-lg rounded-t-lg overflow-hidden">
                  <button className="w-full px-4 py-3 flex items-center space-x-3 text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut className="h-5 w-5" />
                    <span>Keluar</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-white shadow-sm z-20">
            <div className="px-4 py-3">
              <div className="flex items-center justify-end gap-4">
                {/* Header Actions */}
                <div className="flex items-center space-x-3">
                  <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Bell className="h-6 w-6" />
                    <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white" />
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="flex-1 flex flex-col overflow-y-auto">
            <div className="p-6 space-y-6">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
}
