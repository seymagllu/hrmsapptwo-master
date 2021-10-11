import { JobAdvertisement } from "../../job-advertisement/jobAdvertisement";
import { EmployerUpdate } from "./employerUpdate";

export interface Employer{
    id: number;
    companyName: string;
    website: string;
    email: string;
    password: string;
    phoneNumber: string;   
    jobAdvertisements: JobAdvertisement[];
    updateVerified: boolean;
    rejected: boolean;
    verified:boolean;
    employerUpdate: EmployerUpdate;
}