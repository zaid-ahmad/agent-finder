import { google } from "googleapis";
import Fuse from "fuse.js";

export async function getDescriptions() {
    let credentials;
    if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
        credentials = JSON.parse(
            process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON
        );
    }

    // Manually create a JWT client for Google Sheets API authentication
    const auth = new google.auth.JWT(
        credentials.client_email,
        undefined,
        credentials.private_key,
        ["https://www.googleapis.com/auth/spreadsheets.readonly"]
    );

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

type Item = {
    name: string;
    url: string;
    description: string;
    category: string;
};

type DataEntry = {
    item: Item;
    refIndex: number;
};

export function transformData(data: DataEntry[]): string[][] {
    return data
        .filter((entry) => entry.refIndex <= 25) // Filter based on refIndex
        .map((entry) => [
            // Map to the desired format
            entry.item.name,
            entry.item.url,
            entry.item.description,
            entry.item.category,
        ]);
}

// getting all the agents
export const getAgents = async (
    query: string
): Promise<string[][] | undefined> => {
    if (query) {
        const prompt = query;
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
            return transformedData as string[][];
        } else {
            return undefined;
        }
    } else {
        let credentials;
        if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
            credentials = JSON.parse(
                process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON
            );
        }

        // Manually create a JWT client for Google Sheets API authentication
        const auth = new google.auth.JWT(
            credentials.client_email,
            undefined,
            credentials.private_key,
            ["https://www.googleapis.com/auth/spreadsheets.readonly"]
        );

        const sheets = google.sheets({ version: "v4", auth });

        // const {id} = query;
        // const range = `Staf.ai Agent List!{id}:{id}`
        // Desciprtion:
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
};
// getting agents based on the search query
export const getSearchResultAgents = async (prompt: string) => {
    console.log(prompt);
};
