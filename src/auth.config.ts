import { NextAuthConfig } from 'next-auth';

// eslint-disable-next-line import/prefer-default-export
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.includes('admin');
      const isOnLogin = nextUrl.pathname.includes('login');
      if (isOnAdmin) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      if (isLoggedIn && isOnLogin) {
        return Response.redirect(new URL('/admin', nextUrl));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
