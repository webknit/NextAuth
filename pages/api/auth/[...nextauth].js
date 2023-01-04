import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
import StravaProvider from "next-auth/providers/strava";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // Providers.GitHub({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    StravaProvider({
      clientId: process.env.STRAVA_CLIENT_ID,
      clientSecret: process.env.STRAVA_CLIENT_SECRET,
      profile(profile) {
        // LOGS FINE IN CONSOLE
        console.log("profile", profile);
        return {
          id: profile.id,
          image: profile.profile,
          name: `${profile.firstname} ${profile.lastname}`,

          // THE FOLLWING DOES NOT RETURN
          profile: profile,
        };
      },
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  //database: process.env.DATABASE_URL,
});
