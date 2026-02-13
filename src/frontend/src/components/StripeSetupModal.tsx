import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useIsStripeConfigured, useSetStripeConfiguration } from '../hooks/useQueries';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { toast } from 'sonner';

export default function StripeSetupModal() {
  const { identity } = useInternetIdentity();
  const { data: isConfigured, isLoading } = useIsStripeConfigured();
  const setStripeConfig = useSetStripeConfiguration();
  const [open, setOpen] = useState(false);
  const [secretKey, setSecretKey] = useState('');
  const [countries, setCountries] = useState('US,CA,GB');

  const isAuthenticated = !!identity;

  useEffect(() => {
    if (!isLoading && isAuthenticated && isConfigured === false) {
      setOpen(true);
    }
  }, [isConfigured, isLoading, isAuthenticated]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!secretKey || !countries) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const allowedCountries = countries.split(',').map((c) => c.trim());
      await setStripeConfig.mutateAsync({ secretKey, allowedCountries });
      toast.success('Stripe configured successfully!');
      setOpen(false);
    } catch (error: any) {
      console.error('Stripe setup error:', error);
      toast.error(error.message || 'Failed to configure Stripe');
    }
  };

  if (!open || !isAuthenticated) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Configure Stripe Payment</DialogTitle>
          <DialogDescription>
            Set up Stripe to enable payment processing for your store.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="secretKey">Stripe Secret Key</Label>
            <Input
              id="secretKey"
              type="password"
              placeholder="sk_test_..."
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="countries">Allowed Countries (comma-separated)</Label>
            <Input
              id="countries"
              placeholder="US,CA,GB"
              value={countries}
              onChange={(e) => setCountries(e.target.value)}
              required
            />
            <p className="text-xs text-muted-foreground">
              Example: US,CA,GB,DE,FR
            </p>
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="flex-1" disabled={setStripeConfig.isPending}>
              {setStripeConfig.isPending ? 'Configuring...' : 'Configure Stripe'}
            </Button>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Skip
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
