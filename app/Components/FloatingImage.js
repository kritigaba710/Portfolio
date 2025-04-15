import { useEffect, useRef } from 'react';
import Image from 'next/image';

const FloatingImage = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    // Function to handle mouse movement (optional for interaction)
    const handleMouseMove = (event) => {
      const { clientX: mouseX, clientY: mouseY } = event;

      const { left, top, width, height } = image.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = (mouseX - centerX) / 10;
      const deltaY = (mouseY - centerY) / 10;

      image.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex justify-center w-full md:w-1/2">
      <Image
        ref={imageRef}
        src="/skill.svg"
        alt="Skill Image"
        width={700}
        height={700}
        className="floating-image"
      />
    </div>
  );
};

export default FloatingImage;
