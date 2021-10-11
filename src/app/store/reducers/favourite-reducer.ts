import { JobAdvertisement } from "src/app/models/job-advertisement/jobAdvertisement";
import { FavouriteActions, FavouriteActionTypes } from "../actions/favourite-actions";

export let initialState : JobAdvertisement[] = [];

export function favouriteReducer(state = initialState, action: FavouriteActions){
    switch (action.type) {
        case FavouriteActionTypes.ADD_TO_FAVOURITE:
            let newState = [...state, action.payload];
            return newState;
            break;
        case FavouriteActionTypes.REMOVE_FROM_FAVOURITE:
            return state.filter(ad => ad.id !== action.payload.id);
        default:
            return state;
    }
}