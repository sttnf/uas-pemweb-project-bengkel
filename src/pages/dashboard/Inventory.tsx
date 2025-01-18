import { Plus, Search, Filter, AlertTriangle } from "lucide-react";
import DashboardLayout from "../../components/DashboardLayout";

const inventory = [
  {
    id: 1,
    item: "Oli Mesin",
    category: "Pelumas",
    stock: 45,
    minStock: 20,
    price: "Rp 250.000",
    status: "Stok Cukup",
  },
  {
    id: 2,
    item: "Filter Udara",
    category: "Sparepart",
    stock: 12,
    minStock: 15,
    price: "Rp 150.000",
    status: "Stok Menipis",
  },
  {
    id: 3,
    item: "Kampas Rem",
    category: "Sparepart",
    stock: 8,
    minStock: 10,
    price: "Rp 300.000",
    status: "Perlu Restock",
  },
  {
    id: 4,
    item: "Busi",
    category: "Sparepart",
    stock: 30,
    minStock: 20,
    price: "Rp 50.000",
    status: "Stok Cukup",
  },
  {
    id: 5,
    item: "Kampas Kopling",
    category: "Sparepart",
    stock: 11,
    minStock: 15,
    price: "Rp 400.000",
    status: "Stok Menipis",
  },
  {
    id: 6,
    item: "Aki",
    category: "Elektrikal",
    stock: 5,
    minStock: 10,
    price: "Rp 1.000.000",
    status: "Perlu Restock",
  },
  {
    id: 7,
    item: "Air Radiator",
    category: "Pelumas",
    stock: 50,
    minStock: 30,
    price: "Rp 75.000",
    status: "Stok Cukup",
  },
  {
    id: 8,
    item: "Timing Belt",
    category: "Sparepart",
    stock: 25,
    minStock: 15,
    price: "Rp 500.000",
    status: "Stok Cukup",
  },
  {
    id: 9,
    item: "V-belt",
    category: "Sparepart",
    stock: 30,
    minStock: 20,
    price: "Rp 200.000",
    status: "Stok Cukup",
  },
  {
    id: 10,
    item: "Lampu sein",
    category: "Elektrikal",
    stock: 10,
    minStock: 15,
    price: "Rp 75.000",
    status: "Perlu Restock",
  },
  {
    id: 11,
    item: "Bering Roda",
    category: "Sparepart",
    stock: 30,
    minStock: 20,
    price: "Rp 150.000",
    status: "Stok Cukup",
  },
  {
    id: 12,
    item: "Relay",
    category: "Elektrikal",
    stock: 30,
    minStock: 25,
    price: "Rp 100.000",
    status: "Stok Cukup",
  },
];

function Inventory() {
  return (
    <DashboardLayout title="Inventaris">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Inventaris</h2>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-5 w-5" />
            <span>Tambah Item</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Cari item..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>

        {/* Inventory Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Total Item</h3>
            <p className="text-3xl font-bold text-blue-600">250</p>
            <p className="text-sm text-gray-500 mt-2">Dalam inventaris</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Nilai Inventaris</h3>
            <p className="text-3xl font-bold text-green-600">Rp 125.5M</p>
            <p className="text-sm text-gray-500 mt-2">Total nilai barang</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Perlu Restock</h3>
            <p className="text-3xl font-bold text-red-600">15</p>
            <p className="text-sm text-gray-500 mt-2">Item dibawah minimum</p>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500 border-b">
                    <th className="pb-3 pl-4">Item</th>
                    <th className="pb-3">Kategori</th>
                    <th className="pb-3">Stok</th>
                    <th className="pb-3">Harga</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 pr-4">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((item) => (
                    <tr key={item.id} className="border-b last:border-b-0">
                      <td className="py-4 pl-4">{item.item}</td>
                      <td className="py-4">{item.category}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <span className="mr-2">{item.stock}</span>
                          {item.stock < item.minStock && (
                            <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          )}
                        </div>
                      </td>
                      <td className="py-4">{item.price}</td>
                      <td className="py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === "Stok Cukup"
                              ? "bg-green-100 text-green-800"
                              : item.status === "Stok Menipis"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                        >
                          {item.status}
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

        {/* Low Stock Alerts */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">
            Peringatan Stok Menipis
          </h3>
          <div className="space-y-4">
            {inventory
              .filter((item) => item.stock < item.minStock)
              .map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <AlertTriangle className="h-6 w-6 text-yellow-500" />
                    <div>
                      <p className="font-medium">{item.item}</p>
                      <p className="text-sm text-gray-500">
                        Stok: {item.stock} (Min: {item.minStock})
                      </p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    Pesan Sekarang
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Inventory;
