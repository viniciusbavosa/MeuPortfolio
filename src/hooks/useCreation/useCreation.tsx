import { useRef } from "react";

export default function useCreation() {
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const itemRef = useRef<HTMLLIElement>(null);

  const handleLeftClick = () => {
    if (carouselRef.current && itemRef.current) {
      carouselRef.current.scrollLeft -= itemRef.current.offsetWidth;
    }
  };

  const handleRightClick = () => {
    if (carouselRef.current && itemRef.current) {
      carouselRef.current.scrollLeft += itemRef.current.offsetWidth;
    }
  };

  return {
    carouselRef,
    itemRef,
    handleLeftClick,
    handleRightClick,
  };
}
