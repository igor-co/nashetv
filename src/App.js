import styles from "./App.module.scss";
import { useState } from "react";
import { ReactComponent as MenuIcon } from "./_assets/icons/menuIcon.svg";
import { ReactComponent as CloseIcon } from "./_assets/icons/closeIcon.svg";

const App = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}> Наше ТВ</div>
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
      </header>
      <content className={styles.content}>
        <h1 >Наше телевидение в любой точке мира</h1>
        <h2>Наше телевидение в любой точке мира</h2>
        
        <p>Главная ! О приставке ! Инструкции ! Свяжитесь с нами </p>
      </content>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
};

export default App;
