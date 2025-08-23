export const filterJobs = (jobs, filters, searchQuery) => {
  return jobs.filter((job) => {
    const matchDepartment =
      !filters.department || job.title.includes(filters.department);
    const matchLocation =
      !filters.location || job.location.includes(filters.location);
    const matchType = !filters.type || job.type === filters.type;
    const matchExperience =
      !filters.experience || job.experience === filters.experience;
    const matchSearch =
      !searchQuery ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase());
    return (
      matchDepartment &&
      matchLocation &&
      matchType &&
      matchExperience &&
      matchSearch
    );
  });
};
