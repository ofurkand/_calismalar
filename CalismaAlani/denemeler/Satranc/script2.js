for (let index = 1; index <= 64; index++) {
    let eklenecekKare = document.createElement('div')
    eklenecekKare.classList.add('kare');
    index%8==1?sira:sira=!sira;sira?
    eklenecekKare.classList.add('beyaz'):
    eklenecekKare.classList.add('siyah');
    eklenecekKare.id=`${notasyon[(index-1)%8]}${Math.abs(64-((index-1)-((index-1)%8)))/8}`;
    tahta.appendChild(eklenecekKare);
}