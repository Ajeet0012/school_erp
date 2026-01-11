import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ParentContextType {
    selectedChildId: string | 'ALL';
    setSelectedChildId: (id: string | 'ALL') => void;
    childrenList: Array<{ id: string; name: string; avatar?: string; grade?: string }>;
}

const ParentContext = createContext<ParentContextType | undefined>(undefined);

export function ParentProvider({ children }: { children: ReactNode }) {
    const [selectedChildId, setSelectedChildId] = useState<string | 'ALL'>('ALL');

    // Mock children list - effectively this would come from an API
    const childrenList = [
        { id: 'STU-001', name: 'Alex Doe', grade: '10-A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
        { id: 'STU-002', name: 'Sarah Doe', grade: '8-B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' }
    ];

    return (
        <ParentContext.Provider value={{ selectedChildId, setSelectedChildId, childrenList }}>
            {children}
        </ParentContext.Provider>
    );
}

export function useParent() {
    const context = useContext(ParentContext);
    if (context === undefined) {
        throw new Error('useParent must be used within a ParentProvider');
    }
    return context;
}
