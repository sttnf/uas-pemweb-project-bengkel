import { Car, X, Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <nav className="sticky top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link className="flex items-center" to="/#">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              Bengkel Kita
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a href="/#layanan" className="text-gray-500 hover:text-gray-900">
              Layanan
            </a>
            <a href="/#harga" className="text-gray-500 hover:text-gray-900">
              Harga
            </a>
            <a href="/#testimoni" className="text-gray-500 hover:text-gray-900">
              Testimoni
            </a>
            <a href="/#kontak" className="text-gray-500 hover:text-gray-900">
              Kontak
            </a>
            <Link
              to="/service"
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Service
            </Link>
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute w-full bg-white shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#layanan"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Layanan
            </a>
            <a
              href="#harga"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Harga
            </a>
            <a
              href="#testimoni"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Testimoni
            </a>
            <a
              href="#kontak"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Kontak
            </a>
            <Link
              to="/login"
              className="block px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
