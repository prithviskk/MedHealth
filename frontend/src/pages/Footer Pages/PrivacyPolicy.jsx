import React from 'react';

const PrivacyPolicy = ({ darkMode }) => {
  return (
    <div className={`min-h-screen px-6 py-12 md:px-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-red-500 mb-6 text-center">Privacy Policy</h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-2">1. Introduction</h2>
          <p className="text-sm leading-relaxed">
            Welcome to MedHealth. Your privacy is of utmost importance to us. This Privacy Policy explains how we collect,
            use, and safeguard your personal information when you use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-2">2. Information We Collect</h2>
          <p className="text-sm leading-relaxed">
            We collect different types of information, including:
          </p>
          <ul className="list-disc ml-6 mt-2 text-sm">
            <li>Personal Information (Name, Email, Contact details, etc.)</li>
            <li>Medical Data (only when necessary for healthcare purposes)</li>
            <li>Device & Usage Information (IP address, browser type, etc.)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-2">3. How We Use Your Information</h2>
          <p className="text-sm leading-relaxed">
            Your information helps us provide and improve our services. We use it to:
          </p>
          <ul className="list-disc ml-6 mt-2 text-sm">
            <li>Process your medical appointments and requests</li>
            <li>Improve our services and user experience</li>
            <li>Ensure security and prevent fraud</li>
            <li>Send you important notifications and updates</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-2">4. Data Sharing & Security</h2>
          <p className="text-sm leading-relaxed">
            We do not sell or rent your data to third parties. We may share your information with healthcare providers or
            legal authorities when required by law. We implement strict security measures to protect your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-2">5. Your Rights</h2>
          <p className="text-sm leading-relaxed">
            You have the right to access, correct, or delete your personal data. If you have any concerns, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-2">6. Updates to This Policy</h2>
          <p className="text-sm leading-relaxed">
            We may update this Privacy Policy from time to time. We encourage you to review it periodically for changes.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;