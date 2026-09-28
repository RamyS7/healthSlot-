import Link from "next/link";

export default function BookingDetailsPage() {
  return (
    <div className="bg-surface-container-low text-on-surface font-sans min-h-screen">
      {/* Top Navigation (Shell suppressed for this focused modal/overlay view) */}
      
      {/* Main Content Canvas (Modal Overlay Effect) */}
      <main className="fixed inset-0 z-50 flex items-center justify-center p-md sm:p-lg bg-on-surface/40 backdrop-blur-sm overflow-y-auto">
        {/* Modal Card */}
        <div className="bg-surface w-full max-w-4xl rounded-xl shadow-xl flex flex-col max-h-[795px] overflow-hidden">
          
          {/* Modal Header */}
          <header className="flex justify-between items-center px-lg py-md border-b border-outline-variant bg-surface sticky top-0 z-10">
            <div>
              <h1 className="font-headline-md text-headline-md text-primary">Appointment Details</h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Booking Ref: #HS-492-B8K</p>
            </div>
            <Link href="/" aria-label="Close" className="p-2 rounded-full hover:bg-surface-container-high text-on-surface-variant transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>close</span>
            </Link>
          </header>

          {/* Modal Body (Scrollable) */}
          <div className="p-lg overflow-y-auto">
            
            {/* Status Banner */}
            <div className="bg-secondary-container/30 border border-secondary-container rounded-lg p-md mb-lg flex items-start gap-md">
              <span className="material-symbols-outlined text-secondary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <div>
                <h3 className="font-title-lg text-title-lg text-on-surface">Confirmed</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Your appointment is scheduled. Please arrive 15 minutes early to complete any necessary paperwork.</p>
              </div>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              
              {/* Left Column (Doctor & Time) */}
              <div className="md:col-span-2 flex flex-col gap-lg">
                
                {/* Doctor Profile Card */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg shadow-sm">
                  <div className="flex items-start gap-lg">
                    <img alt="Doctor Profile" className="w-24 h-24 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmt1aLNN7uxOMwVmIjYItdtBSDJ2XA9l81VNkseIsZEiJjXa3rUsm950u7DVWDSdvzRWVlPqlcK9K5AnTnQclyjOFsBRGiBM2ZGttkcxMTyQrutjxPeQtKwFC6J9wGqSL5GNK-g-JdlcmhTBW-0KYSNS9Ano3voSj3Wrp3j2VQY-GNAcYN6rnWH3aAiBQQ-z6lNI6AbS7vWuW6fCd3gUII2tNsLUUBsog9Z4GYAvsl8VdfP-oQq4Ts" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="font-title-lg text-title-lg text-on-surface">Dr. Sarah Jenkins</h2>
                          <p className="font-body-md text-body-md text-primary mt-1">Cardiologist</p>
                        </div>
                        <div className="bg-primary-container/20 text-primary px-3 py-1 rounded-full flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="font-label-sm text-label-sm">4.9 (124 reviews)</span>
                        </div>
                      </div>
                      <div className="mt-md flex flex-wrap gap-md">
                        <div className="flex items-center gap-2 text-on-surface-variant">
                          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_today</span>
                          <span className="font-body-sm text-body-sm">Thursday, Oct 24, 2024</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant">
                          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
                          <span className="font-body-sm text-body-sm">10:30 AM - 11:15 AM (45m)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preparation Instructions */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg shadow-sm">
                  <h3 className="font-title-lg text-title-lg text-on-surface mb-md flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>medical_information</span>
                    Patient Preparation
                  </h3>
                  <ul className="space-y-sm">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_right</span>
                      <p className="font-body-md text-body-md text-on-surface-variant">Fasting required: Please do not eat or drink anything (except water) for 8 hours prior to your appointment.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_right</span>
                      <p className="font-body-md text-body-md text-on-surface-variant">Bring your current medication list and any recent test results.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_right</span>
                      <p className="font-body-md text-body-md text-on-surface-variant">Wear comfortable, loose-fitting clothing.</p>
                    </li>
                  </ul>
                </div>

              </div>

              {/* Right Column (Location & Check-in) */}
              <div className="flex flex-col gap-lg">
                
                {/* Location / Map Card */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
                  <div className="h-48 w-full bg-surface-variant relative">
                    <img alt="Map Location" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-QZcL730TWPyPfUQaVddhJoNOe6Bq5C_e7UwVUCAeqCfVKXkbi81xl-SKnGT9CMHbbbTMEptiSYzp9Hc_qf8pLDUevKolqgwqfKgJ9exY0A7eFB-3_f4SPLJQRXrU_OQD52fnpEOaFYI6fNfN6TJG-M0Qu8ZHED6hPH0nOp0Q2hZoJA-3gUdAP-iMQRG_k3wHCyZvoHMqsbxoXIxjqejV6DJYV9upxbnxmcxWdXfeG6kQgHTyIvgz" />
                  </div>
                  <div className="p-md flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-title-lg text-title-lg text-on-surface mb-xs">Heart Health Clinic</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant flex items-start gap-2 mt-2">
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>location_on</span>
                        1234 Wellness Way, Suite 300<br/>Seattle, WA 98101
                      </p>
                    </div>
                    <button className="mt-md w-full border border-primary text-primary hover:bg-primary-container/10 font-label-md text-label-md h-12 rounded-lg transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>directions</span>
                      Get Directions
                    </button>
                  </div>
                </div>

                {/* Check-in QR */}
                <div className="bg-surface-container-highest rounded-lg p-lg shadow-sm flex flex-col items-center justify-center text-center">
                  <p className="font-label-md text-label-md text-on-surface-variant mb-md">Scan at kiosk upon arrival</p>
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-md inline-block">
                    <img alt="Check-in QR Code" className="w-32 h-32" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXMt-a9aEfecFyIS_8r4908MfMx7-klbKRu9fEzLenVHMR7amYlvylQVIR7aig5SulwuvNpy9mZOFG5urqzyj0qUzrxcTd24oft0MCL3s78IoFa7ya-Yb8dPSM0ZCBtzm_K8LmMNBgPsXeE4K0Tfu3KTlE2MOtbSp6fD147FrNVA6Yaz92V74rt-806tJMoQu_MdubnbMczeFiFPx1E3AV975tDrLYYi85B6JsWQ0a-Ov8cfid2iJy" />
                  </div>
                  <button className="text-primary hover:text-primary-fixed-variant font-label-md text-label-md flex items-center gap-2 transition-colors">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>chromecast_2</span>
                    Add to Apple Wallet
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Modal Footer Actions */}
          <footer className="p-md sm:p-lg border-t border-outline-variant bg-surface flex flex-col sm:flex-row justify-end gap-md">
            <button className="h-12 px-lg border border-outline text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-variant transition-colors flex-1 sm:flex-none">
              Reschedule
            </button>
            <button className="h-12 px-lg border border-error text-error hover:bg-error-container/20 font-label-md text-label-md rounded-lg transition-colors flex-1 sm:flex-none">
              Cancel
            </button>
          </footer>
        </div>
      </main>
    </div>
  );
}
