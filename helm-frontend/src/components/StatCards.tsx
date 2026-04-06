interface StatCardProps {
  stats: {
    total: number;
    interviews: number;
    offers: number;
    rejected: number;
  };
}

function StatCards({ stats }: StatCardProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
      <div className="bg-slate-800 rounded-xl p-5 border-l-4 border-indigo-500">
        <p className="text-slate-400 text-sm mb-1">Total</p>
        <p className="text-3xl font-bold text-indigo-500">{stats.total}</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5 border-l-4 border-yellow-500">
        <p className="text-slate-400 text-sm mb-1">Interviews</p>
        <p className="text-3xl font-bold text-yellow-500">{stats.interviews}</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5 border-l-4 border-green-500">
        <p className="text-slate-400 text-sm mb-1">Offers</p>
        <p className="text-3xl font-bold text-green-500">{stats.offers}</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5 border-l-4 border-red-500">
        <p className="text-slate-400 text-sm mb-1">Rejected</p>
        <p className="text-3xl font-bold text-red-500">{stats.rejected}</p>
      </div>
      
    </div>
  );
}

export default StatCards;
