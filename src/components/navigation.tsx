"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services & Events", href: "/services" },
  { label: "Sermons", href: "/sermons" },
  { label: "Ministries", href: "/ministries" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Glass Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 glass-nav border-b border-white/10"
      >
        <div className="container-center">
          <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="h-10 w-10 rounded-full gradient-blue flex items-center justify-center text-white font-bold text-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                BBBC
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Basak Bible Baptist Church
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link href="/contact">
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
                  Plan a Visit
                </Button>
              </Link>
              <Link href="/give">
                <Button size="sm" className="gradient-blue text-white shadow-lg hover:shadow-xl transition-all">
                  Give
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass-card border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 space-y-2">
                  <Link href="/contact">
                    <Button variant="outline" size="sm" className="w-full">
                      Plan a Visit
                    </Button>
                  </Link>
                  <Link href="/give">
                    <Button size="sm" className="w-full gradient-blue text-white">
                      Give
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  );
};

export default Navigation;