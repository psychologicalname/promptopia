import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
    const body = await req.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: body.userId,
            prompt: body.prompt,
            tag: body.tag
        });

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), { status: 201 });

    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}