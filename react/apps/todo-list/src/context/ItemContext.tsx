import { FC, useState, createContext } from 'react';
import { data } from '../data';
import { ItemInterface, ItemStatesInterface } from '../interfaces';

interface ProviderInterface {
  children: React.ReactNode;
}

// create the context
export const ItemContext = createContext<ItemStatesInterface | null>(null);

// the provider
const ItemProvider: FC<ProviderInterface> = ({ children }) => {
  const [items, setItems] = useState<ItemInterface[]>(data);

  return (
    <ItemContext.Provider value={{ items, setItems }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
