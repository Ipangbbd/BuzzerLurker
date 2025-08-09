import React, { useEffect, useState, useMemo } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const SocialMediaCharts: React.FC = () => {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'));
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const legendTextColor = isDark ? '#ffffff' : '#0a0a0a';
  const tooltipBg = isDark ? '#0f172a' : '#ffffff';
  const tooltipText = isDark ? '#ffffff' : '#0a0a0a';
  const tooltipBorder = isDark ? '#334155' : '#dc2626';
  const axisTickColor = isDark ? '#e5e7eb' : '#0a0a0a';
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const axisBorderColor = isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)';

  // Ensure Chart.js picks up theme changes even if options don't trigger an update
  useEffect(() => {
    // Global defaults for text/legend/tooltip colors
    // These help when react-chartjs-2 doesn't fully re-apply options on theme toggle
    (ChartJS.defaults as any).color = legendTextColor;
    const pluginDefaults = (ChartJS.defaults as any).plugins || {};
    if (pluginDefaults.legend && pluginDefaults.legend.labels) {
      pluginDefaults.legend.labels.color = legendTextColor;
    }
    if (pluginDefaults.tooltip) {
      pluginDefaults.tooltip.titleColor = tooltipText;
      pluginDefaults.tooltip.bodyColor = tooltipText;
      pluginDefaults.tooltip.backgroundColor = tooltipBg;
      pluginDefaults.tooltip.borderColor = tooltipBorder;
    }
  }, [legendTextColor, tooltipText, tooltipBg, tooltipBorder]);
  // Mock data for social media usage among Gen Z during political/election periods
  const pieChartData = {
    labels: ['TikTok', 'Instagram', 'Twitter (X)', 'Facebook', 'YouTube', 'Other'],
    datasets: [
      {
        label: 'Usage Percentage',
        data: [30, 25, 15, 10, 10, 10],
        backgroundColor: [
          '#dc2626', // Red
          '#9ca3af', // Grey
          '#171717', // Dark grey
          '#262626', // Darker grey
          '#e5e5e5', // Light grey
          '#ffffff', // White
        ],
        borderColor: [
          '#0a0a0a',
          '#0a0a0a',
          '#ffffff',
          '#ffffff',
          '#0a0a0a',
          '#0a0a0a',
        ],
        borderWidth: 1,
      },
    ],
  };

  const barChartData = {
    labels: ['Pre-Election', 'During Election', 'Post-Election'],
    datasets: [
      {
        label: 'Engagement (Gen Z)',
        data: [70, 95, 60],
        backgroundColor: '#dc2626',
        borderColor: '#dc2626',
        borderWidth: 1,
      },
      {
        label: 'Engagement (All Ages)',
        data: [50, 80, 45],
        backgroundColor: '#9ca3af',
        borderColor: '#9ca3af',
        borderWidth: 1,
      },
    ],
  };

  const commonOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: legendTextColor,
        },
      },
      tooltip: {
        titleColor: tooltipText,
        bodyColor: tooltipText,
        backgroundColor: tooltipBg,
        borderColor: tooltipBorder,
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: axisTickColor },
        grid: { color: gridColor },
        border: { color: axisBorderColor },
      },
      y: {
        ticks: { color: axisTickColor },
        grid: { color: gridColor },
        border: { color: axisBorderColor },
      },
    },
  }), [legendTextColor, tooltipText, tooltipBg, tooltipBorder, axisTickColor, gridColor, axisBorderColor]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
      <div className="bg-primary-light rounded-card shadow-subtle border border-primary-dark p-6 light:bg-white light:border-neutral-300">
        <h3 className="text-xl font-semibold text-text-primary mb-4 light:text-neutral-900">Social Media Platform Usage (Gen Z)</h3>
        <div className="h-80"><Pie key={isDark ? 'pie-dark' : 'pie-light'} data={pieChartData} options={commonOptions} /></div>
      </div>
      <div className="bg-primary-light rounded-card shadow-subtle border border-primary-dark p-6 light:bg-white light:border-neutral-300">
        <h3 className="text-xl font-semibold text-text-primary mb-4 light:text-neutral-900">Social Media Engagement During Election Periods</h3>
        <div className="h-80"><Bar key={isDark ? 'bar-dark' : 'bar-light'} data={barChartData} options={commonOptions} /></div>
      </div>
    </div>
  );
};

export default SocialMediaCharts;