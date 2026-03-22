import Banner from '../../components/banner/Banner.tsx';
import ContactForm from '../../components/ContactForm/ContactForm.tsx';
import styles from './contact.page.module.css';

export default function ContactPage() {
  return (
    <section>
      <Banner alt="Touch animal" src="/images/Touch_animal_contacts.jpg" />
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.contact__text}>
            <h2>Get in touch</h2>
            <p>Whether you have a question, or would like to say hello, we're happy to hear from you. Please use
              the
              form to send us a message and we'll get back to you as soon as we can. Whether you have a
              question,
              or
              would like to say hello, we're happy to hear from you. Please use the form to send us a message
              and
              we'll get back to you as soon as we can. </p>
          </div>
          <div className={styles['form-container']}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}