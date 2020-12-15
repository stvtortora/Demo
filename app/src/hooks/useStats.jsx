import { getStatsById } from "../api/stats_api";
import { useEffect, useState } from "react";

export const useStats = () => {
  const [stats, setStats] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const callGetStatsById = async () => {
      const { error, response } = await getStatsById(1);
      if (error) {
        setError(true);
      } else if (response) {
        setStats(response);
      }
    };

    callGetStatsById();
  }, []);

  return { stats, error };
};
