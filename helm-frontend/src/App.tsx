import { useState, useEffect } from "react";
import Header from "./components/Header";
import JobForm from "./components/JobForm";
import JobTable from "./components/JobTable";
import StatCards from "./components/StatCards";
import type { Job } from "./types/job";
import { fetchJobs } from "./services/jobService";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const stats = { total: 0, interviews: 0, offers: 0, rejected: 0 };

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

  return (
    <div className="min-h-screen bg-slate-900">
      <Header total={jobs.length} />
      <main className="py-6 space-y-6">
        <StatCards stats={stats} />
        <JobForm />
        <JobTable jobs={jobs} />
      </main>
    </div>
  );
}

export default App;
