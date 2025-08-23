import { useState } from "react";
import { jobsData } from "../../../data/jobsData";
import { filterJobs } from "../../../utils/filterJobs";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import JobCard from "./JobCard";

const JobListingPage = () => {
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const clearFilters = () => {
    setFilters({});
    setSearchQuery("");
  };

  const filteredJobs = filterJobs(jobsData, filters, searchQuery);

  return (
    <div className="2xl:container mx-auto">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-center">
          Find Job Openings at Aspire
        </h1>

        {/* search bar container  */}
        <div>
          <SearchBar onSearch={setSearchQuery} />
        </div>

        {/* filter container  */}
        <div>
          <FilterBar
            filters={filters}
            setFilters={setFilters}
            clearFilters={clearFilters}
          />
        </div>

        {/* data container  */}
        <div className=" flex flex-col gap-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListingPage;
