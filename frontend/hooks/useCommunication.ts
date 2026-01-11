import { useState, useCallback } from 'react';
import { communicationService } from '@/services/communication.service';
import { toast } from 'react-hot-toast';

export const useCommunication = () => {
    const [loading, setLoading] = useState(false);
    const [emailHistory, setEmailHistory] = useState<any[]>([]);
    const [smsHistory, setSmsHistory] = useState<any[]>([]);
    const [notices, setNotices] = useState<any[]>([]);

    const fetchEmailHistory = useCallback(async (params?: any) => {
        setLoading(true);
        try {
            const data = await communicationService.getEmailHistory(params);
            setEmailHistory(data.data || data);
        } catch (error: any) {
            toast.error(error.message || 'Failed to fetch email logs');
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchSmsHistory = useCallback(async (params?: any) => {
        setLoading(true);
        try {
            const data = await communicationService.getSMSHistory(params);
            setSmsHistory(data.data || data);
        } catch (error: any) {
            toast.error(error.message || 'Failed to fetch SMS logs');
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchNotices = useCallback(async (params?: any) => {
        setLoading(true);
        try {
            const data = await communicationService.getNotices(params);
            setNotices(data.data || data);
        } catch (error: any) {
            toast.error(error.message || 'Failed to fetch notices');
        } finally {
            setLoading(false);
        }
    }, []);

    const sendEmail = async (data: any) => {
        setLoading(true);
        try {
            await communicationService.sendEmail(data);
            toast.success('Broadcast protocol initiated: Email dispatched.');
            return true;
        } catch (error: any) {
            toast.error(error.message || 'Transmission failure');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const sendSMS = async (data: any) => {
        setLoading(true);
        try {
            await communicationService.sendSMS(data);
            toast.success('Broadcast protocol initiated: SMS dispatched.');
            return true;
        } catch (error: any) {
            toast.error(error.message || 'Transmission failure');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const createNotice = async (data: any) => {
        setLoading(true);
        try {
            await communicationService.createNotice(data);
            toast.success('Notice published to the institutional node.');
            return true;
        } catch (error: any) {
            toast.error(error.message || 'Publication failure');
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        emailHistory,
        smsHistory,
        notices,
        fetchEmailHistory,
        fetchSmsHistory,
        fetchNotices,
        sendEmail,
        sendSMS,
        createNotice
    };
};
