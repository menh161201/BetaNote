import NextAuth from "next-auth";
import github from "next-auth/providers/github";

const github_client_id = process.env.GITHUB_CLIENT_ID
const github_client_secret = process.env.GITHUB_CLIENT_SECRET

if (!github_client_id || !github_client_secret) {
    throw new Error('Missing Github credentials')
}

export const { handlers:{GET,POST}, auth, signIn, signOut } = NextAuth({
    providers: [
        github({
            clientId: github_client_id,
            clientSecret: github_client_secret
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