import { useState } from "react";

export function useHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile only
  const toggleMenuState = () => setIsOpen((prevValue) => !prevValue);

  return {
    isOpen,
    toggleMenuState,
  };
}
