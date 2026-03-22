import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { contactSchema, type ContactFormData } from '../../validators/shemas.ts';
import styles from './form.module.css';
import Button from '../Buttons/Button.tsx';
import Arrow from '../Buttons/icons/Arrow.tsx';

const ContactForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields, touchedFields },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });


  const onSubmit = (data: ContactFormData) => {
    try {
      alert('Submitted successfully.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contact__form}>
      {error && <span className={styles.error}>error</span>}
      <div className={styles.formGroup}>
        <label htmlFor="name">
          <span className={styles.required}>*</span> Your Name
        </label>
        <input id="name"
               {...register('userName')}
               placeholder="Enter your name"
               className={classNames(styles.input, {
                 [styles.input__error]: errors.userName,
                 [styles.input__success]: dirtyFields.userName && touchedFields && !errors.userName,
               })}
        />
        {errors.userName && <span className={styles.error}>{errors.userName.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">
          <span className={styles.required}>*</span>Your Email
        </label>
        <input id="email"
               {...register('email')}
               placeholder="Enter your email"
               className={classNames(styles.input, {
                 [styles.input__error]: errors.email,
                 [styles.input__success]: dirtyFields.email && touchedFields && !errors.email,
               })}
        />
        {errors.email && <span className={styles.error}>{errors.email.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject">
          <span className={styles.required}>*</span>Subject
        </label>
        <input id="subject"
               {...register('subject')}
               placeholder="Enter your subject"
               className={classNames(styles.input, {
                 [styles.input__error]: errors.subject,
                 [styles.input__success]: dirtyFields.subject && touchedFields && !errors.subject,
               })}
        />
        {errors.subject && <span className={styles.error}>{errors.subject.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">
          <span className={styles.required}>*</span>Message
        </label>
        <textarea id="message"
                  {...register('subject')}
                  placeholder="Enter your message"
                  className={classNames(styles.textarea, {
                    [styles.textarea__error]: errors.message,
                    [styles.textarea__success]: dirtyFields.message && touchedFields && !errors.message,
                  })}
        />
        {errors.message && <span className={styles.error}>{errors.message.message}</span>}
      </div>

      <Button type="submit" text="SEND MESSAGE" btnStyle="secondary"
              extraClass={classNames('mobile-block', styles.form__button)}
              icon={<Arrow />} disabled={!isValid} />
    </form>
  );
};

export default ContactForm;
