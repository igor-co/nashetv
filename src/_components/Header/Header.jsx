import { useState } from 'react';

import styles from './Header.module.scss'

import { ReactComponent as MenuIcon } from '../../_assets/icons/menuIcon.svg';
import { ReactComponent as CloseIcon } from '../../_assets/icons/closeIcon.svg';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <header>
      <div className='container'>
        <div className={styles.header}>
          <div className={styles.logo}>Nashe Tv</div>
          <nav className={styles.nav}>
            {isMenuVisible ? (
              <CloseIcon
                onClick={() => {
                  setIsMenuVisible(false);
                }}
              />
            ) : (
              <MenuIcon
                onClick={() => {
                  setIsMenuVisible(true);
                }}
              />
            )}
            {isMenuVisible && (
              <ul className={styles.list}>
                <li className={styles.listItem}>Главная</li>
                <li className={styles.listItemSeparator}>|</li>
                <li className={styles.listItem}>О приставке</li>
                <li className={styles.listItemSeparator}>|</li>
                <li className={styles.listItem}>Инструкции</li>
                <li className={styles.listItemSeparator}>|</li>
                <li className={styles.listItem}>Свяжитесь с нами</li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export { Header };
