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
  const features = [
    {
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      title: "Servis Berkualitas",
      description:
        "Tim mekanik berpengalaman dengan peralatan modern untuk hasil terbaik",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Tepat Waktu",
      description: "Estimasi waktu yang akurat dan pengerjaan yang efisien",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-white pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Solusi Terbaik untuk</span>
                  <span className="block text-blue-600">
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
                      href="#layanan"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Lihat Layanan
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#kontak"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    >
                      Hubungi Kami
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="layanan" className="py-12 bg-gray-50 scroll-my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Mengapa Memilih Kami?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Layanan terbaik dengan standar kualitas tinggi
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="harga" className="py-12 bg-white scroll-my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Layanan Kami
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Berbagai layanan perawatan untuk kendaraan Anda
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col gap-4 items-center justify-center text-center"
                >
                  <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-500 text-center">
                    {service.description}
                  </p>
                  <p className="text-blue-600 font-semibold text-center">
                    {service.price}
                  </p>
                  <a
                    href="/service"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">10+</div>
              <div className="mt-2 text-blue-100">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">5000+</div>
              <div className="mt-2 text-blue-100">Pelanggan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">20+</div>
              <div className="mt-2 text-blue-100">Mekanik Ahli</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">15+</div>
              <div className="mt-2 text-blue-100">Layanan Spesialis</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimoni" className="py-12 bg-gray-50 scroll-my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Apa Kata Mereka?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Testimoni dari pelanggan setia kami
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
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
      </div>

      {/* Contact Section */}
      <div id="kontak" className="bg-white py-12 scroll-my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Hubungi Kami
            </h2>
            <p className="mt-4 text-lg text-gray-500">
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
              <p className="mt-2 text-base text-gray-500">
                info@milkita.my.id
              </p>
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
      </div>

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
