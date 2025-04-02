
import { useState } from "react";
import StarRating from "@/components/StarRating";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [productRating, setProductRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [experienceRating, setExperienceRating] = useState(4);

  const handleSubmit = () => {
    toast({
      title: "Rating submitted!",
      description: `Product: ${productRating}/5 | Service: ${serviceRating}/5`,
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800">Five-Star Rating System</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A customizable component for collecting and displaying user ratings
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Rating</CardTitle>
              <CardDescription>Click the stars to select your rating</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Product Quality</h3>
                  <StarRating 
                    initialRating={productRating} 
                    onChange={setProductRating} 
                    size="md" 
                  />
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Customer Service</h3>
                  <StarRating 
                    initialRating={serviceRating} 
                    onChange={setServiceRating}
                    size="md" 
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleSubmit}
                disabled={productRating === 0 || serviceRating === 0}
              >
                Submit Ratings
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Display Options</CardTitle>
              <CardDescription>Different sizes and configurations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium mb-2">Read-only (Small)</h3>
                  <StarRating initialRating={3.5} readOnly size="sm" />
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Read-only (Medium)</h3>
                  <StarRating initialRating={4} readOnly size="md" />
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Read-only (Large)</h3>
                  <StarRating initialRating={5} readOnly size="lg" />
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Interactive (Large)</h3>
                  <StarRating 
                    initialRating={experienceRating} 
                    onChange={setExperienceRating}
                    size="lg" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>The 5-star rating component is versatile and easy to use:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Hover over stars to preview your selection</li>
                <li>Click to select and confirm your rating</li>
                <li>Configure read-only mode for displaying fixed ratings</li>
                <li>Choose from multiple sizes: small, medium, and large</li>
                <li>Customize with additional CSS classes</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
