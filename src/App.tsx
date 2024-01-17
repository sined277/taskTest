import React from "react";
import { Routes, Route } from "react-router-dom";
import Accounts from "./components/Accounts/Accounts.tsx";
import MainLayout from "./Layouts/MainLayout.tsx";
import Profiles from "./pages/Profiles.tsx";
import SingleProfile from "./components/SingleProfile/SingleProfile.tsx";
import Campaigns from "./pages/Campaigns.tsx";
import SingleCampaign from "./components/SingleCampaign/SingleCampaign.tsx";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="" element={<MainLayout />} >
                <Route index element={<Accounts />} />
                <Route path="/profiles" element={<Profiles />} />
                <Route path="/profile/:accountId" element={<SingleProfile />} />
                <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/campaign/:profileId" element={<SingleCampaign />} />
            </Route>
        </Routes>
    );
}

export default App;
