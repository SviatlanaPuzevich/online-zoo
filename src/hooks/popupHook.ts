import { useContext } from 'react';
import { PopupContext } from '../components/popups/contextProvider/PopupContext.tsx';


export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
};