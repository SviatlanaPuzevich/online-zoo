import { type ComponentType } from 'react';
import MapPopup from '../MapPopup/MapPopup.tsx';
import BillingInfoPopup from '../donation/BillingInfo/BillingInfoPopup.tsx';
import LoginPopup from '../LoginPopup/LoginPopup.tsx';


interface PopupConfig {
  title: string;
  component: ComponentType<any>;
}

export const POPUP_REGISTRY: Record<string, PopupConfig> = {
  LOGIN: {
    title: 'Login/Registration',
    component: LoginPopup,
  },
  REGISTRATION: {
    title: 'Login/Registration',
    component: MapPopup,
  },
  ANIMAL_LOCATION: {
    title: 'Animal Location',
    component: MapPopup,
  },
  DONATION_BILLING_INFO: {
    title: 'MAKE YOUR DONATION',
    component: BillingInfoPopup,
  },
};