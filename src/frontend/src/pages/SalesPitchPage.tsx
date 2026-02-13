import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, DollarSign, Zap, Shield, Smartphone, Package, TrendingUp } from 'lucide-react';

export default function SalesPitchPage() {
  const features = [
    {
      icon: <Package className="h-5 w-5" />,
      title: 'Complete Product Management',
      description: 'Full-featured admin dashboard for adding, editing, and managing your shoe inventory with image uploads.',
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Secure Stripe Integration',
      description: 'Pre-configured payment processing with Stripe for credit and debit card transactions, ready to accept payments immediately.',
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: 'Mobile-First Responsive Design',
      description: 'Beautifully crafted UI that works flawlessly on all devices - desktop, tablet, and mobile.',
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: 'Built on Internet Computer',
      description: 'Deployed on the decentralized Internet Computer blockchain for enhanced security, scalability, and low hosting costs.',
    },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      title: 'Ready-to-Launch',
      description: 'Complete e-commerce solution with shopping cart, checkout flow, contact forms, and user authentication - no additional development needed.',
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: 'Easy Brand Customization',
      description: 'Simple to rebrand with your logo, colors, and product catalog. Start selling within hours, not weeks.',
    },
  ];

  const upsells = [
    'Custom domain setup and configuration',
    'Extended technical support (3-6 months)',
    'Monthly maintenance and updates',
    'Additional feature development',
    'SEO optimization package',
    'Marketing materials and content creation',
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="secondary">
          Turnkey E-Commerce Solution
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Premium E-Commerce Website for Shoe Brands
        </h1>
        <p className="text-xl text-muted-foreground mb-2">Ready to Launch & Start Selling</p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A fully functional, modern e-commerce platform built on the Internet Computer blockchain. Complete with product catalog, secure Stripe payments, admin dashboard, and mobile-responsive design.
        </p>
      </div>

      {/* Key Features */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Feature Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Seller's Note */}
      <Card className="mb-8 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-2xl">Why This Website is Perfect for You</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            This isn't just a template - it's a <strong>complete, production-ready e-commerce platform</strong> that you can launch immediately. Whether you're starting a new shoe brand or expanding your existing business online, this website gives you everything you need to start selling today.
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm">
                <strong>Instant Rebranding:</strong> Simply upload your logo, customize colors in the config files, and add your products through the admin panel.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm">
                <strong>No Technical Skills Required:</strong> The admin dashboard makes it easy to manage products, view orders, and handle customer inquiries without touching code.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm">
                <strong>Blockchain-Powered:</strong> Built on the Internet Computer for enhanced security, decentralization, and significantly lower hosting costs compared to traditional cloud platforms.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm">
                <strong>Scalable & Secure:</strong> Handle growing traffic and transactions with confidence. Stripe integration ensures PCI-compliant payment processing.
              </p>
            </div>
          </div>
          <p className="text-muted-foreground pt-4 border-t">
            <strong>Perfect for:</strong> Shoe brands, footwear retailers, sneaker resellers, boutique shoe stores, or anyone looking to sell shoes online with a professional, modern platform.
          </p>
        </CardContent>
      </Card>

      {/* Pricing */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <DollarSign className="h-6 w-6" />
            Investment & Value
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold">$800 - $1,500</span>
              <span className="text-muted-foreground">USD</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Estimated value range based on features, functionality, and development time saved. This represents a fraction of the cost to build from scratch.
            </p>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-semibold mb-3">Optional Add-Ons & Upsells:</h4>
            <ul className="space-y-2">
              {upsells.map((upsell, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{upsell}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Pricing is negotiable based on customization needs, support requirements, and additional features. Contact for a detailed quote.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Marketplace Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Listing Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Suitable for Marketplaces:</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Flippa</Badge>
              <Badge variant="outline">Fiverr</Badge>
              <Badge variant="outline">Empire Flippers</Badge>
              <Badge variant="outline">Motion Invest</Badge>
              <Badge variant="outline">MicroAcquire</Badge>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-semibold mb-2">What's Included:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Complete source code (frontend & backend)</li>
              <li>• Admin dashboard access</li>
              <li>• Documentation for setup and customization</li>
              <li>• Stripe integration guide</li>
              <li>• 30-day support for technical questions</li>
            </ul>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              <strong>Tech Stack:</strong> React, TypeScript, Tailwind CSS, Internet Computer (Motoko), Stripe API, shadcn/ui components
            </p>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="mt-12 text-center p-8 rounded-lg bg-primary/5 border border-primary/20">
        <h3 className="text-2xl font-bold mb-2">Ready to Launch Your Shoe Brand?</h3>
        <p className="text-muted-foreground mb-6">
          Get this complete e-commerce platform and start selling within hours.
        </p>
        <p className="text-sm text-muted-foreground">
          Contact the seller to discuss pricing, customization options, and next steps.
        </p>
      </div>
    </div>
  );
}
