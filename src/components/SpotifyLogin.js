import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class SpotifyLogin extends Component {
    render() {
        return (
            <div style={divStyle}>
                <h1 style={titleStyle}>Sigma</h1>
                <Button style={buttonStle} variant="secondary" size="lg" onClick={this.props.authorize}>Log In</Button>
            </div>
        )
    }
}

const titleStyle = {
    paddingTop: '20%',
    paddingBottom: '30px',
    width: '50%',
    margin: '0 auto'
}

const buttonStle = {
    width: '40%',
    justifyContent: 'center'
}

const divStyle = {
    width: '50%',
    margin: '0 auto',
    textAlign: 'center'
}