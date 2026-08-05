import Link from 'next/link';

const categories = [
  { id: 'robux', name: 'Top Up Robux', price: 'Rp 15.000', bg: 'bg-purple-600' },
  { id: 'akun', name: 'Jual Akun', price: 'Rp 50.000', bg: 'bg-indigo-600' },
  { id: 'item', name: 'Item Limited', price: 'Pasar', bg: 'bg-violet-500' },
  { id: 'joki', name: 'Jasa Joki', price: 'Rp 20.000', bg: 'bg-fuchsia-600' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">R</div>
            <span className="text-xl font-bold">Avnue<span className="text-purple-600">Roblox</span></span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <Link href="/">Home</Link>
            <Link href="/topup">Store</Link>
            <Link href="/rekber">Rekber</Link>
          </nav>
          <div className="flex gap-3">
            <Link href="/signin" className="text-sm font-medium text-gray-600 hover:text-purple-600 py-2">Masuk</Link>
            <Link href="/signup" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-bold">Daftar</Link>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-purple-200">
            PROSES OTOMATIS 24 JAM
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Marketplace Roblox<br />Terpercaya Indonesia
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Top up Robux murah, jual beli akun Blox Fruits/Limited, dan jasa Rekber aman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/topup" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-purple-600/20">
              Belanja Sekarang
            </Link>
            <Link href="/rekber" className="bg-white hover:bg-gray-50 border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-bold">
              Buat Rekber
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
          Layanan Populer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              href={`/category/${cat.id}`}
              className="group bg-white rounded-xl hover:shadow-lg transition-all overflow-hidden border border-gray-200 hover:border-purple-300"
            >
              <div className={`aspect-video w-full ${cat.bg} flex items-center justify-center text-white/80 text-4xl font-bold`}>
                {cat.name.charAt(0)}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1 group-hover:text-purple-600">{cat.name}</h3>
                <p className="text-xs text-gray-500">{cat.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-gray-50 text-gray-600 py-12 px-4 text-sm border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-xs">
          © {new Date().getFullYear()} Avnue Roblox Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
