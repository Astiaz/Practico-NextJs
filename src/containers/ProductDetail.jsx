import React from 'react';
import closeIcon from '@icons/icon_close.png';
import ProductInfo from '@components/ProductInfo.jsx';
import styles from '@styles/ProductDetail.module.scss';


const ProductDetail = ({setToggleInfo, product}) =>{
    return(
        <aside className={styles.ProductDetail}>
            <div className={styles['ProductDetail-close']} onClick={()=>{setToggleInfo(false)}}>
                <img src={closeIcon} alt="close" style={{width:100+'%', height:100+'%'}}/>
            </div>
            <ProductInfo product={product}/>
        </aside>
    )
}

export default ProductDetail;