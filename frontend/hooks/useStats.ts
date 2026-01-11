import { useState, useEffect } from 'react';
import { statsService, DashboardStats } from '@/services/stats.service';

export function useStats() {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchStats = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await statsService.getStats();
            setStats(data);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch statistics');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    return { stats, loading, error, refetch: fetchStats };
}
