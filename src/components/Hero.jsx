import profile from "../assets/profile.webp";
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={profile}
              alt="Cedrick Bienvenue"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
