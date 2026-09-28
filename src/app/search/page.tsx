"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function SearchPage() {
  const [genderFilter, setGenderFilter] = useState<"all" | "male" | "female">(
    "all"
  );
  const [availabilityFilters, setAvailabilityFilters] = useState({
    today: false,
    tomorrow: false,
    thisWeek: true,
  });

  const doctors = [
    {
      id: "sarah-jenkins",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-7jRCWCNrJagKaMMw6jmYYVGSl1Qs5hP9qWw48Tsu6RvliYj_zwck7h20jN3ZxVstUsbOIcSZtgCP4dTxisizDpR9OMAks5lBofyBFEMnnrE96_a37NzVsKdFhu0gDqBKPoLQZgyjlMJ3LdX-VCqDa9XvDbrs6yMHZrgTMldrzQUqx29WKnq2epYhmYeWQb_YsGyqVqSwoG4y3RatTa6f6dzy7tYVGt07mBOMkAX5dEZQ6nyaC6v-",
      badge: "Top Rated",
      badgeColor: "bg-[#6df5e1] text-[#006f64]",
      availability: "Available Today",
      availabilityColor: "text-[#006229]",
      name: "Dr. Sarah Jenkins, MD",
      specialty: "Cardiology Specialist • Heart Failure Expert",
      rating: "4.9",
      reviews: "1,240 Reviews",
      exp: "15+ Years Experience",
      bio: "Specialized in preventative cardiology and cardiovascular health. Dr. Jenkins focuses on minimally invasive procedures and personalized patient care plans for chronic conditions.",
      nextSlot: "Today, 2:30 PM",
      gender: "female",
    },
    {
      id: "michael-chen",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWtnsptlxbr33SAZufL75oXXZ9Q1bIgF3RvVU6rzGsNcjizL8BNUPKBtKeBGMsOZLSO69yok8UfQ_05Mmrv_AH9uirDvk1UNNgwdfIirvejkccSAU9rDIddcCbMghIGiAJiVoTpCqt7ETmxDPkF-DlWx2bjRe90L3owFDq3g_UD1bRSs9a5SI0Y6TqUE7J_BD6-hK5SFCIaOXDdM-l5xlGekkiz_cN57vRSJmsSje83OVWdFG6bf9L",
      badge: "New Specialist",
      badgeColor: "bg-[#007e37] text-[#c1ffc5]",
      availability: "Available Tomorrow",
      availabilityColor: "text-[#004ac6]",
      name: "Dr. Michael Chen, MD",
      specialty: "Interventional Cardiology • Vascular Medicine",
      rating: "4.8",
      reviews: "450 Reviews",
      exp: "8 Years Experience",
      bio: "Expert in cardiac catheterization and stent placement. Dr. Chen is affiliated with UCSF Medical Center and specializes in acute heart care and recovery.",
      nextSlot: "Tomorrow, 9:00 AM",
      gender: "male",
    },
    {
      id: "elena-rodriguez",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDAnviHK0aoTR-ewcbYbsCRJaT3SXJj1u4FNfTRvNCG6u-e-M0dLIsQxB23mh_tvkV5By1LTPS2p2cqT3dbGewHCWDjUdJMaMIDU7UGZ63pY5V4vuHr9ABo89Z3DjSAc5XIXVPNZd1dG69fFkCl0pX4Aq37JKm0H48ECiRLlK1Dmf9voO2rLGOLEaGe_mRifJFX90x2Apsqk27BHcmTK5XAkL4B10gCURwdZJJ1YK605Cw0K8JZCze",
      badge: "Affiliated with Mount Zion",
      badgeColor: "text-[#434655] italic text-xs",
      availability: "",
      availabilityColor: "",
      name: "Dr. Elena Rodriguez, MD",
      specialty: "Pediatric Cardiology • Fetal Medicine",
      rating: "5.0",
      reviews: "890 Reviews",
      exp: "20+ Years Experience",
      bio: "Renowned for her work in pediatric congenital heart defects. Dr. Rodriguez provides a compassionate and family-centered approach to pediatric cardiology.",
      nextSlot: "Wed, Oct 24 - 11:15 AM",
      gender: "female",
    },
  ];

  const filtered =
    genderFilter === "all"
      ? doctors
      : doctors.filter((d) => d.gender === genderFilter);

  return (
    <div className="bg-[#faf8ff] text-[#131b2e] min-h-screen">
      <Navbar activePage="find-doctors" showUserAvatar />

      <main className="max-w-[1440px] mx-auto px-[16px] md:px-[40px] py-[24px]">
        {/* ── Search Info ── */}
        <div className="mb-[24px]">
          <h1 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold text-[#131b2e]">
            {genderFilter === "male"
              ? "Cardiologists in San Francisco — Men Only"
              : "Cardiologists in San Francisco"}
          </h1>
          <p className="text-[16px] leading-[24px] text-[#434655] mt-1">
            Showing {filtered.length} results found based on your location and
            medical needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-[24px]">
          {/* ── Sidebar Filters ── */}
          <aside className="w-full md:w-[320px] shrink-0">
            <div className="bg-[#f2f3ff] p-[24px] rounded-xl space-y-[48px] sticky top-[100px]">
              <div className="flex items-center justify-between">
                <h2 className="text-[24px] leading-[32px] font-semibold text-[#131b2e]">
                  Filters
                </h2>
                <button
                  className="text-[#004ac6] text-[14px] leading-[20px] hover:underline"
                  onClick={() => {
                    setGenderFilter("all");
                    setAvailabilityFilters({
                      today: false,
                      tomorrow: false,
                      thisWeek: false,
                    });
                  }}
                >
                  Clear All
                </button>
              </div>

              {/* Availability */}
              <div className="space-y-[12px]">
                <label className="text-[14px] leading-[20px] text-[#434655] uppercase tracking-wider block font-medium">
                  Availability
                </label>
                <div className="flex flex-col gap-2">
                  {(
                    [
                      { key: "today", label: "Today" },
                      { key: "tomorrow", label: "Tomorrow" },
                      { key: "thisWeek", label: "This week" },
                    ] as const
                  ).map(({ key, label }) => (
                    <label
                      key={key}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        className="w-5 h-5 rounded border-[#c3c6d7] text-[#004ac6] focus:ring-[#004ac6]"
                        type="checkbox"
                        checked={availabilityFilters[key]}
                        onChange={(e) =>
                          setAvailabilityFilters((prev) => ({
                            ...prev,
                            [key]: e.target.checked,
                          }))
                        }
                      />
                      <span className="text-[16px] leading-[24px] text-[#131b2e] group-hover:text-[#004ac6] transition-colors">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Patient Rating */}
              <div className="space-y-[12px]">
                <label className="text-[14px] leading-[20px] text-[#434655] uppercase tracking-wider block font-medium">
                  Patient Rating
                </label>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="w-5 h-5 border-[#c3c6d7] text-[#004ac6] focus:ring-[#004ac6]"
                      name="rating"
                      type="radio"
                    />
                    <span className="text-[16px] leading-[24px] text-[#131b2e] flex items-center">
                      4.5 &amp; Above{" "}
                      <span
                        className="material-symbols-outlined text-sm ml-1 text-[#004ac6]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="w-5 h-5 border-[#c3c6d7] text-[#004ac6] focus:ring-[#004ac6]"
                      name="rating"
                      type="radio"
                    />
                    <span className="text-[16px] leading-[24px] text-[#131b2e] flex items-center">
                      4.0 &amp; Above{" "}
                      <span
                        className="material-symbols-outlined text-sm ml-1 text-[#004ac6]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    </span>
                  </label>
                </div>
              </div>

              {/* Gender */}
              <div className="space-y-[12px]">
                <label className="text-[14px] leading-[20px] text-[#434655] uppercase tracking-wider block font-medium">
                  Gender
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() =>
                      setGenderFilter(genderFilter === "male" ? "all" : "male")
                    }
                    className={`px-4 py-2 border rounded-lg text-[14px] leading-[20px] transition-all ${
                      genderFilter === "male"
                        ? "border-[#004ac6] bg-[#2563eb] text-white"
                        : "border-[#c3c6d7] hover:border-[#004ac6] hover:text-[#004ac6]"
                    }`}
                  >
                    Male
                  </button>
                  <button
                    onClick={() =>
                      setGenderFilter(
                        genderFilter === "female" ? "all" : "female"
                      )
                    }
                    className={`px-4 py-2 border rounded-lg text-[14px] leading-[20px] transition-all ${
                      genderFilter === "female"
                        ? "border-[#004ac6] bg-[#2563eb] text-[#eeefff]"
                        : "border-[#c3c6d7] hover:border-[#004ac6] hover:text-[#004ac6]"
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Language */}
              <div className="space-y-[12px]">
                <label className="text-[14px] leading-[20px] text-[#434655] uppercase tracking-wider block font-medium">
                  Language
                </label>
                <select className="w-full bg-[#faf8ff] border border-[#c3c6d7] rounded-lg px-4 py-2 text-[16px] leading-[24px] focus:ring-2 focus:ring-[#004ac6] outline-none">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>Mandarin</option>
                  <option>French</option>
                </select>
              </div>

              {/* Map Prompt */}
              <div className="bg-[#004ac6]/10 p-4 rounded-lg border border-[#004ac6]/20">
                <div className="flex items-center gap-2 text-[#004ac6] mb-2">
                  <span className="material-symbols-outlined">map</span>
                  <span className="text-[14px] leading-[20px] font-medium">
                    View on Map
                  </span>
                </div>
                <p className="text-xs text-[#434655] mb-3">
                  See specialists near Market Street or Mission District.
                </p>
                <button className="w-full py-2 bg-[#004ac6] text-white rounded-lg text-[12px] leading-[16px] font-bold">
                  Open Map View
                </button>
              </div>
            </div>
          </aside>

          {/* ── Doctor Cards ── */}
          <section className="flex-1 space-y-[24px]">
            {filtered.map((doc) => (
              <article
                key={doc.id}
                className="glass-card doctor-card-hover rounded-xl p-[24px] flex flex-col md:flex-row gap-[24px] overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-4">
                  <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#e2e7ff] transition-colors">
                    <span className="material-symbols-outlined text-[#434655]">
                      favorite
                    </span>
                  </button>
                </div>

                <div className="shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#faf8ff] shadow-sm"
                    src={doc.img}
                    alt={doc.name}
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${doc.badgeColor}`}
                      >
                        {doc.badge}
                      </span>
                      {doc.availability && (
                        <span
                          className={`flex items-center font-bold text-xs ${doc.availabilityColor}`}
                        >
                          <span className="w-2 h-2 rounded-full bg-current mr-1"></span>
                          {doc.availability}
                        </span>
                      )}
                    </div>
                    <h3 className="text-[24px] leading-[32px] font-semibold text-[#131b2e]">
                      {doc.name}
                    </h3>
                    <p className="text-[14px] leading-[20px] text-[#004ac6] mb-2">
                      {doc.specialty}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-1 text-[#434655]">
                        <span
                          className="material-symbols-outlined text-[#004ac6]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span className="font-bold text-[#131b2e]">
                          {doc.rating}
                        </span>
                        <span className="text-xs">({doc.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#434655] border-l border-[#c3c6d7] pl-4">
                        <span className="material-symbols-outlined text-[#004ac6]">
                          work
                        </span>
                        <span className="text-[16px] leading-[24px]">
                          {doc.exp}
                        </span>
                      </div>
                    </div>
                    <p className="text-[16px] leading-[24px] text-[#434655] line-clamp-2 max-w-2xl">
                      {doc.bio}
                    </p>
                  </div>

                  <div className="mt-[24px] flex flex-wrap items-center justify-between gap-4">
                    <div className="bg-[#eaedff] px-4 py-2 rounded-lg border border-[#c3c6d7]/30">
                      <span className="block text-[10px] uppercase font-bold text-[#434655]">
                        Next Available Slot
                      </span>
                      <span className="text-[16px] leading-[24px] font-bold text-[#004ac6]">
                        {doc.nextSlot}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href="/doctors/sarah-mitchell"
                        className="px-6 py-3 border border-[#737686] text-[#131b2e] text-[14px] leading-[20px] rounded-lg hover:bg-[#e2e7ff] transition-all"
                      >
                        View Profile
                      </Link>
                      <Link
                        href="/doctors/sarah-mitchell"
                        className="px-8 py-3 bg-[#004ac6] text-white text-[14px] leading-[20px] rounded-lg shadow-md hover:scale-105 transition-all"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* Load More */}
            <div className="flex flex-col items-center gap-[8px] py-[48px]">
              <button className="px-10 py-4 bg-[#dae2fd] text-[#004ac6] text-[14px] leading-[20px] rounded-full hover:bg-[#2563eb] hover:text-white transition-all flex items-center gap-2 group">
                Load More Results
                <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
                  expand_more
                </span>
              </button>
              <p className="text-[#434655] text-[12px] leading-[16px]">
                Showing {filtered.length} of 12 results
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-[48px] px-[40px] grid grid-cols-1 md:grid-cols-4 gap-[24px] bg-[#f2f3ff] mt-[80px] border-t border-[#c3c6d7]/20">
        <div className="md:col-span-1">
          <span className="text-[24px] leading-[32px] font-bold text-[#004ac6] block mb-[24px]">
            MediTrust
          </span>
          <p className="text-[16px] leading-[24px] text-[#434655] mb-[24px]">
            Advanced healthcare connections built on trust, transparency, and
            clinical excellence.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#004ac6] cursor-pointer">
              public
            </span>
            <span className="material-symbols-outlined text-[#004ac6] cursor-pointer">
              share
            </span>
            <span className="material-symbols-outlined text-[#004ac6] cursor-pointer">
              help
            </span>
          </div>
        </div>
        <div>
          <h4 className="text-[14px] leading-[20px] text-[#131b2e] uppercase tracking-wider mb-[12px] font-medium">
            Services
          </h4>
          <ul className="space-y-2">
            {["Search Doctors", "Video Consultations", "Health Plans", "Hospital Network"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#434655] text-[14px] leading-[20px] hover:text-[#004ac6] transition-all"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <h4 className="text-[14px] leading-[20px] text-[#131b2e] uppercase tracking-wider mb-[12px] font-medium">
            Support
          </h4>
          <ul className="space-y-2">
            {["Contact Support", "Careers", "Sitemap", "Privacy Policy"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#434655] text-[14px] leading-[20px] hover:text-[#004ac6] transition-all"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <h4 className="text-[14px] leading-[20px] text-[#131b2e] uppercase tracking-wider mb-[12px] font-medium">
            Connect
          </h4>
          <p className="text-[16px] leading-[24px] text-[#434655] mb-[24px]">
            Subscribe for healthcare tips and platform updates.
          </p>
          <div className="flex gap-2">
            <input
              className="flex-1 bg-[#faf8ff] border border-[#c3c6d7] rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#004ac6] outline-none"
              placeholder="Email address"
              type="email"
            />
            <button className="bg-[#004ac6] text-white p-2 rounded-lg">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
        <div className="md:col-span-4 border-t border-[#c3c6d7]/30 pt-[24px] mt-[24px] text-center">
          <p className="text-[12px] leading-[16px] text-[#434655]">
            © 2024 MediTrust Healthcare. All rights reserved. Designed for
            professional excellence.
          </p>
        </div>
      </footer>
    </div>
  );
}
