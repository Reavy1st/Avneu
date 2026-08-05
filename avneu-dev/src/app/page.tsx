import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold text-purple-600 mb-4">Selamat Datang di Avnue Dev</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Platform topup game dan rekber transaksi aman dengan sistem realtime.
      </p>
      <Link 
        href="/signin" 
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all"
      >
        Masuk Sekarang
      </Link>
    </div>
  );
}
