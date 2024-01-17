
import React from 'react';
import styles from "./SingleCampaign.module.scss"
import { campaigns } from '../../data/campaigns.ts'
import { Link, useNavigate, useParams } from 'react-router-dom';

const SingleCampaign: React.FC = () => {
    const params = useParams();
    const data = campaigns.filter((campaignsItem) => {
        const profileIdString = String(campaignsItem.campaignId);
        const accountIdString = String(params.profileId);
        return profileIdString === accountIdString;
    });
    const navigate = useNavigate()

    if (!data.length) {
        alert("Campaign not found")
        navigate('/')
    }

    return (
        <div className={styles.profile_details}>
            <h2>Campaign #{params.profileId} Details</h2>
            {data.map((singCampData) => {
                return (
                    <ul key={singCampData.campaignId}>
                        <li>
                            <strong>Date: {singCampData.date}</strong>
                        </li>
                        <li>
                            <strong>Campaign ID: {singCampData.campaignId}</strong>
                        </li>
                        <li>
                            <strong>Cost: {singCampData.cost}</strong>
                        </li>
                        <li>
                            <strong>Clicks: {singCampData.clicks}</strong>
                        </li>
                        <li>
                            <Link to={'/profiles'}>
                                <button>Back</button>
                            </Link>
                        </li>
                    </ul>
                )
            })}
        </div>
    );
};

export default SingleCampaign;
