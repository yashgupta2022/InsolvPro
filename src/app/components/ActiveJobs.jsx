'use client';

import { useRecoilState } from 'recoil';
import { jobState } from '../../../atom/AllJobsAtom';
import { viewJobState } from '../../../atom/ViewJobAtom';
import { useState } from 'react';

export default function ActiveJobs({ setActiveTab }) {
    const [jobs, setJobs] = useRecoilState(jobState);
    const [viewJob, setViewJob] = useRecoilState(viewJobState);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    // Filter jobs based on companyName or companyId
    const filteredJobs = jobs.filter(job => 
        job.status === 'active' && (
            job.companyName.toLowerCase().includes(searchQuery.toLowerCase()) || 
            job.companyId.includes(searchQuery)
        )
    );

    return (
        <div className='w-full '>
            <h2 className="flex flex-col w-full mb-4 text-2xl font-bold">Active Jobs</h2>
            
            {/* Search input */}
            <div className="pb-4">
                <input
                    type="text"
                    placeholder="Search by company name or ID"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Job listings */}
            <div className="flex flex-col items-center h-[calc(100vh-300px)] my-4 space-y-4 overflow-y-auto">
                {filteredJobs.map((job, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setViewJob(job.id);
                            setActiveTab(4);
                        }}
                        className="w-full p-4 bg-white rounded-md shadow-md cursor-pointer hover:brightness-[96%] transition-all duration-200 ease-in-out"
                    >
                        <h3 className="text-lg font-semibold">{job.companyName}</h3>
                        <p className="pt-1 text-sm text-gray-500">ID: {job.companyId}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
