import React, { useState, useEffect } from "react";
import { ICampaigns, campaigns } from "../data/campaigns.ts";
import styles from '../components/ProfileItem/Profile.module.scss'
import Pagination from "../components/Pagination/Pagination.tsx";
import CampaignItem from "../components/CampaignItem/CampaignItem.tsx";

export type TOptions = {
    sort: string,
    name: string
}

const Campaigns: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedFilter, setSelectedFilter] = useState<string>("");
    const [filteredData, setFilteredData] = useState<ICampaigns[]>(campaigns);
    const options: TOptions[] = [
        { sort: "campaignId", name: "Id" },
        { sort: "clicks", name: "Cliks" },
        { sort: "cost", name: "Cost" },
        { sort: "date", name: "Date" },
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
            let data = [...campaigns]

            if (searchValue.length) {
                data = data.filter((campaign) => {
                    return campaign.date.toLowerCase().includes(searchValue.toLowerCase())
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
            <h1>Campaign</h1>
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
                        placeholder="Search by date..."
                    />
                    {searchValue && <span onClick={() => setSearchValue("")}>x</span>}
                </div>
            </div>
            {currentElem.map((campaignData) => {
                return <CampaignItem key={campaignData.campaignId} {...campaignData} />;
            })}
            <Pagination paginate={paginate} elementPerPage={elementPerPage} totalElements={filteredData.length} />
        </div>
    );
};

export default Campaigns;
