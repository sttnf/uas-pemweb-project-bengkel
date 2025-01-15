import { Plus } from "lucide-react";
import DashboardLayout from "../../components/DashboardLayout";
import Calendar from "../../components/Calendar";

const appointments = [
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

function Appointments() {
  return (
    <DashboardLayout title="Jadwal Servis">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Jadwal Servis</h2>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-5 w-5" />
            <span>Tambah Jadwal</span>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500 border-b">
                    <th className="pb-3 pl-4">Pelanggan</th>
                    <th className="pb-3">Layanan</th>
                    <th className="pb-3">Waktu</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 pr-4">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr
                      key={appointment.id}
                      className="border-b last:border-b-0"
                    >
                      <td className="py-4 pl-4">{appointment.customer}</td>
                      <td className="py-4">{appointment.service}</td>
                      <td className="py-4">{appointment.time}</td>
                      <td className="py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            appointment.status === "Selesai"
                              ? "bg-green-100 text-green-800"
                              : appointment.status === "Dalam Proses"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                      <td className="py-4 pr-4">
                        <button className="text-blue-600 hover:text-blue-700">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Calendar />
      </div>
    </DashboardLayout>
  );
}

export default Appointments;
