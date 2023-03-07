import type { IImage } from './image.js';

export interface IUser {
    id: number;
    pin: string;
    email: string;
    fullName: string;
    phoneNumber: string;
    image: IImage;
}