
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

const ScheduleViewer = () => {
  const [selectedDay, setSelectedDay] = useState("monday");

  const schedule = {
    monday: [
      {
        id: 1,
        course: "Computer Science 101",
        time: "09:00 - 10:30",
        location: "SCI Building, Room 205",
        instructor: "Dr. Smith",
        type: "Lecture"
      },
      {
        id: 2,
        course: "Mathematics 201",
        time: "11:00 - 12:30",
        location: "ENG Building, Room 101",
        instructor: "Prof. Johnson",
        type: "Tutorial"
      },
      {
        id: 3,
        course: "Physics Lab",
        time: "14:00 - 16:00",
        location: "SCI Building, Lab 3",
        instructor: "Dr. Brown",
        type: "Lab"
      }
    ],
    tuesday: [
      {
        id: 4,
        course: "Database Systems",
        time: "10:00 - 11:30",
        location: "ENG Building, Room 301",
        instructor: "Dr. Davis",
        type: "Lecture"
      },
      {
        id: 5,
        course: "Software Engineering",
        time: "13:00 - 14:30",
        location: "SCI Building, Room 150",
        instructor: "Prof. Wilson",
        type: "Seminar"
      }
    ]
  };

  const days = [
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thursday", label: "Thursday" },
    { key: "friday", label: "Friday" }
  ];

  const currentSchedule = schedule[selectedDay as keyof typeof schedule] || [];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Lecture": return "default";
      case "Tutorial": return "secondary";
      case "Lab": return "destructive";
      case "Seminar": return "outline";
      default: return "default";
    }
  };

  return (
    <div className="space-y-6">
      {/* Day Selector */}
      <div className="flex flex-wrap gap-2">
        {days.map((day) => (
          <Button
            key={day.key}
            variant={selectedDay === day.key ? "default" : "outline"}
            onClick={() => setSelectedDay(day.key)}
            className="flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            {day.label}
          </Button>
        ))}
      </div>

      {/* Schedule Cards */}
      <div className="space-y-4">
        {currentSchedule.length > 0 ? (
          currentSchedule.map((class_item) => (
            <Card key={class_item.id} className="transition-shadow hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{class_item.course}</CardTitle>
                  <Badge variant={getTypeColor(class_item.type)}>
                    {class_item.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{class_item.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{class_item.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {class_item.instructor}
                    </span>
                    <Button size="sm" variant="outline">
                      <MapPin className="mr-2 h-3 w-3" />
                      Navigate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="text-center py-8">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No Classes Scheduled</h3>
              <p className="text-muted-foreground">
                You have no classes scheduled for {days.find(d => d.key === selectedDay)?.label}.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button variant="outline">Export Schedule</Button>
        <Button variant="outline">Add to Calendar</Button>
        <Button variant="outline">Find Study Rooms</Button>
        <Button variant="outline">Set Reminders</Button>
      </div>
    </div>
  );
};

export default ScheduleViewer;
