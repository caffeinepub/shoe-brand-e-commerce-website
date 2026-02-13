import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useEffect } from 'react';

export default function PaymentSuccessPage() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardContent className="pt-12 pb-12">
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>

              <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Thank you for your purchase. Your order has been confirmed and will be shipped soon.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 mb-8">
                <p className="text-sm text-muted-foreground mb-2">
                  You will receive an email confirmation with your order details and tracking information.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate({ to: '/' })}>
                  Back to Home
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate({ to: '/catalog' })}>
                  Continue Shopping
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
