import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import closeIcon from '@icons/icon_close.png';
import Image from 'next/image';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({product, indexValue}) =>{
    const { removeFromCart } = useContext(AppContext);
    const handleRemove = product => {
        removeFromCart(product);
    };
    return(
        <div className={styles.OrderItem}>
            <figure>
                <Image src={product?.images[0]} alt={product?.title} width="100%"
			    height="100%"/>
            </figure>
            <p>{product?.title}</p>
            <p>${product?.price}</p>
            <button onClick={() => handleRemove(indexValue)} className={styles.button}>
                <img src={closeIcon.src} className={styles.Delete} alt="close" width="100%"
                height="100%" layout="responsive" />
            </button>
        </div>
    );
};

export default OrderItem;