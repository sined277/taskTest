import React from 'react'
import styles from './ProfileItem.module.scss'
import { Link } from 'react-router-dom';

type ProfileItemProps = {
    profileId: number,
    marketplace: string,
    country: string,
}

const ProfileItem: React.FC<ProfileItemProps> = ({ profileId, marketplace, country }) => {
    return (
        <div className={styles.account_item}>
            <div className={styles.account_info}>
                <h3>Marketplace: {marketplace}</h3>
                <p>Country: {country}</p>
                <p>Profile ID: {profileId}</p>
            </div>
            <Link to={`/campaign/${profileId}`}>
                <button>Check Campaing</button>
            </Link>
        </div>
    );
}

export default ProfileItem