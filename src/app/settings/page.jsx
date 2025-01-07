import Layout from "../components/Layout";

const Settings = () => {
  return (
    <Layout>
      <div className="max-w-4xl p-8 mx-auto mt-10 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-2xl font-semibold text-gray-800">Settings</h1>
        <form className="space-y-6">
          {/* Notification Preferences */}
          <div>
            <h2 className="mb-2 text-lg font-medium text-gray-800">Notification Preferences</h2>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="emailNotifications" className="ml-2 text-sm text-gray-700">
                Enable Email Notifications
              </label>
            </div>
            <div className="flex items-center mt-3">
              <input
                type="checkbox"
                id="smsNotifications"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="smsNotifications" className="ml-2 text-sm text-gray-700">
                Enable SMS Notifications
              </label>
            </div>
          </div>

          {/* Account Settings */}
          <div>
            <h2 className="mb-2 text-lg font-medium text-gray-800">Account Settings</h2>
            <label htmlFor="changePassword" className="block text-sm font-medium text-gray-700">
              Change Password
            </label>
            <input
              type="password"
              id="changePassword"
              className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter new password"
            />
          </div>

          {/* Appearance Settings */}
          <div>
            <h2 className="mb-2 text-lg font-medium text-gray-800">Appearance</h2>
            <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
              Select Theme
            </label>
            <select
              id="theme"
              className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System Default</option>
            </select>
          </div>

          {/* Language Settings */}
          <div>
            <h2 className="mb-2 text-lg font-medium text-gray-800">Language</h2>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700">
              Select Language
            </label>
            <select
              id="language"
              className="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Settings;
