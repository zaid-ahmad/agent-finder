"use client";

// Client-side component (e.g., SearchForm.tsx)
import { useCallback, useState } from "react";
import { AnimatedInput } from "@/components/AnimatedInput";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchForm({ agents }: { agents: any }) {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    // const handleFormSubmit = async (
    //     event: React.FormEvent<HTMLFormElement>
    // ) => {
    //     event.preventDefault();
    //     const bodyData = {
    //         prompt: searchQuery,
    //     };
    //     try {
    //         // Send the input value to the server-side function using Axios
    //         const response = await fetch("/api/search", {
    //             method: "POST",
    //             body: JSON.stringify(bodyData),
    //             headers: { "Content-Type": "application/json" },
    //             cache: "no-store",
    //         });

    //         const data = await response.json();
    //         console.log(data);
    //         agents = response;
    //     } catch (error) {
    //         console.error("Error fetching search results:", error);
    //     }
    // };

    return (
        <div className='flex w-1/2 items-center justify-center space-x-6'>
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
            <Button
                onClick={() => {
                    // <pathname>?sort=asc
                    router.push(
                        pathname + "?" + createQueryString("query", searchQuery)
                    );
                }}
            >
                Search
            </Button>
        </div>
    );
}
