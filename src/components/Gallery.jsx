import GalleryImage1 from "../assets/images/Photo-gallery-1.jpg";
import GalleryImage2 from "../assets/images/Photo-gallery-2.jpg";
import GalleryImage3 from "../assets/images/Photo-gallery-3.jpg";
import GalleryImage4 from "../assets/images/Photo-gallery-4.jpg";
import GalleryImage5 from "../assets/images/Photo-gallery-5.jpg";
import GalleryImage6 from "../assets/images/Photo-gallery-6.jpg";
import GalleryImage7 from "../assets/images/Photo-gallery-7.jpg";
import GalleryImage8 from "../assets/images/Photo-gallery-8.jpg";
import GalleryImage9 from "../assets/images/Photo-gallery-9.jpg";

function Gallery() {
    
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
    <div className="p-4 bg-tertiary-light">
      <h2 className="text-primary-dark text-[1.5rem] font-semibold">
        Photo Gallery
      </h2>
      <div className="flex flex-col">
        {imagePaths.map((image, index) => (
          <img className="py-2" key={index} src={image} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
