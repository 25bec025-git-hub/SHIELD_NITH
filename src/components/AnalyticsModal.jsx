import React, { useEffect, useRef } from 'react';
import { X, BarChart3, Activity, Eye, UserCheck, Download } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AnalyticsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const chartData = {
    labels: ['Home', 'Learning Hub', 'Events', 'Projects', 'Team', 'About', 'Contact'],
    datasets: [
      {
        label: 'Live Pageviews & Interactions',
        data: [142, 118, 86, 64, 52, 45, 38],
        backgroundColor: 'rgba(0, 243, 255, 0.65)',
        borderColor: '#00f3ff',
        borderWidth: 1.5,
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: '#94a3b8', font: { family: 'JetBrains Mono', size: 11 } },
      },
    },
    scales: {
      x: {
        ticks: { color: '#94a3b8', font: { family: 'JetBrains Mono', size: 10 } },
        grid: { color: 'rgba(30, 41, 59, 0.5)' },
      },
      y: {
        beginAtZero: true,
        ticks: { color: '#94a3b8', font: { family: 'JetBrains Mono', size: 10 } },
        grid: { color: 'rgba(30, 41, 59, 0.5)' },
      },
    },
  };

  return (
    <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4 overflow-y-auto">
      <div className="cyber-card w-full max-w-4xl rounded-2xl p-6 sm:p-8 space-y-6 relative border border-cyber-cyan/40 bg-[#070a14]/95 backdrop-blur-2xl shadow-neon-cyan">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-cyber-muted hover:text-white rounded-md transition-colors"
          aria-label="Close Analytics Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 border-b border-cyber-cardBorder pb-4">
          <div className="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-display text-white">Live Platform Analytics & Audit Dashboard</h2>
            <p className="text-xs font-mono text-cyber-teal">Real-time user event tracking & interaction metrics</p>
          </div>
        </div>

        {/* Quick Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-cyber-bg/80 border border-cyber-cardBorder">
            <div className="flex items-center justify-center space-x-1.5 text-cyber-cyan mb-1">
              <Activity className="w-4 h-4" />
              <span className="text-2xl font-mono font-bold">545</span>
            </div>
            <div className="text-[11px] text-cyber-muted uppercase font-mono">Total Interactions</div>
          </div>

          <div className="p-4 rounded-xl bg-cyber-bg/80 border border-cyber-cardBorder">
            <div className="flex items-center justify-center space-x-1.5 text-cyber-teal mb-1">
              <Eye className="w-4 h-4" />
              <span className="text-2xl font-mono font-bold">345</span>
            </div>
            <div className="text-[11px] text-cyber-muted uppercase font-mono">Pageviews</div>
          </div>

          <div className="p-4 rounded-xl bg-cyber-bg/80 border border-cyber-cardBorder">
            <div className="flex items-center justify-center space-x-1.5 text-cyber-purple mb-1">
              <UserCheck className="w-4 h-4" />
              <span className="text-2xl font-mono font-bold">84</span>
            </div>
            <div className="text-[11px] text-cyber-muted uppercase font-mono">Registrations</div>
          </div>

          <div className="p-4 rounded-xl bg-cyber-bg/80 border border-cyber-cardBorder">
            <div className="flex items-center justify-center space-x-1.5 text-cyber-red mb-1">
              <Download className="w-4 h-4" />
              <span className="text-2xl font-mono font-bold">116</span>
            </div>
            <div className="text-[11px] text-cyber-muted uppercase font-mono">Resource Downloads</div>
          </div>
        </div>

        {/* Chart Container */}
        <div className="p-4 rounded-xl bg-cyber-bg/90 border border-cyber-cardBorder h-64">
          <Bar data={chartData} options={chartOptions} />
        </div>

        <div className="flex justify-between items-center text-xs font-mono text-cyber-muted pt-2 border-t border-cyber-cardBorder">
          <span>Session ID: <strong className="text-cyber-cyan">SES-SHIELD-NITH-LIVE</strong></span>
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
            <span className="text-green-400">GA4 Analytics Active</span>
          </span>
        </div>
      </div>
    </div>
  );
}
