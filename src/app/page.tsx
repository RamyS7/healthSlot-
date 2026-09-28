import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediTrust - Find the Right Doctor, Right Now",
  description:
    "Access a network of 10k+ verified specialists. Book appointments in minutes with healthcare professionals you can trust.",
};

export default function HomePage() {
  return (
    <div className="bg-[#faf8ff] text-[#131b2e]">
      <Navbar activePage="find-doctors" />

      <main>
        {/* ── Hero Section ── */}
        <section className="relative min-h-[819px] flex items-center pt-[80px] pb-[48px] px-[40px] overflow-hidden">
          <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-[80px] items-center">
            <div className="max-w-2xl">
              <h1 className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-[#131b2e] mb-[24px]">
                Find the right doctor,{" "}
                <span className="text-[#004ac6]">right now.</span>
              </h1>
              <p className="text-[18px] leading-[28px] text-[#434655] mb-[48px]">
                Access a network of 10k+ verified specialists. Book appointments
                in minutes with healthcare professionals you can trust.
              </p>

              {/* Search Bar */}
              <div className="bg-white elevated-shadow rounded-xl p-[8px] md:p-[12px] flex flex-col md:flex-row gap-[4px] md:items-center max-w-4xl">
                <div className="flex-1 flex items-center gap-[8px] px-[8px] py-[12px] border-b md:border-b-0 md:border-r border-[#c3c6d7]">
                  <span className="material-symbols-outlined text-[#004ac6]">
                    search
                  </span>
                  <input
                    className="bg-transparent border-none outline-none focus:ring-0 w-full text-[14px] leading-[20px] tracking-[0.01em]"
                    placeholder="Specialty (e.g. Cardiology)"
                    type="text"
                  />
                </div>
                <div className="flex-1 flex items-center gap-[8px] px-[8px] py-[12px] border-b md:border-b-0 md:border-r border-[#c3c6d7]">
                  <span className="material-symbols-outlined text-[#004ac6]">
                    location_on
                  </span>
                  <input
                    className="bg-transparent border-none outline-none focus:ring-0 w-full text-[14px] leading-[20px] tracking-[0.01em]"
                    placeholder="City or Zip Code"
                    type="text"
                  />
                </div>
                <div className="flex-1 flex items-center gap-[8px] px-[8px] py-[12px]">
                  <span className="material-symbols-outlined text-[#004ac6]">
                    verified_user
                  </span>
                  <select className="bg-transparent border-none outline-none focus:ring-0 w-full text-[14px] leading-[20px] tracking-[0.01em] appearance-none">
                    <option>Select Insurance</option>
                    <option>Blue Cross Blue Shield</option>
                    <option>UnitedHealthcare</option>
                    <option>Aetna</option>
                  </select>
                </div>
                <Link
                  href="/search"
                  className="bg-[#004ac6] text-white font-bold px-[48px] py-3 rounded-lg hover:bg-[#2563eb] transition-all flex items-center justify-center gap-[8px] whitespace-nowrap"
                >
                  Search
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="mt-[48px] flex items-center gap-[48px]">
                <div className="flex items-center gap-[8px]">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full border-2 border-[#faf8ff] bg-slate-200 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTFivYFqTFshMSVuCCtbBSdLnXw-M9OsZvOV7cEFc-pA1QPBvovT3SORj9qOdpcBgmS6a2Eeow6aA402wNbl4sUsSAo9AZuWpkmxFRtNqjpxJuvQhmDZUwSeEA3kWvIZl3jFGsTP4VkcE9c7KcL_faxzSVxe7NyWtW9nmp2d6_aaGvQGjz9FjQX21qS7zIWqgyO1DU-BVsroKjCe1BPcXidVB4f6H5-yA7Gi0cB9hEllQnCaQWMr8c"
                        alt="Male physician"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#faf8ff] bg-slate-200 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_M96Tq8Fir3cSa-976C7ZP-gkW1OktdxS0oy6ipkIkteClrwaC2hmmBde6H26od2wHZZMBT1ymJejsoAb20s4ud0VSyXkoTGI_4zZ7HYMUC4N6wHBCWlHFZpcawmOvvMbriLJilTUbLdBRqVtgFQ0mutQ-hJ2w7pJGemnoX_YZUgC3OMWAPHyh3kypiVgO85ZKRKh-54GRRFmFsdrE1v5w38ubCDm86uAl2KkFnsakXjP2G8kWXmY"
                        alt="Male specialist"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#faf8ff] bg-slate-300 flex items-center justify-center text-[10px] font-bold">
                      10k+
                    </div>
                  </div>
                  <span className="text-[14px] leading-[20px] text-[#434655]">
                    Over{" "}
                    <span className="font-bold text-[#131b2e]">10,000+</span>{" "}
                    verified doctors
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative z-10 w-full h-[500px] rounded-2xl overflow-hidden soft-shadow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEdslXPur0kdd1qOCPiQq-T8lhjjJPP7U3TH1_hvMmLSzjrgpJsAiJi9fCFfmC8ZCYAZmHQWfqKfAMcm-LEAClkLeSlQfFvtLjP5GQQ62O52bRhrnAk8wYUP4-NAvDV7RXv0toMk4wBkWY7fcDAdlr7uKZOmG0NQ69ghXqbEqP8IWYFBQHMl6-gYGHzwnMZ9AXqC4xpYgcs1Yxwku-YCsRCzr2dI5X-AV3C7syzUMPolUGYLx8PYyp"
                  alt="A diverse group of professional male doctors and healthcare workers standing in a modern hospital hallway"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-[8px] -left-[8px] z-20 bg-white p-[24px] rounded-xl elevated-shadow max-w-[200px]">
                <div className="flex items-center gap-[8px] mb-[4px]">
                  <span className="w-3 h-3 bg-[#006229] rounded-full animate-pulse"></span>
                  <span className="text-[12px] leading-[16px] font-bold text-[#006229]">
                    Live Support
                  </span>
                </div>
                <p className="text-[12px] leading-[16px] text-[#434655]">
                  24/7 Virtual consultations available today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Partner Logos ── */}
        <section id="about" className="bg-[#f2f3ff] py-[48px] border-y border-[#c3c6d7]">
          <div className="container mx-auto px-[40px]">
            <p className="text-center text-[12px] leading-[16px] font-bold text-[#434655] uppercase tracking-widest mb-[24px]">
              Trusted by world-class medical institutions
            </p>
            <div className="flex flex-wrap justify-center items-center gap-[80px] opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-[24px] leading-[32px] font-extrabold text-[#434655]">
                ST. JUDE
              </span>
              <span className="text-[24px] leading-[32px] font-extrabold text-[#434655]">
                MAYO CLINIC
              </span>
              <span className="text-[24px] leading-[32px] font-extrabold text-[#434655]">
                JOHN HOPKINS
              </span>
              <span className="text-[24px] leading-[32px] font-extrabold text-[#434655]">
                CEDARS-SINAI
              </span>
              <span className="text-[24px] leading-[32px] font-extrabold text-[#434655]">
                CLEVELAND CLINIC
              </span>
            </div>
          </div>
        </section>

        {/* ── How it Works ── */}
        <section id="how-it-works" className="py-[80px] px-[40px] bg-[#faf8ff]">
          <div className="container mx-auto text-center mb-[48px]">
            <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold mb-[8px]">
              How it works
            </h2>
            <p className="text-[#434655] max-w-xl mx-auto">
              Getting world-class medical care is now as easy as ordering your
              favorite meal. Follow these three simple steps.
            </p>
          </div>
          <div className="container mx-auto grid md:grid-cols-3 gap-[48px]">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#2563eb] text-white flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  search
                </span>
              </div>
              <h3 className="text-[24px] leading-[32px] font-semibold mb-[4px]">
                Search
              </h3>
              <p className="text-[#434655]">
                Find doctors by specialty, name, or health concern in your area.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#6df5e1] text-[#006f64] flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  person_search
                </span>
              </div>
              <h3 className="text-[24px] leading-[32px] font-semibold mb-[4px]">
                Select
              </h3>
              <p className="text-[#434655]">
                View verified reviews, availability, and credentials to find the
                best fit.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#007e37] text-[#c1ffc5] flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  event_available
                </span>
              </div>
              <h3 className="text-[24px] leading-[32px] font-semibold mb-[4px]">
                Book
              </h3>
              <p className="text-[#434655]">
                Schedule your appointment instantly with zero booking fees.
              </p>
            </div>
          </div>
        </section>

        {/* ── Featured Specialties ── */}
        <section id="specialties" className="py-[80px] px-[40px] bg-[#f2f3ff]">
          <div className="container mx-auto flex justify-between items-end mb-[48px]">
            <div>
              <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold mb-[4px]">
                Featured Specialties
              </h2>
              <p className="text-[#434655]">
                Top-rated care across all major medical fields.
              </p>
            </div>
            <button className="text-[#004ac6] font-bold flex items-center gap-[4px] hover:underline">
              View all specialties{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[24px]">
            {/* Cardiology */}
            <a
              href="#"
              className="bg-white p-[48px] rounded-xl soft-shadow hover:elevated-shadow transition-all text-center group"
            >
              <div className="w-12 h-12 bg-[#ffdad6] text-[#ba1a1a] rounded-full flex items-center justify-center mx-auto mb-[24px] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">
                  favorite
                </span>
              </div>
              <span className="font-bold text-[14px] leading-[20px]">
                Cardiology
              </span>
            </a>
            {/* Pediatrics */}
            <a
              href="#"
              className="bg-white p-[48px] rounded-xl soft-shadow hover:elevated-shadow transition-all text-center group"
            >
              <div className="w-12 h-12 bg-[#6df5e1] text-[#006f64] rounded-full flex items-center justify-center mx-auto mb-[24px] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">
                  child_care
                </span>
              </div>
              <span className="font-bold text-[14px] leading-[20px]">
                Pediatrics
              </span>
            </a>
            {/* Dermatology */}
            <a
              href="#"
              className="bg-white p-[48px] rounded-xl soft-shadow hover:elevated-shadow transition-all text-center group"
            >
              <div className="w-12 h-12 bg-[#2563eb] text-white rounded-full flex items-center justify-center mx-auto mb-[24px] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">
                  face
                </span>
              </div>
              <span className="font-bold text-[14px] leading-[20px]">
                Dermatology
              </span>
            </a>
            {/* Neurology */}
            <a
              href="#"
              className="bg-white p-[48px] rounded-xl soft-shadow hover:elevated-shadow transition-all text-center group"
            >
              <div className="w-12 h-12 bg-[#283044] text-[#b4c5ff] rounded-full flex items-center justify-center mx-auto mb-[24px] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">
                  psychology
                </span>
              </div>
              <span className="font-bold text-[14px] leading-[20px]">
                Neurology
              </span>
            </a>
            {/* Orthopedics */}
            <a
              href="#"
              className="bg-white p-[48px] rounded-xl soft-shadow hover:elevated-shadow transition-all text-center group"
            >
              <div className="w-12 h-12 bg-[#007e37] text-[#c1ffc5] rounded-full flex items-center justify-center mx-auto mb-[24px] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">
                  skeleton
                </span>
              </div>
              <span className="font-bold text-[14px] leading-[20px]">
                Orthopedics
              </span>
            </a>
            {/* Dentistry */}
            <a
              href="#"
              className="bg-white p-[48px] rounded-xl soft-shadow hover:elevated-shadow transition-all text-center group"
            >
              <div className="w-12 h-12 bg-[#dae2fd] text-[#434655] rounded-full flex items-center justify-center mx-auto mb-[24px] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">
                  dentistry
                </span>
              </div>
              <span className="font-bold text-[14px] leading-[20px]">
                Dentistry
              </span>
            </a>
          </div>
        </section>

        {/* ── Featured Doctors ── */}
        <section className="py-[80px] px-[40px]">
          <div className="container mx-auto text-center mb-[80px]">
            <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold mb-[8px]">
              Top-rated Doctors
            </h2>
            <p className="text-[#434655]">
              Recommended by patients for exceptional care and expertise.
            </p>
          </div>
          <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {[
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTFivYFqTFshMSVuCCtbBSdLnXw-M9OsZvOV7cEFc-pA1QPBvovT3SORj9qOdpcBgmS6a2Eeow6aA402wNbl4sUsSAo9AZuWpkmxFRtNqjpxJuvQhmDZUwSeEA3kWvIZl3jFGsTP4VkcE9c7KcL_faxzSVxe7NyWtW9nmp2d6_aaGvQGjz9FjQX21qS7zIWqgyO1DU-BVsroKjCe1BPcXidVB4f6H5-yA7Gi0cB9hEllQnCaQWMr8c",
                alt: "Professional male doctor",
                rating: "4.9",
                reviews: "1.2k reviews",
                name: "Dr. James Miller",
                specialty: "Cardiologist",
                exp: "15 Yrs Exp.",
                next: "Tomorrow, 10:00 AM",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_M96Tq8Fir3cSa-976C7ZP-gkW1OktdxS0oy6ipkIkteClrwaC2hmmBde6H26od2wHZZMBT1ymJejsoAb20s4ud0VSyXkoTGI_4zZ7HYMUC4N6wHBCWlHFZpcawmOvvMbriLJilTUbLdBRqVtgFQ0mutQ-hJ2w7pJGemnoX_YZUgC3OMWAPHyh3kypiVgO85ZKRKh-54GRRFmFsdrE1v5w38ubCDm86uAl2KkFnsakXjP2G8kWXmY",
                alt: "Young male doctor",
                rating: "5.0",
                reviews: "850 reviews",
                name: "Dr. Michael Chen",
                specialty: "Pediatrics",
                exp: "8 Yrs Exp.",
                next: "Today, 2:30 PM",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSUMgANT6cxp-NPOb0ubPkrduEhq4HfLv9HEbZCxCB6OgwbyzfwHHt-a0S1LUdk0XCu3aYxs4yZe1KRijZ23x0nclPZszRLYHvYbJ5AwN40zpInxPesM_26v1VgXQ49YgSaq_sH1tWvV-7Wt0tz8B6RSy9uIQ6YrbBdQlQeV1A8woQjxqxPwQE-nJ5fXH6vbFfbSTcQWUBjJFIJKlA9cfoMEIsdFUdf9W1vSiSDG_cp67FcKXGoxCw",
                alt: "Senior male physician",
                rating: "4.8",
                reviews: "2k reviews",
                name: "Dr. Robert Alistair",
                specialty: "Neurology",
                exp: "20 Yrs Exp.",
                next: "Monday, 9:00 AM",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTFivYFqTFshMSVuCCtbBSdLnXw-M9OsZvOV7cEFc-pA1QPBvovT3SORj9qOdpcBgmS6a2Eeow6aA402wNbl4sUsSAo9AZuWpkmxFRtNqjpxJuvQhmDZUwSeEA3kWvIZl3jFGsTP4VkcE9c7KcL_faxzSVxe7NyWtW9nmp2d6_aaGvQGjz9FjQX21qS7zIWqgyO1DU-BVsroKjCe1BPcXidVB4f6H5-yA7Gi0cB9hEllQnCaQWMr8c",
                alt: "Portrait of male orthopedic surgeon",
                rating: "4.9",
                reviews: "500 reviews",
                name: "Dr. James Wilson",
                specialty: "Orthopedics",
                exp: "12 Yrs Exp.",
                next: "Today, 4:15 PM",
              },
            ].map((doc) => (
              <div
                key={doc.name}
                className="bg-white rounded-xl overflow-hidden soft-shadow hover:elevated-shadow transition-all flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={doc.img}
                    alt={doc.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#006229] text-white px-[8px] py-1 rounded-full text-[12px] leading-[16px] flex items-center gap-[4px]">
                    <span className="w-2 h-2 bg-white rounded-full"></span>{" "}
                    Available
                  </div>
                </div>
                <div className="p-[24px] flex flex-col flex-grow">
                  <div className="flex items-center gap-[4px] mb-[4px]">
                    <span
                      className="material-symbols-outlined text-yellow-400 text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-[12px] leading-[16px] font-bold">
                      {doc.rating} ({doc.reviews})
                    </span>
                  </div>
                  <h3 className="text-[24px] leading-[32px] font-semibold mb-[4px]">
                    {doc.name}
                  </h3>
                  <div className="flex flex-wrap gap-[4px] mb-[24px]">
                    <span className="bg-[#6df5e1] text-[#006f64] px-[8px] py-1 rounded-full text-[12px] leading-[16px] font-bold">
                      {doc.specialty}
                    </span>
                    <span className="bg-[#eaedff] text-[#434655] px-[8px] py-1 rounded-full text-[12px] leading-[16px]">
                      {doc.exp}
                    </span>
                  </div>
                  <div className="mt-auto border-t border-[#c3c6d7] pt-[24px] flex justify-between items-center">
                    <div>
                      <p className="text-[12px] leading-[16px] text-[#434655]">
                        Next Available
                      </p>
                      <p className="text-[14px] leading-[20px] font-bold text-[#004ac6]">
                        {doc.next}
                      </p>
                    </div>
                    <Link
                      href="/search"
                      className="w-10 h-10 rounded-full bg-[#004ac6] text-white flex items-center justify-center hover:bg-[#2563eb] transition-all"
                    >
                      <span className="material-symbols-outlined">
                        calendar_today
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="py-[80px] px-[40px]">
          <div className="container mx-auto bg-[#004ac6] rounded-3xl overflow-hidden relative p-[48px] md:p-[80px] text-white flex flex-col lg:flex-row items-center gap-[48px]">
            <div className="relative z-10 lg:w-3/5">
              <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold mb-[24px]">
                Are you a healthcare provider?
              </h2>
              <p className="text-[18px] leading-[28px] opacity-90 mb-[48px]">
                Join 10,000+ doctors who have expanded their reach and simplified
                their practice management with MediTrust.
              </p>
              <div className="flex flex-wrap gap-[24px]">
                <button className="bg-white text-[#004ac6] px-[48px] py-3 rounded-lg font-bold text-[14px] leading-[20px] elevated-shadow hover:scale-105 transition-all">
                  Join as a Doctor
                </button>
                <button className="border-2 border-white text-white px-[48px] py-3 rounded-lg font-bold text-[14px] leading-[20px] hover:bg-white/10 transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative z-10 lg:w-2/5 flex justify-center">
              <div className="bg-white/10 backdrop-blur-md p-[24px] rounded-2xl border border-white/20 elevated-shadow">
                <ul className="space-y-[12px]">
                  <li className="flex items-center gap-[8px]">
                    <span className="material-symbols-outlined text-[#71f8e4]">
                      check_circle
                    </span>{" "}
                    Automated Scheduling
                  </li>
                  <li className="flex items-center gap-[8px]">
                    <span className="material-symbols-outlined text-[#71f8e4]">
                      check_circle
                    </span>{" "}
                    Digital Health Records
                  </li>
                  <li className="flex items-center gap-[8px]">
                    <span className="material-symbols-outlined text-[#71f8e4]">
                      check_circle
                    </span>{" "}
                    Reach Local Patients
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
