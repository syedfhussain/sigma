import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default class BarChartComp extends Component {
    render() {
        return (
          <BarChart
            width={500}
            height={300}
            data={this.props.data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={this.props.x} fill="#8884d8" />
            <Bar dataKey={this.props.y} fill="#82ca9d" />
          </BarChart>
        );
    }
}