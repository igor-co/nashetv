import styles from './Header.module.scss';

import { Menu } from './_components/Menu/Menu';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className={styles.header}>
          <div className={styles.logo}>Nashe Tv</div>
          <Menu/>
        </div>
      </div>
    </header>
  );
};

export { Header };
