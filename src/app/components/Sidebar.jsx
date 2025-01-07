'use client'
import Link from 'next/link';

import { modalState } from '../../../atom/ActiveTabAtom';
import { useRecoilState } from 'recoil';


export default function Sidebar() {
  const [tab , setTab] = useRecoilState(modalState);
  return (
    <div className="flex flex-col w-64 h-screen text-white bg-gray-800">
      <h1 className="p-4 text-2xl font-bold border-b border-gray-700">Dashboard</h1>
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <Link onClick={()=>setTab(0)} href="/dashboard" className="block p-2 rounded hover:bg-gray-700">Home
            </Link>
          </li>
          <li>
            <Link href="/settings" className="block p-2 rounded hover:bg-gray-700">Settings
            </Link>
          </li>
          <li>
            <Link href="/profile"className="block p-2 rounded hover:bg-gray-700">Profile Setup
            </Link>
          </li>
        </ul>
      </nav>
      {/* <div className="p-4 border-t border-gray-700">
        <Link href="/login" className="w-full p-2 bg-red-500 rounded hover:bg-red-600">
          Logout
        </Link>
      </div> */}
    </div>
  );
}
