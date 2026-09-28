export default function Footer() {
  return (
    <footer className="w-full py-[48px] px-[40px] grid grid-cols-1 md:grid-cols-4 gap-[24px] bg-[#f2f3ff] border-t border-[#c3c6d7]">
      <div className="col-span-1">
        <a
          href="#"
          className="text-[24px] leading-[32px] font-bold text-[#004ac6] block mb-[24px]"
        >
          MediTrust
        </a>
        <p className="text-[#434655] text-[14px] leading-[20px] tracking-[0.01em] mb-[48px]">
          Connecting patients with world-class healthcare, making the journey to
          wellness simpler, faster, and more reliable.
        </p>
        <div className="flex gap-[24px]">
          <a
            href="#"
            className="text-[#434655] hover:text-[#004ac6] transition-colors"
          >
            <span className="material-symbols-outlined">qr_code_2</span>
          </a>
          <a
            href="#"
            className="text-[#434655] hover:text-[#004ac6] transition-colors"
          >
            <span className="material-symbols-outlined">share</span>
          </a>
          <a
            href="#"
            className="text-[#434655] hover:text-[#004ac6] transition-colors"
          >
            <span className="material-symbols-outlined">alternate_email</span>
          </a>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-[#131b2e] mb-[24px]">Quick Links</h4>
        <ul className="space-y-[8px] text-[14px] leading-[20px]">
          <li>
            <a
              href="#"
              className="text-[#434655] hover:text-[#004ac6] transition-all"
            >
              Find Doctors
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#434655] hover:text-[#004ac6] transition-all"
            >
              Specialties
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#434655] hover:text-[#004ac6] transition-all"
            >
              Video Consult
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#434655] hover:text-[#004ac6] transition-all"
            >
              Health Blog
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-[#131b2e] mb-[24px]">Support</h4>
        <ul className="space-y-[8px] text-[14px] leading-[20px]">
          <li>
            <a
              href="#"
              className="text-[#434655] hover:text-[#004ac6] transition-all"
            >
              Contact Support
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#434655] hover:text-[#004ac6] transition-all"
            >
              Help Center
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#434655] hover:text-[#004ac6] transition-all"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#434655] hover:text-[#004ac6] transition-all"
            >
              Terms of Service
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-[#131b2e] mb-[24px]">Newsletter</h4>
        <p className="text-[12px] leading-[16px] text-[#434655] mb-[24px]">
          Stay updated with the latest health tips and provider updates.
        </p>
        <div className="flex">
          <input
            className="bg-[#faf8ff] rounded-l-lg border border-[#c3c6d7] focus:ring-1 focus:ring-[#004ac6] focus:border-[#004ac6] px-[8px] py-2 w-full outline-none text-sm"
            placeholder="Your email"
            type="email"
          />
          <button className="bg-[#004ac6] text-white px-[8px] rounded-r-lg hover:opacity-90">
            Join
          </button>
        </div>
      </div>

      <div className="col-span-full border-t border-[#c3c6d7] pt-[48px] text-center">
        <p className="text-[12px] leading-[16px] text-[#434655]">
          © 2024 MediTrust Healthcare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
