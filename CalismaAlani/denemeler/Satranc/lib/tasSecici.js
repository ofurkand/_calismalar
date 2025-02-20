export function tasSecici(tas){
    if (tas.charAt(0).toUpperCase() != tas) {
        for (const element of Taslar) {
            if (element[1].isim === tas) {
                return Taslar.get(element[1].kisaltma)
            }
        }    
    }        
    return Taslar.get(tas);

} 