import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const platform = searchParams.get("platform");

  // Mock data - replace downloadUrl with real S3/CDN links later
  const mockData = {
    windows: {
      version: "v1.2.0",
      size: "145 MB",
      downloadUrl: "https://github.com/openclaw/desktop/releases/download/v1.2.0/OpenClaw-Setup-1.2.0.exe",
    },
    mac: {
      version: "v1.2.0",
      size: "120 MB",
      downloadUrl: "https://github.com/openclaw/desktop/releases/download/v1.2.0/OpenClaw-1.2.0.dmg",
    },
    linux: {
      version: "v1.2.0",
      size: "110 MB",
      downloadUrl: "https://github.com/openclaw/desktop/releases/download/v1.2.0/OpenClaw-1.2.0.AppImage",
    },
  };

  if (!platform || !["windows", "mac", "linux"].includes(platform)) {
    // If platform is auto or invalid, return all or detect based on user-agent (simplified here)
    return NextResponse.json(mockData);
  }

  const data = mockData[platform as keyof typeof mockData];
  return NextResponse.json(data);
}
