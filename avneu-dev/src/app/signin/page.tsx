'use client';
import { createClient } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { 
        redirectTo: `${window.location.origin}/auth/callback` 
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md mx-4 text-center">
        <h1 className="text-3xl font-bold text-purple-600 mb-6">Avnue Dev</h1>
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-all disabled:opacity-50"
        >
          {loading ? 'Memproses...' : 'Masuk dengan Google'}
        </button>
      </div>
    </div>
  );
}
