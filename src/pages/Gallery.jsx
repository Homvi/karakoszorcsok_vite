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
