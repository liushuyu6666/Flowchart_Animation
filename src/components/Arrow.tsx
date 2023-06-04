import { Coordination } from "../utils/Coordination";

export interface ArrowProps {
    granularity: number;
    startPoint: Coordination;
    endPoint: Coordination;
}

const Arrow = ({ granularity, startPoint, endPoint }: ArrowProps): JSX.Element => {
    const {
        x: x1,
        y: y1
    } = startPoint;
    const {
        x: x2,
        y: y2
    } = endPoint;

    const arrowStyle = {
        gridArea: `${x1 - 1} / ${y1} / ${x1 + 1} / ${y2}`,
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.max(2, Math.abs(y2 - y1))}, ${granularity}px)`,
        gridTemplateRows: `repeat(${Math.max(2, Math.abs(x2 - x1))}, ${granularity}px)`,
    }

    const arrowHeaderStyle = {
        borderTop: `${granularity}px solid transparent`,
        borderBottom: `${granularity}px solid transparent`,
        borderRight: `${granularity}px solid black`,
        gridArea: ` 1 / 1 / 3 / 2`,
    };

    // const deg = Math.atan(2/1) * (180 / Math.PI);

    const arrowShaftStyle = {
        borderTop: '1px solid',
        gridArea: `2 / 2 / 3 / 5`,
    }

    return (
        <div style={arrowStyle}>
            <div style={arrowHeaderStyle}></div>
            <div style={arrowShaftStyle}></div>
        </div>
    )
};

export default Arrow;
