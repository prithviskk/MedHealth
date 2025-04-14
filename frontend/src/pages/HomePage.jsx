import Collapse from "../components/Collapse";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";  
import im1 from "../assets/slider-01.jpg";
import im2 from "../assets/slider-3.jpg";
import im3 from "../assets/slider-4.jpg";
import im4 from "../assets/slider-5.jpg";
import im5 from "../assets/cms.jpg";
import AppointmentForm from "../components/AppointmentForm.jsx"
const images=[im1,im2,im3,im4,im5]
const services = [
  {
    title: "Emergency Care",
    description: "24/7 emergency services with fully equipped ambulances and expert doctors.",
    icon: "🚑",
  },
  {
    title: "Outpatient Services",
    description: "Consult with experienced specialists and get treated with care.",
    icon: "🩺",
  },
  {
    title: "Inpatient Services",
    description: "World-class inpatient care with state-of-the-art facilities.",
    icon: "🏥",
  },
  {
    title: "Pharmacy",
    description: "Complete range of medications and health supplements available.",
    icon: "💊",
  },
  {
    title: "Diagnostics",
    description: "Advanced imaging and lab tests with quick and accurate results.",
    icon: "🧪",
  },
];

const faqs = [
  {
    title: "What medical services are available?",
    content: "We offer emergency care, outpatient services, specialist consultations, and health checkups.",
  },
  {
    title: "How can I contact my doctor directly?",
    content: "You can contact your doctor through the patient portal under the 'My Doctors' section.",
  },
  {
    title: "Is there a way to view my lab test results online?",
    content: "Yes, you can view your lab test results in the 'My Reports' section of your patient portal.",
  },
  {
    title: "Can I book an appointment with a specific doctor?",
    content: "Yes, you can search for doctors by name or specialty in the booking section.",
  },
];

const HomePage = ({ darkMode,toggleForm}) => {
  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* Hero Section */}
      <div className="w-full">
        <Hero toggleForm={toggleForm}/>
      </div>

      {/* Services Section */}
      <section className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} py-16`}>
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-center text-red-500 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                <span className="text-5xl mb-4">{service.icon}</span>
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  } mb-2`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-center ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <div className="w-full">
        <Carousel  images={images}/>
      </div>

      {/* FAQ Section */}
<div className={`w-full py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
  <div className="container mx-auto px-6 md:px-16">
    <h2 className="text-3xl font-bold text-center text-red-500 mb-8">
      Frequently Asked Questions
    </h2>

    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <Collapse key={index} title={faq.title} content={faq.content} />
      ))}
    </div>
  </div>
</div>

      
    </div>
  );
};

export default HomePage;
