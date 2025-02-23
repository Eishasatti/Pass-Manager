import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)','/forum(.*)'])

export default clerkMiddleware(async (auth, request) => {
  console.log('Request URL:', request.nextUrl.pathname);  // Log the request path
  if (isProtectedRoute(request)) {
    console.log('Protected route, applying auth...');
    await auth.protect();
  } else {
    console.log('Unprotected route, continuing...');
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}