'use client';
import { useState } from 'react';
import CreateNewJob from './CreateNewJob';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../atom/ActiveTabAtom';
import ActiveJobs from './ActiveJobs';
import InactiveJobs from './InactiveJobs';
import Job from './Job';
import EditJob from './EditJob';

export default function Home() {
  const [activeTab, setActiveTab] = useRecoilState(modalState); // 0 for open job, 1 for active jobs, 2 for inactive jobs, 3 for new job

  if (activeTab===4){
    return <Job />
  }

  if (activeTab === 5) {
    return <div className="flex items-center justify-center w-full"> 
      <div className='max-h-[calc(100vh-100px)] overflow-y-auto'><EditJob setActiveTab={setActiveTab}/></div> 
    </div>
  }

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-100">
      {/* Buttons */}
      <div className="flex mb-8 space-x-4">
        <button
          onClick={() => setActiveTab(1)}
          className="px-6 py-3 font-semibold text-black transition bg-green-500 rounded-md shadow-md hover:bg-green-400"
        >
          Search Active Job
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className="px-6 py-3 font-semibold text-black transition bg-red-600 rounded-md shadow-md hover:bg-red-500"
        >
          Search Inactive Job
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className="px-6 py-3 font-semibold text-black transition bg-yellow-500 rounded-md shadow-md hover:bg-yellow-400"
        >
          Create New Job
        </button>
      </div>

      {/* Tabs */}
      <div className="w-4/5 flex flex-col items-center space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
        {activeTab === 1 && (
            <ActiveJobs setActiveTab={setActiveTab}/>
          
        )}
        {activeTab === 2 && (
            <InactiveJobs setActiveTab={setActiveTab}/>
        )}
        {activeTab === 3 && (
          <CreateNewJob setActiveTab={setActiveTab} />
        )}
        {activeTab === 0 && (
          <div>
            <h2 className="text-xl text-gray-500">Select a button to display its content.</h2>
          </div>
        )}
      </div>
    </div>
  );
}
