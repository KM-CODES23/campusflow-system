
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const AppointmentScheduler = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const services = [
    { id: "faculty", name: "Faculty Meeting", description: "Meet with professors and lecturers" },
    { id: "medical", name: "Medical Consultation", description: "Campus health center appointments" },
    { id: "admin", name: "Administrative Meeting", description: "Academic affairs and registration" },
    { id: "counseling", name: "Student Counseling", description: "Academic and personal counseling" },
    { id: "career", name: "Career Services", description: "Career guidance and job placement" }
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
  ];

  const upcomingAppointments = [
    {
      id: 1,
      service: "Faculty Meeting",
      date: "2024-06-28",
      time: "10:00 AM",
      with: "Dr. Sarah Smith",
      location: "SCI Building, Room 301",
      status: "confirmed"
    },
    {
      id: 2,
      service: "Medical Consultation",
      date: "2024-06-29",
      time: "02:30 PM",
      with: "Dr. Michael Chen",
      location: "Medical Center",
      status: "pending"
    }
  ];

  const handleScheduleAppointment = () => {
    console.log("Scheduling appointment:", { selectedService, selectedDate, selectedTime });
    // Here you would normally send the data to your backend
  };

  return (
    <div className="space-y-6">
      {/* Schedule New Appointment */}
      <Card>
        <CardHeader>
          <CardTitle>Schedule New Appointment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="service">Service Type</Label>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      <div>
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-muted-foreground">{service.description}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Available Time Slots</Label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="purpose">Purpose of Meeting</Label>
            <Textarea
              placeholder="Briefly describe the purpose of your appointment..."
              className="min-h-20"
            />
          </div>

          <Button 
            onClick={handleScheduleAppointment}
            disabled={!selectedService || !selectedDate || !selectedTime}
            className="w-full"
          >
            Schedule Appointment
          </Button>
        </CardContent>
      </Card>

      {/* Upcoming Appointments */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <h4 className="font-medium">{appointment.service}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {appointment.time}
                    </div>
                  </div>
                  <p className="text-sm">
                    With: {appointment.with} • {appointment.location}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"}>
                    {appointment.status}
                  </Badge>
                  <Button size="sm" variant="outline">
                    Reschedule
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentScheduler;
