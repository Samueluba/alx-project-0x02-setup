import Header from "../components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-10 text-center">
        <h1 className="text-3xl font-bold">Welcome to ALX Project 2 — Next.js Setup</h1>
        <p className="mt-4 text-gray-600">Your Next.js + TypeScript + Tailwind project is running successfully.</p>
      </main>
    </>
  );
}

