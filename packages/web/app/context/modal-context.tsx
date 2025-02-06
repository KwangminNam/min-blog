'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ISearchModalContextType {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const SearchModalContext = createContext<ISearchModalContextType | undefined>(undefined);

export const SearchModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SearchModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </SearchModalContext.Provider>
  );
};

export const useSearchModal = () => {
  const context = useContext(SearchModalContext);
  if (!context) {
    throw new Error('useSearchModal must be used within a SearchModalProvider');
  }
  return context;
};