import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, Heart, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Basak Bible Baptist Church
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              A welcoming community of faith in Basak, Lapu-Lapu City
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Join us as we grow together in faith, fellowship, and service to our community.
              Everyone is welcome at Basak Bible Baptist Church.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/services">Plan a Visit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sermons">Watch Online</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/give">Give Online</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Join Us for Worship
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Sunday Services</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>7:30 - 9:30 AM (1st Service)</div>
                    <div>10:00 AM - 12:00 PM (2nd Service)</div>
                    <div>1:30 - 3:00 PM (Afternoon)</div>
                    <div>3:30 - 5:00 PM (Fellowship)</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Wednesday</h3>
                  <div className="text-sm text-gray-600">
                    <div>6:00 - 8:00 PM</div>
                    <div>Midweek Service</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Saturday</h3>
                  <div className="text-sm text-gray-600">
                    <div>8:00 - 9:00 AM</div>
                    <div>Morning Watch</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Visit Us
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start space-x-3 mb-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Our Location</h3>
                        <p className="text-gray-600">
                          Basak Mercado Sudtonggan Road<br />
                          Lapu-Lapu City, Basak, Philippines
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p><strong>Phone:</strong> 0926 634 7805</p>
                      <p><strong>Email:</strong> biblebaptistchurchbasakllc@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Button asChild>
                      <Link href="/contact">Get Directions</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Welcoming Community</h3>
                <p className="text-gray-600">
                  Experience warm fellowship and genuine community with people from all walks of life.
                </p>
              </div>
              <div className="text-center">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Biblical Teaching</h3>
                <p className="text-gray-600">
                  Grow in your faith through practical, Bible-based messages that apply to daily life.
                </p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Caring Ministry</h3>
                <p className="text-gray-600">
                  Find support, encouragement, and opportunities to serve others in our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
