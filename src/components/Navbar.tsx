"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface NavbarProps {
  activePage?: "find-doctors" | "how-it-works" | "specialties" | "about";
  variant?: "default" | "dashboard";
  showUserAvatar?: boolean;
}

export default function Navbar({
  activePage = "find-doctors",
  variant = "default",
  showUserAvatar = false,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const router = useRouter();

  const handleEmergencyRequest = () => {
    setRequestSent(true);
    setTimeout(() => {
      setRequestSent(false);
    }, 4000);
  };

  return (
    <>
      <header className="sticky top-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 md:px-[40px] py-4 mx-auto bg-[#faf8ff]/90 backdrop-blur-md shadow-sm border-b border-[#e2e7ff]">
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-[24px] leading-[32px] font-bold text-[#004ac6] hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[#004ac6] text-3xl">
              health_and_safety
            </span>
            MediTrust
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/search"
              className={`text-[14px] leading-[20px] tracking-[0.01em] font-medium transition-colors duration-200 ${
                activePage === "find-doctors"
                  ? "text-[#004ac6] font-bold border-b-2 border-[#004ac6] pb-1"
                  : "text-[#434655] hover:text-[#004ac6]"
              }`}
            >
              Find Doctors
            </Link>
            <Link
              href="/#how-it-works"
              className={`text-[14px] leading-[20px] tracking-[0.01em] font-medium transition-colors duration-200 ${
                activePage === "how-it-works"
                  ? "text-[#004ac6] font-bold border-b-2 border-[#004ac6] pb-1"
                  : "text-[#434655] hover:text-[#004ac6]"
              }`}
            >
              How it Works
            </Link>
            <Link
              href="/#specialties"
              className={`text-[14px] leading-[20px] tracking-[0.01em] font-medium transition-colors duration-200 ${
                activePage === "specialties"
                  ? "text-[#004ac6] font-bold border-b-2 border-[#004ac6] pb-1"
                  : "text-[#434655] hover:text-[#004ac6]"
              }`}
            >
              Specialties
            </Link>
            <Link
              href="/#about"
              className={`text-[14px] leading-[20px] tracking-[0.01em] font-medium transition-colors duration-200 ${
                activePage === "about"
                  ? "text-[#004ac6] font-bold border-b-2 border-[#004ac6] pb-1"
                  : "text-[#434655] hover:text-[#004ac6]"
              }`}
            >
              About Us
            </Link>
          </nav>
        </div>

        {/* Right Action Buttons (Desktop & User State) */}
        <div className="hidden md:flex items-center gap-4">
          {variant === "dashboard" || showUserAvatar ? (
            <>
              <button
                onClick={() => setEmergencyModalOpen(true)}
                className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-lg text-[#ba1a1a] bg-[#ffdad6]/60 font-semibold text-[14px] leading-[20px] hover:bg-[#ffdad6] transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">
                  e911_emergency
                </span>
                Emergency Care
              </button>

              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#004ac6] hover:ring-4 hover:ring-[#004ac6]/20 transition-all focus:outline-none"
                  aria-label="User Profile Menu"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq4qv-AWFc0RnjRfR6ERgodr46bUBBTBbNedh2yWPvVyDSnwWhLF8wy_kdV37d-h-4ZQva1IGvGPWfXuRdvnYwahCEyv5UncaAp0tRXuGFZcG6XcabpgTEhTjDFQWaHlkyNsKn3syvFXy3iGfKiMC903Ba0Hm8T45oecJIozqq1W_nfHt9jk9t2JngQTx92AxPSdO2qKr1eGQc4WN5PprTnGnrJTb1qBVEWb4lmU6oB-TdCVWp_O6g"
                    alt="Patient Avatar"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Avatar Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-[#c3c6d7]/30 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-4 py-2.5 border-b border-slate-100">
                      <p className="text-xs font-medium text-slate-500">Signed in as</p>
                      <p className="text-sm font-bold text-slate-800 truncate">Patient User</p>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-sm text-[#434655] hover:bg-[#f2f3ff] hover:text-[#004ac6] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">dashboard</span>
                      My Dashboard
                    </Link>
                    <Link
                      href="/search"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-sm text-[#434655] hover:bg-[#f2f3ff] hover:text-[#004ac6] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">search</span>
                      Find Doctors
                    </Link>
                    <Link
                      href="/providers"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-sm text-[#434655] hover:bg-[#f2f3ff] hover:text-[#004ac6] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">medical_services</span>
                      Provider Portal
                    </Link>
                    <div className="border-t border-slate-100 my-1"></div>
                    <Link
                      href="/login"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-sm text-[#ba1a1a] hover:bg-[#ffdad6]/40 transition-colors w-full text-left"
                    >
                      <span className="material-symbols-outlined text-[18px]">logout</span>
                      Sign Out
                    </Link>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-5 py-2 text-[14px] leading-[20px] font-bold text-[#434655] hover:text-[#004ac6] transition-all rounded-lg hover:bg-slate-100/70"
              >
                Sign In
              </Link>
              <button
                onClick={() => setEmergencyModalOpen(true)}
                className="px-6 py-2.5 bg-[#ba1a1a] text-white rounded-lg text-[14px] leading-[20px] font-bold hover:bg-[#991515] active:scale-95 transition-all shadow-md flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">
                  e911_emergency
                </span>
                Emergency Care
              </button>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setEmergencyModalOpen(true)}
            className="p-2 bg-[#ba1a1a] text-white rounded-lg font-bold text-xs flex items-center gap-1 shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">
              e911_emergency
            </span>
            SOS
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#131b2e] hover:bg-slate-200/60 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[73px] left-0 right-0 bg-[#faf8ff] border-b border-[#c3c6d7]/30 shadow-xl z-40 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <Link
            href="/search"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 text-base font-semibold text-[#131b2e] hover:text-[#004ac6] py-2 border-b border-slate-100"
          >
            <span className="material-symbols-outlined text-[#004ac6]">search</span>
            Find Doctors
          </Link>
          <Link
            href="/#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 text-base font-semibold text-[#131b2e] hover:text-[#004ac6] py-2 border-b border-slate-100"
          >
            <span className="material-symbols-outlined text-[#004ac6]">help_outline</span>
            How it Works
          </Link>
          <Link
            href="/#specialties"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 text-base font-semibold text-[#131b2e] hover:text-[#004ac6] py-2 border-b border-slate-100"
          >
            <span className="material-symbols-outlined text-[#004ac6]">stethoscope</span>
            Specialties
          </Link>
          <Link
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 text-base font-semibold text-[#131b2e] hover:text-[#004ac6] py-2 border-b border-slate-100"
          >
            <span className="material-symbols-outlined text-[#004ac6]">info</span>
            About Us
          </Link>
          {showUserAvatar || variant === "dashboard" ? (
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 text-base font-semibold text-[#131b2e] hover:text-[#004ac6] py-2 border-b border-slate-100"
            >
              <span className="material-symbols-outlined text-[#004ac6]">dashboard</span>
              My Dashboard
            </Link>
          ) : (
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 text-base font-semibold text-[#131b2e] hover:text-[#004ac6] py-2 border-b border-slate-100"
            >
              <span className="material-symbols-outlined text-[#004ac6]">login</span>
              Sign In
            </Link>
          )}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setEmergencyModalOpen(true);
            }}
            className="w-full mt-2 py-3 bg-[#ba1a1a] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-md"
          >
            <span className="material-symbols-outlined">e911_emergency</span>
            Emergency Care Hotline
          </button>
        </div>
      )}

      {/* Emergency Care Modal Dialog */}
      {emergencyModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-[#ba1a1a]/30 relative overflow-hidden">
            {/* Top Warning Banner */}
            <div className="bg-[#ba1a1a] -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 p-4 text-white flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 font-bold text-lg">
                <span className="material-symbols-outlined text-2xl animate-pulse">
                  warning
                </span>
                Emergency Medical Care
              </div>
              <button
                onClick={() => setEmergencyModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                aria-label="Close Modal"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <p className="text-[#434655] text-sm sm:text-base mb-6 leading-relaxed">
              If you are experiencing a life-threatening medical emergency or severe injury, please call <strong>911</strong> immediately or go to the nearest emergency room.
            </p>

            {/* Quick Action Emergency Buttons */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:911"
                className="w-full py-3.5 px-4 bg-[#ba1a1a] hover:bg-[#991515] text-white rounded-xl font-bold text-center flex items-center justify-center gap-3 transition-transform hover:scale-[1.01] shadow-lg text-lg"
              >
                <span className="material-symbols-outlined text-2xl">call</span>
                Call 911 Immediately
              </a>

              <a
                href="tel:18005550199"
                className="w-full py-3 px-4 bg-[#004ac6] hover:bg-[#2563eb] text-white rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-colors text-sm"
              >
                <span className="material-symbols-outlined">support_agent</span>
                Call 24/7 Nurse Tele-Triage (1-800-555-0199)
              </a>

              <button
                onClick={handleEmergencyRequest}
                className="w-full py-3 px-4 bg-[#f2f3ff] hover:bg-[#e2e7ff] text-[#004ac6] rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-colors text-sm border border-[#004ac6]/20"
              >
                <span className="material-symbols-outlined">sos</span>
                Request Immediate Tele-Doctor Call Back
              </button>
            </div>

            {requestSent && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs sm:text-sm text-center font-medium mb-4 animate-in fade-in">
                ✓ Emergency request received. On-call doctor notified!
              </div>
            )}

            {/* ER Locator Link */}
            <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs sm:text-sm">
              <span className="text-[#434655]">Need an urgent care clinic?</span>
              <Link
                href="/search?emergency=true"
                onClick={() => setEmergencyModalOpen(false)}
                className="text-[#004ac6] font-bold hover:underline flex items-center gap-1"
              >
                Find ER Near Me
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

