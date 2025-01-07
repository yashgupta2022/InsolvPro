'use client'
import { useRecoilState } from 'recoil';
import { jobState } from '../../../atom/AllJobsAtom';
import { viewJobState } from '../../../atom/ViewJobAtom';

export default function ActiveJobs({setActiveTab}) {
    const [jobs, setJobs] = useRecoilState(jobState);
    const [viewJob, setViewJob] = useRecoilState(viewJobState);
    return (
        <div className='w-full'>
        <h2 className="w-full mb-4 text-2xl font-bold">Active Jobs</h2>
        <div className="flex flex-col items-center mt-4 space-y-4">
            {jobs.filter(p=>p.status=='active').map((job, index) => (
            <div key={index} onClick={
                ()=>{setViewJob(job.id);
                setActiveTab(4)  }
            } className="w-full p-4 bg-white rounded-md shadow-md cursor-pointer hover:brightness-[98%] ">
                <h3 className="text-xl font-semibold">{job.companyName}</h3>
                <p className="text-gray-500">{job.companyId}</p>
            </div>
            ))}
        </div>
        </div>
    );
    }

