import AgentCard from "./AgentCard";

export default function AgentsGrid({
    agents,
    categorySelected,
}: {
    agents: string[][];
    categorySelected?: string[];
}) {
    if (categorySelected && categorySelected?.length > 0) {
        return (
            <section className='grid grid-cols-3 gap-10 mt-16 mx-7'>
                {agents?.map((agent) => (
                    <>
                        {categorySelected.includes(agent[3]) ? (
                            <AgentCard
                                key={Math.random()}
                                name={agent[0]}
                                category={agent[3]}
                                description={agent[2]}
                                website_link={agent[1]}
                            />
                        ) : (
                            ""
                        )}
                    </>
                ))}
            </section>
        );
    } else {
        return (
            <section className='grid grid-cols-3 gap-10 mt-16 mx-7'>
                {agents?.map((agent) => (
                    <AgentCard
                        key={Math.random()}
                        name={agent[0]}
                        category={agent[3]}
                        description={agent[2]}
                        website_link={agent[1]}
                    />
                ))}
            </section>
        );
    }
}
