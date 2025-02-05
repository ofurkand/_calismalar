import { binalar, sokak } from "../script.js";

export function sira(x,y,yer=sokak){
        return yer=sokak?(x%Sokak[0])*(y%Sokak[1]):(x%Binalar[0])*(y%Binalar[1])
}