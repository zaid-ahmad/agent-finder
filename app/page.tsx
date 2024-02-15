import { CategorySelect } from "@/components/CategorySelect";
import { getAgents } from "@/lib/data";
import AgentsGrid from "@/components/AgentsGrid";
import SearchForm from "@/components/SearchForm";

export default async function Home({ searchParams }: { searchParams: any }) {
    const categorySelected = searchParams?.category || [];
    const agents = await getAgents();
    let categories = new Set<string>();

    agents?.map((agent) => {
        categories.add(agent[3]);
    });

    async function handleFormSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchQuery = formData.get("searchQuery");
        // Now you can do whatever you want with the searchQuery
        console.log("Search Query:", searchQuery);
        // You can also fetch data here and update the state if necessary
    }

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
                    <SearchForm />
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
