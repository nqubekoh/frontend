import {BasicInformation} from "./basic-information";
import {PersonalInformation} from "./personal-information";


export interface Application {
    basicInformation: BasicInformation;
    personalInformation: PersonalInformation;
    reference: string;
}