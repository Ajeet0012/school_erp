import { useState, useCallback } from 'react';
import { inventoryService } from '@/services/inventory.service';
import { toast } from 'react-hot-toast';

export const useInventory = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<any[]>([]);
    const [history, setHistory] = useState<any[]>([]);

    const fetchItems = useCallback(async () => {
        setLoading(true);
        try {
            const data = await inventoryService.getItems();
            setItems(data.data || data);
        } catch (error: any) {
            toast.error(error.message || 'Failed to fetch inventory assets');
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchHistory = useCallback(async () => {
        setLoading(true);
        try {
            const data = await inventoryService.getIssuanceHistory();
            setHistory(data.data || data);
        } catch (error: any) {
            toast.error(error.message || 'Failed to fetch issuance logs');
        } finally {
            setLoading(false);
        }
    }, []);

    const createItem = async (data: any) => {
        setLoading(true);
        try {
            await inventoryService.createItem(data);
            toast.success('Asset Management: New resource node registered.');
            fetchItems();
            return true;
        } catch (error: any) {
            toast.error(error.message || 'Failed to register item');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const issueItem = async (data: any) => {
        setLoading(true);
        try {
            await inventoryService.issueItem(data);
            toast.success('Resource Dispatch: Item successfully issued to node.');
            fetchHistory();
            return true;
        } catch (error: any) {
            toast.error(error.message || 'Failed to issue item');
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        items,
        history,
        fetchItems,
        fetchHistory,
        createItem,
        issueItem
    };
};
