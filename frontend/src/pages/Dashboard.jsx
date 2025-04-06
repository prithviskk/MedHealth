import React from 'react';
import profileImage from '../assets/images/Bed Head Units and Pendants.jpg';

const Dashboard = () => {
  const user = {
    name: 'Sharifatu Mubarak',
    category: 'Silver',
    uid: 'S3D4F5GHUJI8',
    status: 'Active',
    phone: '+91 9876543210',
    email: 'user@email.com',
    nin: '5432 3456 7890',
    dob: '09 Sept, 1990',
    gender: 'F',
    joinDate: '23 Aug, 2023',
    account: '9163785488',
    bank: 'State Bank of India',
    crop: 'N/A',
    province: 'Maharashtra',
    region: 'Mumbai',
    farmSize: 'N/A',
    location: '19.0760° N, 72.8777° E',
    address: '5th Floor, Andheri West, Mumbai - 400053, Maharashtra, India.',
    ecardSize: '450 KB'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 grid md:grid-cols-2 gap-6">
        {/* Profile Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover mb-4"
          />
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 font-medium">CATEGORY: {user.category.toUpperCase()}</p>
            <h2 className="text-xl font-semibold mt-1">{user.name}</h2>
            <p className="text-sm text-gray-500">UID: {user.uid}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
              Verified
            </span>
          </div>
          <div className="mt-6 text-sm text-gray-700 space-y-1">
            <p><strong>Date Join:</strong> {user.joinDate}</p>
            <p><strong>Status:</strong> {user.status}</p>
            <p><strong>Phone Number:</strong> {user.phone}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Aadhaar:</strong> {user.nin}</p>
            <p><strong>DoB:</strong> {user.dob}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
          </div>
        </div>

        {/* Account and Location Section */}
        <div className="bg-gray-100 rounded-lg p-6 space-y-4">
          <div className="bg-green-800 text-white rounded-lg p-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{user.account}</p>
              <p className="text-sm">{user.bank}</p>
            </div>
            <button className="bg-white text-green-800 px-4 py-1 text-sm rounded-md font-semibold hover:bg-green-100">
              Edit
            </button>
          </div>

          <div className="text-sm text-gray-700 space-y-1">
            <h4 className="font-semibold text-base mb-1">Location Info</h4>
            <p><strong>City:</strong> {user.region}</p>
            <p><strong>State:</strong> {user.province}</p>
            <p><strong>Coordinates:</strong> {user.location}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>

          <div className="bg-white border rounded-lg p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-600">{user.ecardSize}</span>
            </div>
            <button className="bg-gray-200 px-4 py-1 rounded-md text-sm font-medium hover:bg-gray-300">
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
