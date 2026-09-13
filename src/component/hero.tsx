import BannerLogo from "../assets/banner-stack.png"

const Hero = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 px-4 py-10 md:py-15">

  {/* Left side */}
  <div>
    <h2 className="text-3xl md:text-4xl font-bold">
      Build Your Ideal <br />

      <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
        Development Stack
      </span>
    </h2>

    <p className="mt-4 text-sm md:text-base text-gray-500 leading-relaxed">
      Explore frontend, backend, database, and tooling options,
      compare them side by side, and put together the stack that fits your
      next project.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
      <button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-500">
        <a href="/">Explore Technologies</a>
      </button>

      <button className="border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-500">
        <a href="/">Learn More</a>
      </button>
    </div>
  </div>

  {/* Right side */}
  <div className="flex justify-center">
    <img
      src={BannerLogo}
      alt="Development stack"
      className="w-56 sm:w-72 md:w-[400px] lg:w-[450px]"
    />
  </div>

</div>
    );
};

export default Hero;