import React, { Component } from 'react'
import Computer from './Computer'
import KetQuaGame from './KetQuaGame'
import Player from './Player'

export default class OanTuTi extends Component {
    render() {
        return (
            <div className="container-fluid mt-5">
                    <div className="row d-flex justify-content-around">
                        <div className="col-4 d-flex justify-content-center align-self-end position-relative">
                               <Player/>
                        </div>
                        <div className="col-4 d-flex justify-content-center" width={360}>
                            <KetQuaGame/>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-self-end">
                            <Computer/>
                        </div>
                    </div>
                </div>
        )
    }
}