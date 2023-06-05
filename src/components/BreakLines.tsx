import { Coordination } from '../utils/Coordination';
import { Points } from '../utils/Points';
import Line from './Line';

export interface LinesProps {
    breakPoints: Coordination[];
}

const BreakLines = (linesProps: LinesProps): JSX.Element => {
    // TODO: get from context
    const granularity = 20;
    const { breakPoints } = linesProps;

    if (breakPoints.length < 1) return <div></div>;

    const points = new Points();
    breakPoints.forEach((bp) => points.addPoint(bp));

    const lineWrapperStyle = {
        display: 'grid',
        gridArea: `${points.gridArea!.rowStart} / ${
            points.gridArea!.columnStart
        } / ${points.gridArea!.rowEnd} / ${points.gridArea!.columnEnd}`,
        gridTemplate: `repeat(${points.gridTemplate!.gridTemplateRows}, ${granularity}px) / repeat(${
            points.gridTemplate!.gridTemplateColumns
        }, ${granularity}px)`,
    };

    return (
        <div style={lineWrapperStyle}>
            {points.convertRelativePointsToLines().map((line) => (
                <Line startPoint={line.startPoint} endPoint={line.endPoint} />
            ))}
        </div>
    );
};

export default BreakLines;
