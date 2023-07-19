import img1 from "../assets/img/gallery/1.jpg";
import img2 from "../assets/img/gallery/2.jpg";
import img3 from "../assets/img/gallery/3.jpg";
import img4 from "../assets/img/gallery/4.jpg";
import img5 from "../assets/img/gallery/5.jpg";
import img6 from "../assets/img/gallery/6.jpg";
import img7 from "../assets/img/gallery/7.jpg";
import img8 from "../assets/img/gallery/8.jpg";
import img9 from "../assets/img/gallery/9.jpg";
import img10 from "../assets/img/gallery/10.jpg";
import img11 from "../assets/img/gallery/11.jpg";
import img12 from "../assets/img/gallery/12.jpg";
import img13 from "../assets/img/gallery/13.jpg";
import img14 from "../assets/img/gallery/14.jpg";
import img15 from "../assets/img/gallery/15.jpg";
import img16 from "../assets/img/gallery/16.jpg";
import img17 from "../assets/img/gallery/17.jpg";
import img18 from "../assets/img/gallery/18.jpg";
import img19 from "../assets/img/gallery/19.jpg";
import img20 from "../assets/img/gallery/20.jpg";
import img21 from "../assets/img/gallery/21.jpg";
import img22 from "../assets/img/gallery/22.jpg";
import img23 from "../assets/img/gallery/23.jpg";
import img24 from "../assets/img/gallery/24.jpg";
import img25 from "../assets/img/gallery/25.jpg";
import img26 from "../assets/img/gallery/26.jpg";
import img27 from "../assets/img/gallery/27.jpg";
import img28 from "../assets/img/gallery/28.jpg";
import img29 from "../assets/img/gallery/29.jpg";
import img30 from "../assets/img/gallery/30.jpg";

const Gallery = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
  ];

  let uniqueImages = [];
  images.forEach((element) => {
    if (!uniqueImages.includes(element)) {
      uniqueImages.push(element);
    }
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-3">
      <div className=" w-full h-[100px]"></div>
      <div className="gap-3 columns-1 md:columns-2 lg:columns-3">
        {uniqueImages.map((image, id) => {
          return (
            <img
              onClick={() => console.log(image)}
              loading="lazy"
              key={id}
              src={image}
              alt="karakószörcsök fotó"
              className="w-full shadow-xl mb-3"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
