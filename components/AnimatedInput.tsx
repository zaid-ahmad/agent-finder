"use client";

import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";

type AnimatedInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    animatedPlaceholder: string[];
};

export const AnimatedInput = ({
    animatedPlaceholder: passedPlaceholders,
    ...passedProps
}: AnimatedInputProps) => {
    const [currentPlaceholder, setCurrentPlaceholder] = useState("");
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentString = passedPlaceholders[placeholderIndex];
        const intr = setInterval(() => {
            setCurrentPlaceholder(currentString.slice(0, charIndex));
            if (charIndex >= currentString.length) {
                if (placeholderIndex + 1 >= passedPlaceholders.length) {
                    setPlaceholderIndex(0);
                    setCharIndex(0);
                } else {
                    setPlaceholderIndex(placeholderIndex + 1);
                    setCharIndex(0);
                }
            } else {
                setCharIndex(charIndex + 1);
            }
        }, 100);
        return () => {
            clearInterval(intr);
        };
    }, [placeholderIndex, charIndex, passedPlaceholders]);

    return (
        <Input
            autoComplete='off'
            id='prompt'
            placeholder={currentPlaceholder}
            type='text'
            {...passedProps}
        />
    );
};
