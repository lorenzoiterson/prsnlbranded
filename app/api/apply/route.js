import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    console.log("New application:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
