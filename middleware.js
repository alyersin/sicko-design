import { NextResponse } from "next/server";

const realm = "Sicko Admin";

export function middleware(request) {
  const username = process.env.ADMIN_BASIC_USER;
  const password = process.env.ADMIN_BASIC_PASS;

  if (!username || !password) {
    return NextResponse.next();
  }

  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Basic ")) {
    return new Response("Autorizare necesară", {
      status: 401,
      headers: { "WWW-Authenticate": `Basic realm="${realm}"` },
    });
  }

  const decoded = Buffer.from(authorization.replace("Basic ", ""), "base64").toString("utf8");
  const [providedUser, providedPass] = decoded.split(":");

  if (providedUser !== username || providedPass !== password) {
    return new Response("Acces refuzat", {
      status: 401,
      headers: { "WWW-Authenticate": `Basic realm="${realm}"` },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-console/:path*", "/api/admin/:path*"],
};
