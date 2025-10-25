"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  CreditCard, 
  Repeat, 
  Shield, 
  Users, 
  BookOpen, 
  Home, 
  HandHeart,
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function GivePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [givingType, setGivingType] = useState<'one-time' | 'recurring'>('one-time');

  const suggestedAmounts = [25, 50, 100, 250, 500];

  const givingAreas = [
    {
      title: "General Fund",
      description: "Support the overall ministry and operations of our church",
      icon: Home,
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Building Fund",
      description: "Help us maintain and improve our church facilities",
      icon: Home,
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Missions",
      description: "Support our local and global mission efforts",
      icon: HandHeart,
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Youth Ministry",
      description: "Invest in the spiritual growth of our young people",
      icon: Users,
      color: "bg-orange-100 text-orange-800"
    }
  ];

  const givingImpact = [
    {
      amount: "₱500",
      impact: "Provides Sunday school materials for one month"
    },
    {
      amount: "₱1,000", 
      impact: "Supports one family through our food distribution program"
    },
    {
      amount: "₱2,500",
      impact: "Sponsors a youth camp scholarship for one teenager"
    },
    {
      amount: "₱5,000",
      impact: "Funds community outreach activities for one quarter"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Give & Support Our Ministry
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your generosity helps us serve our community and spread God's love
            </p>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Secure & Encrypted Giving</span>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Make a Donation</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {/* Giving Type Toggle */}
                <div className="flex justify-center mb-8">
                  <div className="bg-gray-100 p-1 rounded-lg flex">
                    <button
                      onClick={() => setGivingType('one-time')}
                      className={`px-6 py-2 rounded-md transition-colors ${
                        givingType === 'one-time' 
                          ? 'bg-white shadow-sm text-primary' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      One-time
                    </button>
                    <button
                      onClick={() => setGivingType('recurring')}
                      className={`px-6 py-2 rounded-md transition-colors ${
                        givingType === 'recurring' 
                          ? 'bg-white shadow-sm text-primary' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Repeat className="h-4 w-4 inline mr-1" />
                      Recurring
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-center">Select Amount (PHP)</h3>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                    {suggestedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          selectedAmount === amount
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-gray-200 hover:border-primary'
                        }`}
                      >
                        ₱{amount}
                      </button>
                    ))}
                  </div>
                  <div className="text-center">
                    <input
                      type="number"
                      placeholder="Other amount"
                      className="border rounded-lg px-4 py-2 text-center max-w-xs"
                      onChange={(e) => setSelectedAmount(parseInt(e.target.value) || null)}
                    />
                  </div>
                </div>

                {/* Giving Areas */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-center">Where would you like to give?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {givingAreas.map((area, index) => {
                      const IconComponent = area.icon;
                      return (
                        <div
                          key={index}
                          className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary transition-colors cursor-pointer"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded ${area.color}`}>
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{area.title}</h4>
                              <p className="text-sm text-gray-600">{area.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="border rounded-lg p-4 text-center">
                      <CreditCard className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="font-medium">PayPal</p>
                      <p className="text-sm text-gray-600">Credit/Debit Cards</p>
                    </div>
                    <div className="border rounded-lg p-4 text-center opacity-50">
                      <CreditCard className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                      <p className="font-medium">PayMongo</p>
                      <p className="text-sm text-gray-600">Coming Soon</p>
                    </div>
                    <div className="border rounded-lg p-4 text-center opacity-50">
                      <CreditCard className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                      <p className="font-medium">Xendit</p>
                      <p className="text-sm text-gray-600">Coming Soon</p>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full md:w-auto px-12">
                    <Heart className="h-5 w-5 mr-2" />
                    Give Now with PayPal
                  </Button>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    Your donation is secure and encrypted. You will receive a receipt via email.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Your Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {givingImpact.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">{item.amount}</div>
                    <p className="text-gray-600">{item.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Give */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Give?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Biblical Giving</h3>
                  <p className="text-gray-600">
                    "Each of you should give what you have decided in your heart to give, 
                    not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Cor 9:7
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
                  <p className="text-gray-600">
                    Your gifts enable us to serve our community through outreach programs, 
                    food distribution, and spiritual care for those in need.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Spiritual Growth</h3>
                  <p className="text-gray-600">
                    Giving is an act of worship and trust that helps us grow in our 
                    relationship with God and experience His faithfulness.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Giving Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Other Ways to Give
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <CreditCard className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">Bank Transfer</h3>
                  <p className="text-gray-600 mb-4">
                    You can also give through direct bank transfer or deposit.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Get Bank Details</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <HandHeart className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">In-Person Giving</h3>
                  <p className="text-gray-600 mb-4">
                    Give during any of our services through the offering baskets.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/services">Service Times</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Message */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Thank You for Your Generosity
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your faithfulness in giving helps us continue our mission to serve God 
            and our community. We are grateful for your partnership in ministry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/about">Learn About Our Mission</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}