import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div className="border rounded-lg shadow-sm p-4 flex flex-col gap-3">
      <h2 className="text-purple-700 text-lg font-semibold">{job.title}</h2>
      <p className="text-sm text-gray-600">{job.location.join(", ")}</p>
      <p className="text-sm text-gray-500">
        {job.type} | {job.experience}
      </p>
      <ul className="list-disc ml-5 text-gray-700">
        {job.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
      <div className=" flex justify-center md:justify-start">
        <button
          onClick={() => navigate("/register")}
          className="bg-purple-700 text-white px-5 py-2 rounded border border-[#7E22CE] hover:bg-white hover:text-[#7E22CE] transition-colors w-fit"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
