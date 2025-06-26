
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";

const FeedbackSystem = () => {
  const [feedbackType, setFeedbackType] = useState("");
  const [priority, setPriority] = useState("medium");
  const [rating, setRating] = useState("");

  const feedbackTypes = [
    { id: "bug", name: "Bug Report", description: "Report technical issues" },
    { id: "suggestion", name: "Suggestion", description: "Suggest improvements" },
    { id: "compliment", name: "Compliment", description: "Share positive feedback" },
    { id: "complaint", name: "Complaint", description: "Report problems or concerns" },
    { id: "feature", name: "Feature Request", description: "Request new features" }
  ];

  const recentFeedback = [
    {
      id: 1,
      type: "Bug Report",
      subject: "Map navigation not working in Science Building",
      status: "In Progress",
      date: "2024-06-25",
      response: "Our team is investigating this issue. Thank you for reporting!"
    },
    {
      id: 2,
      type: "Suggestion",
      subject: "Add dark mode to the app",
      status: "Under Review",
      date: "2024-06-24",
      response: null
    }
  ];

  const handleSubmitFeedback = () => {
    console.log("Submitting feedback:", { feedbackType, priority, rating });
    // Here you would normally send the data to your backend
  };

  return (
    <div className="space-y-6">
      {/* Submit New Feedback */}
      <Card>
        <CardHeader>
          <CardTitle>Submit Feedback</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="feedback-type">Feedback Type</Label>
              <Select value={feedbackType} onValueChange={setFeedbackType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select feedback type" />
                </SelectTrigger>
                <SelectContent>
                  {feedbackTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      <div>
                        <div className="font-medium">{type.name}</div>
                        <div className="text-sm text-muted-foreground">{type.description}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority Level</Label>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low - Minor issue or suggestion</SelectItem>
                  <SelectItem value="medium">Medium - Important but not urgent</SelectItem>
                  <SelectItem value="high">High - Urgent issue affecting usage</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input placeholder="Brief summary of your feedback..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              placeholder="Please provide detailed information about your feedback..."
              className="min-h-24"
            />
          </div>

          <div className="space-y-3">
            <Label>Overall Rating (Optional)</Label>
            <RadioGroup value={rating} onValueChange={setRating} className="flex space-x-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1" id="rating-1" />
                <Label htmlFor="rating-1">1 - Poor</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2" id="rating-2" />
                <Label htmlFor="rating-2">2 - Fair</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3" id="rating-3" />
                <Label htmlFor="rating-3">3 - Good</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="4" id="rating-4" />
                <Label htmlFor="rating-4">4 - Very Good</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="5" id="rating-5" />
                <Label htmlFor="rating-5">5 - Excellent</Label>
              </div>
            </RadioGroup>
          </div>

          <Button onClick={handleSubmitFeedback} className="w-full">
            Submit Feedback
          </Button>
        </CardContent>
      </Card>

      {/* Previous Feedback */}
      <Card>
        <CardHeader>
          <CardTitle>Your Previous Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentFeedback.map((feedback) => (
              <div key={feedback.id} className="p-4 border rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{feedback.subject}</h4>
                  <Badge variant="outline">{feedback.status}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{feedback.type}</span>
                  <span>•</span>
                  <span>{feedback.date}</span>
                </div>
                {feedback.response && (
                  <div className="mt-3 p-3 bg-muted rounded-lg">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <p className="text-sm">{feedback.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackSystem;
