import React, { useState } from "react";
import { Clock, ChevronRight, CheckCircle2, ArrowLeft } from "lucide-react";
import SEO from "../components/Seo";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

interface ServiceOption {
  id: string;
  name: string;
  description: string;
  price: string;
  estimatedTime: string;
}

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

const serviceOptions: ServiceOption[] = [
  {
    id: "tune-up",
    name: "Tune Up Mesin",
    description: "Perawatan rutin untuk performa optimal mesin kendaraan Anda",
    price: "Rp 500.000",
    estimatedTime: "2 jam",
  },
  {
    id: "brake-service",
    name: "Servis Rem",
    description:
      "Pemeriksaan dan perbaikan sistem pengereman untuk keamanan berkendara",
    price: "Rp 300.000",
    estimatedTime: "1.5 jam",
  },
  {
    id: "ac-service",
    name: "Servis AC",
    description: "Perawatan sistem pendingin untuk kenyamanan berkendara",
    price: "Rp 400.000",
    estimatedTime: "2 jam",
  },
  {
    id: "oil-change",
    name: "Ganti Oli",
    description: "Penggantian oli mesin berkualitas untuk performa optimal",
    price: "Rp 250.000",
    estimatedTime: "1 jam",
  },
];

const timeSlots: TimeSlot[] = [
  { id: "1", time: "09:00", available: true },
  { id: "2", time: "10:00", available: true },
  { id: "3", time: "11:00", available: false },
  { id: "4", time: "13:00", available: true },
  { id: "5", time: "14:00", available: true },
  { id: "6", time: "15:00", available: true },
];

function ServiceOrder() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(
    null
  );
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [vehicleInfo, setVehicleInfo] = useState({
    brand: "",
    model: "",
    year: "",
    licensePlate: "",
    notes: "",
  });

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Servis berhasil dipesan!");
    navigate("/");
  };

  return (
    <>
      <SEO title="Pesan Servis" />
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Pesan Servis</h1>
            <p className="mt-2 text-gray-600">
              Isi formulir di bawah untuk memesan layanan servis
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-200" />
              {[1, 2, 3, 4].map((number) => (
                <div
                  key={number}
                  className={`relative flex items-center justify-center w-10 h-10 rounded-full ${
                    step >= number
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-400 border-2 border-gray-200"
                  }`}
                >
                  <span className="text-sm font-medium">{number}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-500">Pilih Layanan</span>
              <span className="text-sm text-gray-500">Pilih Jadwal</span>
              <span className="text-sm text-gray-500">Info Kendaraan</span>
              <span className="text-sm text-gray-500">Konfirmasi</span>
            </div>
          </div>

          {/* Form Steps */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Pilih Layanan Servis</h2>
                <div className="grid gap-4">
                  {serviceOptions.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedService?.id === service.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-blue-200"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {service.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {service.description}
                          </p>
                          <div className="mt-2 flex items-center space-x-4">
                            <span className="text-sm text-gray-600">
                              <Clock className="inline-block h-4 w-4 mr-1" />
                              {service.estimatedTime}
                            </span>
                            <span className="font-medium text-blue-600">
                              {service.price}
                            </span>
                          </div>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border-2 ${
                            selectedService?.id === service.id
                              ? "border-blue-500 bg-blue-500"
                              : "border-gray-300"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Pilih Jadwal Servis</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tanggal Servis
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Waktu Servis
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.id}
                          onClick={() => setSelectedTime(slot.time)}
                          disabled={!slot.available}
                          className={`p-2 text-center rounded-lg border ${
                            selectedTime === slot.time
                              ? "bg-blue-50 border-blue-500 text-blue-700"
                              : slot.available
                                ? "border-gray-200 hover:border-blue-200"
                                : "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed"
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Informasi Kendaraan</h2>
                <div className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Merek Kendaraan
                    </label>
                    <input
                      type="text"
                      value={vehicleInfo.brand}
                      onChange={(e) =>
                        setVehicleInfo({
                          ...vehicleInfo,
                          brand: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Contoh: Toyota"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Model Kendaraan
                    </label>
                    <input
                      type="text"
                      value={vehicleInfo.model}
                      onChange={(e) =>
                        setVehicleInfo({
                          ...vehicleInfo,
                          model: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Contoh: Avanza"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tahun Kendaraan
                    </label>
                    <input
                      type="text"
                      value={vehicleInfo.year}
                      onChange={(e) =>
                        setVehicleInfo({ ...vehicleInfo, year: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Contoh: 2020"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nomor Plat
                    </label>
                    <input
                      type="text"
                      value={vehicleInfo.licensePlate}
                      onChange={(e) =>
                        setVehicleInfo({
                          ...vehicleInfo,
                          licensePlate: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Contoh: B 1234 CD"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Catatan Tambahan
                    </label>
                    <textarea
                      value={vehicleInfo.notes}
                      onChange={(e) =>
                        setVehicleInfo({
                          ...vehicleInfo,
                          notes: e.target.value,
                        })
                      }
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tambahkan catatan khusus tentang kendaraan Anda"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Konfirmasi Pesanan</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">
                      Detail Layanan
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="text-gray-500">Layanan:</span>{" "}
                        <span className="font-medium">
                          {selectedService?.name}
                        </span>
                      </p>
                      <p className="text-sm">
                        <span className="text-gray-500">Harga:</span>{" "}
                        <span className="font-medium">
                          {selectedService?.price}
                        </span>
                      </p>
                      <p className="text-sm">
                        <span className="text-gray-500">Estimasi Waktu:</span>{" "}
                        <span className="font-medium">
                          {selectedService?.estimatedTime}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Jadwal</h3>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="text-gray-500">Tanggal:</span>{" "}
                        <span className="font-medium">{selectedDate}</span>
                      </p>
                      <p className="text-sm">
                        <span className="text-gray-500">Waktu:</span>{" "}
                        <span className="font-medium">{selectedTime}</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">
                      Kendaraan
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="text-gray-500">Kendaraan:</span>{" "}
                        <span className="font-medium">
                          {vehicleInfo.brand} {vehicleInfo.model} (
                          {vehicleInfo.year})
                        </span>
                      </p>
                      <p className="text-sm">
                        <span className="text-gray-500">Nomor Plat:</span>{" "}
                        <span className="font-medium">
                          {vehicleInfo.licensePlate}
                        </span>
                      </p>
                      {vehicleInfo.notes && (
                        <p className="text-sm">
                          <span className="text-gray-500">Catatan:</span>{" "}
                          <span className="font-medium">
                            {vehicleInfo.notes}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Kembali
                </button>
              )}
              {step < 4 ? (
                <button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !selectedService) ||
                    (step === 2 && (!selectedDate || !selectedTime)) ||
                    (step === 3 &&
                      (!vehicleInfo.brand ||
                        !vehicleInfo.model ||
                        !vehicleInfo.year ||
                        !vehicleInfo.licensePlate))
                  }
                  className="ml-auto flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Lanjut
                  <ChevronRight className="h-5 w-5 ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="ml-auto flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Pesan Sekarang
                  <CheckCircle2 className="h-5 w-5 ml-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceOrder;
