import styles from './Footer.module.scss';

import { FooterNav } from './_components/FooterNav/FooterNav';

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.flexContainer} container`}>
        <FooterNav />
        <div className={styles.bigor}>
          Разработка сайтов{' '}
          <a blank='true' href='http://localhost:3000/'>
            www.bigor.dev
          </a>
        </div>
        <h3 className={styles.logo}>NasheTv.es</h3>
      </div>
    </footer>
  );
};

export { Footer };
