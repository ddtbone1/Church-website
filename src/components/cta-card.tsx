import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Mail } from "lucide-react";

interface CTACardProps {
  title?: string;
  description?: string;
  showButtons?: boolean;
  variant?: "primary" | "dark";
  className?: string;
}

export default function CTACard({ 
  title = "We Can't Wait to Meet You",
  description = "Whether you're looking for a church home, need prayer, or just want to learn more about our community, we're here for you.",
  showButtons = true,
  variant = "primary",
  className = ""
}: CTACardProps) {
  const cardClasses = variant === "dark" 
    ? "bg-slate-800 text-white border-0" 
    : "bg-primary text-primary-foreground border-0";
    
  return (
    <Card className={`${cardClasses} ${className}`}>
      <CardContent className="p-12 text-center">
        <div className="max-w-2xl mx-auto">
          <Heart className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {description}
          </p>
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant={variant === "dark" ? "default" : "secondary"} 
                className={
                  variant === "dark" 
                    ? "bg-white text-slate-800 hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl" 
                    : "hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                } 
                asChild
              >
                <a href="tel:09266347805" className="inline-flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Now
                </a>
              </Button>
              <Button 
                size="lg" 
                variant={variant === "dark" ? "secondary" : "outline"}
                className={
                  variant === "dark" 
                    ? "bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm" 
                    : "border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                } 
                asChild
              >
                <a href="mailto:biblebaptistchurchbasakllc@gmail.com" className="inline-flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}