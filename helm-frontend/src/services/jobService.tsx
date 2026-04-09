import type { Job, CreateJobBody } from '../types/job';

export const API_URL = import.meta.env.VITE_API_URL;

export async function fetchJobs(): Promise<Job[]> {
    const res = await fetch(API_URL);

    if (!res.ok) {
        throw new Error('Failed to fetch jobs');
    }

    return res.json();
}

export async function createJob(data: CreateJobBody): Promise<Job> {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        throw new Error('Failed to create job');
    }

    return res.json();
}

export async function updateJobStatus(id: string, status: string): Promise<Job> {
    const res = await fetch(`${API_URL}/${id}`, { // target one specific job
        method: 'PATCH', // PATCH means update part of something
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }) // only sending the status
    });

    if (!res.ok) {
        throw new Error('Failed to update job status');
    }

    return res.json();
}

export async function deleteJob(id: string): Promise<void> {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE', 
    });

    if (!res.ok) {
        throw new Error('Failed to delete job');
    }
    
}