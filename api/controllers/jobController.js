const Job = require("../models/Job");
const JobApplication = require("../models/JobApplication");

// Create a job (Admin only)
exports.createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ message: "Job created successfully", job });
  } catch (error) {
    res.status(500).json({ message: "Job creation failed", error });
  }
};

// Get all active jobs
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ isActive: true });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch jobs", error });
  }
};

// Get single job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("applicants", "name email");
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch job", error });
  }
};

// Apply for a job (Applicant only)

exports.applyJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    // Check if already applied
    const existingApplication = await JobApplication.findOne({
      job: job._id,
      applicant: req.user.id,
    });
    if (existingApplication) {
      return res.status(400).json({ message: "You already applied for this job" });
    }

    // Create application
    const application = new JobApplication({
      job: job._id,
      applicant: req.user.id,
      resume: req.body.resume,
      coverLetter: req.body.coverLetter,
      portfolio: req.body.portfolio,
    });

    await application.save();

    res.status(201).json({
      message: "Application submitted successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to apply for job", error });
  }
};



// Admin: Get all applicants with status
exports.getJobApplicants = async (req, res) => {
  try {
    const applications = await JobApplication.find({ job: req.params.id })
      .populate("applicant", "name email role")
      .populate("job", "title department");

    if (!applications.length) {
      return res.status(404).json({ message: "No applicants found for this job" });
    }

    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch applicants", error });
  }
};

// Admin: Update applicant status
exports.updateApplicantStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["Applied", "Shortlisted", "Interview", "Hired", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const application = await JobApplication.findOneAndUpdate(
      { job: req.params.jobId, applicant: req.params.applicantId },
      { status, updatedAt: Date.now() },
      { new: true }
    )
      .populate("applicant", "name email")
      .populate("job", "title");

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json({ message: "Status updated successfully", application });
  } catch (error) {
    res.status(500).json({ message: "Failed to update status", error });
  }
};

