import styles from './button.module.css';


export type ButtonStyle = 'primary' | 'secondary' | 'dark' | 'white' | 'orange';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  btnStyle?: ButtonStyle;
  extraClass?: string;
  icon?: React.ReactNode;
  href?: string;
}

const buttonStyleMap: Record<ButtonStyle, string> = {
  primary: styles['button--primary'],
  secondary: styles['button--secondary'],
  white: styles['button--white'],
  orange: styles['button--orange'],
  dark: styles['button--dark'],
};


const Button: React.FC<ButtonProps> =
  ({ text, btnStyle = 'primary', extraClass = '', icon, href }) => {
    const className = `${styles.button} ${buttonStyleMap[btnStyle]} ${extraClass}`.trim();

    const content = (
      <>
        {text || ''}
        {icon || ''}
      </>
    );

    if (href) {
      return (
        <a href={href} className={className}>
          {content}
        </a>
      );
    }

    return (<button className={className}>
      {content}
    </button>);
  };

export default Button;