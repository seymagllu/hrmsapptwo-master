import { Department } from "../department/department";
import { School } from "./school";

export interface SchoolList{
    id: number;
    school: School;
    department: Department;
    startYear: number;
    graduationYear: number;
}