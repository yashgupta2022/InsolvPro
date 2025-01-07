'use client'
import Link from 'next/link';

import { modalState } from '../../../atom/ActiveTabAtom';
import { useRecoilState } from 'recoil';


export default function Sidebar() {
  const [tab , setTab] = useRecoilState(modalState);
  return (
    <div className="flex flex-col w-56 h-screen text-white bg-gray-800">
      <h1 className="flex items-center justify-center p-3 text-2xl italic font-bold border-b border-gray-700">InsolvPro</h1>
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <Link onClick={()=>setTab(0)} href="/dashboard" className="block p-2 rounded hover:bg-gray-700">Home
            </Link>
          </li>
          <li>
            <Link href="/profile"className="block p-2 rounded hover:bg-gray-700">Profile Setup
            </Link>
          </li>
          <li>
            <Link href="/settings" className="block p-2 rounded hover:bg-gray-700">Settings
            </Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}
