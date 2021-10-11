import { Image } from '../image/image';
import { JobExperienceList } from '../job-experience/jobExperienceList';
import { LanguageList } from '../language/languageList';
import { SchoolList } from '../school/schoolList';
import { SkillList } from '../skill/skillList';
import { Candidate } from '../user/candidate/candidate';

export interface CandidateCv{
    id: number;
    title: string;
    coverLetter: string;
    candidateJobExperiences: JobExperienceList[];
    candidateLanguages: LanguageList[];
    candidateSchools: SchoolList[];
    candidateSkills: SkillList[];
    image: Image;
    candidate: Candidate;
}