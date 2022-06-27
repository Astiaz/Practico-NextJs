import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProduct from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () =>{
    const products = useGetProduct(API);
    
    return(
        <section className={styles['main-container']}>
            <div className={styles.ProductList}>
                {products.map((product) => {
                    return <ProductItem product={product} key={product.id}/>
                })}
            </div>
        </section>
    )
}

export default ProductList;