'use client'
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { jobState } from '../../../atom/AllJobsAtom';
import { viewJobState } from '../../../atom/ViewJobAtom';

export default function CreateNewJob({setActiveTab}) {

  const [jobs, setJobs] = useRecoilState(jobState);
  const [viewJob, setViewJob] = useRecoilState(viewJobState);

  const [formData, setFormData] = useState({
    id:"",
    insolvancyType: '',
    companyName: '',
    jobSuffix: '',
    industryType: '',
    address: '',
    startDate: '',
    endDate: '',
    companyId: '',
    leadAppointees: [{ leadAppointee1: '', leadAppointee2: '', leadAppointee3: '' }],
    jobManager: '',
    leadConsultant: '',
    leadApplicant: '',
    region: '',
    gstDetails: [{ type: '', frequency: '', cacNo: '' }],
    directors:    [{ name: '', address: '', email: '', phone: '' }],
    shareholders: [{ name: '', address: '', email: '', phone: '', percentage: '' }],
    courtDetails: [{ name: '', caseNo: '' }],
    status: 'active',

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedChange = (field, index, subField, value) => {
    const updatedField = [...formData[field]];
    updatedField[index][subField] = value;
    setFormData({ ...formData, [field]: updatedField });
  };

  const addNestedField = (field, template) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], template],
    });
  };



  const handleSaveAll = () => {
    let unique_job_id = self.crypto.randomUUID();
    formData.id = unique_job_id;
    setFormData({ ...formData, id: unique_job_id });
    setJobs([...jobs, formData]);
    setViewJob(unique_job_id)
       
    setActiveTab(4);
    // Implement the save logic here, such as sending the data to an API
  };

  return (
    <div className="w-full h-full max-w-6xl p-6 overflow-auto bg-white rounded-md shadow-md ">
      <h2 className="mb-4 text-xl font-bold">Fill in new job details</h2>
      <form className="space-y-4 text-sm">
        {/* Basic Fields */}
        
        <div className="flex flex-wrap gap-4">
        
          <div className="w-1/2">
            <label className="block font-medium">Insolvancy Type</label>
            <input
              type="text"
              name="insolvancyType"
              value={formData.insolvancyType}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          <div className='flex flex-wrap w-full gap-4'>
          <div className="w-1/3">
          
            <label className="block font-medium">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          <div className="w-1/3">
            <label className="block font-medium">Job Suffix</label>
            <input
              type="text"
              name="jobSuffix"
              value={formData.jobSuffix}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          </div>
          <div className="w-1/2">
            <label className="block font-medium">Industry Type</label>
            <input
              type="text"
              name="industryType"
              value={formData.industryType}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
        </div>

        {/* Address and Dates */}
        <div className="flex flex-wrap gap-4">
          <div className="w-1/2">
            <label className="block font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-medium">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          
          <div className="w-1/2">
            <label className="block font-medium">Company ID</label>
            <input
              type="text"
              name="companyId"
              value={formData.companyId}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
        </div>

        {/* Nested Fields */}
        <h3 className="font-medium ">Lead Appointees</h3>
        {formData.leadAppointees.map((appointee, index) => (
          <div key={index} className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Lead Appointee 1"
              value={appointee.leadAppointee1}
              onChange={(e) =>
                handleNestedChange('leadAppointees', index, 'leadAppointee1', e.target.value)
              }
              className="w-1/4 px-2 py-1 border rounded-md"
            />
            <input
              type="text"
              placeholder="Lead Appointee 2"
              value={appointee.leadAppointee2}
              onChange={(e) =>
                handleNestedChange('leadAppointees', index, 'leadAppointee2', e.target.value)
              }
              className="w-1/4 px-2 py-1 border rounded-md"
            />
            <input
              type="text"
              placeholder="Lead Appointee 3"
              value={appointee.leadAppointee3}
              onChange={(e) =>
                handleNestedChange('leadAppointees', index, 'leadAppointee3', e.target.value)
              }
              className="w-1/4 px-2 py-1 border rounded-md"
            />
          </div>
        ))}


        <div className='flex flex-wrap w-full gap-4'>
          <div className="w-1/3">
          
            <label className="block font-medium">Job Manager</label>
            <input
              type="text"
              name="jobManager"
              value={formData.jobManager}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          <div className="w-1/3">
            <label className="block font-medium">Lead Consultant</label>
            <input
              type="text"
              name="leadConsultant"
              value={formData.leadConsultant}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          <div className="w-full">
          
            <label className="block font-medium">Lead Applicant</label>
            <input
              type="text"
              name="leadApplicant"
              value={formData.leadApplicant}
              onChange={handleInputChange}
              className="w-1/2 px-2 py-1 border rounded-md"
            />
          </div>
          
          <h3 className="font-medium ">Court Details</h3>
        {formData.courtDetails.map((courtDetail, index) => (
          <div key={index} className="flex flex-wrap gap-4 ">
            <input
              type="text"
              placeholder="Court Name"
              value={courtDetail.name}
              onChange={(e) => handleNestedChange('courtDetails', index, 'name', e.target.value)}
              className="w-1/3 px-2 py-1 border rounded-md"
            />
            <input
              type="text"
              placeholder="Case No."
              value={courtDetail.caseNo}
              onChange={(e) => handleNestedChange('courtDetails', index, 'caseNo', e.target.value)}
              className="w-1/3 px-2 py-1 border rounded-md"
            />
          </div>
        ))}
          

          <div className="w-1/2">
            <label className="block font-medium">Practice Office</label>
            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          </div>

          <h3 className="font-medium ">GST Details</h3>
        {formData.gstDetails.map((gst, index) => (
          <div key={index} className="flex flex-wrap gap-4 ">
            <input
              type="text"
              placeholder="Type"
              value={gst.type}
              onChange={(e) => handleNestedChange('gstDetails', index, 'type', e.target.value)}
              className="w-1/5 px-2 py-1 border rounded-md"
            />
            <input
              type="text"
              placeholder="Frequency"
              value={gst.frequency}
              onChange={(e) => handleNestedChange('gstDetails', index, 'frequency', e.target.value)}
              className="w-1/5 px-2 py-1 border rounded-md"
            />
            <input
              type="text"
              placeholder="CAC No"
              value={gst.cacNo}
              onChange={(e) => handleNestedChange('gstDetails', index, 'cacNo', e.target.value)}
              className="w-1/5 px-2 py-1 border rounded-md"
            />
          </div>
        ))}



        <h3 className="font-medium ">Directors</h3>
        {formData.directors.map((director, index) => (
          <div key={index} className="flex flex-wrap gap-4 ">
            <input
              type="text"
              placeholder="Name"
              value={director.name}
              onChange={(e) => handleNestedChange('directors', index, 'name', e.target.value)}
              className="w-1/5 px-2 py-1 border rounded-md"
            />
            <input
              type="text"
              placeholder="Address"
              value={director.address}
              onChange={(e) => handleNestedChange('directors', index, 'address', e.target.value)}
              className="w-1/5 px-2 py-1 border rounded-md"
            />
            <input
              type="text"
              placeholder="Email"
              value={director.email}
              onChange={(e) => handleNestedChange('directors', index, 'email', e.target.value)}
              className="w-1/5 px-2 py-1 border rounded-md"
            />
            <input
              type="text"
              placeholder="Phone"
              value={director.phone}
              onChange={(e) => handleNestedChange('directors', index, 'phone', e.target.value)}
              className="w-1/4 px-2 py-1 border rounded-md"
            />
          </div>
        ))}
        <button onClick={(e)=>{e.preventDefault();addNestedField('directors', { name: '', address: '', email: '', phone: '' })}} className="px-4 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600"> Add Director</button>

        

        <h3 className="font-medium ">Shareholders</h3>
        {formData.shareholders.map((director, index) => (
          <div key={index} className="flex flex-wrap gap-4 ">
            <input
              type="text"
              placeholder="Name"
              value={director.name}
              onChange={(e) => handleNestedChange('shareholders', index, 'name', e.target.value)}
              className="w-1/5 px-2 py-1 border rounded-md"
            />
            <input
              type="text"
              placeholder="Address"
              value={director.address}
              onChange={(e) => handleNestedChange('shareholders', index, 'address', e.target.value)}
              className="w-1/5 px-2 py-1 border rounded-md"
            />
            <input
              type="text"
              placeholder="Email"
              value={director.email}
              onChange={(e) => handleNestedChange('shareholders', index, 'email', e.target.value)}
              className="w-1/5 px-2 py-1 border rounded-md"
            />
            <input
              type="text"
              placeholder="Phone"
              value={director.phone}
              onChange={(e) => handleNestedChange('shareholders', index, 'phone', e.target.value)}
              className="w-1/5 px-2 py-1 border rounded-md"
            />
            <input
              type="text"
              placeholder="%"
              value={director.percentage}
              onChange={(e) => handleNestedChange('shareholders', index, 'percentage', e.target.value)}
              className="w-[50px] px-2 py-1 border rounded-md"
            />
          </div>
        ))}

        <button onClick={(e)=>{e.preventDefault();addNestedField('shareholders', { name: '', address: '', email: '', phone: '', percentage: '' })}} className="px-4 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600">
            Add Shareholder
        </button>

        {/* Save All Details */}
        <div className="mt-6">
          <button
            type="button"
            onClick={handleSaveAll}
            className="px-4 py-2 text-white transition bg-green-500 rounded-md hover:bg-green-600"
          >
            Create Job
          </button>
        </div>
      </form>
    </div>
  );
}
