import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { GITHUB_ID, GITHUB_SECRET } from "../../../.env.local";
import { prismaClient } from "../../../services/prismaClient";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, credentials }) {
      const { email } = user;
      try {
        const userLogin = await prismaClient.user.findUnique({
          where: {
            email: email,
          },
        });
        if (userLogin == null) {
          await prismaClient.user.create({
            data: {
              email: email,
            },
          });
        }
        return true;
      } catch (error) {
        return false;
      }
    },
  },
});
