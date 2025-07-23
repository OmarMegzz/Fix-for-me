import React from "react";

const CardData = [
  {
    id: 1,
    title: "خدمة الصيانة",
    description: "نقدم خدمات صيانة موثوقة وسريعة لجميع أنواع الأعطال في موقعك.",
    image: "src/assets/Aboutus.png",
  },
  {
    id: 2,
    title: "فنيين معتمدين",
    description:
      "فريقنا مكوّن من فنيين محترفين ومعتمدين بخبرة عالية في المجال.",
    image: "src/assets/Aboutus.png",
  },
  {
    id: 3,
    title: "خدمة عملاء مميزة",
    description: "دعم فني وخدمة عملاء متاحة على مدار الساعة لضمان راحتك.",
    image: "src/assets/Aboutus.png",
  },
];

function Aboutus() {
  return (
    <div className="relative bg-gray-100 min-h-screen px-4 py-16 flex flex-col items-center">
      <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
          من نحن
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
          {CardData.map((card) => (
            <div
              key={card.id}
              className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
