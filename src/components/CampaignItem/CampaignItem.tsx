import React from 'react'
import styles from './CampaignItem.module.scss'

type CampaignItemProps = {
    campaignId: number,
    clicks: number,
    cost: number,
    date: string,
}

const CampaignItem: React.FC<CampaignItemProps> = ({campaignId, clicks, cost, date}) => {
    return (
        <div className={styles.account_item}>
            <div className={styles.account_info}>
                <h3>Cost: {cost}</h3>
                <p>Campaign ID: {campaignId}</p>
                <p>Date: {date}</p>
                <p>Cliks: {clicks}</p>
            </div>
        </div>
    )
}

export default CampaignItem