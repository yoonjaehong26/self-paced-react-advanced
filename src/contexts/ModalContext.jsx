import { createContext, useState } from "react";

const ModalContext = createContext({
    isRestaurantDetailModalOpen: false,
    setIsRestaurantDetailModalOpen: () => {}
});

 
export const ModalProvider = ({ children }) => {
    const [isRestaurantDetailModalOpen, setIsRestaurantDetailModalOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isRestaurantDetailModalOpen, setIsRestaurantDetailModalOpen }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContext;
