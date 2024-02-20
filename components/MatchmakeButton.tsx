"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogTrigger, DialogContent, Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import AgentCard from "./AgentCard";

// Define a type for the questions
type Question = {
    id: number;
    text: string;
    description: string;
};

// Sample questions
const questions: Question[] = [
    {
        id: 1,
        text: "What is your business about?",
        description: "Tell us about your business in a few words.",
    },
    {
        id: 2,
        text: "What do you need the AI agent for?",
        description: "Describe how you plan to use the AI agent.",
    },
    // Add more questions as needed
];

export default function MatchmakeButton() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(
            (prevIndex) => (prevIndex + 1) % questions.length
        );
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex(
            (prevIndex) => (prevIndex - 1 + questions.length) % questions.length
        );
    };

    const currentQuestion = questions[currentQuestionIndex];

    const beginSearch = () => {
        if (answer1 && answer2) {
            const prompt = answer1 + " " + answer2;
            // Perform the search here using client-side data fetching
            // For example, using fetch to get the data and then using Fuse.js to search
            // This is a placeholder for your search logic
            fetch("/api/matchmake", {
                method: "POST",
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // Assuming data is the array of search results
                    setSearchResults(data);
                });
        }
    };

    const clearStates = () => {
        setCurrentQuestionIndex(0);
        setAnswer1("");
        setAnswer2("");
        setSearchResults([]);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant='outline'
                    onClick={clearStates}
                    className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate py-5'
                >
                    Matchmake!
                </Button>
            </DialogTrigger>
            <DialogContent>
                <div className='flex flex-col p-6 gap-4'>
                    {searchResults.length === 0 ? (
                        <>
                            <h4 className='text-xl font-semibold leading-none'>
                                {currentQuestion.text}
                            </h4>
                            <p className='text-sm text-gray-500 line-clamp-3 dark:text-gray-400'>
                                {currentQuestion.description}
                            </p>
                            <div className='grid gap-4'>
                                {currentQuestion.id === 1 ? (
                                    <Input
                                        id='answer'
                                        placeholder='Type your answer here'
                                        value={answer1}
                                        onChange={(e) =>
                                            setAnswer1(e.target.value)
                                        }
                                        required
                                    />
                                ) : (
                                    <Input
                                        id='answer'
                                        placeholder='Type your answer here'
                                        value={answer2}
                                        onChange={(e) =>
                                            setAnswer2(e.target.value)
                                        }
                                        required
                                    />
                                )}
                            </div>
                            <div className='flex justify-between'>
                                <Button
                                    className='w-36'
                                    size='icon'
                                    variant='outline'
                                    onClick={handlePreviousQuestion}
                                >
                                    Previous question
                                    {/* ChevronLeftIcon should be defined or imported */}
                                </Button>
                                {currentQuestion.id === 2 ? (
                                    <Button
                                        className='w-36 bg-slate-200 text-black hover:bg-slate-400'
                                        size='icon'
                                        variant='outline'
                                        onClick={beginSearch}
                                    >
                                        Begin Search
                                    </Button>
                                ) : (
                                    <Button
                                        className='w-36'
                                        size='icon'
                                        variant='outline'
                                        onClick={handleNextQuestion}
                                    >
                                        Next question
                                        {/* ChevronRightIcon should be defined or imported */}
                                    </Button>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <h2>The best ai agent(s) for you need will be-</h2>

                            {searchResults?.map((agent) => (
                                <AgentCard
                                    key={Math.random()}
                                    name={agent[0]}
                                    category={agent[3]}
                                    description={agent[2]}
                                    website_link={agent[1]}
                                />
                            ))}

                            {/* <h3>Some more thoughts-</h3>

                            <p></p> */}
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
