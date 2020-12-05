import { useState } from 'react';

import styles from './Menu.module.scss';

import { Link } from 'react-router-dom';

import { ReactComponent as CloseIcon } from '../../../../../../_assets/icons/closeIcon.svg';
import { ReactComponent as MenuIcon } from '../../../../../../_assets/icons/menuIcon.svg';

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
          <li className={styles.listItem}>
            <Link to='/'>Главная</Link>
          </li>
          <li className={styles.listItemSeparator}>|</li>
          <li className={styles.listItem}>
            <Link to='/about'>О приставке</Link>
          </li>
          <li className={styles.listItemSeparator}>|</li>
          <li className={styles.listItem}>
            <Link to='/instructions'>Инструкции</Link>
          </li>
          <li className={styles.listItemSeparator}>|</li>
          <li className={styles.listItem}>
            <Link to='/contact'>Свяжитесь с нами</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export { Menu };
