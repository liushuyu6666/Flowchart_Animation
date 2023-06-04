import { Coordination } from './Coordination';
import { GridArea, GridTemplate } from './Grid';

export class Points {
    points: Coordination[];
    gridArea: GridArea | undefined;
    gridTemplate: GridTemplate | undefined;

    constructor() {
        this.points = [];
        this.gridArea = undefined;
        this.gridTemplate = undefined;
    }

    public addPoint(point: Coordination) {
        this.points.push(point);

        if (!this.gridArea || !this.gridTemplate) {
            // Update girdArea.
            this.gridArea = {
                rowStart: point.x,
                rowEnd: point.x,
                columnStart: point.y,
                columnEnd: point.y,
            };

            // Update gridTemplate.
            this.gridTemplate = {
                gridTemplateRows: 0,
                gridTemplateColumns: 0,
            };
        } else {
            // Update girdArea.
            if (point.x < this.gridArea.rowStart) {
                this.gridArea.rowStart = point.x;
            }
            if (point.x > this.gridArea.rowEnd) {
                this.gridArea.rowEnd = point.x;
            }
            if (point.y < this.gridArea.columnStart) {
                this.gridArea.columnStart = point.y;
            }
            if (point.y > this.gridArea.columnEnd) {
                this.gridArea.columnEnd = point.y;
            }

            // Update gridTemplate.
            this.gridTemplate.gridTemplateRows = Math.abs(
                this.gridArea!.rowEnd - this.gridArea!.rowStart,
            );
            this.gridTemplate.gridTemplateColumns = Math.abs(
                this.gridArea!.columnEnd - this.gridArea!.columnStart,
            );
        }
    }
}
