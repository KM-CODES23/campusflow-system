
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

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
    <div className="space-y-6">
      {/* Search and Navigation Controls */}
      <div className="flex gap-4 items-center">
        <div className="flex-1">
          <Input
            placeholder="Search buildings, rooms, or facilities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button>
          <MapPin className="mr-2 h-4 w-4" />
          Get Directions
        </Button>
      </div>

      {/* Interactive Map Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-green-100 to-blue-100 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 mx-auto text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Interactive Campus Map</h3>
                    <p className="text-muted-foreground">GPS navigation and building layouts</p>
                  </div>
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary">Indoor Navigation</Badge>
                    <Badge variant="secondary">Real-time GPS</Badge>
                    <Badge variant="secondary">Room Finder</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Building Directory */}
        <div className="space-y-4">
          <h3 className="font-semibold">Campus Buildings</h3>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {filteredBuildings.map((building) => (
              <Card
                key={building.id}
                className={`cursor-pointer transition-colors ${
                  selectedBuilding === building.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedBuilding(building.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{building.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Code: {building.code} • {building.rooms} rooms
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge
                        variant={building.available ? "default" : "destructive"}
                      >
                        {building.available ? "Open" : "Closed"}
                      </Badge>
                      <Button size="sm" variant="outline">
                        Navigate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Locations */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Cafeteria", "Parking", "ATM", "Restrooms"].map((location) => (
          <Button key={location} variant="outline" className="h-16">
            <div className="text-center">
              <MapPin className="h-5 w-5 mx-auto mb-1" />
              <span className="text-sm">{location}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MapComponent;
