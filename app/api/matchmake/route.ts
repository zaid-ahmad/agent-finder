import { getDescriptions, transformData } from "@/lib/data";
import Fuse from "fuse.js";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { prompt } = await req.json();

    const agentsArray = await getDescriptions();
    const agents = (agentsArray?.map((item) => ({
        name: item[0],
        url: item[1],
        description: item[2],
        category: item[3],
    })) || []) as {
        name: string;
        url: string;
        description: string;
        category: string;
    }[];

    // Fuse.js setup
    const fuse = new Fuse(agents, {
        keys: ["name", "description", "category"],
    });

    // Search
    const results = fuse.search(prompt);

    const transformedData = transformData(results);

    if (transformedData) {
        return new Response(JSON.stringify(transformedData || []), {
            headers: { "Content-Type": "application/json" },
            status: transformedData ? 200 : 204, // 204 No Content for empty results
        });
    } else {
        return undefined;
    }
}
