import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { 
      cookies: { 
        getAll: () => req.cookies.getAll(), 
        setAll: (cookiesToSet) => { 
          cookiesToSet.forEach(({ name, value }) => req.cookies.set(name, value)); 
        } 
      } 
    }
  );
  
  const { data: { session } } = await supabase.auth.getSession();
  
  // Proteksi route sensitif
  if (req.nextUrl.pathname.startsWith('/avnueadmin') || req.nextUrl.pathname.startsWith('/profile')) {
    if (!session) {
      return NextResponse.redirect(new URL('/signin', req.url));
    }
  }
  return res;
}

export const config = { 
  matcher: ['/avnueadmin/:path*', '/profile/:path*', '/rekber/:path*'] 
};
