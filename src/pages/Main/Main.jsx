import styles from './Main.module.scss';

import { useCheckIsDesktop } from '../../_hooks/useCheckIsDesktop';

import { Layout } from '../../_components/Layout/Layout';

const Main = () => {
  return (
    <Layout>
      <div className='container'>
        {useCheckIsDesktop() && (
          <h1 className={styles.mainTitle}>
            Приставка с нашим телевидением и фильмотекой
          </h1>
        )}

        <h2>Наше телевидение в любой точке мира</h2>
      </div>
    </Layout>
  );
};

export { Main };
