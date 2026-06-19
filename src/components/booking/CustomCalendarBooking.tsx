import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format, isBefore, startOfDay } from "date-fns";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  Building2,
  Target,
  ArrowRight,
  ChevronLeft,
  CheckCircle,
  HelpCircle,
  Video,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

// Configuration
const DISABLE_WEEKENDS = true;
const GOOGLE_BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2pwEfwQCBbY8eZgs7bPdbaTLJzzCmU6_ZuQaRnAisL2VBrlPAkUxElWoEZJVhcNfXvR-PGB4LA";

const TIME_SLOTS = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  goal: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export default function CustomCalendarBooking() {
  const [step, setStep] = useState<"schedule" | "details">("schedule");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Form Fields
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    goal: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Date disable matcher
  const isDateDisabled = (date: Date) => {
    // Disable past dates (prior to today)
    const today = startOfDay(new Date());
    if (isBefore(date, today)) return true;

    // Disable weekends if configured
    if (DISABLE_WEEKENDS) {
      const day = date.getDay();
      return day === 0 || day === 6; // Sunday = 0, Saturday = 6
    }

    return false;
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset selected time when date changes
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinueToDetails = () => {
    if (selectedDate && selectedTime) {
      setStep("details");
    }
  };

  const handleBackToSchedule = () => {
    setStep("schedule");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !selectedDate || !selectedTime) return;

    // Save booking state temporarily in sessionStorage
    const bookingPayload = {
      ...formData,
      date: format(selectedDate, "yyyy-MM-dd"),
      time: selectedTime,
      duration: "30 minutes",
      type: "Free Marketing Consultation",
      timestamp: new Date().toISOString(),
    };

    sessionStorage.setItem("eyelevel_booking_pending", JSON.stringify(bookingPayload));

    // Redirect to Google Appointment Scheduling
    window.open(GOOGLE_BOOKING_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full text-[#173229] p-4 sm:p-6 md:p-8">
      {/* Sleek Horizontal Progress Bar */}
      <div className="flex items-center justify-between border-b border-[#173229]/10 pb-6 mb-8 font-bricolage">
        <div className="flex items-center gap-2">
          <span
            className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold transition-colors ${
              step === "schedule" ? "bg-[#173229] text-[#F8FFE8]" : "bg-[#173229]/20 text-[#173229]"
            }`}
          >
            1
          </span>
          <span className={`text-sm font-bold transition-colors ${step === "schedule" ? "text-[#173229]" : "text-[#173229]/45"}`}>
            Select Date & Time
          </span>
        </div>
        <div className="flex-grow mx-4 border-t border-dashed border-[#173229]/20" />
        <div className="flex items-center gap-2">
          <span
            className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold transition-colors ${
              step === "details" ? "bg-[#173229] text-[#F8FFE8]" : "bg-[#173229]/20 text-[#173229]"
            }`}
          >
            2
          </span>
          <span className={`text-sm font-bold transition-colors ${step === "details" ? "text-[#173229]" : "text-[#173229]/45"}`}>
            Your Information
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === "schedule" ? (
          <motion.div
            key="schedule"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Calendar Selection (Left Column) */}
            <div className="lg:col-span-7 flex flex-col">
              <h3 className="font-dela text-base uppercase tracking-wide text-[#173229] mb-1">
                Choose a Date
              </h3>
              <p className="font-bricolage text-sm text-[#173229]/60 mb-4">
                Select a business day that works best for your team.
              </p>

              <div
                className="border rounded-2xl p-2 sm:p-4 flex justify-center items-center shadow-sm bg-white"
                style={{
                  borderColor: "rgba(23, 50, 41, 0.08)",
                }}
              >
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={isDateDisabled}
                  className="font-bricolage border-0 max-w-full"
                  classNames={{
                    months: "flex flex-col space-y-4",
                    month: "space-y-4 w-full",
                    caption: "flex justify-between pt-1 relative items-center mb-2 px-1",
                    caption_label: "text-base font-bold font-bricolage text-[#173229]",
                    nav: "space-x-1 flex items-center gap-2",
                    nav_button:
                      "h-9 w-9 bg-white border border-[#173229]/15 text-[#173229] rounded-xl hover:bg-[#E2FEA5]/10 hover:border-[#173229]/30 hover:scale-105 active:scale-95 flex items-center justify-center transition-all",
                    nav_button_previous: "relative left-0",
                    nav_button_next: "relative right-0",
                    table: "w-full border-collapse space-y-1",
                    head_row: "flex w-full justify-center mb-2",
                    head_cell: "text-[#173229]/50 rounded-md w-8 sm:w-10 font-medium text-[10px] sm:text-xs uppercase font-bricolage tracking-wider text-center",
                    row: "flex w-full justify-center mt-1 sm:mt-2",
                    cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-transparent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 w-8 sm:w-10",
                    day: "h-8 w-8 sm:h-10 sm:w-10 p-0 font-normal font-bricolage text-[#173229] aria-selected:opacity-100 hover:bg-[#E2FEA5]/30 rounded-xl transition-all",
                    day_selected:
                      "bg-[#E2FEA5] text-[#173229] font-bold hover:bg-[#E2FEA5] hover:text-[#173229] focus:bg-[#E2FEA5] focus:text-[#173229] border border-[#173229]/20 shadow-sm",
                    day_today: "bg-[#173229]/5 text-[#173229] font-bold border border-[#173229]/10",
                    day_outside: "text-[#173229]/30 opacity-50",
                    day_disabled: "text-[#173229]/30 opacity-50 cursor-not-allowed line-through",
                  }}
                />
              </div>
            </div>

            {/* Time Slot Selection (Right Column) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="font-dela text-base uppercase tracking-wide text-[#173229] mb-1">
                  Select a Time
                </h3>
                <p className="font-bricolage text-sm text-[#173229]/60 mb-4">
                  Select a 30-minute availability window.
                </p>

                {selectedDate ? (
                  <div className="flex flex-col gap-4">
                    <p className="font-bricolage text-sm text-[#173229]/75">
                      Available times for{" "}
                      <span className="text-[#173229] font-bold underline decoration-brand-lime decoration-2">
                        {format(selectedDate, "EEEE, MMMM dd")}
                      </span>
                      :
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {TIME_SLOTS.map((slot) => {
                        const isSelected = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className="py-3 px-2 border rounded-xl font-bricolage text-xs sm:text-sm font-semibold text-center transition-all"
                            style={{
                              backgroundColor: isSelected ? "#173229" : "rgba(23, 50, 41, 0.03)",
                              borderColor: isSelected ? "#173229" : "rgba(23, 50, 41, 0.12)",
                              color: isSelected ? "#F8FFE8" : "#173229",
                            }}
                          >
                            <Clock className={`w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5 ${isSelected ? "opacity-90" : "opacity-50"}`} />
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div
                    className="h-64 border border-dashed rounded-3xl flex flex-col items-center justify-center p-6 text-center"
                    style={{
                      backgroundColor: "rgba(23, 50, 41, 0.02)",
                      borderColor: "rgba(23, 50, 41, 0.12)",
                    }}
                  >
                    <CalendarIcon className="w-8 h-8 text-[#173229]/30 mb-2" />
                    <p className="font-bricolage text-sm text-[#173229]/50 max-w-[200px]">
                      Select a date on the calendar to see available consultation slots.
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Action */}
              <div className="mt-12 lg:mt-auto pt-6">
                <Button
                  onClick={handleContinueToDetails}
                  disabled={!selectedDate || !selectedTime}
                  className="w-full flex items-center justify-center gap-2 font-bricolage font-semibold text-sm tracking-wider uppercase group rounded-full hover:translate-y-0.5 hover:shadow-none transition-all duration-150 py-6 disabled:opacity-50 disabled:pointer-events-none"
                  style={{
                    backgroundColor: "#173229",
                    color: "#F8FFE8",
                    border: "3px solid #0a0a0a",
                    boxShadow: "0 4px 0 #0a0a0a",
                  }}
                >
                  Continue to Details
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Form Section (Left Column) */}
            <div className="lg:col-span-7 flex flex-col">
              <button
                type="button"
                onClick={handleBackToSchedule}
                className="flex items-center text-xs font-bold text-[#173229]/70 hover:text-[#173229] mb-4 font-bricolage uppercase tracking-wider"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Select Date & Time
              </button>

              <h3 className="font-dela text-base uppercase tracking-wide text-[#173229] mb-1">
                Your Details
              </h3>
              <p className="font-bricolage text-sm text-[#173229]/60 mb-6">
                Tell us about your organization and growth goals.
              </p>

              <div className="flex flex-col gap-4 font-bricolage">
                {/* Responsive 2-Column Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-sm font-bold text-[#173229] flex items-center gap-1.5">
                      <User className="w-4 h-4 opacity-65" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full border rounded-xl px-4 py-3 font-bricolage text-sm focus:outline-none transition-all"
                      style={{
                        backgroundColor: "rgba(23, 50, 41, 0.04)",
                        borderColor: errors.name ? "rgb(239, 68, 68)" : "rgba(23, 50, 41, 0.15)",
                        color: "#173229",
                      }}
                    />
                    {errors.name && (
                      <span className="text-red-600 text-xs font-semibold mt-0.5">{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm font-bold text-[#173229] flex items-center gap-1.5">
                      <Mail className="w-4 h-4 opacity-65" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="w-full border rounded-xl px-4 py-3 font-bricolage text-sm focus:outline-none transition-all"
                      style={{
                        backgroundColor: "rgba(23, 50, 41, 0.04)",
                        borderColor: errors.email ? "rgb(239, 68, 68)" : "rgba(23, 50, 41, 0.15)",
                        color: "#173229",
                      }}
                    />
                    {errors.email && (
                      <span className="text-red-600 text-xs font-semibold mt-0.5">{errors.email}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="text-sm font-bold text-[#173229] flex items-center gap-1.5">
                      <Phone className="w-4 h-4 opacity-65" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full border rounded-xl px-4 py-3 font-bricolage text-sm focus:outline-none transition-all"
                      style={{
                        backgroundColor: "rgba(23, 50, 41, 0.04)",
                        borderColor: errors.phone ? "rgb(239, 68, 68)" : "rgba(23, 50, 41, 0.15)",
                        color: "#173229",
                      }}
                    />
                    {errors.phone && (
                      <span className="text-red-600 text-xs font-semibold mt-0.5">{errors.phone}</span>
                    )}
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="company" className="text-sm font-bold text-[#173229] flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 opacity-65" />
                      Company Name <span className="text-[#173229]/50 text-xs font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Acme Corp"
                      className="w-full border rounded-xl px-4 py-3 font-bricolage text-sm focus:outline-none transition-all"
                      style={{
                        backgroundColor: "rgba(23, 50, 41, 0.04)",
                        borderColor: "rgba(23, 50, 41, 0.15)",
                        color: "#173229",
                      }}
                    />
                  </div>
                </div>

                {/* Business Goal */}
                <div className="flex flex-col gap-1 mt-2">
                  <label htmlFor="goal" className="text-sm font-bold text-[#173229] flex items-center gap-1.5">
                    <Target className="w-4 h-4 opacity-65" />
                    Growth Objective <span className="text-[#173229]/50 text-xs font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="goal"
                    name="goal"
                    rows={3}
                    value={formData.goal}
                    onChange={handleInputChange}
                    placeholder="Tell us about your goals (e.g., scale paid acquisition, rebuild brand design system)..."
                    className="w-full border rounded-xl px-4 py-3 font-bricolage text-sm focus:outline-none resize-none transition-all"
                    style={{
                      backgroundColor: "rgba(23, 50, 41, 0.04)",
                      borderColor: "rgba(23, 50, 41, 0.15)",
                      color: "#173229",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Summary & Redirection (Right Column) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="font-dela text-base uppercase tracking-wide text-[#173229] mb-1">
                  Booking Summary
                </h3>
                <p className="font-bricolage text-sm text-[#173229]/60 mb-6">
                  Review selected session parameters.
                </p>

                {/* Modern Receipt Style Summary Card */}
                <div
                  className="border rounded-2xl p-6 flex flex-col gap-5 font-bricolage shadow-sm bg-white"
                  style={{
                    borderColor: "rgba(23, 50, 41, 0.08)",
                  }}
                >
                  <div className="flex items-start gap-3 border-b border-[#173229]/10 pb-4">
                    <div
                      className="border p-2.5 rounded-xl mt-0.5 flex items-center justify-center"
                      style={{
                        backgroundColor: "#E2FEA5",
                        borderColor: "rgba(23, 50, 41, 0.12)",
                        color: "#173229",
                      }}
                    >
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#173229] uppercase">
                        Free Growth Consultation
                      </h4>
                      <p className="text-xs text-[#173229]/65 font-semibold mt-0.5">
                        Duration: 30 Minutes
                      </p>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="flex flex-col gap-4">
                    {/* Meeting Account */}
                    <div className="flex items-center gap-3.5">
                      <User className="w-4 h-4 text-[#173229]/60" />
                      <div>
                        <p className="text-[10px] text-[#173229]/45 font-bold uppercase tracking-wider">
                          Meeting Account
                        </p>
                        <p className="text-sm font-bold text-[#173229]">
                          EyeLevel Growth Studio
                        </p>
                      </div>
                    </div>

                    {/* Date */}
                    {selectedDate && (
                      <div className="flex items-center gap-3.5">
                        <CalendarIcon className="w-4 h-4 text-[#173229]/60" />
                        <div>
                          <p className="text-[10px] text-[#173229]/45 font-bold uppercase tracking-wider">
                            Date
                          </p>
                          <p className="text-sm font-bold text-[#173229]">
                            {format(selectedDate, "EEEE, MMMM dd, yyyy")}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Time */}
                    {selectedTime && (
                      <div className="flex items-center gap-3.5">
                        <Clock className="w-4 h-4 text-[#173229]/60" />
                        <div>
                          <p className="text-[10px] text-[#173229]/45 font-bold uppercase tracking-wider">
                            Selected Time
                          </p>
                          <p className="text-sm font-bold text-[#173229]">{selectedTime}</p>
                        </div>
                      </div>
                    )}

                    {/* Platform */}
                    <div className="flex items-center gap-3.5">
                      <Video className="w-4 h-4 text-[#173229]/60" />
                      <div>
                        <p className="text-[10px] text-[#173229]/45 font-bold uppercase tracking-wider">
                          Platform
                        </p>
                        <p className="text-sm font-bold text-[#173229]">
                          Google Meet Video Call
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 text-xs border-t border-[#173229]/10 pt-4 text-[#173229]/50 flex items-start gap-2 leading-relaxed">
                    <HelpCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#173229]/70" />
                    <span>
                      After completing Google confirmation, you will receive calendar reminders and join links directly.
                    </span>
                  </div>
                </div>
              </div>

              {/* Redirection CTA */}
              <div className="mt-12 lg:mt-auto pt-8 flex flex-col gap-3">
                <Button
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-2 font-bricolage font-semibold text-sm tracking-wider uppercase group rounded-full hover:translate-y-0.5 hover:shadow-none transition-all duration-150 py-6"
                  style={{
                    backgroundColor: "#173229",
                    color: "#F8FFE8",
                    border: "3px solid #0a0a0a",
                    boxShadow: "0 4px 0 #0a0a0a",
                  }}
                >
                  <span className="sm:hidden">Continue</span>
                  <span className="hidden sm:inline">Continue to Google Booking</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Button>
                <p className="text-[10px] sm:text-xs text-center text-[#173229]/50 font-bricolage leading-relaxed">
                  Final confirmation will be completed securely through Google Calendar.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
