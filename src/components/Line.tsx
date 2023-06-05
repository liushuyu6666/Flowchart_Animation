import { Coordination } from '../utils/Coordination';

export interface LineProps {
    startPoint: Coordination;
    endPoint: Coordination;
}

const Line = (lineProps: LineProps): JSX.Element => {
    // TODO: get from context
    const granularity = 20;

    const {
        startPoint: { x: x1, y: y1 },
        endPoint: { x: x2, y: y2 },
    } = lineProps;

    let lineStyle;
    if (x1 === x2) {
        // Horizontal line
        lineStyle = {
            gridArea: `${x1} / ${Math.min(y1, y2)} / ${x1 + 1} / ${Math.max(y1,y2)}`,
            borderTop: `2px solid black`,
        };
        return <div style={lineStyle}></div>;
    } else if (y1 === y2) {
        // Vertical line
        lineStyle = {
            gridArea: `${Math.min(x1, x2)} / ${y1} / ${Math.max(x1, x2)} / ${
                y1 + 1
            }`,
            borderLeft: `2px solid black`,
        };
        return <div style={lineStyle}></div>;
    } else if ((x1 - x2) * (y1 - y2) > 0){
        // Diagonal line, from left top to right bottom
        const gridRowStart = Math.min(x1, x2);
        const gridColumnStart = Math.min(y1, y2);
        const width = Math.abs(y1 - y2) * granularity;
        const height = Math.abs(x1 - x2) * granularity;
        const diagonalLineStyle = {
            gridRowStart,
            gridColumnStart,
            width: `${width}px`,
            height: `${height}px`,
        };
        return (
            <svg style={diagonalLineStyle}>
                <line x1="0" y1="0" x2={width} y2={height} stroke="black" strokeWidth="2px"/>
            </svg>
        );
    } else {
        // Diagonal line, from left bottom to right top
        const gridRowStart = Math.min(x1, x2);
        const gridColumnStart = Math.min(y1, y2);
        const width = Math.abs(y1 - y2) * granularity;
        const height = Math.abs(x1 - x2) * granularity;
        const diagonalLineStyle = {
            gridRowStart,
            gridColumnStart,
            width: `${width}px`,
            height: `${height}px`,
        };
        return (
            <svg style={diagonalLineStyle}>
                <line x1="0" y1={height} x2={width} y2="0" stroke="black" strokeWidth="2px"/>
            </svg>
        );
    }
};

export default Line;
