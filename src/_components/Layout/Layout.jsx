import styles from './Layout.module.scss';

import { Header } from './_components//Header/Header';
import { Footer } from './_components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <content>{children}</content>
      <Footer />
    </div>
  );
};

export { Layout };
