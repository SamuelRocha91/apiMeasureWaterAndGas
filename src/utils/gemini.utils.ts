// eslint-disable-next-line @typescript-eslint/no-require-imports
const { GoogleGenerativeAI } = require("@google/generative-ai");

const PROMPT = `Please analyze the attached image of the meter reading for
  the current month and provide the total amount of consumption recorded
  by the meter. The meter is used for measuring [water / gas / other],
  and you should return the total reading as shown in the image.`;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-latest"
});

async function checkMeasureValue(mime: string, base64: string): Promise<number> {
  const result = await model.generateContent([
    {
      inlineData: {
        mimeType: mime,
        data: base64
      }
    },
    { text: PROMPT }
  ])

  return Number(result.response.text().match(/\d+/)[0])
}

export default checkMeasureValue;
