import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Stride</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe that every step you take should be comfortable, confident, and stylish.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded with a passion for quality craftsmanship and timeless design, Stride has been creating
              premium footwear that combines comfort with style. Our journey began with a simple mission: to
              craft shoes that people love to wear, day after day.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every pair of shoes we create is the result of meticulous attention to detail, from selecting
              the finest materials to perfecting every stitch. We work with skilled artisans who share our
              commitment to excellence, ensuring that each shoe meets our exacting standards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, Stride continues to push the boundaries of footwear design, creating shoes that not only
              look great but feel incredible. We're proud to be part of your journey, one step at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Crafted with Care</h3>
                <p className="text-muted-foreground">
                  Every shoe is made with attention to detail and a commitment to quality that you can feel
                  with every step.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. We're here to ensure you find the perfect pair for your
                  lifestyle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  We use only the finest materials and work with skilled craftspeople to create shoes that
                  last.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
                <p className="text-muted-foreground">
                  We're committed to reducing our environmental impact through responsible sourcing and
                  production.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-muted/30 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To create footwear that empowers people to move through life with confidence, comfort, and
              style. Every shoe we make is a testament to our dedication to quality and our passion for
              design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
