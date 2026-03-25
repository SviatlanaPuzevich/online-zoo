import { type ComponentType } from 'react';
import MapPopup from '../MapPopup/MapPopup.tsx';
import BillingInfoPopup from '../donation/Billing/BillingInfoPopup.tsx';
import LoginPopup from '../LoginPopup/LoginPopup.tsx';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup.tsx';


type PopupState =
  | { type: "NONE"}
  | { type: "LOGIN"; }
  | { type: "REGISTRATION";  }
  | { type: "ANIMAL_LOCATION"; src: string }
  | { type: "PAYMENT";  petId?: number | string };

interface PopupConfig {
  title: string;
  component: ComponentType<never>;
}

// function PopupContent({ popup, close }) {
//   switch (popup.type) {
//     case "LOGIN":
//       return <LoginPopup onClose={close} />;
//
//     case "REGISTRATION":
//       return <InfoPopup text={popup.text} onClose={close} />;
//
//     case "ANIMAL_LOCATION":
//       return <MapPopup sr/>;
//
//     case "PAYMENT":
//       return (
//         <BillingInfoPopup
//       onClose={close}
//       />
//     );
//
//     default:
//       return null;
//   }
// }

export const POPUP_REGISTRY: Record<string, PopupConfig> = {
  LOGIN: {
    title: 'Login/Registration',
    component: LoginPopup,
  },
  REGISTRATION: {
    title: 'Login/Registration',
    component: RegistrationPopup,
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