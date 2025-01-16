import { Filter } from "lucide-react";
import DashboardLayout from "../../components/DashboardLayout";

function Customers() {
  return (
    <DashboardLayout title="Pelanggan">
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Pelanggan</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            <i className="fas fa-plus"> </i>
            Tambah Pelanggan
          </button>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <div className="flex items-center mb-4">
            <input
              className="flex-1 p-2 border rounded-md"
              placeholder="Cari pelanggan..."
              type="text"
            />
            <button className="ml-2 bg-gray-200 p-2 rounded-md">
              <Filter size={16} />
              Filter
            </button>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Nama</th>
                <th className="p-2">Email</th>
                <th className="p-2">Telepon</th>
                <th className="p-2">Kunjungan</th>
                <th className="p-2">Terakhir Kunjung</th>
                <th className="p-2">Status</th>
                <th className="p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Satria Mahatir</td>
                <td className="p-2">cogil412121@email.com</td>
                <td className="p-2">088844220004</td>
                <td className="p-2">10</td>
                <td className="p-2">2023-03-23</td>
                <td className="p-2">
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    Aktif
                  </span>
                </td>
                <td className="p-2 text-blue-600">Detail</td>
              </tr>
              <tr>
                <td className="p-2">Agoes Buntz</td>
                <td className="p-2">king.agoes@email.com</td>
                <td className="p-2">0838383832146</td>
                <td className="p-2">8</td>
                <td className="p-2">2024-09-26</td>
                <td className="p-2">
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    Aktif
                  </span>
                </td>
                <td className="p-2 text-blue-600">Detail</td>
              </tr>
              <tr>
                <td className="p-2">Maula Lubis</td>
                <td className="p-2">Maulaa332@email.com</td>
                <td className="p-2">0844442225</td>
                <td className="p-2">15</td>
                <td className="p-2">2024-011-01</td>
                <td className="p-2">
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    Aktif
                  </span>
                </td>
                <td className="p-2 text-blue-600">Detail</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Total Pelanggan</h2>
            <p className="text-3xl font-bold text-blue-600">150</p>
            <p className="text-sm text-gray-500">+12% dari bulan lalu</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Pelanggan Aktif</h2>
            <p className="text-3xl font-bold text-green-600">125</p>
            <p className="text-sm text-gray-500">83% dari total pelanggan</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Rata-rata Kunjungan</h2>
            <p className="text-3xl font-bold text-purple-600">3</p>
            <p className="text-sm text-gray-500">Kunjungan per pelanggan</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Model Mobil</h2>
          <div className="bg-white p-4 rounded-md shadow-md">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2">Model</th>
                  <th className="p-2">Merk</th>
                  <th className="p-2">Tahun</th>
                  <th className="p-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Avanza</td>
                  <td className="p-2">Toyota</td>
                  <td className="p-2">2020</td>
                  <td className="p-2 text-blue-600">Detail</td>
                </tr>
                <tr>
                  <td className="p-2">Civic</td>
                  <td className="p-2">Honda</td>
                  <td className="p-2">2019</td>
                  <td className="p-2 text-blue-600">Detail</td>
                </tr>
                <tr>
                  <td className="p-2">Xenia</td>
                  <td className="p-2">Daihatsu</td>
                  <td className="p-2">2021</td>
                  <td className="p-2 text-blue-600">Detail</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Customers;
