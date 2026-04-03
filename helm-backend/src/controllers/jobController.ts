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