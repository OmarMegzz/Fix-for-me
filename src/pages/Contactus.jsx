import React from "react";

function Contactus() {
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-16">
      {/* خلفية شفافة بسيطة */}
      <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

      {/* المحتوى */}
      <div className="relative z-10 w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-lg p-6 text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          كلمنا لاى استفسار
        </h1>

        <div className="space-y-5 text-lg">
          <div>
            📞
            <a
              href="tel:+201234567890"
              className="text-blue-600 hover:underline"
            >
              0128797130
            </a>
          </div>

          <div>
            💬
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              كلمنا على الواتساب
            </a>
          </div>

          <div>
            📧
            <a
              href="mailto:info@example.com"
              className="text-blue-600 hover:underline"
            >
              info@example.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
