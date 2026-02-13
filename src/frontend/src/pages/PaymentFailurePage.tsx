import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { XCircle } from 'lucide-react';

export default function PaymentFailurePage() {
  const navigate = useNavigate();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardContent className="pt-12 pb-12">
              <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-6">
                <XCircle className="h-10 w-10 text-red-600 dark:text-red-400" />
              </div>

              <h1 className="text-3xl font-bold mb-4">Payment Failed</h1>
              <p className="text-muted-foreground text-lg mb-8">
                We couldn't process your payment. Please try again or contact support if the problem persists.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 mb-8">
                <p className="text-sm text-muted-foreground">
                  Your cart items have been saved. You can return to your cart and try checking out again.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate({ to: '/cart' })}>
                  Return to Cart
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })}>
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
