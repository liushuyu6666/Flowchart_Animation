export interface Coordination {
    x: number;
    y: number;
}

export interface RectanglePosition {
    leftTopPoint: Coordination;
    rightBottomPoint: Coordination;
}

export interface RectangleProps {
    leftTopPoint: Coordination;
    rightBottomPoint: Coordination;
    text: number;
}

const Rectangle = (rectangleProps: RectangleProps): JSX.Element => {
    const { leftTopPoint, rightBottomPoint, text } = rectangleProps;

    const gridArea = `${leftTopPoint.y} / ${leftTopPoint.x} / ${rightBottomPoint.y} / ${rightBottomPoint.x}`;

    return (
        <button type="button" className="btn btn-primary" style={{ gridArea }}>
            {text}
        </button>
    );
};

export default Rectangle;
