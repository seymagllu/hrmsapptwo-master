import { Position } from "../position/position";

export interface JobExperienceList{
    id: number;
    workPlace: string;
    position: Position;
    startYear: number;
    quitYear: number;
}