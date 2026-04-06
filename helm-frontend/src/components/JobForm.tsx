function JobForm() {
    return (
        <div className="bg-slate-800 rounded-xl p-6 mx-6">
            <div className="flex flex-wrap gap-3 items-end">
                <div className="flex flex-col gap-1 flex-1">
                    <label className="text-slate-400 text-sm">Company</label>
                    <input type="text" placeholder="Company" className="bg-slate-900 border border-slate-700 focus:border-indigo-500 focus:outline-none text-white rounded-lg px-3 py-2 text-sm w-full"/>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                    <label className="text-slate-400 text-sm">Role</label>
                    <input type="text" placeholder="Role" className="bg-slate-900 border border-slate-700 focus:border-indigo-500 focus:outline-none text-white rounded-lg px-3 py-2 text-sm w-full"/>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                    <label className="text-slate-400 text-sm">Status</label>
                    <select className="bg-slate-900 border border-slate-700 focus:border-indigo-500 focus:outline-none text-white rounded-lg px-3 py-2 text-sm w-full">
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Offer">Offer</option>
                        <option value="Rejected">Rejected</option>
                        </select> 
                </div>

                <div className="flex flex-col gap-1 flex-1">
                    <label className="text-slate-400 text-sm">Applied Date</label>
                    <input type="date" placeholder="Company" className="bg-slate-900 border border-slate-700 focus:border-indigo-500 focus:outline-none text-white rounded-lg px-3 py-2 text-sm w-full"/>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                    <label className="text-slate-400 text-sm">Notes</label>
                    <input type="text" placeholder="Add notes" className="bg-slate-900 border border-slate-700 focus:border-indigo-500 focus:outline-none text-white rounded-lg px-3 py-2 text-sm w-full"/>
                </div>

                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-lg transition-colors whitespace-nowrap">Add Application</button>

            </div>

        </div>
    );
}

export default JobForm;