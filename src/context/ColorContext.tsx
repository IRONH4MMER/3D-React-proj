import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ModelMaterials } from '../types/ModelMaterials';

interface ChangeColorContextType {
  selectedColor: ModelMaterials | null;
  handleClick: (color: ModelMaterials | null) => void;
}

const ChangeColorContext = createContext<ChangeColorContextType | undefined>(
  undefined,
);

const ChangeColorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedColor, setSelectedColor] = useState<ModelMaterials | null>(
    null,
  );

  const handleClick = (color: ModelMaterials | null) => {
    setSelectedColor(color);
  };

  return (
    <ChangeColorContext.Provider value={{ selectedColor, handleClick }}>
      {children}
    </ChangeColorContext.Provider>
  );
};

const useChangeColor = () => {
  const context = useContext(ChangeColorContext);
  if (context === undefined) {
    throw new Error(
      'useChangeColor must be used within an ChangeColorProvider',
    );
  }
  return context;
};

export { ChangeColorProvider, useChangeColor };
