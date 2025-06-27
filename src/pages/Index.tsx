
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MapPin, Calendar, Bell, MessageSquare, Clock, Menu, LayoutDashboard } from "lucide-react";
import MapComponent from "@/components/MapComponent";
import ScheduleViewer from "@/components/ScheduleViewer";
import FacultyDirectory from "@/components/FacultyDirectory";
import NotificationCenter from "@/components/NotificationCenter";
import AppointmentScheduler from "@/components/AppointmentScheduler";
import FeedbackSystem from "@/components/FeedbackSystem";
import Dashboard from "@/components/Dashboard";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "map", label: "Maps", icon: MapPin },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "faculty", label: "Faculty", icon: Clock },
    { id: "notifications", label: "Alerts", icon: Bell },
    { id: "appointments", label: "Appointments", icon: Clock },
    { id: "feedback", label: "Feedback", icon: MessageSquare },
  ];

  const MobileNavigation = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <div className="mt-6 space-y-4">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <div className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  className="w-full justify-start text-left"
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile-Optimized Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/75 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MobileNavigation />
              <div className="bg-primary text-primary-foreground rounded-lg p-2">
                <MapPin className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div>
                <h1 className="text-lg md:text-2xl font-bold">CampusFlow</h1>
                <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">Your Campus Compass Guide</p>
              </div>
            </div>
            <NotificationCenter />
          </div>
        </div>
      </header>

      {/* Main Content with Mobile-First Design */}
      <main className="container mx-auto px-4 py-4 md:py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Mobile: Horizontal Scrollable Tabs */}
          <div className="md:hidden mb-6">
            <TabsList className="flex w-full overflow-x-auto scrollbar-hide">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <TabsTrigger
                    key={item.id}
                    value={item.id}
                    className="flex-shrink-0 px-4 py-2 flex flex-col items-center gap-1 min-w-[80px]"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-xs">{item.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* Desktop: Standard Grid Layout */}
          <div className="hidden md:block mb-6">
            <TabsList className="grid w-full grid-cols-7">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <TabsTrigger key={item.id} value={item.id} className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          <TabsContent value="dashboard" className="mt-0">
            <Dashboard />
          </TabsContent>

          <TabsContent value="map" className="mt-0">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <MapPin className="h-5 w-5" />
                  Interactive Campus Map
                </CardTitle>
                <CardDescription className="text-sm">
                  Navigate your campus with real-time GPS and detailed building layouts
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <MapComponent />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="mt-0">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Calendar className="h-5 w-5" />
                  Academic Schedule
                </CardTitle>
                <CardDescription className="text-sm">
                  View your classes and quickly navigate to locations
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <ScheduleViewer />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faculty" className="mt-0">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Clock className="h-5 w-5" />
                  Faculty & Office Directory
                </CardTitle>
                <CardDescription className="text-sm">
                  Check availability and locate faculty offices
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <FacultyDirectory />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-0">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Bell className="h-5 w-5" />
                  Notifications & Alerts
                </CardTitle>
                <CardDescription className="text-sm">
                  Stay updated with campus events and important announcements
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm md:text-base">Library Hours Extended</h4>
                      <p className="text-sm text-muted-foreground mt-1">Open until midnight during finals week</p>
                    </div>
                    <Badge variant="secondary" className="ml-2 flex-shrink-0">New</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm md:text-base">Campus Event: Tech Fair</h4>
                      <p className="text-sm text-muted-foreground mt-1">Tomorrow at Student Center, 2:00 PM</p>
                    </div>
                    <Badge variant="outline" className="ml-2 flex-shrink-0">Event</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments" className="mt-0">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Clock className="h-5 w-5" />
                  Appointment Scheduling
                </CardTitle>
                <CardDescription className="text-sm">
                  Schedule meetings with faculty, medical staff, and administration
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <AppointmentScheduler />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="mt-0">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <MessageSquare className="h-5 w-5" />
                  Feedback & Reporting
                </CardTitle>
                <CardDescription className="text-sm">
                  Help us improve campus services and report issues
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <FeedbackSystem />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* AI Chatbot Component */}
      <ChatBot />
    </div>
  );
};

export default Index;
