
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 import {database} from '@/db/database'
 import {  accounts, authenticators, sessions, users } from "@/db/schema"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(database, {
        usersTable: users,
        accountsTable: accounts,
        sessionsTable: sessions,
    }),
  providers: [Google],
})