import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Coffee, Heart, BookOpen } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const upcomingEvents = [
    {
      title: "Youth Night",
      date: "Friday, Nov 1, 2024",
      time: "7:00 PM",
      description: "Fun activities and fellowship for our youth group",
      category: "Youth"
    },
    {
      title: "Community Outreach",
      date: "Saturday, Nov 9, 2024", 
      time: "9:00 AM",
      description: "Serving our community with food distribution",
      category: "Outreach"
    },
    {
      title: "Bible Study",
      date: "Sunday, Nov 10, 2024",
      time: "4:00 PM", 
      description: "Deep dive into God's Word together",
      category: "Study"
    },
    {
      title: "Prayer Meeting",
      date: "Wednesday, Nov 13, 2024",
      time: "7:00 PM",
      description: "Come together in prayer and worship",
      category: "Prayer"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Services & Events
            </h1>
            <p className="text-xl text-gray-600">
              Join us for worship, fellowship, and spiritual growth
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Service Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Weekly Service Schedule
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sunday Services */}
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-primary" />
                    Sunday Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-semibold">7:30 - 9:30 AM</span>
                      </div>
                      <p className="text-gray-600">1st Service</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-semibold">10:00 AM - 12:00 PM</span>
                      </div>
                      <p className="text-gray-600">2nd Service</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-semibold">1:30 - 3:00 PM</span>
                      </div>
                      <p className="text-gray-600">Afternoon Service</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Coffee className="h-4 w-4 text-primary" />
                        <span className="font-semibold">3:30 - 5:00 PM</span>
                      </div>
                      <p className="text-gray-600">Fellowship by Department</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Weekday Services */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-6 w-6 text-primary" />
                      Wednesday
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-semibold">6:00 - 8:00 PM</span>
                      </div>
                      <p className="text-gray-600">Midweek Service</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-6 w-6 text-primary" />
                      Saturday
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-semibold">8:00 - 9:00 AM</span>
                      </div>
                      <p className="text-gray-600">Morning Watch</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                      <Badge variant="secondary">{event.category}</Badge>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Visit Us
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start space-x-3 mb-6">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                        <p className="text-gray-600 mb-4">
                          Basak Mercado Sudtonggan Road<br />
                          Lapu-Lapu City, Basak, Philippines
                        </p>
                        <div className="space-y-2">
                          <p><strong>Phone:</strong> 0926 634 7805</p>
                          <p><strong>Email:</strong> biblebaptistchurchbasakllc@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">What to Expect:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          Friendly, welcoming atmosphere
                        </li>
                        <li className="flex items-center gap-2">
                          <Heart className="h-4 w-4 text-primary" />
                          Inspiring worship and music
                        </li>
                        <li className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          Practical, Bible-based teaching
                        </li>
                        <li className="flex items-center gap-2">
                          <Coffee className="h-4 w-4 text-primary" />
                          Fellowship and refreshments
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                      <p className="text-gray-600 mb-4">Interactive map coming soon</p>
                      <Button asChild>
                        <Link href="/contact">Get Directions</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We'd love to welcome you to our church family. Come as you are and experience 
            God's love in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Plan Your Visit</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/sermons">Watch Online First</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}