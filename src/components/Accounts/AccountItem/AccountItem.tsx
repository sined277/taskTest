// AccountItem.js
import React from 'react';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';

type AccountItemProps = {
  accountId: number,
  authToken: string,
  creationDate: string,
  email: string,
}

const AccountItem: React.FC<AccountItemProps> = ({ accountId, authToken, creationDate, email }) => {
  return (
    <div className={styles.account_item}>
      <div className={styles.account_info}>
        <h3>Email: {email}</h3>
        <p>Account ID: {accountId}</p>
        <p>Auth Token: {authToken}</p>
        <p>Creation Date: {creationDate}</p>
      </div>
      <Link to={`/profile/${accountId}`}>
        <button>Check Profile</button>
      </Link>
    </div>
  );
};

export default AccountItem;
