import { useNavigate } from "react-router-dom";
import hangingclothes from "../../assets/constants/productImages/hangingclothes.png";

export default function StoryTeaser() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F3E5E5] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <img
            src={hangingclothes}
            alt="Fashion selection"
            className="rounded-sm shadow-xl"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold italic">
            The Art of Dressing
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg font-light">
            We believe fashion should be a conversation between who you are and
            what you wear. Every piece at Luna Thread is selected not just for
            its beauty, but for its soul.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="inline-block bg-[#1A1A1A] text-white px-8 py-3 uppercase text-xs tracking-widest font-bold hover:bg-[#C5A59E] transition-colors"
          >
            Our Story
          </button>
        </div>
      </div>
    </section>
  );
}
