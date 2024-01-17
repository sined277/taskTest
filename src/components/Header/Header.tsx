import React from 'react'
import styles from "./Header.module.scss";
import cart from '../../assets/images/header/cart.svg';
import profile from '../../assets/images/header/profile.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Agency Amazon Test</h1>
                </div>
            </div>

            <div className={styles.navigation}>
                <ul className={styles.navitems}>
                    <Link to={'/'}><li className={styles.navitem}><img src={cart} alt=''></img> <h2>Accounts</h2></li></Link>
                    <Link to={'profiles'}><li className={styles.navitem}><img src={profile} alt=''></img> <h2>Profiles</h2></li></Link>
                    <Link to={'/campaigns'}><li className={styles.navitem}><img src={profile} alt=''></img> <h2>Campaigns</h2></li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header