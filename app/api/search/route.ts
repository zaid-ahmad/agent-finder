import { NextResponse } from "next/server";
import Fuse from "fuse.js";
import { google } from "googleapis";

async function getDescriptions() {
    const auth = await google.auth.getClient({
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const range = `A5:D133`;

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    });

    const data = response.data.values;

    if (data) {
        return data as string[][];
    } else {
        return undefined;
    }
}

export async function POST(request: Request) {
    try {
        // Handle the POST request here
        const { prompt } = await request.json(); // Access the request body

        const agentsArray = await getDescriptions();
        const agents = agentsArray?.map((item) => ({
            name: item[0],
            url: item[1],
            description: item[2],
            category: item[3],
        }));

        // Fuse.js setup
        const fuse = new Fuse(agents, {
            keys: ["name", "description", "category"],
        });

        // Search
        const results = fuse.search(prompt);

        // Send back a response
        return NextResponse.json({ results }, { status: 200 });
    } catch (error) {
        console.error("Error handling POST request:", error);
        return NextResponse.json(
            {
                error: "An error occurred while handling the POST request",
            },
            { status: 500 }
        );
    }
}
