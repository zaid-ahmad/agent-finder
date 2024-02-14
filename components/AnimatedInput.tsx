"use client";

import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { getSearchResultAgents } from "@/lib/data";

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
    const [prompt, setPrompt] = useState<string>("");

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

    const handleFormSubmit = async () => {
        await getSearchResultAgents(prompt);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <Input
                autoComplete='off'
                onChange={(e) => setPrompt(e.target.value)}
                id='prompt'
                placeholder={currentPlaceholder}
                type='text'
                {...passedProps}
            />
            <Button type='submit'>Search</Button>
        </form>
    );
};
