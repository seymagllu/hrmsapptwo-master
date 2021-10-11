import { Action } from "@ngrx/store"
import { JobAdvertisement } from "src/app/models/job-advertisement/jobAdvertisement";

export enum FavouriteActionTypes{
    ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE",
    REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE"
}

export class AddToFavourite implements Action{
    type: string = FavouriteActionTypes.ADD_TO_FAVOURITE;

    constructor(public payload: JobAdvertisement){
        
    }
}

export class RemoveFromFavourite implements Action{
    type: string = FavouriteActionTypes.REMOVE_FROM_FAVOURITE;
    constructor(public payload: JobAdvertisement){

    }
}
    
export type FavouriteActions = AddToFavourite | RemoveFromFavourite;