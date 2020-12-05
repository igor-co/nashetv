import styles from './Layout.module.scss';

import { Header } from './_components//Header/Header';
import { Footer } from './_components/Footer/Footer';

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
