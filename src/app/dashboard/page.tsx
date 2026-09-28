"use client";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("overview");

  return (
    <div className="bg-[#faf8ff] text-[#131b2e] min-h-screen">
      <Navbar variant="dashboard" showUserAvatar />


      <div className="flex max-w-[1600px] mx-auto min-h-[calc(100vh-80px)]">
        {/* ── Sidebar Navigation ── */}
        <aside className="hidden md:flex flex-col w-64 bg-[#f2f3ff] p-[24px] gap-[12px] border-r border-[#c3c6d7]/20">
          <nav className="space-y-1">
            {[
              { key: "overview", icon: "dashboard", label: "Overview" },
              { key: "appointments", icon: "calendar_month", label: "Appointments" },
              { key: "health", icon: "favorite", label: "My Health" },
              { key: "messages", icon: "chat_bubble", label: "Messages" },
              { key: "billing", icon: "receipt_long", label: "Billing" },
              { key: "settings", icon: "settings", label: "Settings" },
            ].map(({ key, icon, label }) => (
              <button
                key={key}
                onClick={() => setActiveNav(key)}
                className={`w-full flex items-center gap-[8px] p-3 rounded-xl transition-all text-left ${
                  activeNav === key
                    ? "bg-[#2563eb] text-[#eeefff] font-semibold"
                    : "text-[#434655] hover:bg-[#dae2fd]/50"
                }`}
              >
                <span className="material-symbols-outlined">{icon}</span>
                <span className="text-[14px] leading-[20px]">{label}</span>
              </button>
            ))}
          </nav>

          {/* Premium Plan card */}
          <div className="mt-auto p-4 rounded-xl bg-[#007e37]/10 border border-[#007e37]/20">
            <p className="text-[12px] leading-[16px] text-[#006229] font-bold uppercase tracking-wider mb-2">
              Premium Plan
            </p>
            <p className="text-[16px] leading-[24px] text-[#434655] mb-4">
              You have 2 telemedicine credits remaining.
            </p>
            <button className="w-full bg-[#006229] text-white py-2 rounded-lg text-[14px] leading-[20px] font-medium hover:opacity-90 transition-all">
              Upgrade Now
            </button>
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main className="flex-1 p-[16px] md:p-[40px] overflow-y-auto">
          <header className="mb-[48px]">
            <h1 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold text-[#131b2e] mb-[4px]">
              Hello, Alex.
            </h1>
            <p className="text-[18px] leading-[28px] text-[#434655]">
              Here&apos;s an update on your health journey and upcoming visits.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px]">
            {/* ── Left Column ── */}
            <div className="lg:col-span-8 space-y-[48px]">
              {/* Upcoming Appointments */}
              <section>
                <div className="flex justify-between items-end mb-[24px]">
                  <h2 className="text-[24px] leading-[32px] font-semibold text-[#131b2e]">
                    Upcoming Appointments
                  </h2>
                  <button className="text-[#004ac6] text-[14px] leading-[20px] font-medium hover:underline">
                    View Calendar
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                  {/* Appointment Card 1 */}
                  <div className="surface-1 surface-2 rounded-xl p-[24px] border border-[#c3c6d7]/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#004ac6]"></div>
                    <div className="flex justify-between items-start mb-[24px]">
                      <div className="flex flex-col">
                        <span className="text-[12px] leading-[16px] text-[#004ac6] uppercase font-bold tracking-widest mb-1">
                          Telehealth
                        </span>
                        <span className="text-[24px] leading-[32px] font-semibold text-[#131b2e]">
                          Dr. Sarah Jenkins
                        </span>
                        <span className="text-[16px] leading-[24px] text-[#434655]">
                          Cardiology Consultation
                        </span>
                      </div>
                      <div className="bg-[#e2e7ff] rounded-lg p-2 text-center min-w-[60px]">
                        <p className="text-[12px] leading-[16px] text-[#434655] uppercase">
                          Oct
                        </p>
                        <p className="text-[24px] leading-[32px] font-semibold text-[#004ac6]">
                          12
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[8px] text-[#434655] mb-[48px]">
                      <span className="material-symbols-outlined text-[20px]">
                        schedule
                      </span>
                      <span className="text-[14px] leading-[20px] font-medium">
                        10:30 AM - 11:15 AM
                      </span>
                    </div>
                    <button className="w-full bg-[#004ac6] text-white py-3 rounded-lg text-[14px] leading-[20px] font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                      <span className="material-symbols-outlined">
                        video_chat
                      </span>
                      Join Telehealth
                    </button>
                  </div>

                  {/* Appointment Card 2 */}
                  <div className="surface-1 surface-2 rounded-xl p-[24px] border border-[#c3c6d7]/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#006b5f]"></div>
                    <div className="flex justify-between items-start mb-[24px]">
                      <div className="flex flex-col">
                        <span className="text-[12px] leading-[16px] text-[#006b5f] uppercase font-bold tracking-widest mb-1">
                          In-Person
                        </span>
                        <span className="text-[24px] leading-[32px] font-semibold text-[#131b2e]">
                          Dr. Marcus Thorne
                        </span>
                        <span className="text-[16px] leading-[24px] text-[#434655]">
                          Annual Physical Exam
                        </span>
                      </div>
                      <div className="bg-[#e2e7ff] rounded-lg p-2 text-center min-w-[60px]">
                        <p className="text-[12px] leading-[16px] text-[#434655] uppercase">
                          Oct
                        </p>
                        <p className="text-[24px] leading-[32px] font-semibold text-[#006b5f]">
                          24
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[8px] text-[#434655] mb-[48px]">
                      <span className="material-symbols-outlined text-[20px]">
                        location_on
                      </span>
                      <span className="text-[14px] leading-[20px] font-medium">
                        Central Medical Hub, Room 402
                      </span>
                    </div>
                    <button className="w-full border border-[#737686] text-[#131b2e] py-3 rounded-lg text-[14px] leading-[20px] font-medium flex items-center justify-center gap-2 hover:bg-[#dae2fd]/30 transition-all">
                      <span className="material-symbols-outlined">
                        directions
                      </span>
                      Directions
                    </button>
                  </div>
                </div>
              </section>

              {/* Health Snapshot */}
              <section>
                <h2 className="text-[24px] leading-[32px] font-semibold text-[#131b2e] mb-[24px]">
                  Health Snapshot
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                  {/* Last Checkup */}
                  <div className="surface-1 rounded-xl p-[24px] flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#004ac6]/10 rounded-full flex items-center justify-center mb-[24px]">
                      <span className="material-symbols-outlined text-[#004ac6]">
                        exchange_auto
                      </span>
                    </div>
                    <p className="text-[12px] leading-[16px] text-[#434655] uppercase mb-[4px]">
                      Last Checkup
                    </p>
                    <p className="text-[24px] leading-[32px] font-semibold text-[#131b2e]">
                      3 Months Ago
                    </p>
                    <p className="text-[16px] leading-[24px] text-[#434655] mt-2">
                      Routine Lab Results: Stable
                    </p>
                  </div>

                  {/* Active Prescriptions */}
                  <div className="surface-1 rounded-xl p-[24px] flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#006b5f]/10 rounded-full flex items-center justify-center mb-[24px]">
                      <span className="material-symbols-outlined text-[#006b5f]">
                        medication
                      </span>
                    </div>
                    <p className="text-[12px] leading-[16px] text-[#434655] uppercase mb-[4px]">
                      Active Prescriptions
                    </p>
                    <p className="text-[24px] leading-[32px] font-semibold text-[#131b2e]">
                      4 Active
                    </p>
                    <p className="text-[16px] leading-[24px] text-[#434655] mt-2">
                      Next Refill: Oct 15
                    </p>
                  </div>

                  {/* Health Score */}
                  <div className="surface-1 rounded-xl p-[24px] flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#006229]/10 rounded-full flex items-center justify-center mb-[24px]">
                      <span className="material-symbols-outlined text-[#006229]">
                        fitness_center
                      </span>
                    </div>
                    <p className="text-[12px] leading-[16px] text-[#434655] uppercase mb-[4px]">
                      Health Score
                    </p>
                    <p className="text-[24px] leading-[32px] font-semibold text-[#131b2e]">
                      88/100
                    </p>
                    <div className="w-full h-2 bg-[#dae2fd] rounded-full mt-4">
                      <div className="h-full bg-[#006229] rounded-full w-[88%]"></div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* ── Right Column ── */}
            <div className="lg:col-span-4 space-y-[48px]">
              {/* Recent Doctors */}
              <section className="surface-1 rounded-xl p-[24px] border border-[#c3c6d7]/30">
                <h2 className="text-[24px] leading-[32px] font-semibold text-[#131b2e] mb-[24px]">
                  Recent Doctors
                </h2>
                <div className="space-y-[24px]">
                  {[
                    {
                      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY_TYUGmpZJkUo5utINIPYoIzq4IdCE0-IMiK2qhCOKzfbJlasDYRvW8nYq5XjvLLnHBQ2nH0Sy8ju8HTp6-bJgL9xg_56zGaZ9WLbz-IR-1zjmuXOXaqkJJp2GOEtm7k2IrUylvdiaCI6WtuIrGInY3-uGTIu6_jb9643m46qPy4_UnD_dUuZe1pctZqW9myPMijT7v2YGf-qK3BR25SlIwO6hnykLwdjg_pBN1yYGWcrGsRKpIUS",
                      name: "Dr. Elena Rodriguez",
                      specialty: "Pediatrics",
                    },
                    {
                      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXKcPbEAZLAx6zk84d2aOh05gEdBNaZ13e3zgReO2MyLxkXOUnpUBv7dUM3glG4_Rres6G7osGuZl7sLWjGWynmlk2vL9xcaI7bWFt2cs2ZXRA02Ohhly9Kgzil7Q_A_4DP8vyMwD_7-zCsMppePladbmF6LHfZThf2U3lpMUWIxSCcdA-Xxee_z61zQT4Zvnb5FHPwGZB5Uhtxj489ZqArK2JNP19hm0ZtMqzoekLG29VUfQOTrzb",
                      name: "Dr. Samuel Chen",
                      specialty: "Dermatology",
                    },
                    {
                      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKa42FxJDXLeowJ2THl3Y2Dv0phk21BHi8DiHt1B0q6PQrPL9f-56tkASbIIDZTxjjIQ46bRsNwn0-SZsEFd22xAeXIkUJpIZBa2jYgxWHqycC0r_6oRw_SkWw1H30kgXO8cGLKQHEikDu4L5TdRQm5g147_z2r7Yxb9L81d1l7Agp6tH1HMS1rPJ8M3xco0my-nRrdJBIBpbjnpAKa3a8ksvEoVZm0rM7NM8kn41a8CU_bV7_611I",
                      name: "Dr. Anita Desai",
                      specialty: "Internal Medicine",
                    },
                  ].map((doc) => (
                    <div
                      key={doc.name}
                      className="flex items-center justify-between p-2 hover:bg-[#dae2fd]/20 rounded-xl transition-all"
                    >
                      <div className="flex items-center gap-[24px]">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-[#c3c6d7]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            className="w-full h-full object-cover"
                            src={doc.img}
                            alt={doc.name}
                          />
                        </div>
                        <div>
                          <p className="text-[14px] leading-[20px] font-bold text-[#131b2e]">
                            {doc.name}
                          </p>
                          <p className="text-[12px] leading-[16px] text-[#434655]">
                            {doc.specialty}
                          </p>
                        </div>
                      </div>
                      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#004ac6]/10 text-[#004ac6] hover:bg-[#004ac6] hover:text-white transition-all">
                        <span className="material-symbols-outlined text-[20px]">
                          add
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
                <Link
                  href="/search"
                  className="w-full mt-[48px] py-3 bg-[#e2e7ff] text-[#004ac6] font-bold rounded-lg hover:bg-[#dae2fd] transition-all block text-center"
                >
                  Book New Appointment
                </Link>
              </section>

              {/* Quick Insights */}
              <section className="surface-1 rounded-xl p-[24px] border border-[#c3c6d7]/30">
                <h2 className="text-[24px] leading-[32px] font-semibold text-[#131b2e] mb-[24px]">
                  Quick Insights
                </h2>
                <div className="space-y-[12px] zebra-list rounded-lg overflow-hidden border border-[#c3c6d7]/20">
                  <div className="flex justify-between items-center p-3">
                    <span className="text-[14px] leading-[20px] text-[#434655]">
                      Weight Trends
                    </span>
                    <span className="text-[14px] leading-[20px] text-[#004ac6] font-bold">
                      -2.4 lbs
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3">
                    <span className="text-[14px] leading-[20px] text-[#434655]">
                      Sleep Avg
                    </span>
                    <span className="text-[14px] leading-[20px] text-[#004ac6] font-bold">
                      7h 42m
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3">
                    <span className="text-[14px] leading-[20px] text-[#434655]">
                      Daily Steps
                    </span>
                    <span className="text-[14px] leading-[20px] text-[#006b5f] font-bold">
                      8,240
                    </span>
                  </div>
                </div>
                <button className="w-full mt-[24px] text-[#004ac6] text-[14px] leading-[20px] font-medium hover:underline flex items-center justify-center gap-1">
                  Integrate Health Data
                  <span className="material-symbols-outlined text-[16px]">
                    open_in_new
                  </span>
                </button>
              </section>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full py-[48px] px-[40px] grid grid-cols-1 md:grid-cols-4 gap-[24px] bg-[#f2f3ff] border-t border-[#c3c6d7]/20">
        <div className="md:col-span-1">
          <span className="text-[24px] leading-[32px] font-bold text-[#004ac6] block mb-[24px]">
            MediTrust
          </span>
          <p className="text-[16px] leading-[24px] text-[#434655]">
            Modern healthcare for a modern world. Professional, clinical, and
            human-centric.
          </p>
        </div>
        <div>
          <h4 className="text-[14px] leading-[20px] font-bold text-[#131b2e] mb-[24px]">
            Legal
          </h4>
          <ul className="space-y-[12px]">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[12px] leading-[16px] text-[#434655] hover:text-[#004ac6] underline transition-all"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <h4 className="text-[14px] leading-[20px] font-bold text-[#131b2e] mb-[24px]">
            Support
          </h4>
          <ul className="space-y-[12px]">
            {["Contact Support", "Sitemap"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[12px] leading-[16px] text-[#434655] hover:text-[#004ac6] underline transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[14px] leading-[20px] font-bold text-[#131b2e] mb-[24px]">
            Connect
          </h4>
          <p className="text-[12px] leading-[16px] text-[#434655] mb-[24px]">
            © 2024 MediTrust Healthcare. All rights reserved.
          </p>
          <div className="flex gap-[24px]">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#faf8ff] flex items-center justify-center hover:bg-[#2563eb] hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                public
              </span>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#faf8ff] flex items-center justify-center hover:bg-[#2563eb] hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                share
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
