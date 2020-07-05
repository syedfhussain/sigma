import React, { Component } from 'react'

export default class PlaylistItem extends Component {
    render() {
        return (
            <tr onmouseover="" style={cursorStyle} onClick={() => window.open(`http://localhost:3000/dashboard/?playlist=${this.props.playlist.id}`, '_self')}>
                <td><img src={this.props.playlist.image} alt="Girl in a jacket" width="100" height="100" /></td>
                <td style={nameStyle}>{this.props.playlist.name}</td>
            </tr>
        )
    }
}

const nameStyle = {
    width: '100%'
}

const cursorStyle = {
    cursor: 'pointer'
}