import React, { useState } from 'react';
import { Building2, Receipt, BoxesIcon, Users, UserCircle, ClipboardList, Edit2Icon } from 'lucide-react';
import { useRecoilState } from 'recoil';
import { viewJobState } from '../../../atom/ViewJobAtom';
import { jobState } from '../../../atom/AllJobsAtom';
import { modalState } from '../../../atom/ActiveTabAtom';

const JobDetailsView = ({ jobData }) => {
  const [activeTab, setActiveTab] = useState('company');
  const [viewJob, setViewJob] = useRecoilState(viewJobState);
  const [jobs, setJobs] = useRecoilState(jobState);
  const [tab,setTab] = useRecoilState(modalState)
  console.log(jobs.find((job) => job.id == viewJob));
  const {
    id,
    companyName,
    insolvancyType,
    jobSuffix,
    companyId,
    status,
    startDate,
    endDate,
    industryType,
    address,
    jobManager,
    leadConsultant,
    leadApplicant,
    leadAppointees,
    region,
    gstDetails,
    directors,
    shareholders,
    courtDetails,
  } = jobs.find((job) => job.id == viewJob);

  return (
    <div className="w-full h-[calc(100vh-100px)] overflow-auto p-4 mx-auto space-y-6 max-w-7xl">
      {/* Header Card */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold">{companyName} ({jobSuffix})</h2>
            <div className="mt-2 space-x-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-white ${
                  status === 'active' ? 'bg-blue-500' : 'bg-red-600'
                }`}
              >
                {status=='active'?'Active':'Inactive'}
              </span>
              <span className="inline-block px-3 py-1 text-gray-600 border border-gray-400 rounded-full">
                {insolvancyType}
              </span>
              
            </div>
          </div>
          <div className="text-gray-500 ">
          <div className="text-sm ">Company ID: {companyId}</div>
            <div className="mt-2 text-sm">Start Date: {startDate}</div>
            {status=='inactive'?<div className="mt-2 text-sm">End Date: {endDate}</div>:
            <div className="mt-2 text-sm">End Date: <input type='date' className='border-2 rounded-md' onChange={
                (e)=>{
                    setJobs(p=>p.map((job)=>{
                        if(job.id==viewJob){
                            return {...job,endDate:e.target.value, status:'inactive'}
                        }
                        return job
                    }))
                }
            }></input></div>}
            
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div>
        <div className="flex space-x-4 overflow-x-auto border-b border-gray-300">
          {[
            { value: 'company', label: 'Company', icon: <Building2 className="w-4 h-4" /> },
            { value: 'transactions', label: 'Transactions', icon: <Receipt className="w-4 h-4" /> },
            { value: 'assets', label: 'Assets', icon: <BoxesIcon className="w-4 h-4" /> },
            { value: 'debtors', label: 'Debtors', icon: <UserCircle className="w-4 h-4" /> },
            { value: 'creditors', label: 'Creditors', icon: <Users className="w-4 h-4" /> },
            { value: 'tasking', label: 'Tasking', icon: <ClipboardList className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex items-center gap-2 px-4 py-2 border-b-2 ${
                activeTab === tab.value
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {activeTab === 'company' && (
            <div className="p-6 space-y-6 bg-white rounded-lg shadow-md">
              {/* Company Details */}
              <div>
                <div className='flex items-center justify-between space-x-4'>
                <h3 className="text-sm font-semibold text-gray-700">Company Details 
                </h3>
                {status=='active'  ?<button onClick={()=>setTab(5)} className='flex items-center justify-center p-1 px-3 border-2 border-yellow-400 rounded-lg'> <Edit2Icon className="w-4 h-4" /> Edit </button>
                :<></>}
                </div>
               
                <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Basic Information</h4>
                    <div className="p-4 mt-4 text-sm rounded-md bg-gray-50">
                    <p className=""><strong>Industry:</strong> {industryType}</p>
                    <p><strong>Address:</strong> {address}</p>
                    
                    </div>
                    <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-500">Insolvency Details</h4>
                    <div className="p-4 mt-4 text-sm rounded-md bg-gray-50">
                    <p><strong>Lead Appointee 1:</strong> {leadAppointees[0].leadAppointee1}</p>
                    {leadAppointees[0].leadAppointee2 ? <p><strong>Lead Appointee 2:</strong> {leadAppointees[0].leadAppointee2}</p> :<></>}
                    {leadAppointees[0].leadAppointee3 ? <p><strong>Lead Appointee 3:</strong> {leadAppointees[0].leadAppointee3}</p> :<></>}
                   
                    <p className=""><strong>Job Manager:</strong> {jobManager}</p>
                    <p><strong>Lead Consultant:</strong> {leadConsultant}</p>
                    <p><strong>Practice Office:</strong> {region}</p>
                     </div>
                  </div>
                    <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-500">Court Details</h4>
                    <div className="p-4 mt-4 text-sm rounded-md bg-gray-50">
                    <p><strong>Lead Applicant:</strong> {leadApplicant}</p>
                    <p className=""><strong>Court Name:</strong> {courtDetails[0].name}</p>
                    <p><strong>Case No:</strong> {courtDetails[0].caseNo}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-500">GST Details</h4>
                    <div className="p-4 mt-4 text-sm rounded-md bg-gray-50">
                        <p><strong>GST Type:</strong> {gstDetails[0].type}</p>
                        <p><strong>GST Frequency:</strong> {gstDetails[0].frequency}</p>
                        <p><strong>CAC Number:</strong> {gstDetails[0].cacNo}</p>
                    </div>
                  </div>



                  </div>

                  <div>
                  <div>
                <h4 className="text-sm font-medium text-gray-500">Directors</h4>
                <div className="mt-4 space-y-4">
                  {directors.map((director, index) => (
                    <div key={index} className="p-4 text-sm rounded-md bg-gray-50">
                      <p><strong>Name:</strong> {director.name}</p>
                      <p><strong>Address:</strong> {director.address}</p>
                      <p><strong>Email:</strong> {director.email}</p>
                      <p><strong>Phone:</strong> {director.phone}</p>
                    </div>
                    
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-500">Shareholders</h4>
                <div className="mt-4 space-y-4">
                  {shareholders.map((shareholder, index) => (
                    <div key={index} className="p-4 text-sm rounded-md bg-gray-50">
                      <p><strong>Name:</strong> {shareholder.name}</p>
                      <p><strong>Address:</strong> {shareholder.address}</p>
                      <p><strong>Email:</strong> {shareholder.email}</p>
                      <p><strong>Phone:</strong> {shareholder.phone}</p>
                      <p><strong>Percentage:</strong> {shareholder.percentage}%</p>
                    </div>
                    
                  ))}
                </div>
              </div>
                  </div>




                  
                </div>
              </div>

            </div>
          )}

          {activeTab === 'transactions' && <div className="text-gray-500">Transactions content will go here</div>}
          {activeTab === 'assets' && <div className="text-gray-500">Assets content will go here</div>}
          {activeTab === 'debtors' && <div className="text-gray-500">Debtors content will go here</div>}
          {activeTab === 'creditors' && <div className="text-gray-500">Creditors content will go here</div>}
          {activeTab === 'tasking' && <div className="text-gray-500">Tasking content will go here</div>}
        </div>
      </div>
    </div>
  );
};

export default JobDetailsView;
