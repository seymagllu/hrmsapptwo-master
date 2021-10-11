export interface BaseSingleResponse<T>{
    success: boolean;
    message: string;
    data: T;
}