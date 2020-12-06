import styles from './Main.module.scss';

import { useCheckIsDesktop } from '../../_hooks/useCheckIsDesktop';

import { Layout } from '../../_components/Layout/Layout';

const Main = () => {
  return (
    <Layout>
      <div className='container'>
        <div className={`${styles.contentRow}`}>
          {!useCheckIsDesktop() && (
            <h1 className={styles.mainTitle}>
              Приставка с нашим телевидением и фильмотекой
            </h1>
          )}

          <div className={styles.tvBoxInfoContainer}>
            <div className={styles.image}></div>

            <h2>Приствавка превратит любой телевизор в Smart Tv</h2>

            <div className={styles.featuresContainer}>
              <div className={styles.androidTv}>android tv</div>
              <div className={styles.assistant}>Google Assistant</div>
              <div className={styles.chromecast}>Chromecast</div>
            </div>
          </div>

          <div className={styles.channelsInfoContainer}>
            <h2>
              IPTV c более чем <b>1500</b> каналов всего за <b>1€</b> в месяц
            </h2>

            <div className={styles.languages}>
              <p>
                На <b>русском</b> более 500 каналов.
              </p>
              <p>
                На <b>украинском</b> более 120 каналов.
              </p>
              <p>
                На <b>молдавском</b> более 100 каналов.
              </p>
            </div>

            <div className={styles.categories}>
              <p>
                Большое количество спортивных, детских, развлекательных,
                познавательных и музыкальных каналов.
              </p>
            </div>

            <div className={styles.moreChannels}>
              <p>Список каналов регулярно пополняется.</p>
              <p>
                Множество каналов в <b>HD</b> качестве.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.priceActionRow}>
          <div className={styles.whatIncludes}>
            <p>
              Настроенная <b>приставка Xiaomi Mi Box S</b> со всеми нужными
              приложениями
            </p>
            <p>
              + Пакет <b>12 месяцев ТВ</b> с более чем 1500 каналов
            </p>
            <p>
              + Огромная <b>база фильмов</b>, сериалов и мультфильмов
            </p>
            <div className={styles.price}>Всего: 110€</div>
          </div>
          <div className={styles.callToAction}>
            <button>Узнать больше</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { Main };
