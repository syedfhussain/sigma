import React, { Component } from 'react';

export default class Summary extends Component {
  state = {
    acousticness: 0,
    danceability:  0,
    duration_ms:  0,
    energy:  0,
    instrumentalness:  0,
    liveness:  0,
    loudness:  0,
    tempo:  0,
    speechiness:  0,
    valence: 0
  }

  componentWillReceiveProps(newProps) {
    var count = 0;
    var acousticness, danceability, duration_ms, energy, instrumentalness, liveness, loudness, tempo, speechiness, valence;
    acousticness = danceability = duration_ms = energy = instrumentalness = liveness = loudness = tempo = speechiness = valence = 0;
    var track;

    for (track of newProps.data) {
      acousticness = acousticness + track.acousticness;
      danceability = danceability + track.danceability;
      duration_ms = duration_ms + track.duration_ms;
      energy = energy + track.energy;
      instrumentalness = instrumentalness + track.instrumentalness;
      liveness = liveness + track.liveness;
      loudness = loudness + track.loudness;
      tempo = tempo + track.tempo;
      speechiness = speechiness + track.speechiness;
      valence = valence + track.valence;
      count = count + 1;
    }

    if (count !== 0) {
      this.setState({acousticness: acousticness / count, danceability: danceability / count, duration_ms: duration_ms / count, energy: energy / count, valence: valence / count,
        instrumentalness: instrumentalness / count, liveness: liveness / count, loudness: loudness / count, tempo: tempo / count, speechiness: speechiness / count})
      }
  }
  
  render() {
      return (
        <div>
          <h3>Summary Statistics</h3>
          <h6>Acousticness: {this.state.acousticness.toFixed(2)}</h6>
          <h6>Danceability: {this.state.danceability.toFixed(2)}</h6>
          <h6>Duration (s): {(this.state.duration_ms * 0.001).toFixed(2)}</h6>
          <h6>Energy: {this.state.energy.toFixed(2)}</h6>
          <h6>Instrumentalness: {this.state.instrumentalness.toFixed(2)}</h6>
          <h6>Liveness: {this.state.liveness.toFixed(2)}</h6>
          <h6>Loudness: {this.state.loudness.toFixed(2)}</h6>
          <h6>Tempo: {this.state.tempo.toFixed(2)}</h6>
          <h6>Speechiness: {this.state.speechiness.toFixed(2)}</h6>
          <h6>Valence: {this.state.valence.toFixed(2)}</h6>
        </div>
      );
  }
}