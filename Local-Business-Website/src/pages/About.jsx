export default function About() {
  const philosophies = [
    {
      title: "Quality First",
      philosophy:
        "We prioritize natural fibers and superior construction. Every item is tested for durability and comfort before it hits our shelves.",
    },
    {
      title: "Fair Trade",
      philosophy:
        "We partner exclusively with workshops and brands that ensure fair wages and safe working conditions for all makers.",
    },
    {
      title: "Community",
      philosophy:
        "From hosting local artist showcases to donating to local charities, we are deeply rooted in the soil of our neighborhood.",
    },
  ];

  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 serif">
            Our Story
          </h1>
          <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
            <p>
              Luna Thread Boutique was born in 2018 from a simple observation:
              women in our community were looking for pieces that felt both
              timeless and personal.
            </p>
            <p>
              Founded by Eleanor Vance, a former textile designer with a passion
              for slow fashion, the boutique started as a small pop-up in Lower
              Manhattan. Today, it has grown into a sanctuary for those who
              value the craft behind their clothing.
            </p>
            <p>
              The name "Luna Thread" represents the delicate balance between the
              ethereal beauty of design and the practical strength of quality
              materials. We don't just sell clothes; we curate experiences that
              celebrate the individual spirit.
            </p>
          </div>
        </div>
        <div className="bg-[#F3E5E5] p-8 rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200"
            alt="Eleanor in the store"
            className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 serif italic">Our Mission</h2>
          <p className="text-2xl text-gray-700 font-light italic leading-relaxed">
            "To empower local artisans and provide women with a wardrobe that
            reflects their depth, intelligence, and grace, while maintaining a
            commitment to ethical production."
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {philosophies.map((phy, index) => (
          <div>
            <div className="w-16 h-16 bg-[#F3E5E5] rounded-full flex items-center justify-center mx-auto mb-6 text-xl">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="font-bold uppercase tracking-widest text-sm mb-4">
              {phy.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              {phy.philosophy}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
