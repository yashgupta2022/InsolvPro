import Link from "next/link";

export default function Header() {
    return (
      <header className="flex justify-between items-center p-4 h-[50px] bg-white shadow">
        <h1 className="text-xl font-semibold">Welcome to InsolvPro </h1>
        <div>
          <Link href='/login' className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Logout
          </Link>
        </div>
      </header>
    );
  }
  