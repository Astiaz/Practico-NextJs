import React, { useContext } from 'react';
import Head from 'next/head';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import Sum from '@hooks/useSum';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My Order</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles.order}>
              <p>
                <span>03.25.21</span>
                {state.cart.lenght > 0 ? <span>{state.cart.lenght}articles</span> : <span>0 articles</span>}
              </p>
              <p>{state.cart.lenght > 0 ? <span>${Sum()}</span> : <span>$0</span>}</p>
            </div>
          </div>
          {state.cart.map((product) => {
            <OrderItem product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Checkout;
