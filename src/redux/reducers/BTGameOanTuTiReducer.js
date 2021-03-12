const stateDefault = {
    banChon: {ma: 'bua',hinhAnh:'./img/bua.png'},
    soBanThang: 0,
    tongSoBan: 0,
    mangOanTuTi: [
        {ma: 'keo',hinhAnh:'./img/keo.png'},
        {ma: 'bua',hinhAnh:'./img/bua.png'},
        {ma: 'bao',hinhAnh:'./img/bao.png'}
    ],
    moTaKetQua: "I'm iron man, I love you 3000!", 
    mayChon: {ma: 'bua',hinhAnh:'./img/bua.png'}
}

export const gameReducer = (state=stateDefault,action) => {
    switch(action.type){
        case 'BAN_CHON':{
            state.banChon = action.banChon;
            
            return {...state};
        }
        case 'PLAY_GAME':{
            let numRandom = Math.floor(Math.random() * 3);
            state.mayChon = state.mangOanTuTi[numRandom];

            return {...state};
        }
        case 'END_GAME':{           
            // Kiểm tra kết quả bàn thắng
            if(
                (state.banChon.ma === 'keo' && state.mayChon.ma === 'bao') ||
                (state.banChon.ma === 'bao' && state.mayChon.ma === 'bua') ||
                (state.banChon.ma === 'bua' && state.mayChon.ma === 'keo') 
            ) {
                state.moTaKetQua = "I'm iron man, I love you 3000!";
                state.soBanThang += 1;
            }else if (state.banChon.ma === state.mayChon.ma){
                state.moTaKetQua = "Hòa. Not Bad!";
            }else {
                state.moTaKetQua = "Lose. HaHa You so bad!";
            }

            state.tongSoBan += 1;
            return {...state};
        }
        default: return {...state}
    }
}