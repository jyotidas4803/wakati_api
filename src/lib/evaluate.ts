import readability from "readability-scores";
export const evaluate = (text: string) => {
    return readability(text);
}