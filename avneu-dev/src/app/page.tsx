import Link from 'next/link';

// Data dummy kategori Roblox
const robloxCategories = [
  { id: 'robux', name: 'Top Up Robux', price: 'Mulai Rp 15.000', image: 'https://placehold.co/300x200/ef4444/ffffff?text=ROBUX', desc: 'Proses instan via Gamepass/Badge' },
  { id: 'akun', name: 'Jual Beli Akun', price: 'Mulai Rp 50.000', image: 'https://placehold.co/300x200/3b82f6/ffffff?text=AKUN+RBLX', desc: 'Akun limited, bloxfruit, & premium' },
  { id: 'item', name: 'Item Limited', price: 'Harga Pasar', image: 'https://placehold.co/300x200/f59e0b/ffffff?text=LIMITED', desc: 'Trading item rare & limited U' },
  { id: 'joki', name: 'Jasa Joki Blox', price: 'Mulai Rp 20.000', image: 'https://placehold.co/300x200/10b981/ffffff?text=JOKI+BLOX', desc: 'Leveling cepat & aman terpercaya' },
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
            <Link href="/cek-trx" className="hover:text-white transition-colors">Cek Transaksi</Link>
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
              href={`/category/
