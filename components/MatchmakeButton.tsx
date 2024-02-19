"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogTrigger, DialogContent, Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

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

    const beginSearch = () => {
        console.log("hi");
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant='outline'
                    className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate py-5'
                >
                    Matchmake!
                </Button>
            </DialogTrigger>
            <DialogContent>
                <div className='flex flex-col p-6 gap-4'>
                    <h4 className='text-xl font-semibold leading-none'>
                        {currentQuestion.text}
                    </h4>
                    <p className='text-sm text-gray-500 line-clamp-3 dark:text-gray-400'>
                        {currentQuestion.description}
                    </p>
                    <div className='grid gap-4'>
                        <Input
                            id='answer'
                            placeholder='Type your answer here'
                        />
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
                                {/* ChevronRightIcon should be defined or imported */}
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
                </div>
            </DialogContent>
        </Dialog>
    );
}
