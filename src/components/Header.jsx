import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Menu from '@components/Menu.jsx';
import MyOrder from '@containers/MyOrder.jsx';
import menu from '@icons/icon_menu.svg';
import MobileMenu from '@components/MobileMenu.jsx';
import logo from '@logos/logo_yard_sale.svg';
import cart from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext';
import styles from '@styles/Header.module.scss';
import Image from 'next/image';

const Header = () => {
    const [toggle, setToggle] = useState(false); //estado del menú
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const { state } = useContext(AppContext); //Conectando al contexto y usándolo

    const handleToggle = () =>{
        setToggle(!toggle);
    };

    const handleMobileMenu = () =>{
        setToggleMobileMenu(!toggleMobileMenu);
    };

    return(
        <>
            <nav className={styles.Nav}>
                <button className={styles.button} onClick={handleMobileMenu}>
                    <img src={menu.src} alt="menu" className={styles.menu}/> 
                </button>
                <div className={styles['navbar-left']}>
                            <Link href="/">
                                <Image src={logo} alt="logo" className={styles['nav-logo']}/>
                            </Link>
                            <ul>
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
                </div>  
                <div className={styles['navbar-right']}>
                        <ul>
                            <li className={styles['navbar-email']} >
                                <button className={styles.button} onClick={handleToggle}>
                                    platzi@example.com
                                </button>
                            </li>
                            <li className={styles['navbar-shopping-cart']} >
                                <button className={styles.button} onClick={() => setToggleOrders(!toggleOrders)}>
                                    <Image src={cart} alt="shopping cart" />
                                    {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                                </button>
                            </li>
                        </ul>
                </div>
                {toggle && <Menu/>}
                {toggleMobileMenu && <MobileMenu toggle={setToggleMobileMenu}/>}
                {toggleOrders && <MyOrder/>}
            </nav>  
        </>
    );
}; 

export default Header;