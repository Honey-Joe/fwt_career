import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../app/store/authSlice";
import HomeNav from "./HomeNav";
import JobListingPage from "./JobListingPage/JobListingPage";

const HomePage = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(user);

  return (
    <div className="2xl:container mx-auto flex flex-col h-full gap-3">
      <div>
        <HomeNav />
      </div>
      <div className="flex-1 overflow-auto flex flex-col lg:px-[10rem] px-[3rem]">
        <JobListingPage />
      </div>
    </div>
  );
};

export default HomePage;
