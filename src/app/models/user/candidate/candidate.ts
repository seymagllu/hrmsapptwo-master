import { CandidateCv } from "../../cv/candidateCv";
import { JobExperienceList } from "../../job-experience/jobExperienceList";
import { LanguageList } from "../../language/languageList";
import { SchoolList } from "../../school/schoolList";
import { SkillList } from "../../skill/skillList";
import { Image } from '../../image/image';
import { JobAdvertisement } from "../../job-advertisement/jobAdvertisement";

export interface Candidate{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    nationalityId: string;
    birthYear: number;
    candidateJobExperiences: JobExperienceList[];
    candidateSkills: SkillList[];
    candidateLanguages: LanguageList[];
    candidateSchools: SchoolList[];
    cvs: CandidateCv[];
    githubAccount: string;
    linkedinAccount: string;
    images: Image[];
    favoriteJobAdvertisements: JobAdvertisement[];
    profileImg: Image;
}
