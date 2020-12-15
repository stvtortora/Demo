import handleResponse from "../utils/apiUtil/handleResponse";

export const getStatsById = async (statsId) => {
    const res = await fetch(`http://localhost:7070/stats/${statsId}`);
    return await handleResponse(res, "getting", "stats");
}