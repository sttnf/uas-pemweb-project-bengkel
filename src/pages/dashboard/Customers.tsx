import { Plus, Search, Filter } from "lucide-react";
import DashboardLayout from "../../components/DashboardLayout";

const customers = [
  {
    id: 1,
    name: "Budi Santoso",
    email: "budi.santoso@email.com",
    phone: "081234567890",
    visits: 12,
    lastVisit: "2024-03-15",
    status: "Aktif",
  },
  {
    id: 2,
    name: "Dewi Putri",
    email: "dewi.putri@email.com",
    phone: "081234567891",
    visits: 8,
    lastVisit: "2024-03-10",
    status: "Aktif",
  },
  {
    id: 3,
    name: "Ahmad Rizki",
    email: "ahmad.rizki@email.com",
    phone: "081234567892",
    visits: 15,
    lastVisit: "2024-03-05",
    status: "Aktif",
  },
];

function Customers() {
  return (
    <DashboardLayout title="Pelanggan">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Pelanggan</h2>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-5 w-5" />
            <span>Tambah Pelanggan</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Cari pelanggan..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500 border-b">
                    <th className="pb-3 pl-4">Nama</th>
                    <th className="pb-3">Email</th>
                    <th className="pb-3">Telepon</th>
                    <th className="pb-3">Kunjungan</th>
                    <th className="pb-3">Terakhir Kunjung</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 pr-4">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id} className="border-b last:border-b-0">
                      <td className="py-4 pl-4">{customer.name}</td>
                      <td className="py-4">{customer.email}</td>
                      <td className="py-4">{customer.phone}</td>
                      <td className="py-4">{customer.visits}</td>
                      <td className="py-4">{customer.lastVisit}</td>
                      <td className="py-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          {customer.status}
                        </span>
                      </td>
                      <td className="py-4 pr-4">
                        <button className="text-blue-600 hover:text-blue-700">
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Customer Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Total Pelanggan</h3>
            <p className="text-3xl font-bold text-blue-600">150</p>
            <p className="text-sm text-gray-500 mt-2">+12% dari bulan lalu</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Pelanggan Aktif</h3>
            <p className="text-3xl font-bold text-green-600">125</p>
            <p className="text-sm text-gray-500 mt-2">
              83% dari total pelanggan
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Rata-rata Kunjungan</h3>
            <p className="text-3xl font-bold text-purple-600">3</p>
            <p className="text-sm text-gray-500 mt-2">
              Kunjungan per pelanggan
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Customers;
