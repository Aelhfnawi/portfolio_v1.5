"use client";

import { useRef, useState, useEffect, MouseEvent } from "react";
import Image from "next/image";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
  });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const element = headingRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const maxRotate = 10; // degrees

    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    const rotateY = (deltaX / (rect.width / 2)) * maxRotate;
    const rotateX = (-deltaY / (rect.height / 2)) * maxRotate;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`,
      transition: "transform 60ms linear",
      willChange: "transform",
    });
  }

  function handleMouseLeave() {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 250ms ease",
    });
  }

  return (
    <>
      {/* Cosmic Background - Full Screen Dynamic Background */}
      <div className="cosmic-background">
        <div className="cosmic-particles">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="cosmic-particle"></div>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="min-h-screen text-white relative z-10">
        <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <section className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <div
              ref={headingRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="select-none rounded-2xl p-2"
              style={{ perspective: 1000 }}
            >
              <h1
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                style={tiltStyle}
              >
                <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-red-500 dark:from-orange-400 dark:via-amber-300 dark:to-red-400 bg-clip-text text-transparent drop-shadow-sm">
                  Ahmed Elhfnawi
                </span>
              </h1>
            </div>
            <p className="mt-4 text-lg font-medium text-gray-300">
              ML Developer
            </p>
            <p className="mt-2 max-w-xl text-base text-gray-400">
              Turning complex data into meaningful insights with AI — from model development to deployment.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-white shadow-sm transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-48 w-48 overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5 sm:h-56 sm:w-56 md:h-64 md:w-64">
              <Image
                src="/profile.jpg"
                alt="Profile photo of Ahmed Elhfnawi"
                fill
                sizes="(max-width: 768px) 12rem, 16rem"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <ProjectsSection />

        <SkillsSection />

        <section className="mt-20 rounded-3xl border border-white/[0.1] bg-gray-900 p-6 shadow-sm dark:border-white/[0.1] dark:bg-gray-900 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-white">About Me</h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-gray-300">
            <p className="text-lg font-medium text-white">I don't just build models — I create solutions that deliver real results.</p>
            <p>
              I'm Ahmed Elhfnawi, an Artificial Intelligence & Machine Learning Engineer with a passion for turning complex challenges into practical, impactful systems. From extracting insights out of messy documents to designing intelligent applications that adapt and learn, I bring ideas to life with purpose and precision.
            </p>
            <p>
              I hold a Bachelor's Degree in Artificial Intelligence and Machine Learning Engineering and spend my time exploring how to merge deep learning, computer vision, and natural language processing into usable products.
            </p>
            <p>
              What drives me is not just the technology, but making it accessible and valuable. My work emphasizes clarity, reliability, and a results-driven mindset.
            </p>
            <p>
              Let's connect and explore how thoughtful AI can make a difference.
            </p>
          </div>
        </section>
        <CallToAction />
      </main>
      </div>
    </>
  );
}

function ProjectsSection() {
  const [data, setData] = useState<
    | { user: string; repos: { id: number; name: string; url: string; description: string | null; stars: number; language: string | null; topics: string[]; homepage: string | null }[] }
    | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/github?user=Aelhfnawi&limit=6`, { cache: "force-cache" });
        if (!res.ok) {
          throw new Error("Failed to load projects");
        }
        const json = await res.json();
        setData(json);
      } catch (e: any) {
        setError(e?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section className="mt-20">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h2>
        <a
          href="https://github.com/Aelhfnawi"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-orange-600 underline decoration-orange-300 underline-offset-4 hover:text-orange-700"
        >
          View all on GitHub
        </a>
      </div>

      {loading && (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-40 animate-pulse rounded-2xl border border-white/[0.1] bg-gray-800" />
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="mt-4 text-sm text-red-600">{error}</p>
      )}

      {!loading && data && (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {data.repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.homepage || repo.url}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-white/[0.1] bg-gray-800 p-5 shadow-sm transition hover:shadow-md hover:bg-gray-700"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold tracking-tight group-hover:text-orange-600">
                  {repo.name}
                </h3>
                {repo.stars > 0 && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-0.5 text-xs text-orange-700 ring-1 ring-orange-200 dark:bg-orange-500/10 dark:text-orange-300 dark:ring-orange-500/30">
                    ★ {repo.stars}
                  </span>
                )}
              </div>
              {repo.description && (
                <p className="mt-2 line-clamp-3 text-sm text-gray-400">{repo.description}</p>
              )}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {repo.language && (
                  <span className="rounded-full bg-gray-700 px-2.5 py-0.5 text-xs text-gray-300 ring-1 ring-white/10">
                    {repo.language}
                  </span>
                )}
                {repo.topics?.slice(0, 3).map((t) => (
                  <span key={t} className="rounded-full bg-gray-700 px-2.5 py-0.5 text-xs text-gray-300 ring-1 ring-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

function CallToAction() {
  return (
    <section className="mt-20 rounded-3xl border border-white/[0.1] bg-gradient-to-r from-gray-800 to-gray-900 p-6 shadow-sm sm:p-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-white">Let's build something intelligent together.</h2>
          <p className="mt-2 text-sm text-gray-300">Based in Cairo, Egypt. Reach me anytime at <a href="tel:+201142528103" className="font-medium text-orange-400 underline decoration-orange-300 underline-offset-4 hover:text-orange-300">+20 114 252 8103</a>.</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:+201142528103"
            className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Call me
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-elhfnawi/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.1] bg-gray-800 text-[#0A66C2] shadow-sm transition hover:shadow-md hover:bg-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.036-1.85-3.036-1.853 0-2.136 1.447-2.136 2.943v5.662H9.001V9h3.111v1.561h.044c.433-.82 1.492-1.687 3.068-1.687 3.281 0 3.885 2.159 3.885 4.969v6.609zM5.337 7.433a1.804 1.804 0 1 1 0-3.609 1.804 1.804 0 0 1 0 3.609zM6.957 20.452H3.714V9h3.243v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/Aelhfnawi"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.1] bg-gray-800 text-white shadow-sm transition hover:shadow-md hover:bg-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.944 0-1.091.39-1.985 1.029-2.683-.103-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.378.202 2.397.099 2.65.64.698 1.028 1.592 1.028 2.683 0 3.842-2.338 4.688-4.566 4.937.359.31.678.921.678 1.856 0 1.339-.012 2.419-.012 2.749 0 .268.18.58.688.481A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
