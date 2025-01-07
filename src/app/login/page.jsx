'use client'
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // Mock login (replace with real auth logic)
    router.push('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded shadow-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded shadow-sm"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
