import Link from "next/link";
import { MapPin, Phone, Mail, Youtube, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CTACard from "@/components/cta-card";

const Footer = () => {
  return (
    <footer className="mt-auto">
      {/* CTA Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <CTACard variant="dark" />
        </div>
      </section>
      
      {/* Footer Info */}
      <div className="bg-muted">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {/* Church Info */}
              <div className="space-y-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    BBBC
                  </div>
                  <span className="font-bold text-xl">Basak Bible Baptist Church</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A welcoming community of faith serving Basak, Lapu-Lapu City, Philippines.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 text-center md:text-left">
                <h3 className="font-semibold text-lg">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start justify-center md:justify-start space-x-3">
                    <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                    <div className="leading-relaxed">
                      <div>Basak Mercado Sudtonggan Road</div>
                      <div>Lapu-Lapu City, Basak, Philippines</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>0926 634 7805</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="break-all">biblebaptistchurchbasakllc@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <Youtube className="h-5 w-5 text-primary" />
                    <Link 
                      href="https://www.youtube.com/@BibleBaptistChurchBasakLLC" 
                      className="hover:text-primary transition-colors underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      YouTube Channel
                    </Link>
                  </div>
                </div>
              </div>

              {/* Service Times */}
              <div className="space-y-6 text-center md:text-left">
                <h3 className="font-semibold text-lg">Service Times</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Sunday Services:</h4>
                    <div className="space-y-1 text-sm leading-relaxed">
                      <div>7:30 - 9:30 AM (1st Service)</div>
                      <div>10:00 AM - 12:00 PM (2nd Service)</div>
                      <div>1:30 - 3:00 PM (Afternoon)</div>
                      <div>3:30 - 5:00 PM (Fellowship)</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Wednesday:</h4>
                    <div className="text-sm">6:00 - 8:00 PM (Midweek)</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Saturday:</h4>
                    <div className="text-sm">8:00 - 9:00 AM (Morning Watch)</div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6 text-center md:text-left">
                <h3 className="font-semibold text-lg">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/about" className="block hover:text-primary transition-colors font-medium">
                    About Us
                  </Link>
                  <Link href="/services" className="block hover:text-primary transition-colors font-medium">
                    Plan a Visit
                  </Link>
                  <Link href="/sermons" className="block hover:text-primary transition-colors font-medium">
                    Watch Online
                  </Link>
                  <Link href="/give" className="block hover:text-primary transition-colors font-medium">
                    Give Online
                  </Link>
                  <Link href="/contact" className="block hover:text-primary transition-colors font-medium">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-muted-foreground space-y-4 sm:space-y-0">
              <p>&copy; 2024 Basak Bible Baptist Church LLC. All rights reserved.</p>
              <p className="flex items-center gap-1">
                Built with <span className="text-red-500">❤️</span> for our community
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;