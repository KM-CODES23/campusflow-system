
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { MapPin, Calendar, Bell, MessageSquare, Clock } from "lucide-react";
import MapComponent from "@/components/MapComponent";
import ScheduleViewer from "@/components/ScheduleViewer";
import FacultyDirectory from "@/components/FacultyDirectory";
import NotificationCenter from "@/components/NotificationCenter";
import AppointmentScheduler from "@/components/AppointmentScheduler";
import FeedbackSystem from "@/components/FeedbackSystem";

const Index = () => {
  const [activeTab, setActiveTab] = useState("map");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-primary-foreground rounded-lg p-2">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">CampusFlow</h1>
                <p className="text-sm text-muted-foreground">Your Campus Compass Guide</p>
              </div>
            </div>
            <NotificationCenter />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <NavigationMenu className="container mx-auto px-4 py-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Quick Access</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 w-[400px]">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("map")}>
                    <MapPin className="mr-2 h-4 w-4" />
                    Maps
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("schedule")}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("faculty")}>
                    <Clock className="mr-2 h-4 w-4" />
                    Faculty
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("appointments")}>
                    <Bell className="mr-2 h-4 w-4" />
                    Appointments
                  </Button>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="map" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Maps
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Schedule
            </TabsTrigger>
            <TabsTrigger value="faculty" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Faculty
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Alerts
            </TabsTrigger>
            <TabsTrigger value="appointments" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Appointments
            </TabsTrigger>
            <TabsTrigger value="feedback" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Feedback
            </TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Interactive Campus Map
                </CardTitle>
                <CardDescription>
                  Navigate your campus with real-time GPS and detailed building layouts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MapComponent />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Academic Schedule
                </CardTitle>
                <CardDescription>
                  View your classes and quickly navigate to locations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScheduleViewer />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faculty" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Faculty & Office Directory
                </CardTitle>
                <CardDescription>
                  Check availability and locate faculty offices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FacultyDirectory />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications & Alerts
                </CardTitle>
                <CardDescription>
                  Stay updated with campus events and important announcements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">Library Hours Extended</h4>
                      <p className="text-sm text-muted-foreground">Open until midnight during finals week</p>
                    </div>
                    <Badge variant="secondary">New</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">Campus Event: Tech Fair</h4>
                      <p className="text-sm text-muted-foreground">Tomorrow at Student Center, 2:00 PM</p>
                    </div>
                    <Badge variant="outline">Event</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Appointment Scheduling
                </CardTitle>
                <CardDescription>
                  Schedule meetings with faculty, medical staff, and administration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AppointmentScheduler />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Feedback & Reporting
                </CardTitle>
                <CardDescription>
                  Help us improve campus services and report issues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FeedbackSystem />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
