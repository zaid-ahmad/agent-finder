// pages/api/search.ts

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // Handle the POST request here
        const { prompt } = await request.json(); // Access the request body
        console.log(prompt);
        // Send back a response
        return NextResponse.json(
            { message: `Received your POST request! ${prompt}` },
            { status: 200 }
        );
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
