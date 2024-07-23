"use client";

import React, { useState, useEffect } from 'react';
import { AiOutlineFileText, AiOutlineTeam, AiOutlineUser } from 'react-icons/ai'; // Import relevant icons

// Define the interface for the StatItem
interface StatItemProps {
    icon: React.ReactNode; // Change to ReactNode for React Icons
    value: string;
    description: string;
}

// Mapping of statistics to React Icons
const iconMap: { [key: string]: React.ReactNode } = {
    invoices: <AiOutlineFileText />,
    borrowers: <AiOutlineTeam />,
    investors: <AiOutlineUser />,
};

const StatItem: React.FC<StatItemProps> = ({ icon, value, description }) => {
    return (
        <div className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-md">
            <div className="bg-blue-900 rounded-full p-4 mb-4 text-3xl">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

const StatsSection: React.FC = () => {
    const [stats, setStats] = useState<StatItemProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://portal.cashmetanzania.com/api/website-statistics");
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                setStats([
                    { icon: iconMap.invoices, value: result.allInvoices, description: 'Invoices' },
                    { icon: iconMap.borrowers, value: result.allBorrowers, description: 'Active Borrowers' },
                    { icon: iconMap.investors, value: result.allInvestors, description: 'Investors' },
                ]);
                setLoading(false);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Unknown error');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className="w-full bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <StatItem key={index} icon={stat.icon} value={stat.value} description={stat.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
