import supabase from "../db/supabaseClient";
import { Request, Response } from "express";
import { Job, CreateJobBody } from "../types/job";

export async function getAllJobs(req: Request, res: Response) {
    try {
        const { data, error } = await supabase
        .from("job_applications")
        .select("*")
        .order("created_at", { ascending: false });

        if (error) throw error

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch jobs" });
    }  
}

export async function createJob (req: Request, res: Response) {
    try {
        const { company, role, status, applied_date, notes } = req.body as CreateJobBody;
        
        if (!company || !role || !applied_date) {
        return res.status(400).json({ error: 'Company, role, and applied date are required' });
    }

        const { data, error } = await supabase
        .from("job_applications")
        .insert({ company, role, status, applied_date, notes })
        .select("*")
        .single()

        if (error) throw error

        return res.status(201).json(data);

    } catch (error) {
        return res.status(400).json({ error: 'Company, role, and applied date are required' });
    }  
}

export async function updateJobStatus(req: Request, res: Response) {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const allowed = ['Applied', 'Interview', 'Offer', 'Rejected'];
        if (!allowed.includes(status)) {
            return res.status(400).json({ error: 'Invalid status value' });
        }

        const { data, error } = await supabase
            .from("job_applications")
            .update({ status })
            .eq("id", id)
            .select("*")
            .single()

        if (error) throw error

        if (!data) return res.status(404).json({ error: 'Job not found' });
        return res.json(data);

    } catch (error) {
        return res.status(500).json({ error: 'Failed to update job' });
    }
}

export async function deleteJob(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const { data, error } = await supabase
        .from("job_applications")
        .delete()
        .eq("id", id)
        .select()

        if (error) throw error

        if (data.length === 0) return res.status(404).json({ error: 'Job not found' });

        return res.status(200).json({ message: 'Job deleted successfully' });

    } catch (error) {
        return res.status(500).json({ error: "Job not found" });
    }  
}

