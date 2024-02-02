import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./db";

const github_client_id = process.env.GITHUB_CLIENT_ID
const github_client_secret = process.env.GITHUB_CLIENT_SECRET

if (!github_client_id || !github_client_secret) {
    throw new Error('Missing Github credentials')
}

const google_client_id = process.env.GOOGLE_CLIENT_ID
const google_client_secret = process.env.GOOGLE_CLIENT_SECRET

if (!google_client_id || !google_client_secret) {
    throw new Error('Missing Google credentials')
}

export const { handlers:{GET,POST}, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        github({
            clientId: github_client_id,
            clientSecret: github_client_secret
        }),
        google({
            clientId: google_client_id,
            clientSecret: google_client_secret
        })
    ],
    callbacks: {
        async session({session,user}:any) {
            if (session && user) {
                session.user.id = user.id
            }

            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET
  })