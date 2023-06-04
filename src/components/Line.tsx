import { Coordination } from '../utils/Coordination';

export interface LineProps {
    startPoint: Coordination;
    endPoint: Coordination;
}

const Line = (lineProps: LineProps): JSX.Element => {
    const {
        startPoint: { x: x1, y: y1 },
        endPoint: { x: x2, y: y2 },
    } = lineProps;

    if (x1 !== x2 && y1 !== y2) {
        throw new Error('Not support diagonal line yet!');
    }

    let lineStyle;
    if (x1 === x2) {
        // Horizontal line
        lineStyle = {
            gridArea: `${x1} / ${Math.min(y1, y2)} / ${x1 + 1} / ${Math.max(y1, y2)}`,
            borderTop: `2px solid black`,
        }
    } else if (y1 === y2) {
        // Vertical line
        lineStyle = {
            gridArea: `${Math.min(x1, x2)} / ${y1} / ${Math.max(x1, x2)} / ${y1 + 1}`,
            borderLeft: `2px solid black`
        }
    } else {
        throw new Error('Not support diagonal line yet!');
    }

    return <div style={lineStyle}></div>;
};

export default Line;
