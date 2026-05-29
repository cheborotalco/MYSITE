import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "original-v2", "favicon.svg");
  const body = await readFile(filePath);

  return new NextResponse(body, {
    headers: {
      "content-type": "image/svg+xml",
      "cache-control": "public, max-age=14400",
    },
  });
}
