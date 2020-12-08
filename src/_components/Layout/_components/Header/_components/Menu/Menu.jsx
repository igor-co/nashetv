import { useEffect, useRef, useState } from 'react';
import styles from './Menu.module.scss';

import { NavLink, useRouteMatch } from 'react-router-dom';
import gsap, { Power3, Elastic } from 'gsap';

import { ReactComponent as CloseIcon } from '../../../../../../_assets/icons/closeIcon.svg';
import { ReactComponent as MenuIcon } from '../../../../../../_assets/icons/menuIcon.svg';

const Menu = () => {
  const [isBurgherMenu, setIsBurgherMenu] = useState();
  const [isMenuVisible, setIsMenuVisible] = useState();
  const [tl] = useState(gsap.timeline());

  let nav = useRef();

  const [matchAbout] = useState(useRouteMatch('/about'));
  const [matchContact] = useState(useRouteMatch('/contact'));
  const [matchInstructions] = useState(useRouteMatch('/instructions'));
  const [matchMain] = useState(useRouteMatch('/'));

  /* const tl = gsap.timeline(); */

  useEffect(() => {
    if (isMenuVisible) {
      tl.from(nav, {
        duration: 0.8,
        transformOrigin: 'right top',
        height: 0,
        skewY: 5,
        ease: Power3.easeInOut,
      })

        .from('#navList .navLink', {
          display: 'none',
          xPercent: 100,
          stagger: 0.07,
          duration: 0.2,
          ease: 'back',
        })

        .from(
          '#closeIcon',
          {
            opacity: 0,
            yPercent: -100,
            duration: 1.2,
            ease: Elastic.easeInOut.config(2.5, 1),
          },
          '-=0.7'
        );
    }
  }, [isMenuVisible, nav]);

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
          <nav
            className={styles.nav}
            ref={(navEl) => {
              nav = navEl;
            }}
          >
            {isMenuVisible && (
              <div className={styles.icon} id='closeIcon'>
                <CloseIcon
                  className={styles.close}
                  onClick={() => {
                    setIsMenuVisible(false);
                  }}
                />
              </div>
            )}

            <ul className={styles.list} id='navList'>
              <li className={`${styles.listItem}`}>
                <NavLink
                  to='/'
                  className={`${
                    matchMain?.isExact ? styles.currentlistItem : ''
                  } navLink`}
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
                  } navLink`}
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
                  } navLink`}
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
                  } navLink`}
                >
                  Свяжитесь с нами
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </>
    );
  }
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
            className={`${matchContact?.isExact ? styles.currentlistItem : ''}`}
          >
            Свяжитесь с нами
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Menu };
