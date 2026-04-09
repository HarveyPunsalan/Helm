import { useState, useEffect, useMemo } from "react"
import Header from "./components/Header";
import JobForm from "./components/JobForm";
import JobTable from "./components/JobTable";
import StatCards from "./components/StatCards";
import type { Job, CreateJobBody } from "./types/job";
import { fetchJobs, createJob, deleteJob } from "./services/jobService";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const stats = useMemo(() => {
    return {
      total: jobs.length,
      interviews: jobs.filter(job => job.status === "Interview").length,
      offers: jobs.filter(job => job.status === "Offer").length,
      rejected: jobs.filter(job => job.status === "Rejected").length,
    }
  }, [jobs])

  async function loadJobs() {
    setLoading(true);
    try {
      const data = await fetchJobs();
      setJobs(data);
    } catch (err) {
      setError("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadJobs();
  }, []);

  async function handleAddJob(data: CreateJobBody) {
    await createJob(data);
    await loadJobs();
  }

  async function handleDeleteJob(id: string) {
    await deleteJob(id);
    await loadJobs();
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header total={jobs.length} />
      <main className="py-6 space-y-6">
        <StatCards stats={stats} />
        <JobForm onSubmit={handleAddJob} />
        <JobTable jobs={jobs} onDelete={handleDeleteJob} />
      </main>
    </div>
  );
}

export default App;
