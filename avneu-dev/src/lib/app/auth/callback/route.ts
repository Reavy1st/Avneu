import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { 
        cookies: { 
          getAll: () => request.cookies.getAll(), 
          setAll: (cookiesToSet) => { 
            cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value)); 
          } 
        } 
      }
    );
    await supabase.auth.exchangeCodeForSession(code);
  }

  // Redirect ke halaman setup username setelah login sukses
  return NextResponse.redirect(new URL('/profile/setup', requestUrl.origin));
}
