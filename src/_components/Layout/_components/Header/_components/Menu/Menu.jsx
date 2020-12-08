import { useEffect, useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

import styles from './Menu.module.scss';

import { useGetViewportSizes } from '../../../../../../_hooks/useGetViewportSizes';

import { ReactComponent as CloseIcon } from '../../../../../../_assets/icons/closeIcon.svg';
import { ReactComponent as MenuIcon } from '../../../../../../_assets/icons/menuIcon.svg';

const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState();
  const [isBurgherMenu, setIsBurgherMenu] = useState();

  const [matchAbout] = useState(useRouteMatch('/about'));
  const [matchContact] = useState(useRouteMatch('/contact'));
  const [matchInstructions] = useState(useRouteMatch('/instructions'));
  const [matchMain] = useState(useRouteMatch('/'));

  useEffect(() => {
    const root = document.getElementById('layout');

    const observer = new ResizeObserver((entries) =>
      entries.forEach((entry) => {
        setIsBurgherMenu(entry.contentRect.width < 730);
      })
    );

    if (root !== null || root !== undefined) {
      observer.observe(root);
    }

    return () => {
      observer.disconnect();
    };
  });

  if (isBurgherMenu) {
    return (
      <>
        {!isMenuVisible && (
          <div className={styles.icon}>
            <MenuIcon
              className={styles.burger}
              onClick={() => {
                setIsMenuVisible(true);
              }}
            />
          </div>
        )}

        {isMenuVisible && (
          <nav className={styles.nav}>
            {isMenuVisible && (
              <div className={styles.icon}>
                <CloseIcon
                  className={styles.close}
                  onClick={() => {
                    setIsMenuVisible(false);
                  }}
                />
              </div>
            )}

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
          </nav>
        )}
      </>
    );
  } else {
    return (
      <nav className={styles.nav}>
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
              className={`${
                matchContact?.isExact ? styles.currentlistItem : ''
              }`}
            >
              Свяжитесь с нами
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
};

export { Menu };
