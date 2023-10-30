"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface DarkModeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const useDarkMode = (): DarkModeContextType => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};

interface DarkModeProviderProps {
    children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('darkMode');

            if (savedMode !== null) {
                return JSON.parse(savedMode);
            } else {
                const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                return userPrefersDark;
            }
        }
        return true;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
            document.body.style.backgroundColor = "#0F0F0F";
            document.documentElement.style.backgroundColor = "#0F0F0F";
        } else {
            document.body.classList.remove('dark');
            document.body.style.backgroundColor = "#ffffff";
            document.documentElement.style.backgroundColor = "#ffffff";
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
