import { NextResponse } from "next/server";
import withAuth from "next-auth/middleware";

export function middleware(request) {
  // Verifica se il percorso della richiesta inizia con /private seguito da qualsiasi cosa
  if (/^\/private(\/.*)?$/.test(request.nextUrl.pathname)) {
    // Se la condizione è verificata, applica il middleware di autenticazione
    return withAuth(request);
  }
}

export const config = {
  // Il matcher definisce quali richieste devono essere gestite dal middleware
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
