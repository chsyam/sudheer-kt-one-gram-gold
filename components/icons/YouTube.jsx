import React from "react";

export default function YouTube({ height = 32, width = 32 }) {
    return (
        <div onClick={() => window.open("https://www.youtube.com/@sudheer_kt_onegram_gold8371", "_blank")} className=" cursor-pointer">
            <svg height={height} width={width} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path fill="red" d="M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z"></path>
                    <path fill="#ffffff" d="M6.593 10.11l3.644-2.098-3.644-2.11v4.208z"></path>
                </g>
            </svg>
        </div>
    );
}