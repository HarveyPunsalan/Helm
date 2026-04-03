import supabase from "../db/supabaseClient";
import { Request, Response } from "express";
import { Job } from "../types/job";

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