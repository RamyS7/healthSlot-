import Link from "next/link";

export default function AvailabilitySettingsPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen pb-20 md:pb-0">
      {/* Navigation Drawer (Desktop) */}
      <nav className="hidden lg:flex flex-col h-full py-lg bg-surface shadow-xl w-80 fixed left-0 top-0 border-r border-outline-variant z-40">
        <div className="px-md mb-lg flex items-center gap-4">
          <img
            alt="Doctor Avatar"
            className="w-16 h-16 rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJSYUCm7gYi8_vC-kYSTvqwVX7R-rSbMxwwuemfjw8HV6VonfaFVJ58Dv9io0037_u-TVP54lTMe3XjthJspC9k4Ke6Xlb0_c5qt-SbY9o2MeHDfglFOhHRyHMzF_xqBvPCg9YIQDPHnZWILqsntaUCaLRqI2LS28aJGRXc5joAToMbV73kC0r8K2A9VUpsPGXO56gXYNNIotbqNSToVyV2mmT-4gLlQqSNreebj7k6R1BzWBFqEAu"
          />
          <div>
            <h2 className="font-title-lg text-title-lg text-primary">Dr. Alex Rivera</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">General Practitioner</p>
            <p className="font-label-sm text-label-sm text-outline mt-1">NPI: 1234567890</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-xs">
          <Link href="/" className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-lg transition-all mb-1">
            <span className="material-symbols-outlined">search</span>
            <span className="font-label-md text-label-md">Find Doctors</span>
          </Link>
          <Link href="/provider-dashboard/calendar" className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-lg transition-all mb-1">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="font-label-md text-label-md">My Appointments</span>
          </Link>
          <Link href="#" className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-lg transition-all mb-1">
            <span className="material-symbols-outlined">folder_shared</span>
            <span className="font-label-md text-label-md">Medical Records</span>
          </Link>
          <Link href="/provider-dashboard/availability" className="flex items-center gap-md py-sm px-md bg-secondary-container text-on-secondary-container font-bold rounded-lg mx-2 mb-1 translate-x-1 duration-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </Link>
          <Link href="#" className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:bg-surface-container-high mx-2 rounded-lg transition-all mb-1">
            <span className="material-symbols-outlined">help_outline</span>
            <span className="font-label-md text-label-md">Help Center</span>
          </Link>
        </div>
      </nav>

      {/* Top App Bar (Mobile) */}
      <header className="flex justify-between items-center w-full px-lg md:px-xl max-w-container-max mx-auto h-20 bg-surface border-b border-outline-variant lg:hidden sticky top-0 z-30">
        <div className="flex items-center gap-md">
          <span className="material-symbols-outlined text-primary text-2xl">medical_services</span>
          <h1 className="font-headline-md text-headline-md text-primary tracking-tight">HealthSync</h1>
        </div>
        <div>
          <img
            alt="User Profile Avatar"
            className="w-10 h-10 rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA448otpHmhNUlw2pbXPWQa0nJGFbt_F0i7CLxArrxS6KllMJgospeg9m-7G7z23zqAMT0j0N-QV52TsRsLXbl37ywj12oI1mDNMMpM0YoYUdKKe3Qz242lifzm5ON6HwM67GSuFcR83zea8zOmFj05vC8_CfYzJVlhFs-QzEdL39pdLbPDZ10KeqXPe97Szxm5L9cVXF54Cmps5ciQTahv5o4oPihdua-Oso0UZzaU8nvLcz2lJhdk"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="lg:ml-80 p-md md:p-lg xl:p-xl max-w-container-max mx-auto w-full">
        {/* Header Section */}
        <div className="mb-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-background mb-xs">Availability Settings</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Manage your regular working hours and scheduled time off.</p>
          </div>
          <div className="flex gap-md">
            <button className="h-12 px-lg border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface bg-surface hover:bg-surface-container-low transition-colors shadow-sm">
              Discard Changes
            </button>
            <button className="h-12 px-lg rounded-lg font-label-md text-label-md text-on-primary bg-primary hover:bg-primary-fixed-variant transition-colors shadow-md">
              Save Availability
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-lg">
          {/* Left Column: Weekly Schedule */}
          <div className="xl:col-span-2 space-y-lg">
            <div className="bg-surface rounded-xl border border-outline-variant p-lg shadow-sm">
              <div className="flex justify-between items-center mb-lg border-b border-outline-variant pb-sm">
                <h2 className="font-title-lg text-title-lg text-on-background">Weekly Schedule</h2>
                <span className="material-symbols-outlined text-outline">calendar_month</span>
              </div>
              <div className="space-y-4">

                {/* Monday */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-sm rounded-lg hover:bg-surface-container-low transition-colors group">
                  <div className="flex items-center gap-md mb-sm sm:mb-0 w-32">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked type="checkbox" className="sr-only peer" />
                      <div className="w-10 h-6 bg-outline-variant peer-checked:bg-primary rounded-full transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-4"></div>
                    </label>
                    <span className="font-label-md text-label-md text-on-background">Monday</span>
                  </div>
                  <div className="flex items-center gap-sm flex-1 max-w-md">
                    <div className="flex-1">
                      <input className="w-full h-10 px-sm rounded-md border border-outline-variant bg-surface text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" type="time" defaultValue="09:00" />
                    </div>
                    <span className="text-outline-variant">-</span>
                    <div className="flex-1">
                      <input className="w-full h-10 px-sm rounded-md border border-outline-variant bg-surface text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" type="time" defaultValue="17:00" />
                    </div>
                    <button className="p-2 text-outline hover:text-error transition-colors rounded-full hover:bg-error-container" title="Remove interval">
                      <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                  </div>
                  <div className="hidden sm:block w-10 text-right">
                    <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" title="Add interval">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>

                {/* Tuesday */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-sm rounded-lg hover:bg-surface-container-low transition-colors group">
                  <div className="flex items-center gap-md mb-sm sm:mb-0 w-32">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked type="checkbox" className="sr-only peer" />
                      <div className="w-10 h-6 bg-outline-variant peer-checked:bg-primary rounded-full transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-4"></div>
                    </label>
                    <span className="font-label-md text-label-md text-on-background">Tuesday</span>
                  </div>
                  <div className="flex flex-col gap-sm flex-1 max-w-md">
                    <div className="flex items-center gap-sm">
                      <div className="flex-1">
                        <input className="w-full h-10 px-sm rounded-md border border-outline-variant bg-surface text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" type="time" defaultValue="09:00" />
                      </div>
                      <span className="text-outline-variant">-</span>
                      <div className="flex-1">
                        <input className="w-full h-10 px-sm rounded-md border border-outline-variant bg-surface text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" type="time" defaultValue="12:00" />
                      </div>
                      <button className="p-2 text-outline hover:text-error transition-colors rounded-full hover:bg-error-container" title="Remove interval">
                        <span className="material-symbols-outlined text-[20px]">close</span>
                      </button>
                    </div>
                    <div className="flex items-center gap-sm">
                      <div className="flex-1">
                        <input className="w-full h-10 px-sm rounded-md border border-outline-variant bg-surface text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" type="time" defaultValue="13:00" />
                      </div>
                      <span className="text-outline-variant">-</span>
                      <div className="flex-1">
                        <input className="w-full h-10 px-sm rounded-md border border-outline-variant bg-surface text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" type="time" defaultValue="17:00" />
                      </div>
                      <button className="p-2 text-outline hover:text-error transition-colors rounded-full hover:bg-error-container" title="Remove interval">
                        <span className="material-symbols-outlined text-[20px]">close</span>
                      </button>
                    </div>
                  </div>
                  <div className="hidden sm:block w-10 text-right self-start mt-2">
                    <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" title="Add interval">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>

                {/* Saturday (Inactive) */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-sm rounded-lg bg-surface-container-low opacity-60">
                  <div className="flex items-center gap-md mb-sm sm:mb-0 w-32">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-10 h-6 bg-outline-variant peer-checked:bg-primary rounded-full transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-4"></div>
                    </label>
                    <span className="font-label-md text-label-md text-on-surface-variant">Saturday</span>
                  </div>
                  <div className="flex-1 max-w-md text-center py-2">
                    <span className="font-body-md text-body-md text-outline">Unavailable</span>
                  </div>
                  <div className="hidden sm:block w-10"></div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Time Off */}
          <div className="space-y-lg">
            <div className="bg-surface rounded-xl border border-outline-variant p-lg shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
              <div className="flex justify-between items-center mb-md">
                <h2 className="font-title-lg text-title-lg text-on-background flex items-center gap-sm">
                  <span className="material-symbols-outlined text-secondary">flight_takeoff</span>
                  Time Off
                </h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Block out dates for vacations, conferences, or personal time.</p>
              <button className="w-full h-12 flex items-center justify-center gap-sm border-2 border-dashed border-secondary-fixed-dim rounded-lg font-label-md text-label-md text-secondary hover:bg-secondary-container transition-colors bg-surface-container-lowest">
                <span className="material-symbols-outlined">add_circle</span>
                Add Time Off
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Nav Bar (Mobile) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface-container rounded-t-xl shadow-lg">
        <Link href="/" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-sm text-label-sm">Home</span>
        </Link>
        <Link href="/providers" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
          <span className="material-symbols-outlined">search</span>
          <span className="font-label-sm text-label-sm">Search</span>
        </Link>
        <Link href="/provider-dashboard/calendar" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
          <span className="material-symbols-outlined">event_note</span>
          <span className="font-label-sm text-label-sm">Bookings</span>
        </Link>
        <Link href="/provider-dashboard/availability" className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 scale-90 duration-150">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="font-label-sm text-label-sm">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
