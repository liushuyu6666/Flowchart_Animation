import { useEffect, useState } from 'react';

export interface Coordination {
    x: number;
    y: number;
}

export interface RectangleProps {
    leftTopPoint: Coordination;
    rightBottomPoint: Coordination;
}

const Rectangle = (rectangleProps: RectangleProps): JSX.Element => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [leftTopPoint, setLeftTopPoint] = useState(rectangleProps.leftTopPoint);
    const [rightBottomPoint, setRightBottomPoint] = useState(rectangleProps.rightBottomPoint);

    

    useEffect(() => {
        const handleScroll = () => {
            const scrollDistance = window.scrollY;
            const newLeftTopPoint = {
                x: leftTopPoint.x + Math.floor(scrollDistance / 100),
                y: leftTopPoint.y
            };
            const newRightBottomPoint = {
                x: rightBottomPoint.x + Math.floor(scrollDistance / 100),
                y: rightBottomPoint.y
            };
            setScrollPosition(scrollDistance);
            setLeftTopPoint(newLeftTopPoint);
            setRightBottomPoint(newRightBottomPoint);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const gridArea = `${leftTopPoint.y} / ${leftTopPoint.x} / ${rightBottomPoint.y} / ${rightBottomPoint.x}`;

    return (
        <button type="button" className="btn btn-primary" style={{ gridArea }}>
            {scrollPosition}
        </button>
    );
};

export default Rectangle;
