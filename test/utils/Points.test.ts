import { Coordination } from '../../src/utils/Coordination';
import { Points } from '../../src/utils/Points';

describe('Points', () => {
    let points: Points;

    beforeEach(() => {
        points = new Points();
    });

    describe('addPoint', () => {
        test('should update gridArea and gridTemplate when adding the first point', () => {
            const point: Coordination = { x: 2, y: 3 };

            points.addPoint(point);

            expect(points.points).toMatchSnapshot();
            expect(points.gridArea).toMatchSnapshot();
            expect(points.gridTemplate).toMatchSnapshot();
        });

        test('should update gridArea and gridTemplate when adding subsequent points', () => {
            points.addPoint({ x: 2, y: 3 });
            points.addPoint({ x: 4, y: 1 });
            points.addPoint({ x: 3, y: 5 });

            expect(points.points).toMatchSnapshot();
            expect(points.gridArea).toMatchSnapshot();
            expect(points.gridTemplate).toMatchSnapshot();
        });
    });
});
