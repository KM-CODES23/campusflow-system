
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation } from "lucide-react";

const MapComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);

  const buildings = [
    { id: "lib", name: "Main Library", code: "LIB", rooms: 150, available: true },
    { id: "sci", name: "Science Building", code: "SCI", rooms: 85, available: true },
    { id: "eng", name: "Engineering Hall", code: "ENG", rooms: 120, available: true },
    { id: "med", name: "Medical Center", code: "MED", rooms: 200, available: false },
    { id: "admin", name: "Administration", code: "ADM", rooms: 45, available: true },
    { id: "student", name: "Student Center", code: "SC", rooms: 75, available: true },
  ];

  const filteredBuildings = buildings.filter(building =>
    building.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    building.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Mobile-Optimized Search */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <div className="flex-1">
          <Input
            placeholder="Search buildings, rooms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-base" // Prevents zoom on iOS
          />
        </div>
        <Button className="w-full sm:w-auto">
          <Navigation className="mr-2 h-4 w-4" />
          Get Directions
        </Button>
      </div>

      {/* Mobile-First Layout */}
      <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
        {/* Interactive Map - Full Width on Mobile */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-green-100 to-blue-100 h-64 md:h-80 lg:h-96 rounded-lg flex items-center justify-center touch-manipulation">
                <div className="text-center space-y-3 md:space-y-4 px-4">
                  <MapPin className="h-12 w-12 md:h-16 md:w-16 mx-auto text-primary" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">Interactive Campus Map</h3>
                    <p className="text-sm md:text-base text-muted-foreground">GPS navigation and building layouts</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="secondary" className="text-xs">Indoor Navigation</Badge>
                    <Badge variant="secondary" className="text-xs">Real-time GPS</Badge>
                    <Badge variant="secondary" className="text-xs">Room Finder</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Building Directory - Optimized for Mobile */}
        <div className="space-y-4">
          <h3 className="font-semibold text-base md:text-lg">Campus Buildings</h3>
          <div className="space-y-3 max-h-80 md:max-h-96 overflow-y-auto">
            {filteredBuildings.map((building) => (
              <Card
                key={building.id}
                className={`cursor-pointer transition-all duration-200 active:scale-95 ${
                  selectedBuilding === building.id ? "ring-2 ring-primary shadow-md" : "hover:shadow-md"
                }`}
                onClick={() => setSelectedBuilding(building.id)}
              >
                <CardContent className="p-3 md:p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm md:text-base truncate">{building.name}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          Code: {building.code} • {building.rooms} rooms
                        </p>
                      </div>
                      <Badge
                        variant={building.available ? "default" : "destructive"}
                        className="ml-2 text-xs flex-shrink-0"
                      >
                        {building.available ? "Open" : "Closed"}
                      </Badge>
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      Navigate to Building
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Locations - Mobile Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {["Cafeteria", "Parking", "ATM", "Restrooms"].map((location) => (
          <Button 
            key={location} 
            variant="outline" 
            className="h-16 md:h-20 flex-col space-y-1 active:scale-95 transition-transform"
          >
            <MapPin className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm font-medium">{location}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MapComponent;
