import React from 'react';
import Image from 'next/image'; // Adjust if using Next.js image optimization

const GallerySection = () => {
  return (
    <div className="mt-8">
      <h2 className="text-4xl  text-black font-bold text-center mt-8">Gallery</h2>
      <div className="flex justify-center mt-6">
        <Image
          src="/images/gallery.png" // Update with the actual path to the image
          alt="Gallery Image"
          width={850} // Adjust width as needed
          height={300} // Adjust height as needed
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default GallerySection;
