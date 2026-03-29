import styles from './banner.module.css';

interface BannerProps {
  alt: string;
  src: string;
  extraClasses?: string;
}

const Banner: React.FC<BannerProps> = ({ alt, src }) => {
  return (
    <div className="container">
    <div className={styles.banner}>
      <img src={src} alt={alt} />
    </div>
    </div>
  );
};

export default Banner;