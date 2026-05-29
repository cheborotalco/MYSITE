import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

const contentTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ file: string }> },
) {
  const { file } = await params;
  const filePath = path.join(process.cwd(), "public", "original-v2", "assets", file);
  const body = await readFile(filePath);
  const extension = path.extname(file);

  return new NextResponse(body, {
    headers: {
      "content-type": contentTypes[extension] ?? "application/octet-stream",
      "cache-control": "public, max-age=14400",
    },
  });
}
