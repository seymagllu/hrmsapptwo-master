import { Image } from "../image/image";

export interface Cv{
    candidateId: number;
    candidateJobExperienceIds: number[];
    candidateLanguageIds: number[];
    candidateSchoolIds: number[];
    candidateSkillIds: number[];
    coverLetter: string;
    title: string;
}