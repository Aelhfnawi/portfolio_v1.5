import { NextResponse } from "next/server";

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  topics?: string[];
  homepage?: string | null;
  fork: boolean;
  archived: boolean;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get("user") || "Aelhfnawi";
  const limitParam = searchParams.get("limit");
  const limit = Math.max(1, Math.min(Number(limitParam) || 6, 24));

  try {
    const res = await fetch(
      `https://api.github.com/users/${encodeURIComponent(user)}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "nextjs-portfolio",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub repositories" },
        { status: res.status }
      );
    }

    const repos: GithubRepo[] = await res.json();
    const filtered = repos
      .filter((r) => !r.fork && !r.archived)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, limit)
      .map((r) => ({
        id: r.id,
        name: r.name,
        url: r.html_url,
        description: r.description,
        stars: r.stargazers_count,
        language: r.language,
        topics: r.topics || [],
        homepage: r.homepage || null,
      }));

    return NextResponse.json({ user, repos: filtered });
  } catch (err) {
    return NextResponse.json(
      { error: "Unexpected error fetching GitHub repositories" },
      { status: 500 }
    );
  }
}



