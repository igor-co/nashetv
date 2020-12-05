import { useState } from 'react';

import styles from './Menu.module.scss';

import { ReactComponent as MenuIcon } from '../../../../_assets/icons/menuIcon.svg';
import { ReactComponent as CloseIcon } from '../../../../_assets/icons/closeIcon.svg';

const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
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
  );
};

export { Menu };
