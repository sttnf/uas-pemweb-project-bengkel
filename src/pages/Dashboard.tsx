import { Users, Plus, Car, DollarSign, TrendingUp, Clock } from "lucide-react";

import { useAuth } from "../hooks/useAuth";
import DashboardLayout from "../components/DashboardLayout";
import { JSX } from "react";
import SEO from "../components/Seo";

interface StatCard {
  title: string;
  value: string;
  icon: JSX.Element;
  trend: string;
}

interface Appointment {
  id: number;
  customer: string;
  service: string;
  time: string;
  status: "Menunggu" | "Dalam Proses" | "Selesai";
}

interface InventoryItem {
  item: string;
  stock: number;
  status: "Stok Cukup" | "Stok Menipis" | "Perlu Restock";
}

const StatusBadge = ({
  status,
}: {
  status:
    | "Selesai"
    | "Dalam Proses"
    | "Menunggu"
    | "Stok Cukup"
    | "Stok Menipis"
    | "Perlu Restock";
}) => {
  const colors = {
    Selesai: "bg-green-100 text-green-800",
    "Dalam Proses": "bg-blue-100 text-blue-800",
    Menunggu: "bg-yellow-100 text-yellow-800",
    "Stok Cukup": "bg-green-100 text-green-800",
    "Stok Menipis": "bg-yellow-100 text-yellow-800",
    "Perlu Restock": "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${
        colors[status] || ""
      }`}
    >
      {status}
    </span>
  );
};

function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return;
  }

  // Data statis
  const stats: StatCard[] = [
    {
      title: "Servis Hari Ini",
      value: "12",
      icon: <Car className="text-blue-500" />,
      trend: "+20%",
    },
    {
      title: "Pendapatan",
      value: "Rp 8.5M",
      icon: <DollarSign className="text-green-500" />,
      trend: "+12%",
    },
    {
      title: "Pelanggan Baru",
      value: "48",
      icon: <Users className="text-purple-500" />,
      trend: "+8%",
    },
    {
      title: "Waktu Rata-rata",
      value: "2.5 Jam",
      icon: <Clock className="text-orange-500" />,
      trend: "-10%",
    },
  ];

  const appointments: Appointment[] = [
    {
      id: 1,
      customer: "Budi Santoso",
      service: "Tune Up Mesin",
      time: "09:00",
      status: "Dalam Proses",
    },
    {
      id: 2,
      customer: "Dewi Putri",
      service: "Ganti Oli",
      time: "10:30",
      status: "Menunggu",
    },
    {
      id: 3,
      customer: "Ahmad Rizki",
      service: "Servis AC",
      time: "13:00",
      status: "Selesai",
    },
    {
      id: 4,
      customer: "Siti Rahma",
      service: "Cek Rem",
      time: "14:30",
      status: "Menunggu",
    },
  ];

  const inventory: InventoryItem[] = [
    { item: "Oli Mesin", stock: 45, status: "Stok Cukup" },
    { item: "Filter Udara", stock: 12, status: "Stok Menipis" },
    { item: "Kampas Rem", stock: 8, status: "Perlu Restock" },
    { item: "Busi", stock: 30, status: "Stok Cukup" },
  ];
  return (
    <DashboardLayout>
      <SEO title="Dashboard" />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className="h-12 w-12 bg-gray-50 rounded-lg flex items-center justify-center">
                {stat.icon}
              </div>
            </div>
            <div className="flex items-center mt-4">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-500">{stat.trend}</span>
              <span className="text-sm text-gray-500 ml-1">vs bulan lalu</span>
            </div>
          </div>
        ))}
      </div>

      {/* Appointments Section */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-4 sm:space-y-0">
            <h2 className="text-lg font-semibold">Jadwal Hari Ini</h2>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
              <Plus className="h-5 w-5" />
              <span>Tambah Jadwal</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b">
                  <th className="pb-3 pl-4">Pelanggan</th>
                  <th className="pb-3">Layanan</th>
                  <th className="pb-3">Waktu</th>
                  <th className="pb-3 pr-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id} className="border-b last:border-b-0">
                    <td className="py-3 pl-4">{appointment.customer}</td>
                    <td className="py-3">{appointment.service}</td>
                    <td className="py-3">{appointment.time}</td>
                    <td className="py-3 pr-4">
                      <StatusBadge status={appointment.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Inventory Section */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-4 sm:space-y-0">
            <h2 className="text-lg font-semibold">Status Inventaris</h2>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
              <Plus className="h-5 w-5" />
              <span>Tambah Item</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b">
                  <th className="pb-3 pl-4">Item</th>
                  <th className="pb-3">Stok</th>
                  <th className="pb-3 pr-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-3 pl-4">{item.item}</td>
                    <td className="py-3">{item.stock}</td>
                    <td className="py-3 pr-4">
                      <StatusBadge status={item.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
