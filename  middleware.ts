import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
    publicRoutes: ["/test"]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};