import { ReactNode, useState } from 'react';

interface Props {
    children: ReactNode;

    color?: string;
    backgroundColor?: string;
    fontSize?: string;
    border?: string;
    borderRadius?: string;
    padding?: string;
    hoverColor?: string;

    onClick: () => void;
}

function Button({ children, color, backgroundColor, fontSize, border, borderRadius, padding, hoverColor, onClick }: Props) {
    const [isHovered, setIsHovered] = useState(false);

    const style = {
        backgroundColor: backgroundColor ?? '#319795',
        color: color ?? '#fff',
        padding: padding ?? '10px 20px',
        fontSize: fontSize ?? '16px',
        border: border ?? 'none',
        borderRadius: borderRadius ?? '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease-in-out',
    };

    const hoverStyle = {
        backgroundColor: hoverColor ?? '#2c7a7b',
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonStyle = isHovered ? { ...style, ...hoverStyle } : style

    return (
        <div>
            <button
                style={buttonStyle}
                onClick={onClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;