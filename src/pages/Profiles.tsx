import React, { useState, useEffect } from "react";
import { IProfiles, profiles } from "../data/profiles.ts";
import styles from '../components/ProfileItem/Profile.module.scss'
import Pagination from "../components/Pagination/Pagination.tsx";
import ProfileItem from "../components/ProfileItem/ProfileItem.tsx";
import { TOptions } from "./Campaigns.tsx";

const Profiles: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedFilter, setSelectedFilter] = useState<string>("");
    const [filteredData, setFilteredData] = useState<IProfiles[]>(profiles);
    const options: TOptions[] = [
        { sort: "profileId", name: "Id" },
        { sort: "country", name: "Email" },
        { sort: "marketplace", name: "Token" },
    ];

    // pagination
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [elementPerPage] = useState<number>(5)
    const lastElemIndex = currentPage * elementPerPage
    const firstElemIndex = lastElemIndex - elementPerPage
    const currentElem = filteredData.slice(firstElemIndex, lastElemIndex)
    console.log(filteredData);

    const paginate = (pageNumber: number) => {
        return setCurrentPage(pageNumber)
    }


    useEffect(() => {
        const filterData = () => {
            let data = [...profiles]

            if (searchValue.length) {
                data = data.filter((profile) => {
                    return profile.marketplace.toLowerCase().includes(searchValue.toLowerCase())
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
            <h1>Profiles</h1>
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
                        placeholder="Search by marketplace..."
                    />
                    {searchValue && <span onClick={() => setSearchValue("")}>x</span>}
                </div>
            </div>
            {currentElem.map((profileData) => {
                return <ProfileItem key={profileData.profileId} {...profileData} />;
            })}
            <Pagination paginate={paginate} elementPerPage={elementPerPage} totalElements={filteredData.length} />
        </div>
    );
};

export default Profiles;
