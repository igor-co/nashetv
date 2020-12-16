import { useRef } from 'react';

import styles from './About.module.scss';

import { Layout } from '_components/Layout';
import { ProductCard } from '_components/ProductCard';

const About = () => {
  const containerRef = useRef(null);

  return (
    <Layout>
      <div ref={containerRef} className='container'>
        <ProductCard containerRef={containerRef} />
      </div>
    </Layout>
  );
};

export { About };
