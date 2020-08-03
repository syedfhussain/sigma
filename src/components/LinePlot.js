import React, { Component } from 'react';
import {
    LineChart, Line, YAxis, CartesianGrid, Tooltip
  } from 'recharts';

export default class LinePlot extends Component {
  render() {
      return (
        <div class="lchart">
            <LineChart
                width={1000}
                height={500}
                data={this.props.data}
                margin={{
                top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid vertical={false} stroke="#FFFFFF" />
                <YAxis dataKey={this.props.x} stroke="#FFFFFF" tick={{ fill: '#FFFFFF' }} />
                <Tooltip content={<CustomTooltip />}/>
                <Line type="monotone" dataKey={this.props.x} stroke="#1DB954" activeDot={{ r: 8 }} />
            </LineChart>
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