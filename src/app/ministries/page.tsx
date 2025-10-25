import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Heart, 
  BookOpen, 
  Music, 
  Gamepad2, 
  Baby, 
  GraduationCap,
  HandHeart,
  Coffee,
  Calendar,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function MinistriesPage() {
  const ministries = [
    {
      title: "Children's Ministry",
      description: "Nurturing young hearts with God's love through age-appropriate Bible lessons, fun activities, and caring mentorship.",
      icon: Baby,
      ageGroup: "Ages 0-12",
      meetingTime: "Sunday 10:00 AM",
      features: ["Bible Stories", "Crafts & Games", "Snacks", "Loving Care"],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Youth Ministry",
      description: "Empowering teenagers to grow in faith through fellowship, discipleship, and fun activities designed just for them.",
      icon: Gamepad2,
      ageGroup: "Ages 13-18", 
      meetingTime: "Friday 7:00 PM",
      features: ["Youth Group", "Bible Study", "Game Nights", "Service Projects"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Adult Ministry",
      description: "Building mature disciples through Bible study, prayer, fellowship, and practical Christian living.",
      icon: Users,
      ageGroup: "Ages 18+",
      meetingTime: "Sunday 4:00 PM",
      features: ["Bible Study", "Prayer Groups", "Life Groups", "Mentorship"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Worship Ministry",
      description: "Leading our congregation in heartfelt worship through music, singing, and creative expression of faith.",
      icon: Music,
      ageGroup: "All Ages",
      meetingTime: "Sunday Services",
      features: ["Choir", "Instrumental", "Sound Tech", "Creative Arts"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Outreach Ministry",
      description: "Sharing God's love with our community through service projects, evangelism, and compassionate care.",
      icon: HandHeart,
      ageGroup: "All Ages",
      meetingTime: "Saturday 9:00 AM",
      features: ["Community Service", "Food Distribution", "Evangelism", "Prison Ministry"],
      color: "bg-red-100 text-red-800"
    },
    {
      title: "Fellowship Ministry",
      description: "Building strong relationships and community through meals, events, and meaningful connections.",
      icon: Coffee,
      ageGroup: "All Ages",
      meetingTime: "Various Times",
      features: ["Church Meals", "Social Events", "Small Groups", "Hospitality"],
      color: "bg-orange-100 text-orange-800"
    }
  ];

  const volunteerOpportunities = [
    {
      title: "Children's Ministry Helper",
      commitment: "1-2 Sundays per month",
      description: "Help with children's activities, crafts, and classroom management."
    },
    {
      title: "Youth Leader",
      commitment: "Weekly",
      description: "Mentor teenagers and assist with youth group activities and events."
    },
    {
      title: "Greeter/Usher",
      commitment: "1 Sunday per month",
      description: "Welcome visitors and assist with seating and offering collection."
    },
    {
      title: "Worship Team",
      commitment: "2-3 Sundays per month",
      description: "Participate in leading worship through music, vocals, or technical support."
    },
    {
      title: "Kitchen Team",
      commitment: "Monthly events",
      description: "Help prepare and serve meals for church events and fellowship."
    },
    {
      title: "Outreach Volunteer",
      commitment: "Monthly",
      description: "Participate in community service projects and evangelism efforts."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Ministries
            </h1>
            <p className="text-xl text-gray-600">
              Discover how you can grow in faith and serve others in our community
            </p>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Ministry Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ministries.map((ministry, index) => {
                const IconComponent = ministry.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg ${ministry.color}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <Badge variant="outline">{ministry.ageGroup}</Badge>
                      </div>
                      <CardTitle className="text-xl">{ministry.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{ministry.description}</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>{ministry.meetingTime}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">What we offer:</h4>
                        <div className="flex flex-wrap gap-1">
                          {ministry.features.map((feature, featureIndex) => (
                            <Badge key={featureIndex} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Volunteer Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {volunteerOpportunities.map((opportunity, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold">{opportunity.title}</h3>
                      <Badge variant="outline">{opportunity.commitment}</Badge>
                    </div>
                    <p className="text-gray-600">{opportunity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Ministry Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Children's Director</h3>
                  <p className="text-gray-600 text-sm">
                    Leading our children's ministry with love and dedication to nurturing young hearts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Youth Pastor</h3>
                  <p className="text-gray-600 text-sm">
                    Mentoring and guiding our teenagers in their faith journey and personal growth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Music className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Worship Leader</h3>
                  <p className="text-gray-600 text-sm">
                    Leading our congregation in meaningful worship and praise to God.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find Your Place to Serve
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            God has given each of us unique gifts and talents. Discover how you can use yours 
            to serve others and make a difference in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Join a Ministry</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Visit Us First</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}