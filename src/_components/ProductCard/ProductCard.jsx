import { useEffect, useRef } from 'react';

import styles from './ProductCard.module.scss';

import { ReactComponent as XiaomiLogo } from '_assets/img/xiaomiLogo.svg';
import Pristavka from '_assets/img/pristavka.png';

const ProductCard = ({ containerRef, subscriptionTime = [6, 12, 18] }) => {
  const cardRef = useRef(null);
  const companyLabelRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const purchaseRef = useRef(null);
  const subscriptionTimeRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseenter', onContainerMouseEnter);
      container.addEventListener('mousemove', onContainerMouseMove);
      container.addEventListener('mouseleave', onContainerMouseLeave);

      return () => {
        container.addEventListener('mouseenter', onContainerMouseEnter);
        container.addEventListener('mousemove', onContainerMouseMove);
        container.addEventListener('mouseleave', onContainerMouseLeave);
      };
    }
  }, [containerRef]);

  const onContainerMouseEnter = () => {
    cardRef.current.style.transition = 'none';

    companyLabelRef.current.style.transform = 'translateZ(40px)';
    imageRef.current.style.transform = 'translateZ(60px) rotateZ(-37deg)';
    descriptionRef.current.style.transform = 'translateZ(40px)';
    subscriptionTimeRef.current.style.transform = 'translateZ(40px)';
    purchaseRef.current.style.transform = 'translateZ(90px)';
  };

  const onContainerMouseMove = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

    cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const onContainerMouseLeave = () => {
    cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    cardRef.current.style.transition = 'all 0.5s ease';

    companyLabelRef.current.style.transform = 'translateZ(0px)';
    imageRef.current.style.transform = 'translateZ(0px) rotateZ(0deg)';
    descriptionRef.current.style.transform = 'translateZ(0px)';
    purchaseRef.current.style.transform = 'translateZ(0px)';
    subscriptionTimeRef.current.style.transform = 'translateZ(0px)';
  };

  const renderSubscriptionTime = (time, i) => {
    return (
      <button
        key={i}
        className={`${styles.buttonTime} ${
          time === 12 ? styles.activeBtn : ''
        }`}
      >
        {time}
      </button>
    );
  };

  return (
    <div ref={cardRef} className={styles.card}>
      <div className={styles.product}>
        <div className={styles.circle}></div>
        <img
          ref={imageRef}
          className={styles.image}
          src={Pristavka}
          alt='Тв Бокс'
        />
      </div>

      <div className={styles.info}>
        <XiaomiLogo ref={companyLabelRef} className={styles.companyLabel} />

        <h3 ref={descriptionRef} className={styles.description}>
          TV BOX С НАШИМИ КАНАЛАМИ И ПОДПИСКА НА:
        </h3>

        <div ref={subscriptionTimeRef} className={styles.subscriptionTime}>
          {subscriptionTime?.map((time) => renderSubscriptionTime(time))}
        </div>

        <button ref={purchaseRef} className={styles.purchase}>
          ЗАКАЗАТЬ
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
