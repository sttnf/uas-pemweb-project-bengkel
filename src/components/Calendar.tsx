import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  AlertCircle,
  CheckCircle2,
  Clock,
  Wrench,
} from "lucide-react";

// Status badges component for reusability
const StatusBadge = ({
  status,
}: {
  status: "scheduled" | "inProgress" | "completed" | "cancelled";
}) => {
  const statusStyles = {
    scheduled: "bg-blue-100 text-blue-700",
    inProgress: "bg-yellow-100 text-yellow-700",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
  };

  const statusIcons = {
    scheduled: <Clock className="w-3 h-3" />,
    inProgress: <Wrench className="w-3 h-3" />,
    completed: <CheckCircle2 className="w-3 h-3" />,
    cancelled: <AlertCircle className="w-3 h-3" />,
  };

  return (
    <span
      className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${statusStyles[status]}`}
    >
      {statusIcons[status]}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

// Service appointment type for better type checking
type ServiceAppointment = {
  id: string;
  customerName: string;
  vehicleModel: string;
  serviceType: string;
  status: "scheduled" | "inProgress" | "completed" | "cancelled";
  time: string;
  date: string;
};

const WorkshopCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const serviceAppointments: ServiceAppointment[] = [
    {
      id: "1",
      customerName: "Budi Santoso",
      vehicleModel: "Toyota Camry 2020",
      serviceType: "Perawatan Rutin",
      status: "scheduled",
      time: "09:00",
      date: "2025-01-15",
    },
    {
      id: "2",
      customerName: "Siti Aminah",
      vehicleModel: "Honda CR-V 2021",
      serviceType: "Ganti Oli",
      status: "inProgress",
      time: "10:30",
      date: "2025-01-15",
    },
    {
      id: "3",
      customerName: "Agus Wijaya",
      vehicleModel: "Ford F-150 2019",
      serviceType: "Servis Rem",
      status: "completed",
      time: "14:00",
      date: "2025-01-16",
    },
  ];

  const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];

    // Previous month days
    for (let i = startingDay - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({
        date: prevDate,
        isCurrentMonth: false,
        appointments: getAppointmentsForDate(prevDate),
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      days.push({
        date: currentDate,
        isCurrentMonth: true,
        isToday: isToday(currentDate),
        appointments: getAppointmentsForDate(currentDate),
      });
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      const nextDate = new Date(year, month + 1, i);
      days.push({
        date: nextDate,
        isCurrentMonth: false,
        appointments: getAppointmentsForDate(nextDate),
      });
    }

    return days;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const getAppointmentsForDate = (date: Date) => {
    const dateStr = date.toISOString().split("T")[0];
    return serviceAppointments.filter((apt) => apt.date === dateStr);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 border bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Jadwal Servis Hari Ini
        </h2>
        <div className="space-y-4">
          {getAppointmentsForDate(new Date()).length > 0 ? (
            getAppointmentsForDate(new Date()).map((apt) => (
              <div
                key={apt.id}
                className="flex items-start justify-between p-4 bg-white rounded-lg shadow"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-900">
                    {apt.time} - {apt.customerName}
                  </p>
                  <p className="text-sm text-gray-600">{apt.vehicleModel}</p>
                  <p className="text-sm text-gray-600">{apt.serviceType}</p>
                </div>
                <StatusBadge status={apt.status} />
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-600">
              Tidak ada jadwal servis hari ini.
            </p>
          )}
        </div>
      </div>

      <div className="hidden md:block border bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Kalender Jadwal</h3>
        <div className="flex flex-col sm:flex-row items justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setCurrentDate(
                    new Date(currentDate.setMonth(currentDate.getMonth() - 1)),
                  )
                }
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-lg font-medium text-gray-900">
                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
              </span>
              <button
                onClick={() =>
                  setCurrentDate(
                    new Date(currentDate.setMonth(currentDate.getMonth() + 1)),
                  )
                }
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentDate(new Date())}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <CalendarDays className="w-4 h-4 mr-2" />
                Today
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden mt-6">
          <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
            {days.map((day) => (
              <div
                key={day}
                className="py-2 text-center text-sm font-medium text-gray-700"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 divide-x divide-y divide-gray-200">
            {getDaysInMonth(currentDate).map((day, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedDate(day.date)}
                className={`min-h-[100px] p-2 cursor-pointer transition-colors
                    ${day.isCurrentMonth ? "bg-white" : "bg-gray-50"}
                    ${
                      selectedDate &&
                      day.date.toDateString() === selectedDate.toDateString()
                        ? "ring-2 ring-blue-500"
                        : ""
                    }
                    hover:bg-gray-50`}
              >
                <div className="flex flex-col h-full">
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-sm
                        ${
                          day.isToday
                            ? "bg-blue-600 text-white"
                            : day.isCurrentMonth
                              ? "text-gray-900"
                              : "text-gray-400"
                        }`}
                  >
                    {day.date.getDate()}
                  </span>
                  <div className="mt-1 space-y-1">
                    {day.appointments.map((apt) => (
                      <div key={apt.id} className="text-xs">
                        <div className="font-medium text-gray-900">
                          {apt.time}
                        </div>
                        <div className="truncate text-gray-600">
                          {apt.customerName}
                        </div>
                        <StatusBadge status={apt.status} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCalendar;
