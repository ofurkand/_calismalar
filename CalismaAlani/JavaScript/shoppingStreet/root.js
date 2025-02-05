let _xSirasiBinalar;
let _ySirasiBinalar;
let _xSirasiSokak;
let _ySirasiSokak;


Object.defineProperty(window, 'Binalar', {
    get() {
        return [_xSirasiBinalar,_ySirasiBinalar];
    },
    set([value1=_xSirasiBinalar,value2=_ySirasiBinalar]) {
        _xSirasiBinalar = value1;
        _ySirasiBinalar = value2;
        document.documentElement.style.setProperty('--xSirasiBina', _xSirasiBinalar);
        document.documentElement.style.setProperty('--ySirasiBina', _ySirasiBinalar);
    }
})

Object.defineProperty(window, 'Sokak', {
    get() {
        return [_xSirasiSokak,_ySirasiSokak];
    },
    set([value1=_xSirasiSokak,value2=_ySirasiSokak]) {
        _xSirasiSokak = value1;
        _ySirasiSokak = value2;
        document.documentElement.style.setProperty('--xSirasiSokak', _xSirasiSokak);
        document.documentElement.style.setProperty('--ySirasiSokak', _ySirasiSokak);
    }
})