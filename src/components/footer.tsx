"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Youtube, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer className="mt-auto">
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-center section-padding relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 max-w-4xl mx-auto">
              <CardContent className="p-12 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Join Our Community?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Take the next step in your faith journey. We'd love to welcome you to our church family.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-medium group">
                      Plan Your Visit
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/sermons">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                      Watch Online
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      
      {/* Footer Info */}
      <div className="bg-white/95 backdrop-blur-sm">
        <div className="container-center py-16">
          <div className="section-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {/* Church Info */}
              <motion.div 
                className="space-y-6 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="h-12 w-12 rounded-full gradient-blue flex items-center justify-center text-white font-bold text-sm">
                    BBBC
                  </div>
                  <span className="font-bold text-xl text-gray-900">Basak Bible Baptist Church</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  A welcoming community of faith serving Basak, Lapu-Lapu City, Philippines.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="space-y-6 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg text-gray-900">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start justify-center md:justify-start space-x-3">
                    <MapPin className="h-5 w-5 mt-0.5 text-blue-500" />
                    <div className="leading-relaxed text-gray-600">
                      <div>Basak Mercado Sudtonggan Road</div>
                      <div>Lapu-Lapu City, Basak, Philippines</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <Phone className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-600">0926 634 7805</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <span className="break-all text-gray-600">biblebaptistchurchbasakllc@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <Youtube className="h-5 w-5 text-blue-500" />
                    <Link 
                      href="https://www.youtube.com/@BibleBaptistChurchBasakLLC" 
                      className="hover:text-blue-600 transition-colors underline text-gray-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      YouTube Channel
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Service Times */}
              <motion.div 
                className="space-y-6 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg text-gray-900">Service Times</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Sunday Services:</h4>
                    <div className="space-y-1 text-sm leading-relaxed text-gray-600">
                      <div>7:30 - 9:30 AM (1st Service)</div>
                      <div>10:00 AM - 12:00 PM (2nd Service)</div>
                      <div>1:30 - 3:00 PM (Afternoon)</div>
                      <div>3:30 - 5:00 PM (Fellowship)</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Wednesday:</h4>
                    <div className="text-sm text-gray-600">6:00 - 8:00 PM (Midweek)</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Saturday:</h4>
                    <div className="text-sm text-gray-600">8:00 - 9:00 AM (Morning Watch)</div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div 
                className="space-y-6 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg text-gray-900">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/about" className="block hover:text-blue-600 transition-colors font-medium text-gray-600">
                    About Us
                  </Link>
                  <Link href="/services" className="block hover:text-blue-600 transition-colors font-medium text-gray-600">
                    Plan a Visit
                  </Link>
                  <Link href="/sermons" className="block hover:text-blue-600 transition-colors font-medium text-gray-600">
                    Watch Online
                  </Link>
                  <Link href="/give" className="block hover:text-blue-600 transition-colors font-medium text-gray-600">
                    Give Online
                  </Link>
                  <Link href="/contact" className="block hover:text-blue-600 transition-colors font-medium text-gray-600">
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>

            <Separator className="my-12 bg-gray-200" />

            <motion.div 
              className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-gray-500 space-y-4 sm:space-y-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>&copy; 2024 Basak Bible Baptist Church LLC. All rights reserved.</p>
              <p className="flex items-center gap-1">
                Built with <span className="text-red-500">❤️</span> for our community
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;