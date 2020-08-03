import React, { Component } from 'react';
import {
    ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
  } from 'recharts';

export default class ScatterPlot extends Component {
  render() {
      return (
        <div>
        <ScatterChart
            width={400}
            height={400}
            margin={{
            top: 20, right: 20, bottom: 20, left: 20,
            }}
        >
            <CartesianGrid stroke="#FFFFFF"/>
            <XAxis type="number" dataKey={this.props.x} name="tempo" stroke="#FFFFFF" tick={{ fill: '#FFFFFF' }}/>
            <YAxis type="number" dataKey={this.props.y} name="danceability" stroke="#FFFFFF" tick={{ fill: '#FFFFFF' }}/>
            <Tooltip content={<CustomTooltip />} />
            <Scatter name="A school" data={this.props.data} fill="#1DB954" />
        </ScatterChart>
        </div>
      );
  }
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <img width={100} height={100} src={payload[0].payload.image} alt={payload[0].payload.name}/>
      </div>
    );
  }

  return null;
};