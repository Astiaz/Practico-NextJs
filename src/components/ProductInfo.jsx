import React from 'react';
import styles from '@styles/ProductInfo.module.scss';
import Image from 'next/image';

import addToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = ({product}) =>{
    return(
        <>
            <Image src={product.images[0]} alt={product.title} />
            <div className={styles.ProductInfo}>
                <p>${product.price}</p>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <button className={styles['primary-button'], styles['add-to-cart-button']}>
                    <Image src={addToCart}
                    alt="add to cart" className={styles['add-to-cartImage']} style={{width:50+'px', height:50+'px'}}/>
                    Add to cart
                </button>
            </div>
        </>
        );
};

export default ProductInfo;