import { useState } from 'react';

import styles from './Main.module.scss';

import { ReactComponent as MenuIcon } from '../../_assets/icons/menuIcon.svg';
import { ReactComponent as CloseIcon } from '../../_assets/icons/closeIcon.svg';

const Main = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <>
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
      <content className={styles.content}>
        <div className='container'>
          <h1 className={styles.mainTitle}>
            Приставка с нашим телевидением и фильмотекой
          </h1>
          <h2>Наше телевидение в любой точке мира</h2>
        </div>
      </content>
      <footer className={styles.footer}>footer</footer>
    </>
  );
};

export { Main };
