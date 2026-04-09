import { useState } from "react";
import type { CreateJobBody, JobStatus } from "../types/job";

interface JobFormProps {
  onSubmit: (data: CreateJobBody) => void;
}

function JobForm({ onSubmit }: JobFormProps) {
  const [form, setForm] = useState<CreateJobBody>({
    company: "",
    role: "",
    status: "Applied",
    applied_date: "",
    notes: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.company || !form.role || !form.applied_date) {
      alert("Company, Role and Date are required.");
      return;
    }
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-slate-800 rounded-xl p-6 mx-6">
        <div className="flex flex-wrap gap-3 items-end">
          <div className="flex flex-col gap-1 flex-1">
            <label className="text-slate-400 text-sm">Company</label>
            <input
              type="text"
              placeholder="Company"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="bg-slate-900 border border-slate-700 focus:border-indigo-500 focus:outline-none text-white rounded-lg px-3 py-2 text-sm w-full"
            />
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <label className="text-slate-400 text-sm">Role</label>
            <input
              type="text"
              placeholder="Role"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="bg-slate-900 border border-slate-700 focus:border-indigo-500 focus:outline-none text-white rounded-lg px-3 py-2 text-sm w-full"
            />
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <label className="text-slate-400 text-sm">Status</label>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value as JobStatus })}
              className="bg-slate-900 border border-slate-700 focus:border-indigo-500 focus:outline-none text-white rounded-lg px-3 py-2 text-sm w-full"
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <label className="text-slate-400 text-sm">Applied Date</label>
            <input
              type="date"
              value={form.applied_date}
              onChange={(e) => setForm({ ...form, applied_date: e.target.value })}
              className="bg-slate-900 border border-slate-700 focus:border-indigo-500 focus:outline-none text-white rounded-lg px-3 py-2 text-sm w-full"
            />
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <label className="text-slate-400 text-sm">Notes</label>
            <input
              type="text"
              placeholder="Add notes"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="bg-slate-900 border border-slate-700 focus:border-indigo-500 focus:outline-none text-white rounded-lg px-3 py-2 text-sm w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            Add Application
          </button>
        </div>
      </div>
    </form>
  );
}

export default JobForm;
