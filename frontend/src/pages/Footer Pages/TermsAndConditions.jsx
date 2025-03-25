import React from 'react';

const TermsAndConditions = ({ darkMode }) => {
  return (
    <div className={`min-h-screen px-6 py-12 md:px-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-red-500 mb-6 text-center">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        {/* 1. Introduction */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-2">1. Introduction</h2>
          <p className="text-sm leading-relaxed">
            Welcome to MedHealth, an online platform for booking doctor consultations. By using our website or mobile application, you agree to these Terms and Conditions. Please read them carefully before proceeding.
          </p>
        </section>

        {/* 2. User Responsibilities */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-2">2. User Responsibilities</h2>
          <p className="text-sm leading-relaxed">
            As a user of MedHealth, you must:
          </p>
          <ul className="list-disc ml-6 mt-2 text-sm">
            <li>Provide accurate and up-to-date information during registration.</li>
            <li>Ensure the confidentiality of your account credentials.</li>
            <li>Use the platform strictly for legal medical booking purposes.</li>
            <li>Refrain from sharing misleading or false information.</li>
          </ul>
        </section>

        {/* 3. Booking & Cancellation Policy */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-2">3. Booking & Cancellation Policy</h2>
          <p className="text-sm leading-relaxed">
            Appointments booked through MedHealth are subject to the following terms:
          </p>
          <ul className="list-disc ml-6 mt-2 text-sm">
            <li>Appointments can be booked based on doctor availability.</li>
            <li>Cancellations must be made at least 24 hours before the appointment.</li>
            <li>Late cancellations or no-shows may result in penalties.</li>
          </ul>
        </section>

        {/* 4. Medical Disclaimer */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-2">4. Medical Disclaimer</h2>
          <p className="text-sm leading-relaxed">
            MedHealth is a facilitator for doctor appointments and does not provide medical advice. Always seek advice from a qualified medical professional for any health concerns. Our platform does not replace an actual medical consultation.
          </p>
        </section>

        {/* 5. Payments & Refunds */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-2">5. Payments & Refunds</h2>
          <p className="text-sm leading-relaxed">
            All payments for consultations are securely processed. Refunds may be issued under the following conditions:
          </p>
          <ul className="list-disc ml-6 mt-2 text-sm">
            <li>Full refund if the doctor cancels the appointment.</li>
            <li>Partial refund if cancellation is made within the allowed period.</li>
            <li>No refund for missed appointments without prior cancellation.</li>
          </ul>
        </section>

        {/* 6. Data Privacy & Security */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-2">6. Data Privacy & Security</h2>
          <p className="text-sm leading-relaxed">
            We value your privacy. Your personal and medical data is securely stored and will not be shared without your consent. Please refer to our <span className="text-red-400">Privacy Policy</span> for details.
          </p>
        </section>

        {/* 7. Account Termination */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-2">7. Account Termination</h2>
          <p className="text-sm leading-relaxed">
            We reserve the right to suspend or terminate user accounts in cases of:
          </p>
          <ul className="list-disc ml-6 mt-2 text-sm">
            <li>Misuse of the platform for fraudulent activities.</li>
            <li>Violation of any terms stated in this agreement.</li>
            <li>Providing false or misleading information.</li>
          </ul>
        </section>

        {/* 8. Changes to Terms */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-2">8. Changes to Terms</h2>
          <p className="text-sm leading-relaxed">
            MedHealth reserves the right to update these Terms and Conditions at any time. Continued use of our platform after changes are made constitutes acceptance of the new terms.
          </p>
        </section>

        {/* 9. Contact Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-red-500 mb-2">9. Contact Information</h2>
          <p className="text-sm leading-relaxed">
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <p className="text-sm font-semibold text-red-400 mt-2">
            support@medhealth.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
