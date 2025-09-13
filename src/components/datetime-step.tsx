import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

// Generate next 14 days
type AvailableDate = {
  date: string;
  day: string;
  dayNum: number;
  month: string;
};

const generateAvailableDates = (): AvailableDate[] => {
  const dates: AvailableDate[] = [];
  const today = new Date();

  for (let i = 1; i <= 14; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);

    // Skip Fridays (day 5) for this example
    if (date.getDay() !== 5) {
      dates.push({
        date: date.toISOString().split("T")[0],
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        dayNum: date.getDate(),
        month: date.toLocaleDateString("en-US", { month: "short" }),
      });
    }
  }

  return dates;
};

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

interface DateTimeStepProps {
  selectedDate: string;
  selectedTime: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  doctor: any;
}

export function DateTimeStep({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
  doctor,
}: DateTimeStepProps) {
  const availableDates = generateAvailableDates();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-gray-600">
          Select your preferred appointment date and time with{" "}
          <span className="font-medium text-blue-600">{doctor?.name}</span>
        </p>
      </div>

      {/* Date Selection */}
      <div>
        <h3 className="font-medium mb-4">Choose Date</h3>
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
          {availableDates.map((dateObj) => (
            <Button
              key={dateObj.date}
              variant={selectedDate === dateObj.date ? "default" : "outline"}
              className="h-18 flex-col p-2"
              onClick={() => onDateChange(dateObj.date)}
            >
              <div className="text-xs text-gray-500">{dateObj.day}</div>
              <div className="text-sm font-medium">{dateObj.dayNum}</div>
              <div className="text-xs text-gray-500">{dateObj.month}</div>
            </Button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div>
          <h3 className="font-medium mb-4">Choose Time</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {TIME_SLOTS.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                className="h-12"
                onClick={() => onTimeChange(time)}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Summary */}
      {selectedDate && selectedTime && (
        <Card className="p-4 bg-blue-50 border-blue-200">
          <h4 className="font-medium text-blue-900 mb-2">
            Appointment Summary
          </h4>
          <div className="space-y-1 text-sm text-blue-800">
            <p>
              <span className="font-medium">Doctor:</span> {doctor?.name}
            </p>
            <p>
              <span className="font-medium">Date:</span>{" "}
              {new Date(selectedDate).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>
              <span className="font-medium">Time:</span> {selectedTime}
            </p>
            <p>
              <span className="font-medium">Duration:</span> 30 minutes
            </p>
          </div>
        </Card>
      )}

      {!selectedDate && (
        <div className="text-center py-4">
          <p className="text-gray-500">
            Please select a date to see available times
          </p>
        </div>
      )}
    </div>
  );
}
