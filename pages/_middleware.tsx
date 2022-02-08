import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    // Token will exist if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    const { pathname } = req.nextUrl

    // Allow the request if the following is true...
    // 1) Its a request for next-auth session & provider fetching
    // 2) the token exists

    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next();
    }

    // Request them to login if they dont have token AND are requesting a protected rout
    if (!token && pathname !== '/login') {
        return NextResponse.redirect('/login');
    }
}