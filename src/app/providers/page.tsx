import Link from "next/link";

export default function ProviderListingPage() {
  return (
    <div className="bg-background text-on-background min-h-screen pb-24 md:pb-0 font-body-md">
      {/* TopAppBar */}
      <header className="bg-surface docked full-width top-0 border-b border-outline-variant flat no-shadows sticky z-50">
        <div className="flex justify-between items-center w-full px-lg md:px-xl max-w-container-max mx-auto h-20">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-[32px]">medical_services</span>
            <span className="font-display-lg text-display-lg text-primary tracking-tight">HealthSync</span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-lg">
            <Link href="/" className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low transition-colors px-4 py-2 rounded-full">Home</Link>
            <Link href="/providers" className="text-primary font-bold border-b-2 border-primary font-label-md text-label-md hover:bg-surface-container-low transition-colors px-4 py-2">Search</Link>
            <Link href="#" className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low transition-colors px-4 py-2 rounded-full">Bookings</Link>
            <Link href="#" className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low transition-colors px-4 py-2 rounded-full">Profile</Link>
          </nav>
          <div className="flex items-center">
            <img alt="User Profile Avatar" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArfu6wZ_OwFw56yx8Ptg4oVR2Tk0_hL-4z0Fa5WsrM6B7CqWvrfuJjYd0NSC8YqPbGRhn_sKrYip2CQVBW7TycURz1jlKE4f_JzDspRHuQL2HHcXwySqI7Gd8WI9HusbtV-QxOiyM74TQXCM6hZgiTmuw4ivWShZjnd55vuFnoFQy0M56C6GCq9GmqfhtKwobI1BL__JcndDLr7XPSI3ezOfWKcRKbrMVtE6rr-xmlt-FlwLS2lOgC" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-container-max mx-auto px-md md:px-lg py-xl">
        {/* Filter Bar */}
        <section className="mb-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md bg-surface-container p-md rounded-xl shadow-sm border border-outline-variant/30">
            <div className="flex-1 w-full relative">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-xl pr-sm py-sm rounded-lg border border-outline-variant bg-surface focus:ring-2 focus:ring-primary focus:border-primary font-body-sm" placeholder="Search by name, specialty, or condition" type="text" />
            </div>
            <div className="flex flex-wrap gap-sm w-full md:w-auto">
              <button className="flex items-center gap-xs px-md py-sm bg-surface border border-outline-variant rounded-lg text-on-surface font-label-sm hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Availability
              </button>
              <button className="flex items-center gap-xs px-md py-sm bg-surface border border-outline-variant rounded-lg text-on-surface font-label-sm hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                Distance
              </button>
              <button className="flex items-center gap-xs px-md py-sm bg-surface border border-outline-variant rounded-lg text-on-surface font-label-sm hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[18px]">tune</span>
                Filters
              </button>
            </div>
          </div>
        </section>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {/* Doctor Card 1 */}
          <article className="bg-surface rounded-xl border border-outline-variant/50 p-lg shadow-sm hover:shadow-md transition-shadow flex flex-col gap-md">
            <div className="flex items-start gap-md border-b border-outline-variant/30 pb-md">
              <img alt="Dr. Sarah Jenkins" className="w-20 h-20 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZBOpvrsIdHJb5sTFONonm9LSxPLMYnNyQFNjpr2ec1NYs1PEhsemRhlNkSGrH3XiLaiUeysTPJ6h_HdaYswTrckvv996iOAMSh9a5N98VA7QGibYyVwB_xi1_B4umTa8qLy8hdArKGfyi76DA425kB1UwvUJIt58Teb75JGwhZ06B9_jYUpcDJ32cJGyZTptHH5aeuq2UcoY_2AARg9imBZsG-1sRf8MhpN6PpaV5_gm3TiORXiEg" />
              <div className="flex-1">
                <h2 className="font-title-lg text-title-lg text-on-surface">Dr. Sarah Jenkins</h2>
                <span className="inline-block bg-primary-container/20 text-primary px-sm py-xs rounded-full font-label-sm mt-xs">Cardiology</span>
                <div className="flex items-center gap-xs mt-sm text-on-surface-variant font-body-sm">
                  <span className="material-symbols-outlined text-[#facc15] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-medium text-on-surface">4.9</span>
                  <span>(128 reviews)</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-on-surface-variant font-body-sm">
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-[18px]">work_history</span>
                15+ Years Exp.
              </div>
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                2.4 miles away
              </div>
            </div>
            <Link href="/providers/sarah-jenkins" className="text-center w-full bg-primary text-on-primary font-label-md py-sm rounded-lg hover:bg-on-primary-fixed-variant transition-colors mt-auto block">Book Now</Link>
          </article>

          {/* Doctor Card 2 */}
          <article className="bg-surface rounded-xl border border-outline-variant/50 p-lg shadow-sm hover:shadow-md transition-shadow flex flex-col gap-md">
            <div className="flex items-start gap-md border-b border-outline-variant/30 pb-md">
              <img alt="Dr. Marcus Chen" className="w-20 h-20 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiefEq5YMIpiWJ6zMp_H00vxiZ6xW1Dw6RN4pCM8_Nd3vrri5N5-VfqQCSmgKpCsSiXJ0PkC1bD7_KXnux27pUcocoPIQCx0gFGJm_GC5g2BBDNqE7T97pz2Aid1kuMob3opGBjuMo_8O6OjMRG_gFsYfPOAmKzJsHIbHSD6nhMD3UN4gssFAEobuvkntDxms0r7bm6w9r2iR64MDJ4-SvQy3rqW4ZZ0qdB5IVPvCqprWE9mwX4pjX" />
              <div className="flex-1">
                <h2 className="font-title-lg text-title-lg text-on-surface">Dr. Marcus Chen</h2>
                <span className="inline-block bg-primary-container/20 text-primary px-sm py-xs rounded-full font-label-sm mt-xs">Neurology</span>
                <div className="flex items-center gap-xs mt-sm text-on-surface-variant font-body-sm">
                  <span className="material-symbols-outlined text-[#facc15] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-medium text-on-surface">4.8</span>
                  <span>(95 reviews)</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-on-surface-variant font-body-sm">
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-[18px]">work_history</span>
                8 Years Exp.
              </div>
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                5.1 miles away
              </div>
            </div>
            <Link href="/providers/marcus-chen" className="text-center w-full bg-primary text-on-primary font-label-md py-sm rounded-lg hover:bg-on-primary-fixed-variant transition-colors mt-auto block">Book Now</Link>
          </article>

          {/* Doctor Card 3 */}
          <article className="bg-surface rounded-xl border border-outline-variant/50 p-lg shadow-sm hover:shadow-md transition-shadow flex flex-col gap-md">
            <div className="flex items-start gap-md border-b border-outline-variant/30 pb-md">
              <img alt="Dr. Emily Roberts" className="w-20 h-20 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwPKozJVuX9fpYQ1RHAU1vXR8LzPpnzK923WGcLXYv2AwPIYnAe2p7HK11THOL3wdn3JZTlnx_uSiFFoQ1_LqtvoaQqvu-5ssum9qmXmZFjRXlj3MvExlPRxxoBtSr8fpNYdGpEd_TqYBrGvQo9bYFsIctFaLBZt6i8QWBGvzEMO1M-63N5BUHs-dV1FqHUBJ5hr-XjtQI5NSjPaHcyn9uAoOjuhGz-uHhSonKtJHxc3uJIMccfyt8" />
              <div className="flex-1">
                <h2 className="font-title-lg text-title-lg text-on-surface">Dr. Emily Roberts</h2>
                <span className="inline-block bg-primary-container/20 text-primary px-sm py-xs rounded-full font-label-sm mt-xs">Pediatrics</span>
                <div className="flex items-center gap-xs mt-sm text-on-surface-variant font-body-sm">
                  <span className="material-symbols-outlined text-[#facc15] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-medium text-on-surface">5.0</span>
                  <span>(210 reviews)</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-on-surface-variant font-body-sm">
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-[18px]">work_history</span>
                22 Years Exp.
              </div>
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                1.2 miles away
              </div>
            </div>
            <Link href="/providers/emily-roberts" className="text-center w-full bg-primary text-on-primary font-label-md py-sm rounded-lg hover:bg-on-primary-fixed-variant transition-colors mt-auto block">Book Now</Link>
          </article>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="bg-surface-container docked full-width bottom-0 rounded-t-xl shadow-lg fixed left-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden">
        <Link href="/" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors gap-1">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-sm text-label-sm">Home</span>
        </Link>
        <Link href="/providers" className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 gap-1">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
          <span className="font-label-sm text-label-sm">Search</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors gap-1">
          <span className="material-symbols-outlined">event_note</span>
          <span className="font-label-sm text-label-sm">Bookings</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors gap-1">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-sm text-label-sm">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
