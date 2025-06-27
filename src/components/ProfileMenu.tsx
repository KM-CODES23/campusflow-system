
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Settings, LogOut, Edit } from "lucide-react";

const ProfileMenu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
    studentId: "ST2024001",
    major: "Computer Science",
    year: "Junior",
    bio: "Passionate about technology and learning new things every day.",
    avatar: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=100&h=100&fit=crop&crop=face"
  });

  const [editProfile, setEditProfile] = useState(profile);

  const handleSaveProfile = () => {
    setProfile(editProfile);
    setIsEditOpen(false);
  };

  const handleCancelEdit = () => {
    setEditProfile(profile);
    setIsEditOpen(false);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback>
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-1 leading-none">
              <p className="font-medium">{profile.name}</p>
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {profile.email}
              </p>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsProfileOpen(true)}>
            <User className="mr-2 h-4 w-4" />
            View Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsEditOpen(true)}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Profile View Dialog */}
      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Profile</DialogTitle>
            <DialogDescription>
              Your academic profile information
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback>
                  <User className="h-8 w-8" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">{profile.name}</h3>
                <p className="text-sm text-muted-foreground">{profile.studentId}</p>
                <p className="text-sm text-muted-foreground">{profile.major} • {profile.year}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <Label className="text-sm font-medium">Email</Label>
                <p className="text-sm text-muted-foreground">{profile.email}</p>
              </div>
              <div>
                <Label className="text-sm font-medium">About</Label>
                <p className="text-sm text-muted-foreground">{profile.bio}</p>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsProfileOpen(false)}>
                Close
              </Button>
              <Button onClick={() => {
                setIsProfileOpen(false);
                setIsEditOpen(true);
              }}>
                Edit Profile
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Profile Edit Dialog */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Update your profile information
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={editProfile.avatar} alt={editProfile.name} />
                <AvatarFallback>
                  <User className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                Change Photo
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={editProfile.name}
                  onChange={(e) => setEditProfile({...editProfile, name: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="studentId">Student ID</Label>
                <Input
                  id="studentId"
                  value={editProfile.studentId}
                  onChange={(e) => setEditProfile({...editProfile, studentId: e.target.value})}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={editProfile.email}
                onChange={(e) => setEditProfile({...editProfile, email: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="major">Major</Label>
                <Input
                  id="major"
                  value={editProfile.major}
                  onChange={(e) => setEditProfile({...editProfile, major: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="year">Academic Year</Label>
                <Input
                  id="year"
                  value={editProfile.year}
                  onChange={(e) => setEditProfile({...editProfile, year: e.target.value})}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself..."
                value={editProfile.bio}
                onChange={(e) => setEditProfile({...editProfile, bio: e.target.value})}
                rows={3}
              />
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={handleCancelEdit}>
                Cancel
              </Button>
              <Button onClick={handleSaveProfile}>
                Save Changes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfileMenu;
