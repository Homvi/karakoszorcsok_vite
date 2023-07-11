const Hero = () => {
  return (
    //Photo by <a href="https://unsplash.com/@iriser?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Irina Iriser</a> on <a href="https://unsplash.com/wallpapers/nature/forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    <div className="flex  items-center  justify-start  w-full bg-cover bg-center  h-screen bg-hero-pattern">
      <div className=" md:ml-10 w-full p-5 h-full md:h-fit flex flex-col justify-center bg-gradient-to-r from-black/50 to-black/0 rounded-md">
        <div className="w-full">
          <h1 className="text-4xl text-white font-bold">Isten hozta önöket!</h1>
          <p className="py-6 text-white max-w-xl ">
            Megtiszteltetés számomra, hogy a település polgármestereként,
            önkormányzatunk nevében köszönthetek minden érdeklődőt. Remélem, a
            honlap böngészése után kedvet érez majd, hogy személyesen is
            megismerkedjen településünkkel és az itt élő emberekkel!
          </p>
          <button className="btn btn-primary">Tovább a hírekhez</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
