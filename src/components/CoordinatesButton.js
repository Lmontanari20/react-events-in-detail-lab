// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

    createArray(e) {
        console.log(e.mouseX, e.mouseY)
    }

    render() {
        return (
            <button onClick={(e) => this.props.onReceiveCoordinates([e.pageX, e.pageY])}></button>
        )
    }
}