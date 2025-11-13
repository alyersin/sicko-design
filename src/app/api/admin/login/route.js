import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, ADMIN_COOKIE_MAX_AGE } from "../../../../constants/admin";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE ?? process.env.ADMIN_PASS ?? process.env.ADMIN_PASSWORD;

export async function POST(request) {
  const body = await request.json().catch(() => null);
  const username = body?.username?.trim();
  const password = body?.password?.trim();

  if (!ADMIN_USERNAME || !ADMIN_PASSCODE) {
    return NextResponse.json(
      { error: "Configurația credentialelor de administrator lipsește." },
      { status: 500 }
    );
  }

  if (!username || !password) {
    return NextResponse.json({ error: "Introduceți utilizatorul și parola." }, { status: 400 });
  }

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSCODE) {
    return NextResponse.json({ error: "Credentiale invalide." }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: "verified",
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: ADMIN_COOKIE_MAX_AGE,
    path: "/",
  });

  return response;
}
