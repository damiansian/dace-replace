import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { quizResults } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export async function POST(request: NextRequest) {
  let body: {
    name: string;
    quizId: string;
    score: number;
    total: number;
    timestamp: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { name, quizId, score, total, timestamp } = body;

  if (!name || !quizId || score == null || total == null || !timestamp) {
    return NextResponse.json(
      { error: "Missing required fields: name, quizId, score, total, timestamp" },
      { status: 400 }
    );
  }

  try {
    await db.insert(quizResults).values({
      name,
      quizId,
      score,
      total,
      submittedAt: new Date(timestamp),
    });

    return NextResponse.json({ saved: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to save quiz result" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const quizId = searchParams.get("quizId");

  if (!quizId) {
    return NextResponse.json(
      { error: "Missing quizId query parameter" },
      { status: 400 }
    );
  }

  try {
    const results = await db
      .select()
      .from(quizResults)
      .where(eq(quizResults.quizId, quizId))
      .orderBy(desc(quizResults.submittedAt));

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json(
      { error: "Failed to read quiz results" },
      { status: 500 }
    );
  }
}
