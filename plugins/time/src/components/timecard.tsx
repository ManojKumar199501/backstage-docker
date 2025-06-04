import { useEffect, useState } from 'react';
import { InfoCard } from '@backstage/core-components';
import { CircularProgress, Typography } from '@material-ui/core';

const TimeCard = () => {
  const [timeData, setTimeData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const timezone = 'Asia/Kolkata'; // You can make this dynamic later

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch(`https://timeapi.io/api/Time/current/zone?timeZone=${timezone}`);
        if (!response.ok) {
          throw new Error('Failed to fetch time');
        }
        const data = await response.json();
        setTimeData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTime();
  }, [timezone]);

  return (
    <InfoCard title={`Current Time (${timezone})`}>
      {loading && <CircularProgress />}
      {error && <Typography color="error">Error: {error}</Typography>}
      {timeData && (
        <Typography variant="h6">
          {timeData.date} {timeData.time} ({timeData.dayOfWeek})
        </Typography>
      )}
    </InfoCard>
  );
};

export default TimeCard;
