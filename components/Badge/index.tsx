import React from 'react'

export interface BadgeProps { text:string }

const Badge:React.FC<BadgeProps> = ({ text }) => {
    return (
        <div className="bg-[#C6F6D5] w-max inline-block mr-2 mb-2">
            <p className="text-xs uppercase text-[#22543D] font-bold px-1">{text}</p>
        </div>
    );
}

export default Badge;