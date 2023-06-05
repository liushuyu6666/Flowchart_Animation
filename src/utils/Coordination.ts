export interface Coordination {
    x: number;
    y: number;
}

// export class CoordinationImpl {
//     coordination: Coordination;

//     constructor(x: number, y: number) {
//         this.coordination = {
//             x: x,
//             y: y
//         };
//     }

//     public calculateRelative(row: number, col: number): Coordination {
//         return {
//             x: this.coordination.x - row,
//             y: this.coordination.y - col,
//         };
//     }
// }