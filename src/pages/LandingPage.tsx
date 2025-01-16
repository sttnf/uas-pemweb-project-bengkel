import { useState, useEffect } from "react";
import {
  Car,
  Wrench,
  Clock,
  Shield,
  Settings,
  Users,
  Star,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import Navbar from "../components/Navbar";

function LandingPage() {
  const [isVisible, setIsVisible] = useState({
    features: false,
    services: false,
    stats: false,
    testimonials: false,
    contact: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "features",
        "services",
        "stats",
        "testimonials",
        "contact",
      ];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          setIsVisible((prev) => ({
            ...prev,
            [section]:
              rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0,
          }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial visibility
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Servis Berkualitas",
      description:
        "Tim mekanik berpengalaman dengan peralatan modern untuk hasil terbaik",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Tepat Waktu",
      description: "Estimasi waktu yang akurat dan pengerjaan yang efisien",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Garansi Layanan",
      description: "Jaminan kepuasan dengan garansi servis hingga 3 bulan",
    },
  ];

  const services = [
    {
      icon: <Settings className="h-8 w-8 text-blue-500" />,
      title: "Tune Up Mesin",
      description:
        "Perawatan rutin untuk performa optimal mesin kendaraan Anda",
      price: "Mulai Rp 500.000",
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-500" />,
      title: "Servis Rem",
      description:
        "Pemeriksaan dan perbaikan sistem pengereman untuk keamanan berkendara",
      price: "Mulai Rp 300.000",
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-500" />,
      title: "Servis AC",
      description: "Perawatan sistem pendingin untuk kenyamanan berkendara",
      price: "Mulai Rp 400.000",
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-500" />,
      title: "Ganti Oli",
      description: "Penggantian oli mesin berkualitas untuk performa optimal",
      price: "Mulai Rp 250.000",
    },
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pengusaha",
      content:
        "Pelayanan sangat profesional dan cepat. Harga yang ditawarkan juga sangat kompetitif.",
      rating: 5,
    },
    {
      name: "Ani Wijaya",
      role: "Ibu Rumah Tangga",
      content:
        "Bengkel yang sangat terpercaya. Mekaniknya ramah dan detail dalam menjelaskan masalah.",
      rating: 5,
    },
    {
      name: "Dedi Kurniawan",
      role: "Driver Online",
      content:
        "Servis berkualitas dengan waktu pengerjaan yang sesuai estimasi. Sangat recommended!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10  pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 bg-white lg:max-w-2xl lg:w-full">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Solusi Terbaik untuk</span>{" "}
                  <span className="block text-blue-600 xl:inline animate-text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Perawatan Mobil Anda
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Bengkel mobil terpercaya dengan layanan profesional dan
                  teknologi modern untuk memastikan kendaraan Anda selalu dalam
                  kondisi prima.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#services"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105 animate-pulse"
                    >
                      Lihat Layanan
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105"
                    >
                      Hubungi Kami
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full animate-float"
            src="https://plus.unsplash.com/premium_photo-1682142263585-628a4561e136?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Car service illustration"
          />
        </div>
      </div>

      {/* Features Section */}
      <section
        id="features"
        className={`scroll-my-12 py-12 bg-gradient-to-b from-white to-blue-50 transition-opacity duration-1000 ${isVisible.features ? "opacity-100" : "opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Keunggulan
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Mengapa Memilih Kami?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Layanan terbaik dengan standar kualitas tinggi
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature, index) => (
                <div key={index} className="relative group">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white group-hover:bg-blue-600 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.title}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={`scroll-my-12 py-12 bg-white transition-opacity duration-1000 ${isVisible.services ? "opacity-100" : "opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Layanan
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Layanan Kami
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Berbagai layanan perawatan untuk kendaraan Anda
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {service.description}
                  </p>
                  <p className="text-blue-600 font-semibold text-center mb-4">
                    {service.price}
                  </p>
                  <a
                    href="/service"
                    className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats"
        className={`scroll-my-12 bg-blue-600 py-12 transition-opacity duration-1000 ${isVisible.stats ? "opacity-100" : "opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { number: "10+", label: "Tahun Pengalaman" },
              { number: "5000+", label: "Pelanggan Puas" },
              { number: "20+", label: "Mekanik Ahli" },
              { number: "15+", label: "Layanan Spesialis" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white animate-count">
                  {stat.number}
                </div>
                <div className="mt-2 text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className={`scroll-my-12 py-12 bg-gray-50 transition-opacity duration-1000 ${isVisible.testimonials ? "opacity-100" : "opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Apa Kata Mereka?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Testimoni dari pelanggan setia kami
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`scroll-my-12 bg-white py-12 transition-opacity duration-1000 ${isVisible.contact ? "opacity-100" : "opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Kontak
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hubungi Kami
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Kami siap melayani kebutuhan perawatan mobil Anda
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Telepon
              </h3>
              <p className="mt-2 text-base text-gray-500">(021) 1234-5678</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-base text-gray-500">info@milkita.my.id</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Alamat</h3>
              <p className="mt-2 text-base text-gray-500">
                Jl. Otomotif No. 123, Jakarta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Car className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-white">
                  Bengkel Kita
                </span>
              </div>
              <p className="mt-4 text-gray-400">
                Solusi terpercaya untuk perawatan kendaraan Anda
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Tune Up
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Servis Rem
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Servis AC
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Ganti Oli
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Jam Operasional</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Senin - Jumat: 08.00 - 17.00</li>
                <li className="text-gray-400">Sabtu: 08.00 - 15.00</li>
                <li className="text-gray-400">Minggu: Tutup</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-400">
              &copy; 2024 Bengkel Kita. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
