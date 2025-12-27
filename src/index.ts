import { Request, Response } from "express";
import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import passport from "passport";
import "./Controllers/oauth-user.controller";
import authRoutes from "./Routes/auth.routes";
import churchRoutes from "./Routes/church.routes";
import storeRoutes from "./Routes/store.route";
import morgan from "morgan";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'))
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSIONSECRET || "your-session-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/profile",
  })
);

app.get("/profile", (req, res) => {
  if (!req.user) {
    return res.redirect("/");
  }
  res.send(`<h1>Profile Page</h1><p>Welcome ${req.user}</p>`);
});

//auth routes
app.use("/auth", authRoutes);



//church routes
app.use("/church", churchRoutes);


//store routes
app.use("/store", storeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
