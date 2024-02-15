import { getSearchResultAgents } from "./data";

export async function handleFormSubmit(formData: FormData) {
    const prompt = formData.get("prompt");
    if (prompt !== null) {
        const promptValue: string = prompt.toString();
        await getSearchResultAgents(promptValue);
    }
}
