import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import $ from "jquery";

const data = [
    { name: 'Invoice Amount Received', value: 1800, fill: '#00D632' },
    { name: 'QR Offline', value: 2000, fill: '#077721' },
    { name: 'Unpaid', value: 950, fill: '#05A72B' }
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy-3} dy={8} fontSize="12" fontWeight={600} textAnchor="middle" fill={fill}>
                {/* {payload.name} */}
                {`${(percent * 100).toFixed(1)}%`}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            {/* <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text> */}
        </g>
    );
};


export default class Example extends PureComponent {
    state = {
        // activeIndex: 2,
    };

    onPieEnter = (_, index) => {
        this.setState({
            activeIndex: index,
        });


        if(index===0) {
            $("#inv-pay-data").addClass("current-graph-data");
        }
        if(index===1) {
            $("#qr-pay-data").addClass("current-graph-data");
        }
    };

    onPieLeave = (_, index) => {
        $("#inv-pay-data").removeClass("current-graph-data");
        $("#qr-pay-data").removeClass("current-graph-data");
    }


    render() {
        return (
            <PieChart width={200} height={200} className='float-right'>
                <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="47%"
                    innerRadius={30}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={this.onPieEnter}
                    onMouseLeave={this.onPieLeave}
                />
            </PieChart>
        );
    }
}
