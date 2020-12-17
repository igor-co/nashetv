import styles from './Main.module.scss';

import { useGetViewportSizes } from '_hooks/useGetViewportSizes';

import { Layout } from '_components/Layout/Layout';
import { ReactComponent as AndroidTv } from '_assets/img/androidTv.svg';
import { ReactComponent as Chromecast } from '_assets/img/chromecast.svg';
import { ReactComponent as GoogleAssistant } from '_assets/img/googleAssistant.svg';

const Main = () => {
  return (
    <Layout>
      <div className='container'>
        <div className={`${styles.contentRow}`}>
          {useGetViewportSizes()?.width < 1024 && (
            <h1 className={styles.mainTitle}>
              Приставка с нашим телевидением и фильмотекой
            </h1>
          )}

          <section className={styles.tvBoxInfoContainer}>
            <div className={styles.image}></div>

            <h2 className={styles.convertHeader}>
              Приставка превратит любой телевизор в Smart Tv
            </h2>

            <div className={styles.featuresContainer}>
              <div className={styles.androidTv}>
                <AndroidTv />
              </div>
              <div className={styles.assistant}>
                <span>Google Assistant</span>
                <GoogleAssistant />
              </div>
              <div className={styles.chromecast}>
                <span>Chromecast</span>
                <Chromecast />
              </div>
            </div>
          </section>

          <section className={styles.channelsInfoContainer}>
            {useGetViewportSizes()?.width >= 1024 && (
              <h1 className={styles.mainTitle}>
                Приставка с нашим телевидением и фильмотекой
              </h1>
            )}
            <h2 className={styles.iptv}>
              IPTV c более чем <b>1500 каналов</b> всего за <b>15€ в ГОД</b>
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
          </section>
        </div>

        <section className={styles.whatIncludes}>
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
        </section>

        <div className={styles.priceActionRow}>
          <div className={styles.price}>
            Всего: <b>99€</b>
          </div>

          <div className={styles.callToAction}>
            <button className={`${styles.bottonAction} btn`}>
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { Main };
