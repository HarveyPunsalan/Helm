function EmptyState () {
    return (
        <div className="flex flex-col items-center justify-center py-16 gap-3">
            <p className="text-5xl">💼</p>
            <h2 className="text-slate-400 text-lg font-medium">No applications yet.</h2>
            <p className="text-slate-500 text-sm">Start tracking your job search.</p>
        </div>

    );
}

export default EmptyState;