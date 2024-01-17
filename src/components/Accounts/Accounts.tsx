import React, { useState, useEffect } from "react";
import AccountItem from "./AccountItem/AccountItem.tsx";
import { IAccounts, accounts } from "../../data/accounts.ts";
import styles from "./Account.module.scss";
import Pagination from "../Pagination/Pagination.tsx";
import { TOptions } from "../../pages/Campaigns.tsx";

const Accounts: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedFilter, setSelectedFilter] = useState<string>("");
    const [filteredData, setFilteredData] = useState<IAccounts[]>(accounts);
    const options: TOptions[] = [
        { sort: "accountId", name: "Id" },
        { sort: "email", name: "Email" },
        { sort: "authToken", name: "Token" },
        { sort: "creationDate", name: "Date" },
    ];

    // pagination
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [elementPerPage] = useState<number>(5)
    const lastElemIndex = currentPage * elementPerPage
    const firstElemIndex = lastElemIndex - elementPerPage
    const currentElem = filteredData.slice(firstElemIndex, lastElemIndex)

    const paginate = (pageNumber: number) => {
        return setCurrentPage(pageNumber)
    }


    useEffect(() => {
        const filterData = () => {
            let data = [...accounts]

            if (searchValue.length) {
                data = data.filter((account) => {
                    return account.email.includes(searchValue)
                })
            }

            if (selectedFilter) {
                data = data.sort((a, b) => {
                    if (a[selectedFilter] < b[selectedFilter]) return 1;
                    if (a[selectedFilter] > b[selectedFilter]) return -1;
                    return 0
                })
            }

            setFilteredData(data)
        };

        filterData();
    }, [searchValue, selectedFilter]);

    return (
        <div className={styles.accounts}>
            <h1>Accounts</h1>
            <div className={styles.filter}>
                <div className="dropdown-filter">
                    <label>Filter by: {selectedFilter}</label>
                    <select
                        value={selectedFilter}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedFilter(e.target.value)}
                    >
                        {options.map((option) => (
                            <option key={option.sort} value={option.sort}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.input}>
                    <input
                        value={searchValue}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
                        className={styles.search}
                        type="text"
                        placeholder="Search by email..."
                    />
                    {searchValue && <span onClick={() => setSearchValue("")}>x</span>}
                </div>
            </div>
            {currentElem.map((accountData) => {
                return <AccountItem key={accountData.accountId} {...accountData} />;
            })}
            <Pagination paginate={paginate} elementPerPage={elementPerPage} totalElements={filteredData.length} />
        </div>
    );
};

export default Accounts;
