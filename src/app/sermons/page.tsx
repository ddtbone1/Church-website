"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Calendar, Clock, Search, Youtube, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SermonsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("all");

  // Sample sermon data - in a real app, this would come from your CMS
  const sermons = [
    {
      id: 1,
      title: "Walking in Faith",
      pastor: "Senior Pastor", 
      date: "October 20, 2024",
      series: "Faith Journey",
      duration: "35 min",
      description: "Discover what it means to truly walk in faith and trust God's plan for your life.",
      youtubeId: "dQw4w9WgXcQ", // Sample YouTube ID
      thumbnail: "/placeholder-sermon.jpg"
    },
    {
      id: 2,
      title: "The Power of Prayer",
      pastor: "Associate Pastor",
      date: "October 13, 2024", 
      series: "Prayer Life",
      duration: "42 min",
      description: "Learn how prayer can transform your relationship with God and impact your daily life.",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "/placeholder-sermon.jpg"
    },
    {
      id: 3,
      title: "Love Your Neighbor",
      pastor: "Senior Pastor",
      date: "October 6, 2024",
      series: "Faith Journey", 
      duration: "38 min",
      description: "Understanding Jesus' command to love our neighbors and how to live it out practically.",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "/placeholder-sermon.jpg"
    },
    {
      id: 4,
      title: "Grace and Mercy",
      pastor: "Guest Speaker",
      date: "September 29, 2024",
      series: "God's Character",
      duration: "45 min", 
      description: "Exploring the depth of God's grace and mercy in our lives and how to extend it to others.",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "/placeholder-sermon.jpg"
    }
  ];

  const series = [
    { id: "all", name: "All Sermons" },
    { id: "faith-journey", name: "Faith Journey" },
    { id: "prayer-life", name: "Prayer Life" },
    { id: "gods-character", name: "God's Character" }
  ];

  const filteredSermons = sermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeries = selectedSeries === "all" || 
                         sermon.series.toLowerCase().replace(/[^\w]/g, '-') === selectedSeries;
    return matchesSearch && matchesSeries;
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sermons & Media
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Watch our latest messages and grow in your faith journey
            </p>
            <Button size="lg" asChild>
              <Link 
                href="https://www.youtube.com/@BibleBaptistChurchBasakLLC" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Youtube className="h-5 w-5" />
                Visit Our YouTube Channel
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured/Latest Sermon */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Latest Message
            </h2>
            {sermons.length > 0 && (
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-gray-200 aspect-video lg:aspect-auto flex items-center justify-center">
                    <div className="text-center">
                      <Play className="h-16 w-16 mx-auto mb-4 text-primary" />
                      <p className="text-gray-600">Video Player</p>
                      <p className="text-sm text-gray-500 mt-1">
                        YouTube embed will be displayed here
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge>{sermons[0].series}</Badge>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-600">{sermons[0].duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{sermons[0].title}</h3>
                    <p className="text-gray-600 mb-4">{sermons[0].description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {sermons[0].date}
                      </span>
                      <span>{sermons[0].pastor}</span>
                    </div>
                    <Button className="w-full lg:w-auto">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </Button>
                  </CardContent>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search sermons..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select
                  value={selectedSeries}
                  onChange={(e) => setSelectedSeries(e.target.value)}
                  className="border rounded-md px-3 py-2 bg-white"
                >
                  {series.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Archive */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Sermon Archive
            </h2>
            {filteredSermons.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No sermons found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredSermons.slice(1).map((sermon) => (
                  <Card key={sermon.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gray-200 aspect-video flex items-center justify-center">
                      <Play className="h-12 w-12 text-primary" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{sermon.series}</Badge>
                        <span className="text-sm text-gray-500">{sermon.duration}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                        {sermon.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {sermon.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>{sermon.date}</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Play className="h-4 w-4 mr-2" />
                        Watch
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us Live
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't make it in person? Watch our services live online every Sunday and Wednesday
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Sunday Services</h3>
                  <p className="text-gray-600 mb-4">
                    Live stream available during all Sunday services
                  </p>
                  <Button variant="outline" asChild>
                    <Link 
                      href="https://www.youtube.com/@BibleBaptistChurchBasakLLC" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube className="h-4 w-4 mr-2" />
                      Watch Live
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Wednesday Service</h3>
                  <p className="text-gray-600 mb-4">
                    Join our midweek service online at 6:00 PM
                  </p>
                  <Button variant="outline" asChild>
                    <Link 
                      href="https://www.youtube.com/@BibleBaptistChurchBasakLLC" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube className="h-4 w-4 mr-2" />
                      Watch Live
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}