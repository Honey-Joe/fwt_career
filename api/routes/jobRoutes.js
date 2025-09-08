const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");
const { authMiddleware, adminMiddleware } = require("../middleware/authMiddleware");

// Create a new job (Admin only)
router.post("/", authMiddleware, adminMiddleware, jobController.createJob);

// Get all applicants of a job (Admin only)
router.get("/:id/applicants", authMiddleware, adminMiddleware, jobController.getJobApplicants);

// Update applicant status (Admin only)
router.put("/:jobId/applicants/:applicantId/status", authMiddleware, adminMiddleware, jobController.updateApplicantStatus);


// Get all jobs (Public)
router.get("/", jobController.getJobs);

// Get single job by ID (Public)
router.get("/:id", jobController.getJobById);

// Apply for a job (Applicant only)
router.post("/:id/apply", authMiddleware, jobController.applyJob);

module.exports = router;
