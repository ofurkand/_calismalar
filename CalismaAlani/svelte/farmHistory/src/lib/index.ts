// place files you want to import through the `$lib` alias in this folder.
import { writable } from 'svelte/store';

export const isDayTimeRunning = writable(false);
// export const allStates:boolean[] = [];
export const allStates = writable<boolean[]>([]);
export function addState(newState: boolean) {
    allStates.update(states => {
        states.push(newState);  // Yeni öğe ekleniyor
        return [...states];  // Yeni diziyi geri döndür
    });
}
    export function updateStateAtIndex(index: number, newState: boolean) {
    allStates.update(states => {
        let updatedStates = [...states]; // Mevcut dizinin bir kopyasını oluştur
        updatedStates[index] = newState; // Belirtilen index'teki öğeyi güncelle
        return updatedStates; // Güncellenmiş diziyi döndür
    });
}