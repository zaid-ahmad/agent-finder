import { google } from "googleapis";

// getting all the agents
export const getAgents = async (): Promise<string[][] | undefined> => {
    const auth = await google.auth.getClient({
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

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
};
// getting agents based on the search query
export const getSearchResultAgents = async (prompt: string) => {
    console.log(prompt);
    console.log("here are the agents lol");
};
