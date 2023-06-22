import GalleryImage1 from "../assets/images/Photo-gallery-1.jpg"
import GalleryImage2 from "../assets/images/Photo-gallery-2.jpg"
import GalleryImage3 from "../assets/images/Photo-gallery-3.jpg"
import GalleryImage4 from "../assets/images/Photo-gallery-4.jpg"
import GalleryImage5 from "../assets/images/Photo-gallery-5.jpg"
import GalleryImage6 from "../assets/images/Photo-gallery-6.jpg"
import GalleryImage7 from "../assets/images/Photo-gallery-7.jpg"
import GalleryImage8 from "../assets/images/Photo-gallery-8.jpg"
import GalleryImage9 from "../assets/images/Photo-gallery-9.jpg"

function Gallery() {
  return (
    <div className="p-4 bg-tertiary-light">
        <h2 className="text-primary-dark text-[1.5rem] font-semibold">Photo Gallery</h2>
        <div className="flex flex-col">
            <img className="py-4" src={GalleryImage1} alt="gallery-music-festival"/>
            <img className="py-2" src={GalleryImage2} alt="gallery-music-festival"/>
            <img className="py-2" src={GalleryImage3} alt="gallery-music-festival"/>
            <img className="py-2" src={GalleryImage4} alt="gallery-music-festival"/>
            <img className="py-2" src={GalleryImage5} alt="gallery-music-festival"/>
            <img className="py-2" src={GalleryImage6} alt="gallery-music-festival"/>
            <img className="py-2" src={GalleryImage7} alt="gallery-music-festival"/>
            <img className="py-3" src={GalleryImage8} alt="gallery-music-festival"/>
            <img className="py-3" src={GalleryImage9} alt="gallery-music-festival"/>
        </div>
    </div>
  )
}

export default Gallery