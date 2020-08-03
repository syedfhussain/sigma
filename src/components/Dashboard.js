import React, { Component } from 'react';
import { Card, Container, Row, Col} from 'react-bootstrap';
import Summary from './Summary';
import ScatterPlot from './ScatterPlot'
import LinePlot from './LinePlot'

export default class Dashboard extends Component {
    state = {
        playlistTracks: [],
        scatterX: 'acousticness',
        scatterY: 'acousticness',
        lineX: 'acousticness'
    };

    onChangeScatterX = (e) => {
      this.setState({scatterX: e.target.value})
    }

    onChangeScatterY = (e) => {
      this.setState({scatterY: e.target.value})
    }

    onChangeLineX = (e) => {
      this.setState({lineX: e.target.value})
    }

    getPlaylistTracks = (playlistId) => {
        fetch(`http://localhost:5000/api/getPlaylistTracks/${playlistId}`)
        .then(res => res.json())
        .then(data => {
          fetch(`http://localhost:5000/api/getPlaylistTrackFeatures/${playlistId}`)
          .then(res2 => res2.json())
          .then(data2 => {
              var playlistTracks = [];
              for (var i = 0; i < data.items.length; i++) {
                var track = {
                  name: data.items[i].track.name,
                  image: data.items[i].track.album.images[0].url,
                  acousticness: data2.audio_features[i].acousticness,
                  danceability: data2.audio_features[i].danceability,
                  duration_ms: data2.audio_features[i].duration_ms,
                  energy: data2.audio_features[i].energy,
                  instrumentalness: data2.audio_features[i].instrumentalness,
                  liveness: data2.audio_features[i].liveness,
                  loudness: data2.audio_features[i].loudness,
                  tempo: data2.audio_features[i].tempo,
                  speechiness: data2.audio_features[i].speechiness,
                  valence: data2.audio_features[i].valence
                }
                playlistTracks.push(track);
              }
              this.setState({ playlistTracks: playlistTracks }, () => console.log(data.items));
          });
        });
    }
    
    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        this.getPlaylistTracks(urlParams.get('playlist'));
      }
    
    render() { 
        return (
          <div>
            <Container>
              <Row style={{ paddingBottom: '10px', paddingTop: '10px' }}>
                <Col>
                  <Card style={{ backgroundColor: '#343a40'}}>
                    <Card.Body>
                        <Summary data={this.state.playlistTracks}/>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ backgroundColor: '#343a40' }}>
                    <form>
                    <div class="inline">
                    <h6>X Axis</h6>
                    <select class="select-css" id="scatterX" name="scatterX_value" onChange={this.onChangeScatterX}>
                            <option value="acousticness">Acousticness</option>
                            <option value="danceability">Danceability</option>
                            <option value="duration_ms">Duration</option>
                            <option value="energy">Energy</option>
                            <option value="instrumentalness">Instrumentalness</option>
                            <option value="liveness">Liveness</option>
                            <option value="loudness">Loudness</option>
                            <option value="tempo">Tempo</option>
                            <option value="speechiness">Speechiness</option>
                            <option value="valence">Valence</option>
                    </select>
                    </div>

                    <div class="inline">
                    <h6>Y Axis</h6>
                    <select class="select-css" id="scatterY" name="scatterY_value" onChange={this.onChangeScatterY}>
                            <option value="acousticness">Acousticness</option>
                            <option value="danceability">Danceability</option>
                            <option value="duration_ms">Duration</option>
                            <option value="energy">Energy</option>
                            <option value="instrumentalness">Instrumentalness</option>
                            <option value="liveness">Liveness</option>
                            <option value="loudness">Loudness</option>
                            <option value="tempo">Tempo</option>
                            <option value="speechiness">Speechiness</option>
                            <option value="valence">Valence</option>
                    </select>
                    </div>

                    </form>
                    <Card.Body>
                        <ScatterPlot data={this.state.playlistTracks} x={this.state.scatterX} y={this.state.scatterY} />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row style={{ paddingBottom: '10px', paddingTop: '10px' }}>
                <Col>
                  <Card style={{ backgroundColor: '#343a40'}}>
                    <Card.Body>
                    <form>
                    <h6>Change in Variable Throughout Playlist</h6>
                    <select class="select-css" id="lineX" name="lineX_value" onChange={this.onChangeLineX}>
                            <option value="acousticness">Acousticness</option>
                            <option value="danceability">Danceability</option>
                            <option value="duration_ms">Duration</option>
                            <option value="energy">Energy</option>
                            <option value="instrumentalness">Instrumentalness</option>
                            <option value="liveness">Liveness</option>
                            <option value="loudness">Loudness</option>
                            <option value="tempo">Tempo</option>
                            <option value="speechiness">Speechiness</option>
                            <option value="valence">Valence</option>
                    </select>
                    </form>
                      <LinePlot data={this.state.playlistTracks} x={this.state.lineX}/>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        )    
    }
}