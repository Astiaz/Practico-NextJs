import React, { useContext, useState } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import ProductDetail from '@containers/ProductDetail.jsx';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext);
	
	const [toggleInfo, setToggleInfo] = useState(false);

	const handleInfo = () => {
		setToggleInfo(!toggleInfo);
	};

	const handleClick = item =>{
		addToCart(item);
	};

    return (
      <div className={styles.ProductItem}>
		{product.images[0] && <Image loader={() => product.images[0]}
			src={product.images[0]}
			alt={product.title}
			onClick={handleInfo}
			width="100%"
			height="100%"
			layout="responsive"
			/>
		}
        <div className={styles['product-info']}>
			<div>
				<p>${product.price}</p>
				<p>{product.title}</p>
			</div>
			<figure>
				<button className={styles.button} onClick={()=>handleClick(product)}>
					<Image src={addToCartImage} alt=""/>
				</button>
			</figure>
        </div>

		{toggleInfo && <ProductDetail product={product} setToggleInfo={setToggleInfo}/>}
      </div>
    );
};

export default ProductItem;