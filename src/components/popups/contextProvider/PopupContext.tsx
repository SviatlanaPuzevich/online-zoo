import { createContext } from 'react';


interface PopupContextType {
  openPopup: (type: string, props?: Record<string, unknown>) => void;
  closePopup: () => void;
}

export const PopupContext = createContext<PopupContextType | undefined>(undefined);



