"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BookingConfirmationPage() {
  const [confetti, setConfetti] = useState<{ id: number, left: string, bg: string, duration: string, delay: string }[]>([]);

  useEffect(() => {
    const colors = ['#003c90', '#006a61', '#86f2e4', '#d9e2ff'];
    const newConfetti = [];
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        left: Math.random() * 100 + 'vw',
        bg: colors[Math.floor(Math.random() * colors.length)],
        duration: (Math.random() * 3 + 2) + 's',
        delay: Math.random() * 2 + 's'
      });
    }
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="bg-background min-h-screen font-body-md text-on-background antialiased flex flex-col relative overflow-hidden">
      {/* Confetti Container */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {confetti.map(c => (
          <div 
            key={c.id} 
            className="confetti" 
            style={{ 
              left: c.left, 
              backgroundColor: c.bg, 
              animationDuration: c.duration, 
              animationDelay: c.delay 
            }} 
          />
        ))}
      </div>

      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center p-md md:p-lg relative z-10">
        <div className="max-w-2xl w-full mx-auto">
          <div className="bg-surface rounded-xl shadow-lg border border-outline-variant p-xl md:p-2xl flex flex-col items-center text-center">
            
            {/* Animated Success Icon */}
            <div className="w-24 h-24 mb-lg relative flex items-center justify-center">
              <svg className="w-full h-full text-secondary" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle className="success-circle" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="6"></circle>
                <path className="success-check" d="M30 50 L45 65 L70 35" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path>
              </svg>
            </div>
            
            <h1 className="font-display-lg text-display-lg text-primary mb-md tracking-tight">Appointment Confirmed!</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-md mx-auto">
              Your appointment with Dr. Alex Rivera has been successfully scheduled. We've sent a confirmation email with details.
            </p>
            
            {/* Booking Summary Card */}
            <div className="w-full bg-surface-container-low rounded-lg p-lg border border-surface-variant mb-xl text-left shadow-sm">
              <h2 className="font-title-lg text-title-lg text-on-surface mb-md pb-xs border-b border-outline-variant">Booking Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary mt-xs" style={{ fontVariationSettings: "'FILL' 1" }}>event</span>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Date</p>
                    <p className="font-body-md text-body-md text-on-surface font-medium">Monday, Oct 24, 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary mt-xs" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Time</p>
                    <p className="font-body-md text-body-md text-on-surface font-medium">10:00 AM - 10:30 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary mt-xs" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Doctor</p>
                    <p className="font-body-md text-body-md text-on-surface font-medium">Dr. Alex Rivera</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Cardiology</p>
                  </div>
                </div>
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary mt-xs" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Location</p>
                    <p className="font-body-md text-body-md text-on-surface font-medium">Downtown Clinic</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">123 Med Ave, Suite 400</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col md:flex-row gap-md w-full md:w-auto justify-center">
              <button className="flex items-center justify-center gap-sm bg-primary text-on-primary font-label-md text-label-md px-xl py-sm rounded-full h-12 shadow-md hover:bg-primary-fixed-variant transition-colors w-full md:w-auto">
                <span className="material-symbols-outlined">calendar_month</span>
                Add to Calendar
              </button>
              <Link href="/" className="flex items-center justify-center gap-sm bg-surface-container text-primary font-label-md text-label-md px-xl py-sm rounded-full h-12 border border-outline-variant hover:bg-surface-container-high transition-colors w-full md:w-auto">
                <span className="material-symbols-outlined">home</span>
                Return to Home
              </Link>
            </div>
          </div>
          
          {/* Minimal Footer Links */}
          <div className="mt-lg text-center">
            <Link href="#" className="font-body-sm text-body-sm text-primary hover:underline">Manage Appointment</Link>
            <span className="mx-sm text-outline-variant">•</span>
            <Link href="#" className="font-body-sm text-body-sm text-primary hover:underline">Need Help?</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
