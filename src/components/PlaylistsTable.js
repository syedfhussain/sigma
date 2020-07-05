import React, { Component } from 'react';
import PlaylistItem from './PlaylistItem';
import { Table } from 'react-bootstrap';

export default class PlaylistsTable extends Component{
    state = {
        playlists: []
    };

    getUserPlaylists = () => {
        fetch('http://localhost:5000/api/getUserPlaylists')
        .then(res => res.json())
        .then(data => {
            var modify = [];
            for (var i = 0; i < data['total']; i++) {
                modify.push({id: data['items'][i]['id'], name: data['items'][i]['name'], image: data['items'][i]['images'][0]['url']});
            }

            this.setState({playlists: modify});
        });
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        this.props.setTokens(urlParams.get('code'));
        this.getUserPlaylists();
        this.setState({playlists: this.state.playlists});
      }
    
    render() { 
        return (
            <div style={divStyle}>
                <h1 style = {h1Style}>Select a playlist</h1>
                <Table striped bordered hover variant="dark">
                    <tbody>
                        {this.state.playlists.map((playlist) => (<PlaylistItem playlist={playlist} />))}   
                    </tbody>
                </Table>
            </div>
        )    
    }
}

const divStyle = {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '1%'
}

const h1Style = {
    paddingBottom: '1%'
}