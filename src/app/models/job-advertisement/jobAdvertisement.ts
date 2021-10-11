import { City } from "../city/city";
import { Employer } from "../user/employer/employer";

export interface JobAdvertisement{
    id:number;
    cityId: number;
    employer: Employer;
    deadline: string;
    employerId: number,
    jobDescription: string;
    maxSalary: number;
    minSalary: number;
    openPositions: number;
    positionId: number;
    workModel: string;
    workTime: string;
    active: boolean;
    verified: boolean;
    city: City;
}