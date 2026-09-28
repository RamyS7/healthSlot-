import Link from "next/link";

export default function ProviderProfilePage() {
  return (
    <div className="bg-background text-on-background min-h-screen pb-24 md:pb-0">
      {/* TopAppBar */}
      <header className="bg-surface border-b border-outline-variant w-full h-20 sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-lg md:px-xl max-w-container-max mx-auto h-20">
          <div className="flex items-center gap-4">
            <button aria-label="Go back" className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
              <span className="material-symbols-outlined text-on-surface">arrow_back</span>
            </button>
            <div className="font-headline-md text-headline-md text-primary font-bold tracking-tight">HealthSync</div>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant">
              <img alt="User Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoUophijxDooGOZOzuRbu3JKeRq6tsLaEk5dyrziUkaya9uioRJMhKtHzrChvVE3t7vu0ASyxhRSxq-tpuMqgfHj5JrEZjrfUGB6BQWtn_N1YNMLQDK_Irr-GJXOmsno73Mad2Aqwcfj9R47bAWonpYGri4HytC1e-EkgaQ5B1TIo3VPDuAZVi5YZUoIdaCzeV5IIq4KpuD-nzhjNEuyX6U9BXRvJzYCSfXpuyVVFbCM12thF1rUJ0" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="max-w-container-max mx-auto px-md md:px-lg py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          
          {/* Left Column: Doctor Info & Reviews */}
          <div className="lg:col-span-7 flex flex-col gap-lg">
            {/* Doctor Profile Header Card */}
            <div className="bg-surface rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-[#E2E8F0] p-lg md:p-xl flex flex-col sm:flex-row gap-lg items-start">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 border-4 border-surface-container-high">
                <img alt="Dr. Sarah Jenkins" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMSIX_kxwWRQyE76jkQIScdpgJgzimhR4s5sMcofxa0lZ5mblSNkGO5-HoXFhfToQDzskNzbaMWyvOilbfB3G8_sZ84QXt0aUfcMsPD6XIPltxJwexXLR9c_Z-Dl41AiY7tnZAYGl9ioyudsUtcanAAESlN21zqIJ_6WIJBu55Kn_hvKIe7wDLhpZH55Fe7okeUaWMhLfsKvhrNyAb_ZxWL_agoWI89RBnVX2Y1XqvFb3FaAUal7Lo" />
              </div>
              <div className="flex flex-col gap-sm flex-1">
                <div>
                  <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">Dr. Sarah Jenkins, MD</h1>
                  <p className="font-title-lg text-title-lg text-secondary">Cardiology Specialist</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-xs">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm">Board Certified</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm">15+ Years Exp.</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm">English, Spanish</span>
                </div>
                <div className="flex items-center gap-4 mt-sm text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold text-on-surface">4.9</span>
                    <span>(128 Reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                    <span>Downtown Medical Center</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Card */}
            <div className="bg-surface rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-[#E2E8F0] p-lg md:p-xl">
              <h2 className="font-title-lg text-title-lg text-on-surface mb-md">About Dr. Jenkins</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Dr. Sarah Jenkins is a board-certified cardiologist specializing in preventive cardiology and heart failure management. With over 15 years of clinical experience, she is dedicated to providing compassionate, evidence-based care to her patients. She completed her fellowship at Johns Hopkins Hospital and is actively involved in clinical research regarding cardiovascular health in women.
              </p>
              <div className="mt-lg">
                <h3 className="font-label-md text-label-md text-on-surface mb-sm">EDUCATION &amp; TRAINING</h3>
                <ul className="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">school</span>
                    <div>
                      <span className="block font-bold text-on-surface">Johns Hopkins University School of Medicine</span>
                      <span>MD, Cardiovascular Disease Fellowship</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">school</span>
                    <div>
                      <span className="block font-bold text-on-surface">Stanford University</span>
                      <span>BS, Human Biology</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Widget */}
          <div className="lg:col-span-5 flex flex-col gap-lg">
            <div className="bg-surface rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#E2E8F0] p-lg md:p-xl sticky top-28">
              <h2 className="font-title-lg text-title-lg text-on-surface mb-md">Book an Appointment</h2>
              
              {/* Consultation Type */}
              <div className="mb-lg">
                <label className="font-label-sm text-label-sm text-on-surface-variant block mb-2">CONSULTATION TYPE</label>
                <div className="flex gap-4">
                  <label className="flex-1 cursor-pointer">
                    <input defaultChecked className="peer sr-only" name="consult_type" type="radio" />
                    <div className="p-sm text-center border border-primary rounded-lg text-primary bg-primary/5 peer-checked:bg-primary peer-checked:text-on-primary transition-colors font-label-md text-label-md">
                      <span className="material-symbols-outlined block mb-1">videocam</span>
                      Video Visit
                    </div>
                  </label>
                  <label className="flex-1 cursor-pointer">
                    <input className="peer sr-only" name="consult_type" type="radio" />
                    <div className="p-sm text-center border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-colors font-label-md text-label-md">
                      <span className="material-symbols-outlined block mb-1">domain</span>
                      In-Person
                    </div>
                  </label>
                </div>
              </div>

              {/* Date Selector */}
              <div className="mb-lg">
                <div className="flex justify-between items-center mb-sm">
                  <h3 className="font-label-md text-label-md text-on-surface">October 2023</h3>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full flex items-center justify-center border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors">
                      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                    </button>
                    <button className="w-8 h-8 rounded-full flex items-center justify-center border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors">
                      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                    </button>
                  </div>
                </div>
                <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
                  <button className="shrink-0 w-14 h-16 rounded-lg bg-secondary text-on-secondary flex flex-col items-center justify-center shadow-md">
                    <span className="font-label-sm text-label-sm uppercase opacity-90">Mon</span>
                    <span className="font-title-lg text-title-lg">16</span>
                  </button>
                  <button className="shrink-0 w-14 h-16 rounded-lg border border-outline-variant bg-surface text-on-surface hover:bg-surface-container-low hover:border-secondary transition-colors flex flex-col items-center justify-center">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Tue</span>
                    <span className="font-title-lg text-title-lg">17</span>
                  </button>
                  <button className="shrink-0 w-14 h-16 rounded-lg border border-outline-variant bg-surface text-on-surface hover:bg-surface-container-low hover:border-secondary transition-colors flex flex-col items-center justify-center">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Wed</span>
                    <span className="font-title-lg text-title-lg">18</span>
                  </button>
                  <button className="shrink-0 w-14 h-16 rounded-lg border border-outline-variant bg-surface text-on-surface hover:bg-surface-container-low hover:border-secondary transition-colors flex flex-col items-center justify-center">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Thu</span>
                    <span className="font-title-lg text-title-lg">19</span>
                  </button>
                  <button className="shrink-0 w-14 h-16 rounded-lg border border-outline-variant bg-surface text-on-surface hover:bg-surface-container-low hover:border-secondary transition-colors flex flex-col items-center justify-center">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Fri</span>
                    <span className="font-title-lg text-title-lg">20</span>
                  </button>
                </div>
              </div>

              {/* Time Slots Grid */}
              <div className="mb-xl">
                <h3 className="font-label-md text-label-md text-on-surface mb-sm">Available Times</h3>
                <div className="mb-4">
                  <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 mb-2"><span className="material-symbols-outlined text-[16px]">light_mode</span> Morning</span>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="py-2 px-4 border border-outline-variant rounded-md text-center font-body-sm text-body-sm text-on-surface hover:bg-secondary/10 hover:border-secondary transition-colors">09:00 AM</button>
                    <button className="py-2 px-4 border border-outline-variant rounded-md text-center font-body-sm text-body-sm text-on-surface hover:bg-secondary/10 hover:border-secondary transition-colors">09:30 AM</button>
                    <button className="py-2 px-4 border border-outline-variant rounded-md text-center font-body-sm text-body-sm text-on-surface hover:bg-secondary/10 hover:border-secondary transition-colors">10:00 AM</button>
                    <button className="py-2 px-4 border border-primary bg-primary/10 rounded-md text-center font-body-sm text-body-sm text-primary font-semibold ring-1 ring-primary transition-colors">10:30 AM</button>
                  </div>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 mb-2"><span className="material-symbols-outlined text-[16px]">routine</span> Afternoon</span>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="py-2 px-4 border border-outline-variant rounded-md text-center font-body-sm text-body-sm text-on-surface hover:bg-secondary/10 hover:border-secondary transition-colors">01:00 PM</button>
                    <button className="py-2 px-4 border border-outline-variant rounded-md text-center font-body-sm text-body-sm text-on-surface hover:bg-secondary/10 hover:border-secondary transition-colors">01:30 PM</button>
                    <button className="py-2 px-4 border border-outline-variant rounded-md text-center font-body-sm text-body-sm text-on-surface hover:bg-secondary/10 hover:border-secondary transition-colors">02:00 PM</button>
                    <button className="py-2 px-4 border border-outline-variant rounded-md text-center font-body-sm text-body-sm text-on-surface hover:bg-secondary/10 hover:border-secondary transition-colors">03:30 PM</button>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button className="w-full h-12 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary-fixed-variant transition-colors shadow-md">
                Continue to Book
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <p className="text-center font-label-sm text-label-sm text-on-surface-variant mt-sm">You won't be charged yet</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
