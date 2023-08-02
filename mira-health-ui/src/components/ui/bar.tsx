import React from 'react';

interface BarProps {
    value: number;
    max: number;
    color?: string;
    width?: number;
    height?: number;
    factorName?: string;
}

const Bar: React.FC<BarProps> = ({ value, max, color = 'blue', width = 180, height = 20, factorName = 'Factor' }) => {
    const percentage = Math.min((value / max) * 100, 100);

    const barStyles: React.CSSProperties = {
        width: `${percentage}%`,
        height: `${height}px`,
        backgroundColor: color,
    };

    return (
        <div className='flex'>
            <div className="w-20 m-2 text-xl">{factorName}</div>
            <div className="m-2" style={{ width: `${width}px`, border: '1px solid black' }}>
                <div className="" style={barStyles}></div>
            </div>
        </div>
    );
};

export default Bar;
