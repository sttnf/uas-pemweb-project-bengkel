import React from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Car,
  Clock,
  LucideIcon,
} from "lucide-react";
import DashboardLayout from "../../components/DashboardLayout";
import { Chart } from "react-charts";
import { AxisOptions } from "react-charts/types/types";

// Types
interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change: number;
  iconBgColor: string;
  iconColor: string;
}

interface MonthlyData {
  date: Date;
  value: number;
}

interface ServiceData {
  type: string;
  value: number;
}

interface ChartSeries<T> {
  label: string;
  data: T[];
}

type MonthlyChartData = ChartSeries<MonthlyData>[];
type ServiceChartData = ChartSeries<ServiceData>[];

// Constants
const STATS_DATA: StatCardProps[] = [
  {
    title: "Pendapatan Bulan Ini",
    value: "Rp 85.5M",
    icon: DollarSign,
    change: 12.5,
    iconBgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    title: "Total Servis",
    value: "245",
    icon: Car,
    change: 8.2,
    iconBgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "Pelanggan Baru",
    value: "48",
    icon: Users,
    change: 15.3,
    iconBgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    title: "Rata-rata Waktu Servis",
    value: "2.5 Jam",
    icon: Clock,
    change: -5.1,
    iconBgColor: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

// Components
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  iconBgColor,
  iconColor,
}) => {
  const isPositive = change >= 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;
  const trendColor = isPositive ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div
          className={`h-12 w-12 ${iconBgColor} rounded-lg flex items-center justify-center`}
        >
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>
      <div className={`flex items-center mt-4 ${trendColor}`}>
        <TrendIcon className="h-4 w-4 mr-1" />
        <span className="text-sm">{`${isPositive ? "+" : ""}${change}%`}</span>
      </div>
    </div>
  );
};

const Analytics: React.FC = () => {
  // Monthly Revenue Chart Configuration
  const monthlyRevenueData = React.useMemo<MonthlyChartData>(
    () => [
      {
        label: "Pendapatan",
        data: Array.from({ length: 13 }, (_, i) => ({
          date: new Date(2024, i, 1),
          value: Math.floor(Math.random() * 666_666_666),
        })),
      },
    ],
    [],
  );

  const monthlyRevenuePrimaryAxis = React.useMemo(
    (): AxisOptions<MonthlyData> => ({
      getValue: (datum) => datum.date,
      scaleType: "time",
    }),
    [],
  );

  const monthlyRevenueSecondaryAxes = React.useMemo(
    (): AxisOptions<MonthlyData>[] => [
      {
        getValue: (datum) => datum.value,
        elementType: "line",
      },
    ],
    [],
  );

  // Service Type Chart Configuration
  const serviceTypeData = React.useMemo<ServiceChartData>(
    () => [
      {
        label: "Jenis Servis",
        data: [
          { type: "Ganti Oli", value: 120 },
          { type: "Tune Up Mesin", value: 85 },
          { type: "Servis AC", value: 65 },
          { type: "Servis Rem", value: 45 },
        ],
      },
    ],
    [],
  );

  const serviceTypePrimaryAxis = React.useMemo(
    (): AxisOptions<ServiceData> => ({
      getValue: (datum) => datum.type,
    }),
    [],
  );

  const serviceTypeSecondaryAxes = React.useMemo(
    (): AxisOptions<ServiceData>[] => [
      {
        getValue: (datum) => datum.value,
        elementType: "bar",
      },
    ],
    [],
  );

  return (
    <DashboardLayout title="Analitik">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Analitik</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Pendapatan Bulanan</h3>
            <div className="min-h-80">
              <Chart<MonthlyData>
                options={{
                  data: monthlyRevenueData,
                  primaryAxis: monthlyRevenuePrimaryAxis,
                  secondaryAxes: monthlyRevenueSecondaryAxes,
                }}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Jenis Servis</h3>
            <div className="min-h-80">
              <Chart<ServiceData>
                options={{
                  data: serviceTypeData,
                  primaryAxis: serviceTypePrimaryAxis,
                  secondaryAxes: serviceTypeSecondaryAxes,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
