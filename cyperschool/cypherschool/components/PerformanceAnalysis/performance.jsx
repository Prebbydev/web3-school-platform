import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PerformanceAnalysis = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (!chartRef.current || !data.labels || !data.values) return;

        
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Performance',
                    data: data.values,
                    borderColor: '#007bff',
                    backgroundColor: 'transparent',
                    tension: 0.4
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, [data]);

    return <canvas ref={chartRef}></canvas>;
};

export default PerformanceAnalysis;
