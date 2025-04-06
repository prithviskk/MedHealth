import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { useAppointmentStore } from "../store/useAppointmentStore";
import toast from "react-hot-toast";
const PatientAppointmentForm = ({ darkMode, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addAppointment = useAppointmentStore((state) => state.addAppointment);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    onClose();
    alert("Booking done successfully ")
    addAppointment(data);
    if (typeof onClose === "function") {
      onClose();
    }
  };

  const inputBase =
    "w-full px-4 py-2 border rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:ring-2 transition-all";
  const lightInput =
    "bg-white border-gray-300 text-gray-800 focus:ring-red-400";
  const darkInput =
    "bg-gray-700 border-gray-600 text-white focus:ring-red-400";

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto mx-auto rounded-2xl p-6 shadow-xl ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4 text-red-600">
          Book an Appointment
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <input
              placeholder="Your Name*"
              {...register("patientName", {
                required: "Patient name is required",
              })}
              className={`${inputBase} ${
                darkMode ? darkInput : lightInput
              }`}
            />
            {errors.patientName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.patientName.message}
              </p>
            )}
          </div>

          {/* Email and Phone */}
          <div className="flex gap-2">
            <input
              placeholder="Your Email*"
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className={`${inputBase} ${
                darkMode ? darkInput : lightInput
              }`}
            />
            <input
              placeholder="Your Phone"
              type="tel"
              {...register("contactNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
              className={`${inputBase} ${
                darkMode ? darkInput : lightInput
              }`}
            />
          </div>
          {errors.contactNumber && (
            <p className="text-red-500 text-sm -mt-2">
              {errors.contactNumber.message}
            </p>
          )}

          {/* Age */}
          <input
            placeholder="Your Age"
            type="number"
            {...register("age", {
              required: "Age is required",
            })}
            className={`${inputBase} ${darkMode ? darkInput : lightInput}`}
          />
          {errors.age && (
            <p className="text-red-500 text-sm -mt-2">{errors.age.message}</p>
          )}

          {/* Gender */}
          <select
            {...register("gender", {
              required: "Gender is required",
            })}
            className={`${inputBase} ${darkMode ? darkInput : lightInput}`}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm -mt-2">{errors.gender.message}</p>
          )}

          {/* Date and Time */}
          <div className="flex gap-2">
            <input
              type="date"
              {...register("appointmentDate", {
                required: "Appointment date is required",
              })}
              className={`${inputBase} ${
                darkMode ? darkInput : lightInput
              }`}
            />
            <input
              type="time"
              {...register("appointmentTime", {
                required: "Time is required",
              })}
              className={`${inputBase} ${
                darkMode ? darkInput : lightInput
              }`}
            />
          </div>

          {/* Reason */}
          <textarea
            placeholder="Your comment"
            {...register("reason", {
              required: "Reason is required",
            })}
            className={`${inputBase} h-24 resize-none ${
              darkMode ? darkInput : lightInput
            }`}
          ></textarea>
          {errors.reason && (
            <p className="text-red-500 text-sm -mt-2">{errors.reason.message}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-2 rounded-xl hover:bg-red-700 transition-all"
          >
            Book now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientAppointmentForm;
