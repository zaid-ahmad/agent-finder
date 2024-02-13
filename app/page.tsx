import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AnimatedInput } from "@/components/AnimatedInput";
import { CategorySelect } from "@/components/CategorySelect";

export default function Home() {
    return (
        // find the perfect ai assistant/
        // 10x your workflow and do more.
        // name, description, need (category), website
        /* --------------------------------------------- */
        // all this can be replaced by integrating a custom gpt to the website that would give the best agent based on the
        // user's need but since I don't have a subscription nor the money to put in to integrate my own custom gpt
        // i can't integrate this feature, yet.
        /* --------------------------------------------- */
        <>
            <header className='flex flex-col items-center mt-16'>
                <h1 className='text-3xl font-bold'>
                    Find the perfect AI assistant
                </h1>
                <p className='mt-1'>10x your workflow and do more.</p>
            </header>

            <main className='mt-16'>
                <div className='flex w-full items-center justify-center space-x-6'>
                    <CategorySelect />
                    <div className='grid w-full max-w-sm gap-1.5'>
                        <AnimatedInput
                            animatedPlaceholder={[
                                "ai recruiter",
                                "autonomous agent platform powered by llm",
                                "an agent that builds and deploys",
                                "agent that does a deep research about a topic",
                            ]}
                        />
                    </div>
                    <Button type='submit'>Search</Button>
                </div>
            </main>
        </>
    );
}
