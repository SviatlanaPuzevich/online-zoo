import styles from './validated.input.module.css';
import classNames from 'classnames';
import React, { type HTMLInputTypeAttribute, useState } from 'react';


interface Props {
  id: string;
  placeHolder?: string;
  label?: string;
  required?: boolean;
  validate: (value: string) => string | null;
  onValueChange?: (value: string,
                   isValid: boolean) => void;
  type?: HTMLInputTypeAttribute;
}

const ValidatedInput: React.FC<Props> = ({
                                           id,
                                           placeHolder,
                                           label,
                                           required = false,
                                           validate,
                                           onValueChange,
                                           type,
                                         }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const runValidation = (val: string) => {
    const err = validate(val);
    const isValid = !err;
    onValueChange?.(value, isValid);
    return err;
  };

  const onBlur = () => {
    setTouched(true);
    setError(runValidation(value));
  };

  const onFocus = () => {
    setError(null);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    runValidation(val);
  };

  const success = touched && !error && value.length > 0;

  return (
    <div className={styles.formGroup}>
      <label htmlFor={id}>
        {required && <span className={styles.required}>*</span>}
        {label}
      </label>

      <input type={type}
             id={id}
             value={value}
             onChange={onChange}
             onBlur={onBlur}
             onFocus={onFocus}
             placeholder={placeHolder}
             className={classNames(styles.input, {
               [styles.input__error]: error,
               [styles.input__success]: success,
             })}
      />

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default ValidatedInput;