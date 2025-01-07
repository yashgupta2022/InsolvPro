import Layout from "../components/Layout";

const ProfileSetup = () => {
  return (
    <Layout>
      <div className="max-w-4xl p-8 mx-auto my-10 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-2xl font-semibold text-gray-800">Profile Setup</h1>
        <form className="space-y-6">
          {/* Personal Details */}
          <div>
            <h2 className="mb-4 text-lg font-medium text-gray-800">Personal Information</h2>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Role in Insolvency Process */}
          <div>
            <h2 className="mb-4 text-lg font-medium text-gray-800">Role</h2>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Select Your Role
            </label>
            <select
              id="role"
              className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Role</option>
              <option value="insolvency_professional">Insolvency Professional</option>
              <option value="resolution_professional">Resolution Professional</option>
              <option value="liquidator">Liquidator</option>
              <option value="creditor">Creditor</option>
              <option value="adjudicating_authority">Adjudicating Authority</option>
            </select>
          </div>

          {/* Professional Details */}
          <div>
            <h2 className="mb-4 text-lg font-medium text-gray-800">Professional Details</h2>
            <label htmlFor="registrationNo" className="block text-sm font-medium text-gray-700">
              Registration Number (e.g., IBBI)
            </label>
            <input
              type="text"
              id="registrationNo"
              className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your registration number"
            />
          </div>
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
              Organization Name
            </label>
            <input
              type="text"
              id="organization"
              className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your organization name"
            />
          </div>
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
              Years of Experience
            </label>
            <input
              type="number"
              id="experience"
              className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your experience in years"
            />
          </div>

          {/* Case Preferences */}
          <div>
            <h2 className="mb-4 text-lg font-medium text-gray-800">Case Preferences</h2>
            <label htmlFor="caseTypes" className="block text-sm font-medium text-gray-700">
              Preferred Case Types
            </label>
            <select
              id="caseTypes"
              className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="corporate_insolvency">Corporate Insolvency Resolution</option>
              <option value="liquidation">Liquidation</option>
              <option value="bankruptcy">Bankruptcy</option>
              <option value="voluntary_liquidation">Voluntary Liquidation</option>
            </select>
          </div>

          {/* Upload Documents */}
          <div>
            <h2 className="mb-4 text-lg font-medium text-gray-800">Supporting Documents</h2>
            <label htmlFor="documents" className="block text-sm font-medium text-gray-700">
              Upload Documents (e.g., Professional Certifications, IBBI Approval Letters)
            </label>
            <input
              type="file"
              id="documents"
              accept=".pdf"
              className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ProfileSetup;
