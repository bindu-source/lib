import { toInteger } from "@ng-bootstrap/ng-bootstrap/util/util";

export interface LoginUser {
    id: number;
    userName:string;
    firstName:string;
    lastName:string;
    password:string;
    registerAs:string;
}
