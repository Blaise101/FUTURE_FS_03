import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2000"
          alt="Boutique Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 animate-fade-in tracking-tight">
          Luna Thread Boutique
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 font-light italic tracking-wide">
          Curated fashion, crafted for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/shop")}
            className="bg-white text-[#1A1A1A] px-10 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#C5A59E] hover:text-white transition-all duration-300 w-full sm:w-auto"
          >
            Shop Now
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="border border-white text-white px-10 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 w-full sm:w-auto"
          >
            Visit Us
          </button>
        </div>
      </div>
    </section>
  );
}
