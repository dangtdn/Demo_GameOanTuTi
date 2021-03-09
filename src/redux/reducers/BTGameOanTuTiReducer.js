const stateDefault = {
    banChon: {ma: 'keo',hinhAnh:'./img/keo.png'},
    soBanThang: 0,
    tongSoBan: 0,
    mangOanTuTi: [
        {ma: 'keo',hinhAnh:'./img/keo.png'},
        {ma: 'bua',hinhAnh:'./img/bua.png'},
        {ma: 'bao',hinhAnh:'./img/bao.png'}
    ],
    mangMoTa: [
        {ma: 1, moTa: "I'm iron man, I love you 3000!"},
        {ma: 0, moTa: "Not bad!"},
        {ma: -1, moTa: "You lose!"},
    ],
    mayChon: {ma: 'bua',hinhAnh:'./img/bua.png'}
}

export const gameReducer = (state=stateDefault,action) => {
    return {...state}
}