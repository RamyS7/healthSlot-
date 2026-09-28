import Link from "next/link";

export default function ProviderCalendarPage() {
  return (
    <div className="bg-background text-on-background font-body-md h-screen flex overflow-hidden">
      {/* NavigationDrawer (Desktop) */}
      <nav className="hidden lg:flex flex-col h-full py-lg bg-surface w-80 fixed left-0 top-0 shadow-xl border-r border-outline-variant z-40">
        <div className="px-6 mb-8 flex items-center">
          <img
            alt="Doctor Avatar"
            className="w-16 h-16 rounded-full object-cover mr-4"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFx0t2DsXmyI8zJ3jZG9A2-76jVT7ZAFOxxmJfPbeF0j8d1VU2PgmUMV-CT7oG7XQw7rU2FS3N0F7Z4DO2I2Brv6pGDSkH7f1YUU0LdNjd1TTO0IKYTwgsNZ_JzpttY-w32rHeTv8GI3FSA_1u5lXu-GQ5NZw_JTfCakH22_-Ryf_RuVtagjv9wVLCyn0R_QCdC_aUF94k-YNr1C7g94jRJtM0Lg4Vdj5npSuRo-x-hLBZ_4FRHRsu"
          />
          <div>
            <h2 className="font-headline-md text-headline-md text-primary">Dr. Alex Rivera</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">General Practitioner</p>
            <p className="font-label-sm text-label-sm text-outline">NPI: 1234567890</p>
          </div>
        </div>
        <ul className="flex-1 space-y-2">
          <li>
            <Link href="/" className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-lg transition-all">
              <span className="material-symbols-outlined mr-4">search</span>
              <span className="font-title-lg text-title-lg">Find Doctors</span>
            </Link>
          </li>
          <li>
            <Link href="/provider-dashboard/calendar" className="flex items-center px-4 py-3 bg-secondary-container text-on-secondary-container font-bold rounded-lg mx-2 hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined mr-4" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
              <span className="font-title-lg text-title-lg">My Appointments</span>
            </Link>
          </li>
          <li>
            <Link href="/provider-dashboard/services" className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-lg transition-all">
              <span className="material-symbols-outlined mr-4">folder_shared</span>
              <span className="font-title-lg text-title-lg">Services</span>
            </Link>
          </li>
          <li>
            <Link href="/provider-dashboard/availability" className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-lg transition-all">
              <span className="material-symbols-outlined mr-4">settings</span>
              <span className="font-title-lg text-title-lg">Availability</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-lg transition-all">
              <span className="material-symbols-outlined mr-4">help_outline</span>
              <span className="font-title-lg text-title-lg">Help Center</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* TopAppBar for Mobile */}
      <header className="lg:hidden flex justify-between items-center w-full px-lg h-20 bg-surface border-b border-outline-variant z-40 fixed top-0">
        <div className="flex items-center">
          <span className="material-symbols-outlined text-primary mr-2 text-3xl">medical_services</span>
          <h1 className="font-headline-md text-headline-md text-primary tracking-tight">HealthSync</h1>
        </div>
        <img
          alt="User Profile Avatar"
          className="w-10 h-10 rounded-full object-cover border border-outline-variant"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuATqsEZh1Hpz7XxqCoRfegSSGKvG9G_7gnwgPDQsFuEURVMMiEQkEeyTH-FWMNoznmQKSifuwGl3Y2er7YAmtlwPUDQvsqhblsfw3JUySfAPXMzcMv1te9hIt0a10KvKpSELs7eyXbjxGQoxrRpP093xQLOjdbxOV2Lpjh4JFImTlcIPvdxUgipJ37b6br16LnUUtykU2gMGvgeuCv4uJequogmIchGmlwX4Nmx423OJtaLOXig_Sri"
        />
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 lg:ml-80 overflow-y-auto pt-24 lg:pt-0 pb-20 lg:pb-0 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-lg lg:px-xl py-lg">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-xl gap-4">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface">Schedule Overview</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage your upcoming consultations and patient visits.</p>
            </div>
            {/* View Toggle */}
            <div className="flex bg-surface-container-low p-1 rounded-lg border border-outline-variant shadow-sm">
              <button className="px-4 py-2 font-label-md text-label-md rounded-md bg-white text-primary shadow-sm border border-outline-variant/50 transition-all">Today</button>
              <button className="px-4 py-2 font-label-md text-label-md rounded-md text-on-surface-variant hover:text-on-surface transition-all">Week</button>
              <button className="px-4 py-2 font-label-md text-label-md rounded-md text-on-surface-variant hover:text-on-surface transition-all">Month</button>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-lg">
            {/* Main Calendar Area (2 cols on XL) */}
            <div className="xl:col-span-2 space-y-lg">
              {/* Daily Timeline */}
              <div className="bg-surface rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-outline-variant p-lg">
                <div className="flex justify-between items-center mb-md border-b border-outline-variant pb-4">
                  <h2 className="font-title-lg text-title-lg text-on-surface flex items-center">
                    <span className="material-symbols-outlined mr-2 text-primary">today</span>
                    Thursday, Oct 26
                  </h2>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
                      <span className="material-symbols-outlined text-on-surface-variant">chevron_left</span>
                    </button>
                    <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
                      <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                    </button>
                  </div>
                </div>
                {/* Timeline List */}
                <div className="space-y-4">
                  {/* Appointment 1 */}
                  <div className="flex gap-4 p-4 rounded-lg border border-l-4 border-l-primary bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                    <div className="w-20 shrink-0 text-right">
                      <p className="font-label-md text-label-md text-on-surface">09:00 AM</p>
                      <p className="font-label-sm text-label-sm text-outline">30 min</p>
                    </div>
                    <div className="flex-1 relative z-10">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-title-lg text-title-lg text-on-surface">Sarah Jenkins</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[16px]">video_camera_front</span>
                            Telehealth Follow-up
                          </p>
                        </div>
                        <span className="px-2 py-1 bg-primary-container text-on-primary-container font-label-sm text-label-sm rounded">Confirmed</span>
                      </div>
                    </div>
                  </div>

                  {/* Appointment 2 */}
                  <div className="flex gap-4 p-4 rounded-lg border border-l-4 border-l-secondary bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
                    <div className="absolute inset-0 bg-secondary/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                    <div className="w-20 shrink-0 text-right">
                      <p className="font-label-md text-label-md text-on-surface">10:00 AM</p>
                      <p className="font-label-sm text-label-sm text-outline">45 min</p>
                    </div>
                    <div className="flex-1 relative z-10">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-title-lg text-title-lg text-on-surface">Michael Chen</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[16px]">stethoscope</span>
                            Annual Physical
                          </p>
                        </div>
                        <span className="px-2 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded">In Waiting Room</span>
                      </div>
                    </div>
                  </div>

                  {/* Break */}
                  <div className="flex gap-4 p-3 rounded-lg border border-dashed border-outline-variant bg-surface-container-low items-center justify-center">
                    <span className="material-symbols-outlined text-outline mr-2 text-[20px]">coffee</span>
                    <span className="font-label-sm text-label-sm text-outline">11:00 AM - Admin Break</span>
                  </div>

                  {/* Appointment 3 */}
                  <div className="flex gap-4 p-4 rounded-lg border border-l-4 border-l-error bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
                    <div className="absolute inset-0 bg-error/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                    <div className="w-20 shrink-0 text-right">
                      <p className="font-label-md text-label-md text-on-surface">11:30 AM</p>
                      <p className="font-label-sm text-label-sm text-outline">15 min</p>
                    </div>
                    <div className="flex-1 relative z-10">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-title-lg text-title-lg text-on-surface">Emma Watson</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[16px]">vaccines</span>
                            Vaccination
                          </p>
                        </div>
                        <span className="px-2 py-1 bg-error-container text-on-error-container font-label-sm text-label-sm rounded">Urgent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-lg">
              {/* Mini Calendar */}
              <div className="bg-surface rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-outline-variant p-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-title-lg text-title-lg text-on-surface">October 2023</h3>
                  <div className="flex">
                    <button className="p-1 hover:bg-surface-container-low rounded">
                      <span className="material-symbols-outlined text-sm text-on-surface-variant">chevron_left</span>
                    </button>
                    <button className="p-1 hover:bg-surface-container-low rounded">
                      <span className="material-symbols-outlined text-sm text-on-surface-variant">chevron_right</span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center font-label-sm text-label-sm text-outline mb-2">
                  <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center font-body-sm text-body-sm text-on-surface">
                  <div className="p-1 text-outline-variant">24</div>
                  <div className="p-1 text-outline-variant">25</div>
                  <div className="p-1 hover:bg-surface-container-low rounded cursor-pointer">26</div>
                  <div className="p-1 hover:bg-surface-container-low rounded cursor-pointer relative">27<span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span></div>
                  <div className="p-1 hover:bg-surface-container-low rounded cursor-pointer">28</div>
                  <div className="p-1 bg-primary text-on-primary rounded font-bold cursor-pointer shadow-sm">29</div>
                  <div className="p-1 hover:bg-surface-container-low rounded cursor-pointer">30</div>
                  <div className="p-1 hover:bg-surface-container-low rounded cursor-pointer">1</div>
                  <div className="p-1 hover:bg-surface-container-low rounded cursor-pointer relative">2<span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span></div>
                  <div className="p-1 hover:bg-surface-container-low rounded cursor-pointer">3</div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-surface rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-outline-variant p-lg">
                <h3 className="font-title-lg text-title-lg text-on-surface mb-4">Today's Summary</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/50">
                    <p className="font-display-lg text-display-lg text-primary">8</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Total Patients</p>
                  </div>
                  <div className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/50">
                    <p className="font-display-lg text-display-lg text-secondary">3</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Remaining</p>
                  </div>
                </div>
                <button className="w-full mt-4 bg-primary text-on-primary font-label-md text-label-md py-3 rounded-lg shadow-sm hover:shadow-md hover:bg-primary-fixed-variant transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  New Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-surface-container rounded-t-xl shadow-lg">
        <Link href="/" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined mb-1">home</span>
          <span className="font-label-sm text-label-sm">Home</span>
        </Link>
        <Link href="/providers" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined mb-1">search</span>
          <span className="font-label-sm text-label-sm">Search</span>
        </Link>
        <Link href="/provider-dashboard/calendar" className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1">
          <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>event_note</span>
          <span className="font-label-sm text-label-sm">Bookings</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined mb-1">person</span>
          <span className="font-label-sm text-label-sm">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
