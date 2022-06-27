import React, {useContext} from 'react';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import arrowIcon from '@icons/flechita.svg';
import Sum from '@hooks/useSum';
import Image from 'next/image';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
    const { state } = useContext(AppContext);

    return(
        <aside className={styles.MyOrder}>
            <div className={styles['title-container']}>
                <Image src={arrowIcon} alt="arrow"/>
                <p className={styles.title}>My order</p>
            </div>
            <div className={styles['my-order-content']}>
                <div className={styles['MyOrders-container']}>
                    {state.cart.map((product, index) =>{
                        return <OrderItem product={product} indexValue={index} key={`orderItem-${index}`} />
                    })}
                </div>
                <div className={styles.order}>
                    <p>
                    <span>Total</span>
                    </p>
                    <p>${Sum()}</p>
                </div>
                <Link href="/checkout">
                    <button type="button" className={styles['primary-button']}>
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    )
}

export default MyOrder;