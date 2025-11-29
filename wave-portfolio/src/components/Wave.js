import React, { useState } from 'react';
import './Wave.css'; // Assuming you have a separate CSS file for wave styles

const Wave = () => {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div className={`wave ${expanded ? 'expanded' : ''}`} onClick={handleClick}>
                {/* Wave SVG or CSS animation can go here */}
            </div>
            {expanded && (
                <div className="about-block">
                    <div className="about-content">
                        About Me
                    </div>
                </div>
            )}
        </div>
    );
};

export default Wave;