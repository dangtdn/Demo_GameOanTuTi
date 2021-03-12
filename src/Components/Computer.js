import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -10px;}
            25% {top: 20px;}
            50% {top: -10px;}
            75% {top: 20px;}
            100% {top: 0px;}
          }`

        return (
            <div className="group-box-right">
                <style>
                    {keyframe}
                </style>
                <div className="click-cpt position-relative">
                    <img style={{animation: `randomItem${Date.now()} 0.5s`}} className="position-absolute" src={this.props.stateGame.mayChon.hinhAnh} width={"100%"} />
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

export default connect(mapStateToProps,null)(Computer)
