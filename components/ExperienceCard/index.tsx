import React from 'react';

const ExperienceCard:React.FC = ({ children }) => {
    return (
        <div className="min-w-[18rem] h-[25rem] p-4 rounded-lg border-2 border-black drop-shadow-lg">
            {children}
        </div>
    );
}

export default ExperienceCard;