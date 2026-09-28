"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BookingFormPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Appointment booking submitted successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col font-body-md">
      {/* TopAppBar */}
      <header className="bg-surface border-b border-outline-variant docked full-width top-0 z-50">
        <div className="flex justify-between items-center w-full px-lg md:px-xl max-w-container-max mx-auto h-20">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
            <h1 className="font-display-lg text-display-lg text-primary tracking-tight">HealthSync</h1>
          </div>
          <div className="flex items-center gap-md">
            <img alt="User Profile Avatar" className="w-10 h-10 rounded-full object-cover shadow-sm border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7dFOL92CRp1m_hwZP4_Lrb6CAojzayqmlZeoMHWjW_7lNnNYhlbwPVapSB7qcWjL8zWjcA3bfeFYt_IBShSySJqThOg3cX7QOg5WNAiEVjtBzY5BWRJQNZF4SKz2u9sA4QHzh3WUvnX9D1-6oFdTXcyOMKBrv8Mhim71CuRCTOpgcR6uOiPU6n8Ax4yDw9CJ2mWIK9y2Hqz0dGC8-dKjSg3wilV0-gSLfVemnf-HZgHz5DW4qTb15" />
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-container-max mx-auto px-lg md:px-xl py-2xl">
        <div className="max-w-3xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-xl">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-surface-variant z-0 rounded-full"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary z-0 rounded-full transition-all duration-300" style={{ width: step === 1 ? '33.33%' : step === 2 ? '66.66%' : '100%' }}></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md shadow-md border-2 border-primary">1</div>
                <span className="mt-xs font-label-sm text-primary">Service</span>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-label-md shadow-sm border-2 transition-colors ${step >= 2 ? 'bg-primary text-on-primary border-primary' : 'bg-surface text-on-surface-variant border-outline-variant'}`}>2</div>
                <span className={`mt-xs font-label-sm transition-colors ${step >= 2 ? 'text-primary' : 'text-on-surface-variant'}`}>Details</span>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-label-md shadow-sm border-2 transition-colors ${step >= 3 ? 'bg-primary text-on-primary border-primary' : 'bg-surface text-on-surface-variant border-outline-variant'}`}>3</div>
                <span className={`mt-xs font-label-sm transition-colors ${step >= 3 ? 'text-primary' : 'text-on-surface-variant'}`}>Insurance</span>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-xl p-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] relative overflow-hidden">
            
            {/* Step 1: Select Service */}
            {step === 1 && (
              <div className="transition-opacity duration-300">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Select a Service</h2>
                <p className="font-body-md text-on-surface-variant mb-lg">Please choose the type of appointment you need today.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-xl">
                  {/* Service Options */}
                  <label className="cursor-pointer group">
                    <input defaultChecked className="peer sr-only" name="service" type="radio" value="general" />
                    <div className="p-md rounded-lg border-2 border-outline-variant bg-surface hover:bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed transition-all duration-200 h-full flex flex-col items-start gap-sm">
                      <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>stethoscope</span>
                      <span className="font-title-lg text-on-surface">General Consultation</span>
                      <span className="font-body-sm text-on-surface-variant">Standard checkups and routine health concerns.</span>
                    </div>
                  </label>
                  <label className="cursor-pointer group">
                    <input className="peer sr-only" name="service" type="radio" value="specialist" />
                    <div className="p-md rounded-lg border-2 border-outline-variant bg-surface hover:bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed transition-all duration-200 h-full flex flex-col items-start gap-sm">
                      <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>cardiology</span>
                      <span className="font-title-lg text-on-surface">Specialist Visit</span>
                      <span className="font-body-sm text-on-surface-variant">Cardiology, dermatology, or other specialized care.</span>
                    </div>
                  </label>
                  <label className="cursor-pointer group">
                    <input className="peer sr-only" name="service" type="radio" value="dental" />
                    <div className="p-md rounded-lg border-2 border-outline-variant bg-surface hover:bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed transition-all duration-200 h-full flex flex-col items-start gap-sm">
                      <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>dentistry</span>
                      <span className="font-title-lg text-on-surface">Dental Care</span>
                      <span className="font-body-sm text-on-surface-variant">Cleanings, exams, and dental procedures.</span>
                    </div>
                  </label>
                  <label className="cursor-pointer group">
                    <input className="peer sr-only" name="service" type="radio" value="vaccine" />
                    <div className="p-md rounded-lg border-2 border-outline-variant bg-surface hover:bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed transition-all duration-200 h-full flex flex-col items-start gap-sm">
                      <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>vaccines</span>
                      <span className="font-title-lg text-on-surface">Vaccination</span>
                      <span className="font-body-sm text-on-surface-variant">Flu shots, travel vaccines, and immunizations.</span>
                    </div>
                  </label>
                </div>
                <div className="flex justify-end mt-lg">
                  <button onClick={nextStep} className="bg-primary text-on-primary font-label-md px-lg py-sm rounded-lg hover:bg-on-primary-fixed-variant transition-colors shadow-sm flex items-center gap-xs h-12">
                    Continue
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Patient Details */}
            {step === 2 && (
              <div className="transition-opacity duration-300">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Patient Details</h2>
                <p className="font-body-md text-on-surface-variant mb-lg">Tell us a bit about why you are visiting.</p>
                <div className="space-y-lg mb-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div>
                      <label className="block font-label-md text-on-surface mb-xs" htmlFor="firstName">First Name</label>
                      <input className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md text-on-surface" id="firstName" placeholder="John" type="text" />
                    </div>
                    <div>
                      <label className="block font-label-md text-on-surface mb-xs" htmlFor="lastName">Last Name</label>
                      <input className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md text-on-surface" id="lastName" placeholder="Doe" type="text" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-on-surface mb-xs" htmlFor="reason">Reason for Visit</label>
                    <textarea className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md text-on-surface resize-none" id="reason" placeholder="Briefly describe your symptoms or reason for scheduling..." rows={3}></textarea>
                  </div>
                  <div>
                    <label className="block font-label-md text-on-surface mb-xs">Preferred Time Slot (Optional)</label>
                    <div className="flex gap-sm overflow-x-auto pb-xs hide-scrollbar">
                      <div className="flex-shrink-0 px-md py-xs rounded-full border border-outline-variant font-label-sm text-on-surface-variant cursor-pointer hover:bg-surface-container-low hover:text-primary transition-colors">Morning (9AM - 12PM)</div>
                      <div className="flex-shrink-0 px-md py-xs rounded-full border border-outline-variant font-label-sm text-on-surface-variant cursor-pointer hover:bg-surface-container-low hover:text-primary transition-colors">Afternoon (12PM - 4PM)</div>
                      <div className="flex-shrink-0 px-md py-xs rounded-full border border-outline-variant font-label-sm text-on-surface-variant cursor-pointer hover:bg-surface-container-low hover:text-primary transition-colors">Evening (4PM - 7PM)</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-lg">
                  <button onClick={prevStep} className="text-primary font-label-md px-md py-sm rounded-lg hover:bg-surface-container-low transition-colors flex items-center gap-xs h-12">
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    Back
                  </button>
                  <button onClick={nextStep} className="bg-primary text-on-primary font-label-md px-lg py-sm rounded-lg hover:bg-on-primary-fixed-variant transition-colors shadow-sm flex items-center gap-xs h-12">
                    Continue
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Insurance Info */}
            {step === 3 && (
              <div className="transition-opacity duration-300">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Insurance Information</h2>
                <p className="font-body-md text-on-surface-variant mb-lg">Provide your insurance details to verify coverage.</p>
                <form onSubmit={submitForm}>
                  <div className="space-y-lg mb-xl">
                    <div>
                      <label className="block font-label-md text-on-surface mb-xs" htmlFor="provider">Insurance Provider</label>
                      <select defaultValue="" className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md text-on-surface appearance-none" id="provider">
                        <option disabled value="">Select Provider</option>
                        <option value="aetna">Aetna</option>
                        <option value="bcbs">Blue Cross Blue Shield</option>
                        <option value="cigna">Cigna</option>
                        <option value="uhc">UnitedHealthcare</option>
                        <option value="self">Self-Pay</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                      <div>
                        <label className="block font-label-md text-on-surface mb-xs" htmlFor="memberId">Member ID</label>
                        <input className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md text-on-surface" id="memberId" placeholder="e.g. ABC123456789" type="text" />
                      </div>
                      <div>
                        <label className="block font-label-md text-on-surface mb-xs" htmlFor="groupNumber">Group Number</label>
                        <input className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md text-on-surface" id="groupNumber" placeholder="e.g. 987654" type="text" />
                      </div>
                    </div>
                    <div className="p-md bg-surface-container-low rounded-lg border border-outline-variant flex gap-sm items-start">
                      <span className="material-symbols-outlined text-primary text-xl mt-xs">info</span>
                      <p className="font-body-sm text-on-surface-variant">By submitting this form, you agree to our terms of service and consent to the verification of your insurance benefits prior to your appointment.</p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-lg">
                    <button type="button" onClick={prevStep} className="text-primary font-label-md px-md py-sm rounded-lg hover:bg-surface-container-low transition-colors flex items-center gap-xs h-12">
                      <span className="material-symbols-outlined text-sm">arrow_back</span>
                      Back
                    </button>
                    <button type="submit" className="bg-primary text-on-primary font-label-md px-lg py-sm rounded-lg hover:bg-on-primary-fixed-variant transition-colors shadow-sm flex items-center gap-xs h-12">
                      Book Appointment
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
