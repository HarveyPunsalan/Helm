type JobStatus = 'Applied' | 'Interview' | 'Offer' | 'Rejected';

export interface Job {
    id: string;
    company: string;
    role: string;
    status: JobStatus;
    applied_date: string;
    notes?: string 
    created_at: string;
}

export interface CreateJobBody {
    company: string;
    role: string;
    status: JobStatus;
    applied_date: string;
    notes?: string; 
}