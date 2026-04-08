import type { Job } from "../types/job";
import EmptyState from "./EmptyState";

interface JobTableProps {
  jobs: Job[];
}

function JobTable({ jobs }: JobTableProps) {

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
            {jobs.length === 0 ? (
              <tr>
                <td colSpan={6}>
                  <EmptyState />
                </td>
              </tr>
            ) : (
              jobs.map((job) => (
                <tr key={job.id} className="hover:bg-slate-700 transition-colors border-b border-slate-700">
                  <td className="px-4 py-3 text-slate-300">{job.company}</td>
                  <td className="px-4 py-3 text-slate-300">{job.role}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusClasses(job.status)}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-300">{job.applied_date}</td>
                  <td className="px-4 py-3 text-slate-300">{job.notes}</td>
                  <td className="px-4 py-3 text-slate-300">actions here</td>
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
