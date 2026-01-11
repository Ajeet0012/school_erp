import { useState, useEffect, useCallback } from 'react';
import { studentsService } from '@/services/students.service';
import { Student } from '@/utils/types';

export function useStudent(id: string | string[] | undefined) {
    const [student, setStudent] = useState<Student | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchStudent = useCallback(async () => {
        if (!id || typeof id !== 'string') return;
        setLoading(true);
        setError(null);
        try {
            const data = await studentsService.getById(id);
            setStudent(data);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch student details');
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchStudent();
    }, [fetchStudent]);

    return { student, loading, error, refetch: fetchStudent };
}
