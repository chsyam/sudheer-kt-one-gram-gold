"use client";

export default function Whatsapp({ height = 32, width = 32 }) {
    const handleWhatsappShare = () => {
        const message = `Please checkout this product from Sudheer KT One Gram Gold\n\n${'https://latestproducts.vercel.app/'}`;
        const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    }

    return (
        <div onClick={() => handleWhatsappShare()} className="cursor-pointer">
            <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp" role="img" viewBox="0 0 512 512" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <rect width="512" height="512" rx="15%" fill="#25d366"></rect>
                    <path fill="#25d366" stroke="#ffffff" strokeWidth="26" d="M123 393l14-65a138 138 0 1150 47z"></path>
                    <path fill="#ffffff" d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"></path>
                </g>
            </svg>
        </div>
    );
}