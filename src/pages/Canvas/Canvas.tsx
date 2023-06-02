import { ReactNode } from 'react';
import Rectangle, { Coordination } from '../../components/Rectangle';

export interface CanvasProps {
    children: ReactNode;
}

export const Canvas = ({ children }: CanvasProps): JSX.Element => {
    const startPoint: Coordination = {
        x: 10,
        y: 10,
    };
    const endPoint: Coordination = {
        x: 20,
        y: 20,
    };

    const scrollingStyles = {
        width: '100vw',
        height: '500vh',
    }

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

    return (
        <div style={scrollingStyles}>
            <div style={canvasStyles as any} id="canvas">
                {children}
                <Rectangle
                    leftTopPoint={startPoint}
                    rightBottomPoint={endPoint}
                />
            </div>
        </div>
    );
};
