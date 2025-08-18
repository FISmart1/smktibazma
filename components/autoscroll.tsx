import React, { useEffect, useRef } from "react";

const AutoScrollCards = () => {
  const scrollRef = useRef(null);

  const cards = [
    { title: "Card 1", desc: "Deskripsi 1" },
    { title: "Card 2", desc: "Deskripsi 2" },
    { title: "Card 3", desc: "Deskripsi 3" },
    { title: "Card 4", desc: "Deskripsi 4" },
    { title: "Card 5", desc: "Deskripsi 5" },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });

        scrollAmount += 260; // lebar card + gap

        if (scrollAmount >= scrollContainer.scrollWidth) {
          scrollAmount = 0; // reset ke awal
        }
      }
    }, 2000); // tiap 2 detik pindah

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={scrollRef} className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 flex-nowrap p-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-[250px] max-w-[250px] flex-shrink-0 rounded-2xl shadow-lg bg-white p-6 text-center"
          >
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-gray-600 mt-2">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollCards;
