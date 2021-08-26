
const API_ENDPOINT = "https://catfact.ninja/fact";

export default async  function getCatFact() {
    const response = await fetch(API_ENDPOINT, {
        "Content-Type": "application/json",
        "Accept": "application/json"
    });
    const data = await response.json();
    return data;
}