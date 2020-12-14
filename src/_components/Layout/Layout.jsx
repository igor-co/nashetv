import styles from './Layout.module.scss';

import { Header } from '_components/Header';
import { Footer } from '_components/Footer';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout} id='layout'>
      <Header />
      <content>{children}</content>
      <Footer />
    </div>
  );
};

export { Layout };
