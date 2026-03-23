import { PopupContext } from './PopupContext.tsx';
import PopupLayout from '../../../layouts/modal/PopupLayout.tsx';
import { POPUP_REGISTRY } from './modal.config.ts';
import { type ReactNode, useState } from 'react';

export const PopupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeFrame, setActiveFrame] = useState<string | null>(null);
  const [extraProps, setExtraProps] = useState<Record<string, unknown>>({});

  const openPopup = (type: string, props: Record<string, unknown> = {}) => {
    setExtraProps(props);
    setActiveFrame(type);
  };

  const closePopup = () => {
    setActiveFrame(null);
    setExtraProps({});
  };

  const config = activeFrame ? POPUP_REGISTRY[activeFrame] : null;

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      {config && (
        <PopupLayout title={config.title} onClose={closePopup}>
          <config.component {...extraProps} onClose={closePopup} />
        </PopupLayout>
      )}
    </PopupContext.Provider>
  );
};

export default PopupProvider;