import Link from "next/link";

export default function ServicesManagementPage() {
  return (
    <div className="bg-background text-on-background font-body-md h-screen flex overflow-hidden">
      {/* NavigationDrawer (Desktop) */}
      <nav className="hidden lg:flex flex-col h-full py-lg w-80 fixed left-0 top-0 bg-surface border-r border-outline-variant shadow-xl z-40">
        <div className="px-6 mb-8 flex items-center gap-4">
          <img
            className="w-12 h-12 rounded-full object-cover shadow-sm"
            alt="Dr. Alex Rivera"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJWwbHM5i0lq0bWB_DRHW9MYjvvK4kr8rYJxMS-8HzjXES3bnHhd8bx32MEjxWPN_wDS3k2TfQT1RnqcNKvX28Jv20X-uHIqYGuR9WfK404bENiu4_tQL1izRMy-RI0vwTiD4gPT9Ybo261w2J-qj3wway0YfSFfADQns2ZTf0VtOj9PlG3yqVfCl2L5rIXlUBPy-6u3GHWQqjoXQSNXVxkjaKnrV8Gg3lL6teirF70vHmy4EmNgVe"
          />
          <div>
            <h2 className="font-title-lg text-title-lg text-primary">Dr. Alex Rivera</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">General Practitioner</p>
            <p className="font-label-sm text-label-sm text-outline mt-1">NPI: 1234567890</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-4 space-y-2">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 mx-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-all">
            <span className="material-symbols-outlined">search</span>
            <span className="font-body-md text-body-md">Find Doctors</span>
          </Link>
          <Link href="/provider-dashboard/calendar" className="flex items-center gap-3 px-4 py-3 mx-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-all">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="font-body-md text-body-md">My Appointments</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 mx-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-all">
            <span className="material-symbols-outlined">folder_shared</span>
            <span className="font-body-md text-body-md">Medical Records</span>
          </Link>
          <Link href="/provider-dashboard/services" className="flex items-center gap-3 px-4 py-3 mx-2 rounded-lg bg-secondary-container text-on-secondary-container font-bold translate-x-1 duration-200 shadow-sm">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
            <span className="font-body-md text-body-md">Settings</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 mx-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-all">
            <span className="material-symbols-outlined">help_outline</span>
            <span className="font-body-md text-body-md">Help Center</span>
          </Link>
        </div>
        <div className="px-6 mt-auto">
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-error transition-colors">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-body-md text-body-md">Log Out</span>
          </Link>
        </div>
      </nav>

      {/* TopAppBar (Mobile/Tablet) */}
      <header className="lg:hidden flex justify-between items-center w-full px-lg max-w-container-max mx-auto h-20 bg-surface border-b border-outline-variant fixed top-0 z-40">
        <div className="flex items-center gap-3">
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <span className="material-symbols-outlined text-primary text-2xl">medical_services</span>
          <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight">HealthSync</span>
        </div>
        <img
          className="w-10 h-10 rounded-full object-cover"
          alt="User Profile Avatar"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO66JRdqbBuU09hcOhiZbpFTQX2cJ-c5sgZxFDs5Yd4LMUU2c_Uo-mNtQbwiRP8-6UUsTCRu43fg6n9Ot9XDtIBCROBrEyTYkIyiEWm814AW6jluqt0ZAyL5fJWuMALm8trytYAMWE9bR7Pr7cMHbmw-Z3_iCAhGVtKxdf13qG0CjSCEQoQt_x2cNNNigsxfMPlwsybO30zsW_Cw3TM_EyN2O8U_BrPBx0qq5pmhGvvKyPYb9Fq5Mt"
        />
      </header>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-80 pt-20 lg:pt-0 p-4 md:p-8 lg:p-12 w-full max-w-container-max mx-auto bg-surface-container-lowest overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Services Management</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Configure the consultation types, durations, and pricing you offer to patients.</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 px-6 h-12 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-fixed-variant transition-colors shadow-sm hover:shadow-md">
              <span className="material-symbols-outlined">add</span>
              Add Service
            </button>
          </div>

          {/* Services List */}
          <div className="space-y-4">
            {/* Service Item 1 – General Consultation */}
            <div className="bg-surface border border-outline-variant rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-title-lg text-title-lg text-on-surface">General Consultation</h3>
                    <span className="px-2 py-1 bg-surface-container-high text-on-surface-variant rounded text-xs font-medium">In-Person</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Standard evaluation for new or existing patients regarding general health concerns.</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span className="font-label-sm text-label-sm">30 mins</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">payments</span>
                      <span className="font-label-sm text-label-sm">$50.00</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-outline-variant">
                  <button className="flex-1 md:flex-none px-4 py-2 text-primary hover:bg-surface-container-low rounded-lg font-label-sm text-label-sm transition-colors border border-outline-variant md:border-none">Edit</button>
                  <button className="p-2 text-error hover:bg-error-container rounded-lg transition-colors border border-outline-variant md:border-none">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Service Item 2 – Follow-up Visit */}
            <div className="bg-surface border border-outline-variant rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-title-lg text-title-lg text-on-surface">Follow-up Visit</h3>
                    <span className="px-2 py-1 bg-surface-container-high text-on-surface-variant rounded text-xs font-medium">Telehealth</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Brief check-in to review test results or monitor ongoing treatment plans.</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span className="font-label-sm text-label-sm">15 mins</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">payments</span>
                      <span className="font-label-sm text-label-sm">$30.00</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-outline-variant">
                  <button className="flex-1 md:flex-none px-4 py-2 text-primary hover:bg-surface-container-low rounded-lg font-label-sm text-label-sm transition-colors border border-outline-variant md:border-none">Edit</button>
                  <button className="p-2 text-error hover:bg-error-container rounded-lg transition-colors border border-outline-variant md:border-none">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Service Item 3 – Annual Physical (Inactive) */}
            <div className="bg-surface border border-outline-variant rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden opacity-75">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-outline-variant"></div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-title-lg text-title-lg text-on-surface line-through">Annual Physical</h3>
                    <span className="px-2 py-1 bg-error-container text-on-error-container rounded text-xs font-medium">Inactive</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Comprehensive yearly health examination and preventative screening.</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span className="font-label-sm text-label-sm">60 mins</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">payments</span>
                      <span className="font-label-sm text-label-sm">$150.00</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-outline-variant">
                  <button className="flex-1 md:flex-none px-4 py-2 text-primary hover:bg-surface-container-low rounded-lg font-label-sm text-label-sm transition-colors border border-outline-variant md:border-none">Reactivate</button>
                  <button className="p-2 text-error hover:bg-error-container rounded-lg transition-colors border border-outline-variant md:border-none">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-surface-container shadow-lg rounded-t-xl">
        <Link href="/" className="flex flex-col items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-sm text-label-sm">Home</span>
        </Link>
        <Link href="/providers" className="flex flex-col items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined">search</span>
          <span className="font-label-sm text-label-sm">Search</span>
        </Link>
        <Link href="/provider-dashboard/calendar" className="flex flex-col items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined">event_note</span>
          <span className="font-label-sm text-label-sm">Bookings</span>
        </Link>
        <Link href="/provider-dashboard/services" className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 scale-90 duration-150">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="font-label-sm text-label-sm">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
