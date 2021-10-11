import { BaseSingleResponse } from "../responses/baseSingleResponse";
import { School } from "./school";
import { SchoolList } from "./schoolList";

export interface SchoolSingleResponse extends BaseSingleResponse<SchoolList>{}