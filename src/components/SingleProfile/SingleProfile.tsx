
import React from 'react';
import styles from "./SingleProfile.module.scss"
import { profiles } from '../../data/profiles.ts'
import { Link, useNavigate, useParams } from 'react-router-dom';

const SingleProfile: React.FC = () => {
    const params = useParams();
    const data = profiles.filter((profileItem) => {
        const profileIdString = String(profileItem.profileId);
        const accountIdString = String(params.accountId);
        return profileIdString === accountIdString;
    });
    const navigate = useNavigate()

    if (!data.length) {
        alert("Profile not found")
        navigate('/')
    }

    return (
        <div className={styles.profile_details}>
            <h2>Profile #{params.accountId} Details</h2>
            {data.map((singProfData) => {
                return (
                    <ul key={singProfData.profileId}>
                        <li>
                            <strong>Profile ID: {singProfData.profileId}</strong>
                        </li>
                        <li>
                            <strong>Country: {singProfData.country}</strong>
                        </li>
                        <li>
                            <strong>Marketplace: {singProfData.marketplace}</strong>
                        </li>
                        <li>
                            <Link to={'/'}>
                                <button>Back</button>
                            </Link>
                        </li>
                    </ul>
                )
            })}
        </div>
    );
};

export default SingleProfile;
