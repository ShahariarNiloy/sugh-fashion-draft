"use client";

const partners = [
  { name: "Razorpay", logo: "https://cdn.razorpay.com/logo.svg" },
  { name: "PhonePe", logo: "/images/payment/phonepe.svg" },
  { name: "Paytm", logo: "/images/payment/paytm.svg" },
  { name: "UPI", logo: "/images/payment/upi.svg" },
  { name: "Visa", logo: "/images/payment/visa.svg" },
  { name: "Mastercard", logo: "/images/payment/mastercard.svg" },
];

const TrustBadges = () => {
  return (
    <section className="py-12 border-y border-gray-2">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-col items-center">
          <span className="text-xs font-medium uppercase tracking-widest text-dark-4 mb-8">
            Trusted Payment Partners
          </span>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {/* Payment icons as styled placeholders since actual logos need assets */}
            <div className="flex items-center gap-2 text-dark-4 hover:text-dark transition-colors duration-200">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
              </svg>
              <span className="font-medium text-sm">Secure Payments</span>
            </div>

            <div className="flex items-center gap-2 text-dark-4 hover:text-dark transition-colors duration-200">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
              <span className="font-medium text-sm">100% Safe</span>
            </div>

            <div className="flex items-center gap-2 text-dark-4 hover:text-dark transition-colors duration-200">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
              </svg>
              <span className="font-medium text-sm">Best Prices</span>
            </div>

            <div className="flex items-center gap-2 text-dark-4 hover:text-dark transition-colors duration-200">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z" />
              </svg>
              <span className="font-medium text-sm">Quality Assured</span>
            </div>

            <div className="flex items-center gap-2 text-dark-4 hover:text-dark transition-colors duration-200">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
              <span className="font-medium text-sm">SSL Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
