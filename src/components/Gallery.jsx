import GalleryImage1 from "../assets/images/Photo-gallery-1.jpg";
import GalleryImage2 from "../assets/images/Photo-gallery-2.jpg";
import GalleryImage3 from "../assets/images/Photo-gallery-3.jpg";
import GalleryImage4 from "../assets/images/Photo-gallery-4.jpg";
import GalleryImage5 from "../assets/images/Photo-gallery-5.jpg";
import GalleryImage6 from "../assets/images/Photo-gallery-6.jpg";
import GalleryImage7 from "../assets/images/Photo-gallery-7.jpg";
import GalleryImage8 from "../assets/images/Photo-gallery-8.jpg";
import GalleryImage9 from "../assets/images/Photo-gallery-9.jpg";

const Gallery = () => {

  const imagePaths = [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
    GalleryImage5,
    GalleryImage6,
    GalleryImage7,
    GalleryImage8,
    GalleryImage9,
  ];

  return (
    <div className="p-4 bg-tertiary-light md:px-[1.5rem]">
      <h2 className="text-primary-dark text-[1.5rem] font-semibold md:text-[2.2rem] md:px-[1rem] md:py-[1rem] lg:px-[6.7rem]">
        Photo Gallery
      </h2>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-[1.5rem] lg:px-[4.8rem]">
        {imagePaths.map((image, index) => (
          <img className="py-2 md:w-[30%] md:p-0" key={index} src={image} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
