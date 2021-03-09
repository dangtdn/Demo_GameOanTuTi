import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
        return (
            <div className="group-box-right">
                <div className="click">
                    <img src={this.props.stateGame.mayChon.hinhAnh} width={"100%"} />
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
