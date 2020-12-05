import styles from './Main.module.scss';

const Main = () => {
 
  return (
    <>      
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
