import React, { Component } from 'react';
import { Nav, Tab, Row, Col} from 'react-bootstrap';
import BarChartComp from './BarChartComp';
import Bar from 'recharts/lib/cartesian/Bar';

export default class Dashboard extends Component {
    state = {
        playlistTracks: [],
        trackFeatures: []
    };

    getPlaylistTrackFeatures = (playlistId) => {
        fetch(`http://localhost:5000/api/getPlaylistTrackFeatures/${playlistId}`)
        .then(res => res.json())
        .then(data => {
            this.setState({ trackFeatures: data.audio_features }, () => console.log(this.state.trackFeatures));
        });
    }

    getPlaylistTracks = (playlistId) => {
        fetch(`http://localhost:5000/api/getPlaylistTracks/${playlistId}`)
        .then(res => res.json())
        .then(data => {
            var playlistTracks = [];
            for (var item of data.items) {
              playlistTracks.push(item.track);
            }

            this.setState({ playlistTracks: playlistTracks }, () => console.log(this.state.playlistTracks));
        });
    }
    
    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        this.getPlaylistTracks(urlParams.get('playlist'));
        this.getPlaylistTrackFeatures(urlParams.get('playlist'));
      }
    
    render() { 
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link style={navItemStyle} eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link style={navItemStyle} eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <BarChartComp data={[{id: 1, rpm: 5}, {id: 2, rpm: 6}]} x='id' y='rpm' />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  <h1>text</h1>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        )    
    }
}

const navItemStyle = {
    backgroundColor: '#6c757d',
    color: '#FFFFFF'
}