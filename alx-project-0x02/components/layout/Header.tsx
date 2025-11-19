import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex gap-6">
      <h1 className="font-semibold">ALX Project — Next.js Setup</h1>

      <nav className="ml-auto flex gap-4">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;

