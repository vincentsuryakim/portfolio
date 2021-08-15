import React from 'react';

export interface ExperienceCardProps { href:string }

const ExperienceCard:React.FC<ExperienceCardProps> = ({ children, href }) => {
    return (
        <a href={href} rel="noreferrer" target="_blank">
            <div className="min-w-[18rem] h-[25rem] p-4 rounded-lg border-2 border-black drop-shadow-lg">
                {children}
            </div>
        </a>
    );
}

export default ExperienceCard;