import styles from './checkbox.module.css';

interface CheckBoxProps {
  text?: string;
  disabled?: boolean;
  onChange?: () => void;
  name?: string;
  checked?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ text = '', disabled, name, onChange, checked }) => {
  return (
    <label className={styles.checkbox}>
      <span>{text}</span>
      <input type="checkbox" name={name} onChange={onChange} checked={checked}  disabled={disabled} />
      <span className={styles.box}></span>
    </label>
  );
}

export default CheckBox;