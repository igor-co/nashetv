import { useState } from 'react';

import styles from './FooterNav.module.scss';

import { NavLink, useRouteMatch } from 'react-router-dom';

const FooterNav = () => {
  const [matchAbout] = useState(useRouteMatch('/about'));
  const [matchContact] = useState(useRouteMatch('/contact'));
  const [matchInstructions] = useState(useRouteMatch('/instructions'));
  const [matchMain] = useState(useRouteMatch('/'));

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink
            to='/'
            className={`${matchMain?.isExact ? styles.currentlistItem : ''}`}
          >
            Главная
          </NavLink>
        </li>

        <li className={styles.listItemSeparator}>|</li>

        <li className={styles.listItem}>
          <NavLink
            to='/about'
            className={`${matchAbout?.isExact ? styles.currentlistItem : ''}`}
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
            className={`${matchContact?.isExact ? styles.currentlistItem : ''}`}
          >
            Свяжитесь с нами
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { FooterNav };
