import React from 'react';
import closeIcon from '@icons/icon_close.png';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/MobileMenu.module.scss';

const MobileMenu = ({toggle}) => {
    return(
      <div className={styles.MobileMenu}>
        <div className={styles['MobileMenu-container']}>
        	<Image src={closeIcon} alt="close" onClick={()=>{toggle(false);}} width="100%" height="100%"/>
        </div>
        <ul>
        <li>
            <Link href="/">
                CATEGORIES
            </Link>
        </li>
        <li>
            <Link href="/">
                All
            </Link>
        </li>
        <li>
            <Link href="/">
                Clothes
            </Link>
        </li>
        <li>
            <Link href="/">
                Electronics
            </Link>
        </li>
        <li>
            <Link href="/">
                Furnitures
            </Link>
        </li>
        <li>
            <Link href="/">
                Toys
            </Link>
        </li>
        <li>
            <Link href="/">
                Others
            </Link>
        </li>
        </ul>
    
        <ul>
          <li>
            <Link href="/">My Orders</Link>
          </li>
          <li>
            <Link href="/">My account</Link>
          </li>
        </ul>
    
        <ul>
          <li>
            <Link href="/" className={styles.email}>platzi@example.com</Link>
          </li>
          <li>
            <Link href="/" className={styles['sign-out']}>Sign out</Link>
          </li>
        </ul>
      </div>
    );
};

export default MobileMenu;