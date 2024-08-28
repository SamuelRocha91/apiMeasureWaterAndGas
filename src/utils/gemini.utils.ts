// eslint-disable-next-line @typescript-eslint/no-require-imports
const { GoogleGenerativeAI } = require("@google/generative-ai");

const PROMPT = "What is the total amount to pay for the bill?";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
});

async function checkMeasureValue(mime: string, base64: string): Promise<number> {
    console.log(PROMPT)
    console.log(mime)
    console.log(model)
    const result = await model.generateContent([
        {
            inlineData: {
                mimeType: mime,
                data: base64,
            }
        },
        { text: PROMPT },
    ])

    return Number(result.response.text().match(/\d+/)[0])
}
export default checkMeasureValue;
