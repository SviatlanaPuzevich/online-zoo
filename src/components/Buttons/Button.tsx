import styles from './button.module.css';
import { Link } from 'react-router-dom';


export type ButtonStyle = 'primary' | 'secondary' | 'dark' | 'white' | 'orange';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  btnStyle?: ButtonStyle;
  extraClass?: string;
  icon?: React.ReactNode;
  to?: string;
  disabled?: boolean;
  popoverTarget?: string;
  onClick?: () => void;
}

const buttonStyleMap: Record<ButtonStyle, string> = {
  primary: styles['button--primary'],
  secondary: styles['button--secondary'],
  white: styles['button--white'],
  orange: styles['button--orange'],
  dark: styles['button--dark'],
};


const Button: React.FC<ButtonProps> =
  ({ text, btnStyle = 'primary', extraClass = '', icon, to, disabled, popoverTarget, onClick }) => {
    const className = `${styles.button} ${buttonStyleMap[btnStyle]} ${extraClass}`.trim();

    const content = (
      <>
        {text || ''}
        {icon || ''}
      </>
    );

    if (to) {
      return (
        <Link to={to} className={className}>
          {content}
        </Link>
      );
    }

    return (<button className={className} disabled={disabled} popoverTarget={popoverTarget} onClick={onClick}>
      {content}
    </button>);
  };

export default Button;