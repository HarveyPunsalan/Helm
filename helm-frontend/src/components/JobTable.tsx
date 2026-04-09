import type { Job } from "../types/job";
import EmptyState from "./EmptyState";

interface JobTableProps {
  jobs: Job[];
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: string) => void;
  loading: boolean;
  error: string;
}

function JobTable({ jobs, onDelete, onStatusChange, loading, error }: JobTableProps) {
  function getStatusClasses(status: string) {
    if (status === "Applied")   return "bg-indigo-500/20 text-indigo-300";
    if (status === "Interview") return "bg-yellow-500/20 text-yellow-300";
    if (status === "Offer")     return "bg-green-500/20 text-green-300";
    if (status === "Rejected")  return "bg-red-500/20 text-red-300";
    return "bg-slate-500/20 text-slate-300";
  }

  return (
    <div className="bg-slate-800 rounded-xl mx-6 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-900">
            <tr>
              <th className="text-slate-400 text-xs uppercase tracking-wider px-4 py-3 text-left">Company</th>
              <th className="text-slate-400 text-xs uppercase tracking-wider px-4 py-3 text-left">Role</th>
              <th className="text-slate-400 text-xs uppercase tracking-wider px-4 py-3 text-left">Status</th>
              <th className="text-slate-400 text-xs uppercase tracking-wider px-4 py-3 text-left">Date Applied</th>
              <th className="text-slate-400 text-xs uppercase tracking-wider px-4 py-3 text-left">Notes</th>
              <th className="text-slate-400 text-xs uppercase tracking-wider px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <>
                {[1, 2, 3].map((i) => (
                  <tr key={i}>
                    <td colSpan={6} className="px-4 py-3">
                      <div className="animate-pulse bg-slate-700 rounded h-8" />
                    </td>
                  </tr>
                ))}
              </>
            ) : error ? (
              <tr>
                <td colSpan={6} className="px-4 py-3 text-center text-red-400">
                  {error}
                </td>
              </tr>
            ) : jobs.length === 0 ? (
              <tr>
                <td colSpan={6}>
                  <EmptyState />
                </td>
              </tr>
            ) : (
              jobs.map((job) => (
                <tr
                  key={job.id}
                  className="hover:bg-slate-700 transition-colors border-b border-slate-700"
                >
                  <td className="px-4 py-3 text-slate-300">{job.company}</td>
                  <td className="px-4 py-3 text-slate-300">{job.role}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusClasses(job.status)}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-300">{job.applied_date}</td>
                  <td className="px-4 py-3 text-slate-300">{job.notes}</td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <select
                      value={job.status}
                      onChange={(e) => onStatusChange(job.id, e.target.value)}
                      className="bg-slate-700 text-slate-300 text-xs rounded px-2 py-1 border border-slate-600"
                    >
                      <option>Applied</option>
                      <option>Interview</option>
                      <option>Offer</option>
                      <option>Rejected</option>
                    </select>
                    <button
                      onClick={() => onDelete(job.id)}
                      className="text-xs text-red-400 hover:text-red-300 px-2 py-1 rounded hover:bg-red-500/10 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JobTable;
