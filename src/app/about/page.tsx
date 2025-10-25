import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, BookOpen, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Basak Bible Baptist Church
            </h1>
            <p className="text-xl text-gray-600">
              Serving our community with faith, hope, and love since our founding
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To glorify God by making disciples of Jesus Christ through worship, fellowship, 
                    discipleship, ministry, and evangelism. We are committed to helping people grow 
                    in their relationship with God and serve others in our community.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-6 w-6 text-primary" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To be a thriving, Christ-centered community that transforms lives and impacts 
                    the Basak area and beyond through the love of Jesus Christ. We envision a 
                    church where everyone can find their place and purpose in God's kingdom.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What We Believe
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Statement of Faith
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">The Bible</h3>
                  <p className="text-gray-600">
                    We believe the Bible is the inspired, infallible, and authoritative Word of God. 
                    It is our guide for faith and practice.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">The Trinity</h3>
                  <p className="text-gray-600">
                    We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Jesus Christ</h3>
                  <p className="text-gray-600">
                    We believe Jesus Christ is the Son of God, born of a virgin, lived a sinless life, 
                    died for our sins, rose from the dead, and will return again.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Salvation</h3>
                  <p className="text-gray-600">
                    We believe salvation is by grace alone, through faith alone, in Christ alone. 
                    It is a free gift from God, not earned by good works.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">The Church</h3>
                  <p className="text-gray-600">
                    We believe the church is the body of Christ, composed of all true believers. 
                    We are called to worship God, fellowship together, and serve others.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pastor Card */}
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Senior Pastor</h3>
                  <Badge variant="secondary" className="mb-3">Lead Pastor</Badge>
                  <p className="text-gray-600 text-sm">
                    Leading our congregation with wisdom, compassion, and biblical teaching.
                  </p>
                </CardContent>
              </Card>

              {/* Associate Pastor Card */}
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Associate Pastor</h3>
                  <Badge variant="secondary" className="mb-3">Ministry</Badge>
                  <p className="text-gray-600 text-sm">
                    Supporting pastoral care and overseeing various ministry programs.
                  </p>
                </CardContent>
              </Card>

              {/* Youth Pastor Card */}
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Youth Pastor</h3>
                  <Badge variant="secondary" className="mb-3">Youth Ministry</Badge>
                  <p className="text-gray-600 text-sm">
                    Mentoring and guiding our young people in their faith journey.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Our leadership team is dedicated to serving God and our community with integrity, 
                love, and biblical wisdom.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}