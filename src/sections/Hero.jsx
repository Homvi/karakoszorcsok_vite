import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  //data-aos-delay="800"
  return (
    //Photo by <a href="https://unsplash.com/@iriser?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Irina Iriser</a> on <a href="https://unsplash.com/wallpapers/nature/forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    <div className="flex  items-center overflow-hidden  justify-start  w-full bg-cover bg-center  h-screen bg-hero-pattern-mobile md:bg-hero-pattern-desktop">
      <div className=" md:ml-10 w-full p-5 h-full md:h-fit flex flex-col justify-center bg-gradient-to-r from-black/50 to-black/0 rounded-md">
        <div className="w-full">
          <h1
            data-aos="fade-left"
            data-aos-duration="800"
            className="text-4xl text-white font-bold"
          >
            Isten hozta önöket!
          </h1>
          <p
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
            className="py-6 text-white max-w-xl "
          >
            Megtiszteltetés számomra, hogy a település polgármestereként,
            önkormányzatunk nevében köszönthetek minden érdeklődőt. Remélem, a
            honlap böngészése után kedvet érez majd, hogy személyesen is
            megismerkedjen településünkkel és az itt élő emberekkel!
          </p>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <a href="#news">
              <button className="btn btn-primary">Tovább a hírekhez</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
