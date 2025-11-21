import { createContext, useState } from 'react';

const ModalContext = createContext({
  isRestaurantDetailModalOpen: false,
  setIsRestaurantDetailModalOpen: () => {},
  isAddRestaurantModalOpen: false,
  setIsAddRestaurantModalOpen: () => {},
});

export function ModalProvider({ children }) {
  const [isRestaurantDetailModalOpen, setIsRestaurantDetailModalOpen] = useState(false);
  const [isAddRestaurantModalOpen, setIsAddRestaurantModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isRestaurantDetailModalOpen,
        setIsRestaurantDetailModalOpen,
        isAddRestaurantModalOpen,
        setIsAddRestaurantModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
