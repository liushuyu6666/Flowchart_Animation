import { ReactNode, useEffect, useState } from 'react';
import Rectangle, { RectanglePosition } from '../../components/Rectangle';

export interface CanvasProps {
    children: ReactNode;
}

export const Canvas = ({ children }: CanvasProps): JSX.Element => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [leftTopPoint, setLeftTopPoint] = useState({
        x: 10,
        y: 10,
    });
    const [rightBottomPoint, setRightBottomPoint] = useState({
        x: 10,
        y: 10,
    });

    const scrollingStyles = {
        width: '100vw',
        height: '500vh',
    };

    const canvasStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'grid',
        width: '100vw',
        height: '100vh',
        gridTemplateColumns: 'repeat(200, 1fr)',
        gridTemplateRows: 'repeat(100, 1fr)',
    };

    const handleScroll = () => {
        const scrollDistance = window.scrollY;
        const newLeftTopPoint = {
            x: leftTopPoint.x + Math.floor(scrollDistance / 100),
            y: leftTopPoint.y,
        };
        const newRightBottomPoint = {
            x: rightBottomPoint.x + Math.floor(scrollDistance / 100),
            y: rightBottomPoint.y,
        };

        setScrollPosition(scrollDistance);
        setLeftTopPoint(newLeftTopPoint);
        setRightBottomPoint(newRightBottomPoint);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={scrollingStyles}>
            <div style={canvasStyles as any} id="canvas">
                {children}
                <Rectangle
                    leftTopPoint={leftTopPoint}
                    rightBottomPoint={rightBottomPoint}
                    text={scrollPosition}
                />
            </div>
        </div>
    );
};
