// lib/auth.ts

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface User {
    token?: string;
    role?: string;
    companyId?: string;
    agreedTerms?: boolean;
    hasBusinessProfile?: boolean;
  }

  interface Session {
    accessToken?: string;
    user?: {
      id?: string;
      email?: string;
      name?: string;
      role?: string;
      companyId?: string;
      agreedTerms?: boolean;
      hasBusinessProfile?: boolean;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    agreedTerms?: boolean;
    hasBusinessProfile?: boolean;
    userId?: string;
    email?: string;
    name?: string;
    role?: string;
    companyId?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("Missing credentials");
          return null;
        }

        try {
          const res = await fetch("http://localhost:5000/auth/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          const user = await res.json();

          if (user?.token) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              token: user.token,
              role: user.role,
              companyId: user.companyId,
              agreedTerms: user.agreedTerms,
              hasBusinessProfile: user.hasBusinessProfile,
            } as any;
          }
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.token) {
        token.accessToken = user.token;
        token.agreedTerms = user.agreedTerms;
        token.hasBusinessProfile = user.hasBusinessProfile;
        token.userId = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.companyId = user.companyId;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken;
        session.user = {
          id: token.userId,
          email: token.email,
          name: token.name,
          role: token.role,
          companyId: token.companyId,
          agreedTerms: token.agreedTerms,
          hasBusinessProfile: token.hasBusinessProfile,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/validate-access-code",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
