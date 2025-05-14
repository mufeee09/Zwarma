// import { useState, useEffect } from 'react';
// import '../styles/Gallery.css';

// interface GalleryImage {
//   id: number;
//   src: string;
//   alt: string;
// }

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
//   const [imagesLoaded, setImagesLoaded] = useState(false);
//   const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

//   const galleryImages: GalleryImage[] = [
//     {
//       id: 1,
//       src: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       alt: "Restaurant Interior"
//     },
//     {
//       id: 2,
//       src: "https://images.pexels.com/photos/8307335/pexels-photo-8307335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       alt: "Shawarma Wrap"
//     },
//     {
//       id: 3,
//       src: "https://images.pexels.com/photos/9009958/pexels-photo-9009958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       alt: "Grilled Meat Platter"
//     },
//     {
//       id: 4,
//       src: "https://images.pexels.com/photos/7437347/pexels-photo-7437347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       alt: "Falafel Plate"
//     },
//     {
//       id: 5,
//       src: "https://images.pexels.com/photos/13409751/pexels-photo-13409751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       alt: "Rice Dish"
//     },
//     {
//       id: 6,
//       src: "https://images.pexels.com/photos/8992933/pexels-photo-8992933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       alt: "Dips and Sauces"
//     },
//   ];

//   useEffect(() => {
//     const loadImages = async () => {
//       const imagePromises = galleryImages.map((image) => {
//         return new Promise((resolve) => {
//           const img = new Image();
//           img.src = image.src;
//           img.onload = () => {
//             setLoadedImages(prev => new Set([...prev, image.id]));
//             resolve(true);
//           };
//           img.onerror = () => resolve(false);
//         });
//       });

//       await Promise.all(imagePromises);
//       setImagesLoaded(true);
//     };

//     loadImages();
//   }, []);

//   const openModal = (image: GalleryImage) => {
//     setSelectedImage(image);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = 'auto';
//   };

//   if (!imagesLoaded) {
//     return (
//       <div className="gallery-loading">
//         <div className="loader"></div>
//         <p>Loading gallery...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="gallery-page">
//       <div className="gallery-header">
//         <h1>Gallery</h1>
//       </div>

//       <div className="gallery-grid">
//         {galleryImages.map((image) => (
//           <div 
//             key={image.id} 
//             className={`gallery-item ${loadedImages.has(image.id) ? 'loaded' : ''}`}
//             onClick={() => openModal(image)}
//           >
//             <img src={image.src} alt={image.alt} />
//             <div className="gallery-item-overlay">
//               <span>+</span>
//             </div>
//           </div>
//         ))}
//       </div>
      

//       {selectedImage && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="modal-close" onClick={closeModal}>×</button>
//             <img src={selectedImage.src} alt={selectedImage.alt} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;

import { useEffect, useRef } from 'react';
import '../styles/Gallery.css';
import img1 from "../images/IMG-20250204-WA0010.jpg"
import img2 from "../images/IMG-20250204-WA0014.jpg"
import img3 from "../images/IMG-20250204-WA0015.jpg"
import img4 from "../images/IMG-20250204-WA0016.jpg"
import img5 from "../images/IMG-20250204-WA0017.jpg"
import img6 from "../images/IMG-20250204-WA0018.jpg"
import img7 from "../images/IMG-20250204-WA0019.jpg"
import img8 from "../images/IMG-20250204-WA0022.jpg"
import img9 from "../images/IMG-20250204-WA0026.jpg"
import img10 from "../images/IMG-20250204-WA0029.jpg" 
import img11 from "../images/IMG-20250204-WA0030.jpg"
import img12 from "../images/IMG-20250204-WA0031.jpg"
import img13 from "../images/IMG-20250204-WA0033.jpg"
import img14 from "../images/IMG-20250204-WA0032.jpg"


const images = [
  { src: img1, title: 'Ms Marvel' },
  { src: img2, title: 'Starlord' },
  { src: img3, title: 'Spider-Man' },
  { src: img4, title: 'Black Panther' },
  { src: img5, title: 'Venom' },
  { src: img6, title: 'Thanos' },
  { src: img7, title: 'Iron Man' },
  { src: img8, title: 'Thor' },
  { src: img9, title: 'Captain America' },
  { src: img10, title: 'Black Widow' },
  { src: img11, title: 'Black Widow' },
  { src: img12, title: 'Black Widow' },
  { src: img13, title: 'Black Widow' },
  { src: img14, title: 'Black Widow' },
];

const ImageGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const imgs = gridRef.current.querySelectorAll('img');
    let loaded = 0;

    imgs.forEach((img) => {
      img.onload = () => {
        img.parentNode.style.opacity = '1';
        loaded++;
        if (loaded === imgs.length) {
          gridRef.current.classList.add('revealed');
        }
      };
    });
  }, []);

  return (
    <section className="grid" ref={gridRef}>
      {images.map((img, i) => (
        <figure key={i}>
          <img src={img.src} alt={img.title} />
          <figcaption>
            <div>
              <div><h3>{img.title}</h3></div>
            </div>
          </figcaption>
        </figure>
      ))}
      <div className="copyright">2017 Marvel</div>
    </section>
  );
};

export default ImageGrid;
