'use client';

import { atom } from 'recoil';

export const jobState = atom({
  key: 'jobState', // unique ID (with respect to other atoms/selectors)
  default:[{"id":"266b9a25-a087-4ac7-9964-adfa20f983a4","insolvancyType":"Court Liquidation","companyName":"ABC Trading Pty Ltd","jobSuffix":"In Liquidation","industryType":"Manufacturing","address":"123 Business Avenue, Brisbane QLD 2203, Australia","startDate":"2025-01-01","endDate":"","companyId":"1234564566","leadAppointees":[{"leadAppointee1":"John Lee","leadAppointee2":"Jane Smith","leadAppointee3":"Michael Johnson"}],"jobManager":"Samantha Lee","leadConsultant":"David Brown","leadApplicant":"ATO","region":"Brisbane","gstDetails":[{"type":"Cash Basis","frequency":"Quarterly","cacNo":"CAC 002"}],"directors":[{"name":"John Doe","address":"123 ABC Ave, Brisbane QLD 2887,Australia","email":"johndoe@abccorp.com","phone":"+1234567890"}],"shareholders":[{"name":"Alice Willi","address":"456 Street Rd, City, Australia","email":"alice.williams@email.com","phone":"+0987654321","percentage":"25"},{"name":"Samantha Will","address":"456 Street Rd, City, Australia","email":"samantha.williams@email.com","phone":"+6753472357","percentage":"75"}],"courtDetails":[{"name":"High Court","region":"Central","year":"2023","caseNo":"HC12345"}],"status":"active"},{"id":"f50691af-27a0-4d63-bb8e-d5bd9ae12ec9","insolvancyType":"Voluntary Administration","companyName":"XYZ Pty Ltd","jobSuffix":"In Administraion","industryType":"Retail Trade","address":"789 Retail Blvd, Sydney NSW 5005, Australia","startDate":"2023-05-01","endDate":"2023-11-30","companyId":"98765433","leadAppointees":[{"leadAppointee1":"Sarah Miller","leadAppointee2":"Thomas Harris","leadAppointee3":"Emily Taylor"}],"jobManager":"Michael Davis","leadConsultant":"Laura Clark","leadApplicant":"James Wilson","region":"New South Wales","gstDetails":[{"type":"Cash Basis","frequency":"Monthly","cacNo":"CAC987654"}],"directors":[{"name":"Sarah Miller","address":"789 Retail Blvd, City, Country","email":"sarah.miller@xyzltd.com","phone":"+1230987654"}],"shareholders":[{"name":"Michael Brown","address":"101 First St, City, Country","email":"michael.brown@email.com","phone":"+0981234567","percentage":"50%"}],"courtDetails":[{"name":"District Court","region":"East","year":"2022","caseNo":"DC67890"}],"status":"inactive"}], // default value (aka initial value)
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      // Initialize state from localStorage
      if (typeof window !== 'undefined') {
        const savedJob = localStorage.getItem('job');
        if (savedJob) {
          setSelf(JSON.parse(savedJob));
        }
      }

      // Update localStorage whenever the atom state changes
      onSet((newValue) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('job', JSON.stringify(newValue));
        }
      });
    },
  ],
});
