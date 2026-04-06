import type { Job } from '../types/job';
import EmptyState from './EmptyState';

interface JobTableProps {
    jobs: Job[];
}

function JobTable({ jobs }: JobTableProps) {
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
                            null

                        )}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default JobTable;

