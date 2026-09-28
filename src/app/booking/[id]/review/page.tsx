"use client";

import { useState } from "react";
import Link from "next/link";

export default function ReviewSubmissionPage() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="bg-surface border-b border-outline-variant docked full-width top-0 z-50 sticky">
        <div className="flex justify-between items-center w-full px-lg md:px-xl max-w-container-max mx-auto h-20">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
            <span className="text-[24px] font-bold text-primary tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>HealthSync</span>
          </div>
          <nav className="hidden md:flex gap-lg"></nav>
          <div>
            <img
              alt="User Profile Avatar"
              className="w-10 h-10 rounded-full object-cover border border-outline-variant"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZPSDp5ub1qdqcAf9ZbCQkg0KFA6rBLyfJrgvf-IaAGYEfDgI3CBLWTORJX8OdNniLgsNjivoPP8TT8oacGsuhlk_PqRhkmFpNpZadCaX6qN_KqzYgMvJcGul-I53bd5VPrdMOAlo6grjnzZvSc7RldkAJrwnWf7blOZZjHxTB7EReVw02iBv2yh86NzkJejD7CPgs2sWXYWorn35vhZcNeJfSPbU8cyZqPJWuMcyrz90EDvrqhH2y"
            />
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-md md:p-xl">
        {/* Review Card */}
        <div className="bg-surface rounded-xl shadow-lg border border-outline-variant max-w-[600px] w-full p-lg md:p-2xl flex flex-col items-center text-center">
          
          <div className="mb-lg">
            <span className="material-symbols-outlined text-primary text-[48px] mb-sm block" style={{ fontVariationSettings: "'FILL' 1" }}>reviews</span>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">Thank you for your feedback</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Your insights help us improve care for everyone.</p>
          </div>

          {/* Doctor Info */}
          <div className="flex items-center gap-md bg-surface-container-low p-md rounded-lg w-full mb-xl border border-surface-container">
            <img
              alt="Dr. Alex Rivera"
              className="w-16 h-16 rounded-full object-cover shadow-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX_X2l0ysASzFqpz7DVJs69DCWOILmQ4qwMHQfisOFWCJZjlgCOUA2zF1rl2VUMenwB4canbFC4ukxfxXHYJdv66Oda4uDoYHk53O3nj-KkZhVHAvIX4h10bGkspSxmC1vjPNUIN543nBgYog7w2pl5J6ijhvikGk5ovyOQ5h_T8PCkarpxMGqnqtXprVQN0ImggwP89xAxBCjodQneL4_3OUa5xmqLkjNldxveiWP96Ip2Okrvmcq"
            />
            <div className="text-left">
              <h2 className="font-title-lg text-title-lg text-on-surface">Dr. Alex Rivera</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">General Practitioner</p>
            </div>
          </div>

          {/* Rating Stars Component */}
          <div className="w-full mb-xl">
            <p className="font-label-md text-label-md text-on-surface mb-md">How would you rate your experience?</p>
            <div className="flex justify-center gap-sm cursor-pointer">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className="material-symbols-outlined text-[32px] transition-colors cursor-pointer"
                  style={{
                    color: star <= (hovered || rating) ? '#003c90' : '#c3c6d5',
                    fontVariationSettings: star <= (hovered || rating) ? "'FILL' 1" : "'FILL' 0"
                  }}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => setRating(star)}
                >
                  star
                </span>
              ))}
            </div>
          </div>

          {/* Comments Area */}
          <div className="w-full mb-xl text-left">
            <label className="font-label-md text-label-md text-on-surface block mb-sm" htmlFor="comments">
              Additional Comments (Optional)
            </label>
            <textarea
              className="w-full rounded-lg border border-outline-variant bg-surface text-on-surface focus:ring-2 focus:ring-primary focus:border-primary p-md font-body-md resize-none outline-none transition-all"
              id="comments"
              name="comments"
              placeholder="Please share any details about your visit..."
              rows={4}
            ></textarea>
          </div>

          {/* Submit Action */}
          <div className="w-full flex justify-end gap-md mt-sm">
            <Link href="/" className="px-lg py-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant h-12 flex items-center justify-center">
              Cancel
            </Link>
            <button
              className="px-xl py-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-fixed-variant shadow-md hover:shadow-lg transition-all h-12 flex items-center justify-center gap-sm"
              type="button"
            >
              Submit Review
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
