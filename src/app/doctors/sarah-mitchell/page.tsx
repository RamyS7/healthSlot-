"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function DoctorProfilePage() {
  const [selectedTime, setSelectedTime] = useState("02:00 PM");

  const morningSlots = ["09:00 AM", "10:30 AM", "11:15 AM"];
  const afternoonSlots = ["02:00 PM", "03:45 PM", "04:30 PM"];
  const eveningSlots = ["06:00 PM", "07:15 PM"];
  const bookedSlots = ["06:00 PM"];

  return (
    <div className="bg-[#faf8ff] text-[#131b2e] min-h-screen overflow-x-hidden">
      <Navbar activePage="find-doctors" showUserAvatar />

      <main className="max-w-[1400px] mx-auto px-[16px] md:px-[40px] py-[48px] grid grid-cols-1 lg:grid-cols-12 gap-[24px]">
        {/* ── Left Column ── */}
        <div className="lg:col-span-8 space-y-[48px]">
          {/* Hero Header */}
          <section className="flex flex-col md:flex-row gap-[24px] items-start md:items-center bg-white p-[24px] rounded-xl soft-shadow">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#faf8ff] shadow-md"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO0x9xJoLL1yMyDN0cue8i5JhUVXssM5puXYA3Y2Mrvsot90kXgT6gQ63QQywfIjINbHUAEdCudIBAS57jAJ6Wf188yIVVugopvor3bEVmRtRefzdv92bQ-qfYocE-XlFgIowP3fJaNimAaUysRgHRgSjKCaEtfSMGJ0TFZjDUoj8CMbyhRWPTBY9vII9nXTG8aielFlPn5g92Qu6VOu0RRGZQRaEhsiiM-Kp8sVAktTVz3Y5zApfH"
                alt="Dr. Sarah Mitchell"
              />
              <span
                className="absolute bottom-2 right-2 w-6 h-6 bg-[#007e37] border-4 border-[#faf8ff] rounded-full"
                title="Available Today"
              ></span>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-[12px]">
                <h1 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold text-[#131b2e]">
                  Dr. Sarah Mitchell, MD
                </h1>
                <span className="px-3 py-1 bg-[#6df5e1] text-[#006f64] text-[12px] leading-[16px] font-bold rounded-full">
                  Cardiology Specialist
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#434655]">
                <span className="material-symbols-outlined text-[20px]">
                  stars
                </span>
                <span className="text-[14px] leading-[20px] font-medium">
                  4.9 (240+ Reviews)
                </span>
                <span className="mx-2">•</span>
                <span className="material-symbols-outlined text-[20px]">
                  location_on
                </span>
                <span className="text-[14px] leading-[20px] font-medium">
                  Central Medical Plaza, New York
                </span>
              </div>
              <p className="text-[16px] leading-[24px] text-[#434655] max-w-2xl">
                Board-certified cardiologist with over 15 years of experience
                specializing in preventive heart care, interventional
                cardiology, and cardiovascular health management.
              </p>
            </div>
          </section>

          {/* Bio & Specialties */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <section className="bg-white p-[48px] rounded-xl soft-shadow space-y-[24px]">
              <h2 className="text-[24px] leading-[32px] font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-[#004ac6]">
                  person
                </span>{" "}
                Professional Bio
              </h2>
              <p className="text-[16px] leading-[24px] text-[#434655] leading-relaxed">
                Dr. Mitchell focuses on a patient-centered approach to cardiac
                health. She believes that early detection and personalized
                lifestyle modifications are the cornerstones of long-term
                wellness. She has successfully treated thousands of patients
                with complex heart conditions, utilizing the latest minimally
                invasive techniques.
              </p>
              <div className="space-y-[12px] pt-4">
                <h3 className="text-[14px] leading-[20px] text-[#131b2e] uppercase tracking-wider font-medium">
                  Education
                </h3>
                <ul className="space-y-[4px]">
                  <li className="flex items-start gap-2 text-[16px] leading-[24px] text-[#434655]">
                    <span className="material-symbols-outlined text-[18px] mt-1 text-[#004ac6]">
                      school
                    </span>
                    Harvard Medical School - Medical Degree
                  </li>
                  <li className="flex items-start gap-2 text-[16px] leading-[24px] text-[#434655]">
                    <span className="material-symbols-outlined text-[18px] mt-1 text-[#004ac6]">
                      school
                    </span>
                    Johns Hopkins University - Cardiology Residency
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-white p-[48px] rounded-xl soft-shadow space-y-[24px]">
              <h2 className="text-[24px] leading-[32px] font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-[#004ac6]">
                  clinical_notes
                </span>{" "}
                Clinical Specialties
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Echocardiography",
                  "Arrhythmia Management",
                  "Hypertension Control",
                  "Preventive Screening",
                  "Heart Failure Therapy",
                  "Stress Testing",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 bg-[#eaedff] text-[#004ac6] text-[14px] leading-[20px] font-medium rounded-lg"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-[48px] p-[24px] bg-[#6df5e1]/10 border border-[#6df5e1]/30 rounded-lg">
                <p className="text-sm italic text-[#006f64]/80">
                  &ldquo;Dr. Mitchell is currently accepting new patients for
                  initial consultations and second opinions.&rdquo;
                </p>
              </div>
            </section>
          </div>

          {/* Patient Reviews */}
          <section className="bg-white p-[48px] rounded-xl soft-shadow space-y-[48px]">
            <div className="flex justify-between items-center">
              <h2 className="text-[24px] leading-[32px] font-semibold">
                Patient Testimonials
              </h2>
              <button className="text-[#004ac6] text-[14px] leading-[20px] font-medium hover:underline">
                View All 243 Reviews
              </button>
            </div>
            <div className="space-y-[24px]">
              {/* Review 1 */}
              <div className="p-[24px] bg-[#f2f3ff] rounded-lg border border-[#c3c6d7]/30">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#b4c5ff] flex items-center justify-center font-bold text-[#004ac6]">
                      RJ
                    </div>
                    <div>
                      <h4 className="text-[14px] leading-[20px] font-medium text-[#131b2e]">
                        Robert J.
                      </h4>
                      <span className="text-xs text-[#434655]">
                        Visited for: Heart Palpitations
                      </span>
                    </div>
                  </div>
                  <div className="flex text-[#004ac6]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[16px] leading-[24px] text-[#434655] italic">
                  &ldquo;Dr. Mitchell was incredibly thorough and actually took
                  the time to listen to my concerns. The clinic&apos;s
                  environment was calm and professional.&rdquo;
                </p>
              </div>
              {/* Review 2 */}
              <div className="p-[24px] bg-[#f2f3ff] rounded-lg border border-[#c3c6d7]/30">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#4fdbc8] flex items-center justify-center font-bold text-[#006b5f]">
                      AM
                    </div>
                    <div>
                      <h4 className="text-[14px] leading-[20px] font-medium text-[#131b2e]">
                        Alice M.
                      </h4>
                      <span className="text-xs text-[#434655]">
                        Visited for: Routine Wellness
                      </span>
                    </div>
                  </div>
                  <div className="flex text-[#004ac6]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[16px] leading-[24px] text-[#434655] italic">
                  &ldquo;Clear communication and very reassuring. She explained
                  the diagnosis in a way I could easily understand without
                  medical jargon.&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="bg-white rounded-xl soft-shadow overflow-hidden">
            <div className="p-[48px]">
              <h2 className="text-[24px] leading-[32px] font-semibold mb-2">
                Clinic Location
              </h2>
              <p className="text-[16px] leading-[24px] text-[#434655] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#004ac6]">
                  pin_drop
                </span>{" "}
                450 Lexington Ave, Suite 300, New York, NY 10017
              </p>
            </div>
            <div className="w-full h-80 relative">
              <div
                className="absolute inset-0 grayscale opacity-40 hover:opacity-100 transition-opacity duration-500 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_GgboY37JU_bO2ZURwMuiBxCINhIfUdg7MN_TDe5Zp71jl5jp7pd2o2MfTtJMRq4TK0TRuFz7micBc5bMPpmJwFkFPRG2FWXOrVQXJsjoQDRujk5fexIQ1MPGu6maU2Y4rnDYI5uwPhKI3Vrmap5E9ljsxIUqGEQJGrLhZl9BdAgwGSDr7NvWjfw_kW2IDg8bTdADZkrSswuXnOqF7rHmxVtNQvNeGPJDi6TsdUi31rp9Avllv2bn')",
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#004ac6] text-white p-3 rounded-full shadow-lg animate-bounce">
                  <span className="material-symbols-outlined">
                    medical_services
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ── Right Column: Booking Card ── */}
        <div className="lg:col-span-4">
          <aside className="sticky top-28 bg-white p-[24px] md:p-[48px] rounded-xl elevated-shadow border border-[#c3c6d7]/20 space-y-[48px]">
            <div className="space-y-[12px]">
              <h2 className="text-[24px] leading-[32px] font-semibold text-[#131b2e]">
                Book Appointment
              </h2>
              <p className="text-[14px] leading-[20px] font-medium text-[#434655] flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">
                  currency_exchange
                </span>{" "}
                Consultation Fee: $120.00
              </p>
            </div>

            {/* Calendar Widget */}
            <div>
              <div className="flex justify-between items-center mb-[24px]">
                <h3 className="text-[14px] leading-[20px] font-bold uppercase tracking-widest text-[#434655]">
                  November 2024
                </h3>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-[#eaedff] rounded-full transition-colors">
                    <span className="material-symbols-outlined">
                      chevron_left
                    </span>
                  </button>
                  <button className="p-1 hover:bg-[#eaedff] rounded-full transition-colors">
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-[#434655]/60 mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <div key={i}>{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {[27, 28, 29, 30, 31].map((d) => (
                  <div
                    key={d}
                    className="h-10 flex items-center justify-center rounded-lg text-[#434655]/30"
                  >
                    {d}
                  </div>
                ))}
                {[1, 2].map((d) => (
                  <button
                    key={d}
                    className="h-10 flex items-center justify-center rounded-lg hover:bg-[#e2e7ff] transition-all"
                  >
                    {d}
                  </button>
                ))}
                <button className="h-10 flex items-center justify-center rounded-lg hover:bg-[#e2e7ff] transition-all">
                  3
                </button>
                <button className="h-10 flex items-center justify-center rounded-lg bg-[#6df5e1] text-[#006f64] font-bold relative">
                  4
                  <span className="absolute bottom-1 w-1 h-1 bg-[#006f64] rounded-full"></span>
                </button>
                <button className="h-10 flex items-center justify-center rounded-lg hover:bg-[#e2e7ff] transition-all">
                  5
                </button>
                <button className="h-10 flex items-center justify-center rounded-lg bg-[#004ac6] text-white font-bold shadow-md">
                  6
                </button>
                {[7, 8, 9, 10].map((d) => (
                  <button
                    key={d}
                    className="h-10 flex items-center justify-center rounded-lg hover:bg-[#e2e7ff] transition-all"
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div className="space-y-[24px]">
              <div className="flex items-center justify-between">
                <h3 className="text-[14px] leading-[20px] font-bold text-[#131b2e]">
                  Select Time Slot
                </h3>
                <span className="text-xs text-[#434655]">
                  Wednesday, Nov 6
                </span>
              </div>
              <div className="space-y-[12px]">
                {/* Morning */}
                <div>
                  <span className="text-xs font-bold text-[#434655]/70 block mb-2">
                    Morning
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {morningSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 text-sm rounded-lg border transition-all ${
                          selectedTime === slot
                            ? "bg-[#004ac6] text-white border-[#004ac6]"
                            : "border-[#c3c6d7] hover:border-[#004ac6] hover:text-[#004ac6]"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Afternoon */}
                <div>
                  <span className="text-xs font-bold text-[#434655]/70 block mb-2">
                    Afternoon
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {afternoonSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 text-sm rounded-lg border transition-all ${
                          selectedTime === slot
                            ? "bg-[#004ac6] text-white border-[#004ac6]"
                            : "border-[#c3c6d7] hover:border-[#004ac6] hover:text-[#004ac6]"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Evening */}
                <div>
                  <span className="text-xs font-bold text-[#434655]/70 block mb-2">
                    Evening
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {eveningSlots.map((slot) => (
                      <button
                        key={slot}
                        disabled={bookedSlots.includes(slot)}
                        onClick={() =>
                          !bookedSlots.includes(slot) && setSelectedTime(slot)
                        }
                        className={`py-2 text-sm rounded-lg border transition-all ${
                          bookedSlots.includes(slot)
                            ? "border-[#c3c6d7] opacity-40 cursor-not-allowed line-through"
                            : selectedTime === slot
                            ? "bg-[#004ac6] text-white border-[#004ac6]"
                            : "border-[#c3c6d7] hover:border-[#004ac6] hover:text-[#004ac6]"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-[24px] border-t border-[#c3c6d7]/30 space-y-[24px]">
              <div className="flex items-start gap-3 p-3 bg-[#f2f3ff] rounded-lg">
                <span className="material-symbols-outlined text-[#004ac6]">
                  info
                </span>
                <p className="text-xs text-[#434655] leading-tight">
                  By clicking confirm, you agree to our 24-hour cancellation
                  policy. Insurance details will be collected on the next screen.
                </p>
              </div>
              <Link
                href="/dashboard"
                className="w-full py-4 bg-[#004ac6] text-white font-bold rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-[16px] leading-[24px] flex items-center justify-center gap-2"
              >
                Confirm Appointment
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-[48px] px-[40px] grid grid-cols-1 md:grid-cols-4 gap-[24px] bg-[#eaedff] mt-[80px]">
        <div className="space-y-4">
          <h3 className="text-[24px] leading-[32px] font-bold text-[#004ac6]">
            MediTrust
          </h3>
          <p className="text-[16px] leading-[24px] text-[#434655]">
            Providing accessible healthcare solutions through technology and
            compassion since 2024.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-[14px] leading-[20px] font-bold text-[#131b2e] uppercase tracking-widest">
            Platform
          </h4>
          <ul className="space-y-2">
            {["Find Doctors", "Specialties", "Video Consultation"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#434655] hover:text-[#004ac6] underline transition-all"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-[14px] leading-[20px] font-bold text-[#131b2e] uppercase tracking-widest">
            Support
          </h4>
          <ul className="space-y-2">
            {["Contact Support", "Privacy Policy", "Terms of Service"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#434655] hover:text-[#004ac6] underline transition-all"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-[14px] leading-[20px] font-bold text-[#131b2e] uppercase tracking-widest">
            Newsletter
          </h4>
          <div className="flex gap-2">
            <input
              className="bg-[#faf8ff] border border-[#c3c6d7] rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-[#004ac6] outline-none"
              placeholder="Email"
              type="email"
            />
            <button className="bg-[#004ac6] text-white px-4 py-2 rounded-lg">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
          <p className="text-[12px] leading-[16px] text-[#434655]">
            © 2024 MediTrust Healthcare. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
