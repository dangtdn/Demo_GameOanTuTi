import React, { Component } from 'react'
import {connect} from 'react-redux'

class KetQuaGame extends Component {

    render() {
        return (
            <div className="group-box-content text-center">
                <div className="content text-warning">
                    <span>
                          {this.props.stateGame.moTaKetQua}
                    </span>
                </div>
                <div className="content text-success">
                    Số bàn thắng : <span className="text-primary">{this.props.stateGame.soBanThang}</span>
                </div>
                <div className="content text-success">
                    Số bàn chơi : <span className="text-primary">{this.props.stateGame.tongSoBan}</span>
                </div>
                <div className="content-btn">
                    <button onClick={this.props.playGame} className='btn btn-success'><span className='w-25'>Play game</span></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stateGame: state.gameReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch({
                type: 'PLAY_GAME'
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(KetQuaGame)
