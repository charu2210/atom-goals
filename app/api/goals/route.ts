import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { goals } = body;

    const { data, error } = await supabase
      .from("goals")
      .insert(goals);

    if (error) {

  console.log("SUPABASE INSERT ERROR:");
  console.log(error);

  return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });

  } catch (err) {

    console.log(err);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}