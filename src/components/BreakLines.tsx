import { Coordination } from '../utils/Coordination';
import { Points } from '../utils/Points';
import Line from './Line';

export interface LinesProps {
    breakPoints: Coordination[];
}

const BreakLines = (linesProps: LinesProps): JSX.Element => {
    const { breakPoints } = linesProps;

    if (breakPoints.length < 1) return <div></div>;

    const points = new Points();
    breakPoints.forEach((bp) => points.addPoint(bp));

    const lineWrapperStyle = {
        display: 'grid',
        gridArea: `${points.gridArea!.rowStart} / ${
            points.gridArea!.columnStart
        } / ${points.gridArea!.rowEnd} / ${points.gridArea!.columnEnd}`,
        gridTemplate: `${points.gridTemplate!.gridTemplateRows} / ${
            points.gridTemplate!.gridTemplateColumns
        }`,
    };

    return (
        <div style={lineWrapperStyle}>
            {points.convertToLines().map((line) => (
                <Line startPoint={line.startPoint} endPoint={line.endPoint} />
            ))}
        </div>
    );
};

export default BreakLines;
