import { NextRequest, NextResponse } from "next/server";

import tickets from "@/app/database";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query")?.toLowerCase() || "";

  const filteredTickets = tickets.filter((ticket) =>
    ticket.name.toLowerCase().includes(query.toLowerCase())
  );
  return NextResponse.json(filteredTickets);
}
