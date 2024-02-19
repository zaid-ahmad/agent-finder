import { CategorySelect } from "@/components/CategorySelect";
import { getAgents } from "@/lib/data";
import AgentsGrid from "@/components/AgentsGrid";
import SearchForm from "@/components/SearchForm";
import MatchmakeButton from "@/components/MatchmakeButton";

export default async function Home({ searchParams }: { searchParams: any }) {
    const categorySelected = searchParams?.category || [];
    const query = searchParams?.query || "";
    let agents = await getAgents(query);
    let categories = new Set<string>();

    agents?.map((agent) => {
        categories.add(agent[3]);
    });

    return (
        <>
            <header className='flex flex-col items-center mt-16'>
                <h1 className='text-3xl font-bold'>
                    Find the perfect AI agent
                </h1>
                <p className='mt-1'>10x your workflow and do more.</p>
            </header>

            <main className='mt-16'>
                <div className='flex w-full items-center justify-center space-x-6'>
                    <CategorySelect categories={categories} />
                    <SearchForm agents={agents} />
                    <MatchmakeButton />
                </div>
            </main>

            {agents && (
                <AgentsGrid
                    agents={agents}
                    categorySelected={
                        categorySelected.length === 0
                            ? categorySelected
                            : categorySelected?.split(",")
                    }
                />
            )}
        </>
    );
}

// find the perfect ai assistant/
// 10x your workflow and do more.
// name, description, need (category), website
/* --------------------------------------------- */
// all this can be replaced by integrating a custom gpt to the website that would give the best agent based on the
// user's need but since I don't have a subscription nor the money to put in to integrate my own custom gpt
// i can't integrate this feature, yet.
/* --------------------------------------------- */
