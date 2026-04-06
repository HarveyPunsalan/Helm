import { useState } from "react"
import  Header  from './components/Header'
import JobForm  from './components/JobForm'
import JobTable from './components/JobTable'
import StatCards from './components/StatCards'
import type { Job } from './types/job'

function App() {
  const [jobs] = useState<Job[]>([])
  const stats = { total: 0, interviews: 0, offers: 0, rejected: 0 }

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


