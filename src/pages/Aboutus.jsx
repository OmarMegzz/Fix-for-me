import React from "react";

const CardData = [
  {
    id: 1,
    title: "خدمتك",
    description:
      "طول الوقت هنكون فى خدمتك ولو عندك اى مشكلة هتتحل فى نفس الوقت احنا مش بتوع يومين عمل",
    image: "/images/customer.png",
  },
  {
    id: 2,
    title: "راحتك",
    description:
      "احنا موجودين هنا عشان نريحك وبالتالى نوفرلك وقتك ومجهودك و لو مشغول ومش فاضى تروح تصلح احنا هنا هنصلحلك",
    image: "/images/comfortable.jpeg",
  },
  {
    id: 3,
    title: "الامان",
    description:
      "الامان ده اهم حاجة بالنسبة لينا هنحافظلك على عربيتك وكمان هيبقا فى ضمان على الصيانةعلى حسب العطل ",
    image: "/images/safety.jpg",
  },
];

function Aboutus() {
  return (
    <div className="relative bg-gray-100 min-h-screen px-4 py-16 flex flex-col items-center">
      <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
          احنا مين
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
