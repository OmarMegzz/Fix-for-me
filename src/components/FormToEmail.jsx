import React, { useState, useRef } from "react";

export default function FormToEmail() {
  const [locationLink, setLocationLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef();

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("المتصفح لا يدعم تحديد الموقع.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const link = `https://www.google.com/maps?q=${latitude},${longitude}`;
        setLocationLink(link);
      },
      () => {
        alert("حدث خطأ أثناء محاولة الحصول على موقعك.");
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    fetch("https://formspree.io/f/mpwlpozb", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true);
          formRef.current.reset();
          setLocationLink("");
        } else {
          alert("حدث خطأ أثناء الإرسال.");
        }
      })
      .catch(() => {
        alert("فشل الاتصال بالخادم.");
      });
  };

  return (
    <div className="relative bg-gray-100 px-4 py-16 min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

      <div className="relative z-10 w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900">
          نموذج طلب التصليح
        </h1>

        {submitted ? (
          <div className="bg-green-100 text-green-800 text-lg p-4 rounded shadow text-center">
            ✅ تم إرسال الطلب بنجاح. شكرًا لتواصلك معنا.
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 bg-white bg-opacity-90 backdrop-blur-md shadow-md p-8 rounded-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="اسمك"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />

            <input
              type="number"
              name="phone"
              placeholder="رقم الهاتف"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />

            <textarea
              name="message"
              placeholder="تفاصيل المشكلة"
              rows="5"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            ></textarea>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleGetLocation}
                className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 w-fit"
              >
                استخدم موقعي الحالي
              </button>

              <input
                type="text"
                name="location"
                placeholder="رابط موقعك الجغرافي"
                value={locationLink}
                onChange={(e) => setLocationLink(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>

            <input
              type="text"
              name="place"
              placeholder="العنوان بالتفصيل"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />

            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-md font-semibold w-full transition duration-300"
            >
              إرسال الطلب
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
