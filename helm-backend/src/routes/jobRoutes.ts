import { Router } from 'express';
import { getAllJobs } from '../controllers/jobController';

export const router = Router()

router.get('/', getAllJobs) 

// router.post('/', createJob) 

// router.patch('/:id', updateJobStatus)
   
// router.delete('/:id', deleteJob) 
  