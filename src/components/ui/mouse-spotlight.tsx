"use client";

import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import React, { MouseEvent } from "react";

export const MouseSpotlight = ({
    children,
    className = "",
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black ${className}`}
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 z-0 bg-transparent pointer-events-none">
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(14, 165, 233, 0.15),
                transparent 80%
              )
            `,
                        opacity: 1 // Always visible for the global effect
                    }}
                />
            </div>
            <div className="relative z-10 w-full">{children}</div>
        </div>
    );
};
