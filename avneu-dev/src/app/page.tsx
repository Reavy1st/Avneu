import Link from 'next/link';

const robloxCategories = [
  { id: 'robux', name: 'Top Up Robux', price: 'Mulai Rp 15.000', bg: 'bg-red-600', desc: 'Proses instan via Gamepass/Badge' },
  { id: 'akun', name: 'Jual Beli Akun', price: 'Mulai Rp 50.000', bg: 'bg-blue-600', desc: 'Akun limited, bloxfruit, & premium' },
  { id: 'item', name: 'Item Limited', price: 'Harga Pasar', bg: 'bg-yellow-500', desc: 'Trading item rare & limited U' },
  { id: 'joki', name: 'Jasa Joki Blox', price: 'Mulai Rp 20.000', bg: 'bg-green-600', desc: 'Leveling cepat & aman terpercaya' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">R</div>
            <span className="text-xl font-bold tracking-tight">Avnue<span className="text-red-500">Roblox</span></span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/topup" className="hover:text-white transition-colors">Store</Link>
            <Link href="/rekber" className="hover:text-white transition-colors">Rekber</Link>
          </nav>
          <div className="flex gap-3">
            <Link href="/signin" className="text-sm font-medium text-gray-300 hover:text-white py-2">Masuk</Link>
            <Link href="/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">Daftar</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-gray-900 z-0"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-red-600/30">
            ⚡ PROSES OTOMATIS 24 JAM
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Marketplace Roblox<br />Terpercaya Indonesia
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Top up Robux murah, jual beli akun Blox Fruits/Limited, dan jasa Rekber aman untuk transaksi player-to-player.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/topup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-red-600/20">
              Belanja Sekarang
            </Link>
            <Link href="/rekber" className="bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white px-8 py-3 rounded-full font-bold transition-all">
              Buat Rekber
            </Link>
          </div>
        </div>
      </section>

      {/* Kategori Produk */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-600 rounded-full"></span>
          Layanan Populer
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {robloxCategories.map((cat) => (
            <Link 
              key={cat.id} 
              href={`/category/${cat.id}`}
              className="group bg-gray-800 rounded-xl hover:bg-gray-750 transition-all overflow-hidden border border-gray-700 hover:border-red-600/50"
            >
              <div className={`aspect-video w-full ${cat.bg} flex items-center justify-center text-white/50 text-4xl font-bold`}>
                {cat.name.charAt(0)}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1 group-hover:text-red-500 transition-colors">{cat.name}</h3>
                <p className="text-xs text-gray-400">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Fitur Unggulan */}
      <section className="bg-gray-800 py-16 px-4 border-y border-gray-700">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <div className="w-10 h-10 bg-green-600/20 text-green-500 rounded-lg flex items-center justify-center mb-4 text-xl">🛡️</div>
            <h3 className="font-bold text-lg mb-2">Rekber Aman</h3>
            <p className="text-gray-400 text-sm">Sistem rekber otomatis menahan dana sampai barang diterima. Bebas scam!</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <div className="w-10 h-10 bg-blue-600/20 text-blue-500 rounded-lg flex items-center justify-center mb-4 text-xl">⚡</div>
            <h3 className="font-bold text-lg mb-2">Auto Delivery</h3>
            <p className="text-gray-400 text-sm">Robux & Item masuk otomatis ke akun Anda dalam hitungan detik.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <div className="w-10 h-10 bg-purple-600/20 text-purple-500 rounded-lg flex items-center justify-center mb-4 text-xl">💬</div>
            <h3 className="font-bold text-lg mb-2">Support 24/7</h3>
            <p className="text-gray-400 text-sm">Tim admin siap membantu kendala transaksi kapan saja via Live Chat.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-12 px-4 text-sm">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center text-white text-xs font-bold">R</div>
              <span className="text-white font-bold text-lg">AvnueRoblox</span>
            </div>
            <p className="mb-4">Platform marketplace Roblox terbesar dan teraman di Indonesia sejak 2024.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Produk</h4>
            <ul className="space-y-2">
              <li><Link href="/topup/robux" className="hover:text-white">Top Up Robux</Link></li>
              <li><Link href="/marketplace/akun" className="hover:text-white">Jual Akun Blox</Link></li>
              <li><Link href="/marketplace/limited" className="hover:text-white">Item Limited U</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li><Link href="/rekber" className="hover:text-white">Jasa Rekber</Link></li>
              <li><Link href="/jadwal-maintenance" className="hover:text-white">Jadwal Maintenance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Pembayaran</h4>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-gray-800 px-2 py-1 rounded text-xs border border-gray-700">QRIS</span>
              <span className="bg-gray-800 px-2 py-1 rounded text-xs border border-gray-700">DANA</span>
              <span className="bg-gray-800 px-2 py-1 rounded text-xs border border-gray-700">GOPAY</span>
              <span className="bg-gray-800 px-2 py-1 rounded text-xs border border-gray-700">BCA VA</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-xs">
          © {new Date().getFullYear()} Avnue Roblox Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
