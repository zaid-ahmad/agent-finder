"use client";

// Client-side component (e.g., SearchForm.tsx)
import { useState } from "react";
import { AnimatedInput } from "@/components/AnimatedInput";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function SearchForm() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleFormSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        const bodyData = {
            prompt: searchQuery,
        };
        try {
            // Send the input value to the server-side function using Axios
            await fetch("/api/search", {
                method: "POST",
                body: JSON.stringify(bodyData),
                headers: { "Content-Type": "application/json" },
                cache: "no-store",
            });
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
        <form
            className='flex w-1/2 items-center justify-center space-x-6'
            onSubmit={handleFormSubmit}
        >
            <div className='grid gap-1.5 w-full'>
                <AnimatedInput
                    animatedPlaceholder={[
                        "ai recruiter",
                        "autonomous agent platform powered by llm",
                        "an agent that builds and deploys",
                        "agent that does a deep research about a topic",
                    ]}
                    value={searchQuery}
                    name='prompt'
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <Button type='submit'>Search</Button>
        </form>
    );
}
