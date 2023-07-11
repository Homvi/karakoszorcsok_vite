const Hero = () => {
  return (
    //Photo by <a href="https://unsplash.com/@iriser?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Irina Iriser</a> on <a href="https://unsplash.com/wallpapers/nature/forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    <div className="hero min-h-screen bg-base-200 bg-hero-pattern">
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content flex-col lg:flex-row-reverse  bg-gradient-to-r from-black/30 to-black/0 rounded-2xl">
        <div className="w-screen">
          <h1 className="text-5xl text-white font-bold">Isten hozta önöket!</h1>
          <p className="py-6 text-white max-w-xl ">
            Megtiszteltetés számomra, hogy a település polgármestereként,
            önkormányzatunk nevében köszönthetek minden érdeklődőt. Remélem, a
            honlap böngészése után kedvet érez majd, hogy személyesen is
            megismerkedjen településünkkel és az itt élő emberekkel!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
