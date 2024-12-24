const HeroSectionTop: React.FC = () => {
  return (
    <section className="bg-black text-white w-full relative grid grid-cols-12 min-h-[450px]">
      <section className="col-start-1 col-end-13 md:col-start-2 md:col-end-12 flex justify-between items-center flex-row gap-[20px] min-h-full">
        <div className="flex justify-evenly items-start flex-col gap-[12px]">
          <span className="block text-gray-400">Pro Beyond</span>
          <p className="text-[54px] font-extralight text-gray-300">
            Iphone 14 <strong className="font-extrabold text-white">Pro</strong>
          </p>
          <span className="block font-[100] text-[14px] text-gray-200">Created to change everything for everyone, for better</span>
          <button className="text-[20px] border-[1px] border-solid border-white px-[24px] py-[10px] rounded-md">Shop Now</button>
        </div>
        <div className="min-h-full">
          <img
            src="/images/Iphone-hero-image.svg"
            alt="Iphone-hero-image"
            className="min-h-full"
          />
        </div>
      </section>
    </section>
  );
};

export default HeroSectionTop;
