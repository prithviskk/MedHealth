import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const PatientAppointmentForm = ({ darkMode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data,)=>{
    console.log(data);
    
  };
  return (
    <div className={`max-w-md mx-auto mt-10 shadow-md rounded-2xl p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`} >
      <h2 className={`text-2xl font-bold text-center ${darkMode ? "text-red-500" : "text-red-500"}`}>
        Patient Appointment Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        {/* Patient Name */}
        <div>
          <label
            className={`block font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            Patient Name
          </label>
          <input
            {...register("patientName", { required: "Patient name is required" })}
            className={`w-full px-4 py-2 border rounded-lg ${
              darkMode
                ? "bg-gray-700 text-white focus:ring-blue-400"
                : "bg-gray-100 text-gray-700 focus:ring-red-400"
            } focus:outline-none focus:ring-2`}
          />
          {errors.patientName && (<p className="text-red-500 text-sm mt-1">{errors.patientName.message} </p>)}
        </div>

        {/* Age */}
        <div>
          <label
            className={`block font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Age
          </label>
          <input
            type="number"
            {...register("age", { required: "Age is required" })}
            className={`w-full px-4 py-2 border rounded-lg ${ darkMode?"bg-gray-700 text-white focus:ring-blue-400"
            :"bg-gray-100 text-gray-700 focus:ring-red-400"
            } focus:outline-none focus:ring-2`}
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label
            className={`block font-medium mb-1 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Gender
          </label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className={`w-full px-4 py-2 border rounded-lg ${
              darkMode
                ? "bg-gray-700 text-white focus:ring-blue-400"
                : "bg-gray-100 text-gray-700 focus:ring-red-400"
            } focus:outline-none focus:ring-2`}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
          )}
        </div>

        {/* Contact Number */}
        <div>
          <label
            className={`block font-medium mb-1 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Contact Number
          </label>
          <input
            type="tel"
            {...register("contactNumber", {
              required: "Contact number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid contact number",
              },
            })}
            className={`w-full px-4 py-2 border rounded-lg ${
              darkMode
                ? "bg-gray-700 text-white focus:ring-blue-400"
                : "bg-gray-100 text-gray-700 focus:ring-red-400"
            } focus:outline-none focus:ring-2`}
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.contactNumber.message}
            </p>
          )}
        </div>

        {/* Appointment Date */}
        <div>
          <label
            className={`block font-medium mb-1 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Appointment Date
          </label>
          <input
            type="date"
            {...register("appointmentDate", { required: "Date is required" })}
            className={`w-full px-4 py-2 border rounded-lg ${
              darkMode
                ? "bg-gray-700 text-white focus:ring-blue-400"
                : "bg-gray-100 text-gray-700 focus:ring-red-400"
            } focus:outline-none focus:ring-2`}
          />
          {errors.appointmentDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.appointmentDate.message}
            </p>
          )}
        </div>

        {/* Reason */}
        <div>
          <label
            className={`block font-medium mb-1 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Reason for Appointment
          </label>
          <textarea
            {...register("reason", { required: "Reason is required" })}
            className={`w-full px-4 py-2 border rounded-lg h-24 ${
              darkMode
                ? "bg-gray-700 text-white focus:ring-blue-400"
                : "bg-gray-100 text-gray-700 focus:ring-red-400"
            } focus:outline-none focus:ring-2 resize-none`}
          />
          {errors.reason && (
            <p className="text-red-500 text-sm mt-1">{errors.reason.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full font-semibold py-2 rounded-lg transition-all ${
           darkMode?"bg-blue-500 hover:bg-blue-600 text-white":"bg-red-500 hover:bg-red-600 text-white"}`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientAppointmentForm;
