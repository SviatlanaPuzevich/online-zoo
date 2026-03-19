import styles from './info.section.module.css';

interface InfoTextProps {
  title: string;
  text: string;
}

const InfoText: React.FC<InfoTextProps> = ({title, text}) => {
  return (<div className={styles.info__text}>
    <h2 className={styles.info__title}>{title}</h2>
    <p className={styles.info__text}>
      {text}
    </p>
  </div>)
}

export default InfoText;