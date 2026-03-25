import styles from './login.module.css';
import { usePopup } from '../../hooks/popupHook.ts';
import { CONSTANT } from '../../const/const.ts';
import { useAuth } from '../../providers/AuthProvider.tsx';

const Login = () => {
  const { user } = useAuth();
  const { openPopup } = usePopup();
  return (<div className={styles.user__container}>
    {user ? (
      <span className={styles.user__name}>
          {user.name}
        </span>
    ) : (
      <button
        popoverTarget={CONSTANT.POPUP_ID.basicPopupId}
        onClick={() => openPopup('LOGIN')}
        className={styles.btn}
      >
        <Icon />
      </button>
    )}
  </div>);
};

const Icon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path id="Vector" stroke="#00A092" strokeLinecap="round" strokeLinejoin="round"
            d="M13.5 5.5c0 3.59 -2.95 8 -6.5 8S0.5 9.09 0.5 5.5 3.41 0.5 7 0.5s6.5 1.41 6.5 5Z"
            strokeWidth="1" />
      <path id="Vector_2" stroke="#00A092" strokeLinecap="round" strokeLinejoin="round"
            d="M2.74994 4.75007c-0.09011 0.41856 -0.09311 0.85119 -0.00881 1.27097 0.08429 0.41977 0.25409 0.8177 0.49881 1.16903 0.35133 0.24472 0.74926 0.41451 1.16903 0.49881 0.41978 0.0843 0.85241 0.0813 1.27097 -0.00881 0.09012 -0.41857 0.09312 -0.8512 0.00882 -1.27098 -0.0843 -0.41977 -0.25409 -0.8177 -0.49882 -1.16902 -0.35132 -0.24473 -0.74925 -0.41452 -1.16902 -0.49882 -0.41978 -0.0843 -0.85241 -0.0813 -1.27098 0.00882Z"
            strokeWidth="1" />
      <path id="Vector_3" stroke="#00A092" strokeLinecap="round" strokeLinejoin="round"
            d="M11.25 4.75007c0.0901 0.41856 0.0931 0.85119 0.0088 1.27097 -0.0843 0.41977 -0.2541 0.8177 -0.4988 1.16903 -0.3513 0.24472 -0.7492 0.41451 -1.16902 0.49881 -0.41977 0.0843 -0.8524 0.0813 -1.27097 -0.00881 -0.09011 -0.41857 -0.09312 -0.8512 -0.00882 -1.27098 0.0843 -0.41977 0.2541 -0.8177 0.49882 -1.16902 0.35132 -0.24473 0.74926 -0.41452 1.16903 -0.49882 0.41976 -0.0843 0.85236 -0.0813 1.27096 0.00882Z"
            strokeWidth="1" />
    </svg>);

};

export default Login;