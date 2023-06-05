import { ReactNode, useEffect, useState } from 'react';
import Arrow from '../../components/Arrow';
import BreakLines from '../../components/BreakLines';
import { Coordination } from '../../utils/Coordination';

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
        x: 20,
        y: 20,
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
        gap: '0 0',
        gridTemplateColumns: 'repeat(auto-fill, 20px)',
        gridTemplateRows: 'repeat(auto-fill, 20px)',
    };

    const breakPoints: Coordination[] = [
        {
            x: 17,
            y: 17
        },
        {
            x: 17,
            y: 27
        },
        {
            x: 27,
            y: 27
        },
        {
            x: 27,
            y: 17
        },
        {
            x: 22,
            y: 22
        },
        {
            x: 17,
            y: 17
        }
    ]

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
                {/* <Rectangle
                    leftTopPoint={leftTopPoint}
                    rightBottomPoint={rightBottomPoint}
                    text={scrollPosition}
                /> */}
                <Arrow granularity={20} startPoint={{x: 2, y: 1}} endPoint={{x: 2, y: 5}}/>
                <BreakLines breakPoints={breakPoints} />
                {/* <DiagonalLine /> */}
            </div>
        </div>
    );
};
