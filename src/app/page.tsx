"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Heart, Clock, MapPin, Users, BookOpen, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const serviceSchedule = [
  {
    day: "Sunday",
    services: [
      { time: "7:30 - 9:30 AM", type: "1st Service" },
      { time: "10:00 AM - 12:00 PM", type: "2nd Service" },
      { time: "1:30 - 3:00 PM", type: "Afternoon" },
      { time: "3:30 - 5:00 PM", type: "Fellowship" }
    ]
  },
  {
    day: "Wednesday",
    services: [
      { time: "6:00 - 8:00 PM", type: "Midweek Service" }
    ]
  },
  {
    day: "Saturday",
    services: [
      { time: "8:00 - 9:00 AM", type: "Morning Watch" }
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, -40, 0],
              y: [0, 30, 0],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative container-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center section-padding"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-gradient">
                Basak Bible Baptist Church
              </span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A welcoming community of faith in Basak, Lapu-Lapu City
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join us as we grow together in faith, fellowship, and service to our community. 
              Everyone is welcome at Basak Bible Baptist Church.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact">
                <Button size="lg" className="gradient-blue text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all group">
                  Plan a Visit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/sermons">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 hover:bg-blue-50 group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Online
                </Button>
              </Link>
              
              <Link href="/give">
                <Button variant="ghost" size="lg" className="px-8 py-4 text-lg hover:bg-blue-50 group">
                  <Heart className="mr-2 h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
                  Give Online
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Schedule Section */}
      <section className="py-24 bg-white">
        <div className="container-center section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Us for Worship
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We gather throughout the week for worship, fellowship, and spiritual growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceSchedule.map((schedule, index) => (
              <motion.div
                key={schedule.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-gradient">
                      {schedule.day}
                    </h3>
                    
                    <div className="space-y-4">
                      {schedule.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="text-center">
                          <p className="font-semibold text-gray-900">{service.time}</p>
                          <p className="text-gray-600">{service.type}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container-center section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="glass-card max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Us</h3>
                <p className="text-gray-600 mb-4">
                  Basak Mercado Sudtonggan Road<br />
                  Lapu-Lapu City, Basak, Philippines
                </p>
                <p className="text-gray-600 mb-6">📞 0926 634 7805</p>
                <Link href="/contact">
                  <Button className="gradient-blue text-white">
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-white">
        <div className="container-center section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes our church community special
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Welcoming Community",
                description: "Experience warm fellowship and genuine community with people from all walks of life."
              },
              {
                icon: BookOpen,
                title: "Biblical Teaching",
                description: "Grow in your faith through practical, Bible-based messages that apply to daily life."
              },
              {
                icon: Heart,
                title: "Caring Ministry",
                description: "Find support, encouragement, and opportunities to serve others in our community."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="glass-card hover:shadow-xl transition-all duration-300 group h-full">
                  <CardContent className="p-8">
                    <item.icon className="h-12 w-12 text-blue-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
