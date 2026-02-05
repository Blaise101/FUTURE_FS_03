export default function WhyUs() {
  const itemTypes = [
    { title: "Local Design", desc: "Sourced from local artisans." },
    { title: "Handpicked", desc: "Each piece chosen with care." },
    { title: "Sustainable", desc: "Mindful of our environment." },
    { title: "Trendy", desc: "Modern looks for every season." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {itemTypes.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white border border-gray-50 rounded-sm"
          >
            <h3 className="font-bold uppercase tracking-widest text-sm mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
