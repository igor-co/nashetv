import { useState } from 'react';

import styles from './Menu.module.scss';

import { NavLink, useRouteMatch } from 'react-router-dom';

import { ReactComponent as CloseIcon } from '../../../../../../_assets/icons/closeIcon.svg';
import { ReactComponent as MenuIcon } from '../../../../../../_assets/icons/menuIcon.svg';

const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [matchAbout] = useState(useRouteMatch('/about'));
  const [matchContact] = useState(useRouteMatch('/contact'));
  const [matchInstructions] = useState(useRouteMatch('/instructions'));
  const [matchMain] = useState(useRouteMatch('/'));

  return (
    <>
      {!isMenuVisible && (
        <MenuIcon
          className={styles.icon}
          onClick={() => {
            setIsMenuVisible(true);
          }}
        />
      )}

      <nav className={styles.nav}>
        {isMenuVisible && (
          <CloseIcon
            className={styles.icon}
            onClick={() => {
              setIsMenuVisible(false);
            }}
          />
        )}
       
        {isMenuVisible && (
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <NavLink
                to='/'
                className={`${
                  matchMain?.isExact ? styles.currentlistItem : ''
                }`}
              >
                Главная
              </NavLink>
            </li>

            <li className={styles.listItemSeparator}>|</li>

            <li className={styles.listItem}>
              <NavLink
                to='/about'
                className={`${
                  matchAbout?.isExact ? styles.currentlistItem : ''
                }`}
              >
                О приставке
              </NavLink>
            </li>

            <li className={styles.listItemSeparator}>|</li>

            <li className={styles.listItem}>
              <NavLink
                to='/instructions'
                className={`${
                  matchInstructions?.isExact ? styles.currentlistItem : ''
                }`}
              >
                Инструкции
              </NavLink>
            </li>

            <li className={styles.listItemSeparator}>|</li>

            <li className={styles.listItem}>
              <NavLink
                to='/contact'
                className={`${
                  matchContact?.isExact ? styles.currentlistItem : ''
                }`}
              >
                Свяжитесь с нами
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export { Menu };
