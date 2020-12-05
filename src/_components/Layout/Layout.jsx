import styles from './Layout.module.scss';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <content className={styles.content}>{children}</content>
      <Footer />
    </>
  );
};

export { Layout };
