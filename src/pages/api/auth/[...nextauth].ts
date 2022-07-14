import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { GITHUB_ID, GITHUB_SECRET } from "../../../.env.local";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
});
