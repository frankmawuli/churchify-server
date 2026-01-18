import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import prisma from "../Libs/prisma";

const { CLIENTID, CLIENTSECRETE, REDIRECTURI } = process.env;

if (!CLIENTID || !CLIENTSECRETE || !REDIRECTURI) {
  throw new Error(
    "Google OAuth configuration variables are missing in the environment."
  );
}

passport.use(
  new GoogleStrategy(
    {
      clientID: CLIENTID,
      clientSecret: CLIENTSECRETE,
      callbackURL: REDIRECTURI,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;

        if (!email) {
          return done(new Error("Google account has no email"), false);
        }

        // 1. Check if user exists
        let user = await prisma.user.findUnique({
          where: { email },
        });

        // 2. If user exists, return user
        if (user) {
          // Update user if they signed up with password but now using OAuth
          if (user.userType === "PASSWORD") {
            user = await prisma.user.update({
              where: { id: user.id },
              data: { userType: "OAUTH" },
            });
          }
          return done(null, user);
        }

        // 3. Create new OAuth user
        user = await prisma.user.create({
          data: {
            name: profile.displayName || email.split("@")[0],
            email,
            password: "", // OAuth users don’t use passwords
            role: "CHURCH_ADMIN", // adjust based on your Role enum
            userType: "OAUTH",
          },
        });

        return done(null, user);
      } catch (error) {
        console.error("Google OAuth error:", error);
        return done(error as Error, false);
      }
    }
  )
);
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});
