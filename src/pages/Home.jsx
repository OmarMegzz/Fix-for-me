import React from "react";

function Home({ scrollToForm }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center "
      style={{
        backgroundImage: "url('public/images/mianImg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Layer فوق الصورة لتعتيم الخلفية */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col gap-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-mono">
          صلحلي
        </h1>

        <p className="text-gray-600 text-lg sm:text-xl font-medium">
          محتوى تعريفي عن الخدمة... مثلاً: احنا بنوفرلك فنيين مضمونين يصلك لحد
          باب البيت.
        </p>

        <button
          onClick={scrollToForm}
          className="mt-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
        >
          اطلب تصليحه
        </button>
      </div>
    </div>
  );
}

export default Home;
