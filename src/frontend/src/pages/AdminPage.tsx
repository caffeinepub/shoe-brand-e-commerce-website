import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Plus } from 'lucide-react';
import { useGetProducts, useAddProduct, useDeleteProduct, useGetAllContactForms } from '../hooks/useQueries';
import { ExternalBlob } from '../backend';
import { toast } from 'sonner';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useNavigate } from '@tanstack/react-router';

export default function AdminPage() {
  const navigate = useNavigate();
  const { identity } = useInternetIdentity();
  const { data: products = [], isLoading: productsLoading } = useGetProducts();
  const { data: contactForms = [], isLoading: formsLoading } = useGetAllContactForms();
  const addProduct = useAddProduct();
  const deleteProduct = useDeleteProduct();

  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    priceInCents: '',
    imageFile: null as File | null,
  });

  const [uploadProgress, setUploadProgress] = useState(0);

  const isAuthenticated = !!identity;

  if (!isAuthenticated) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Admin Access Required</h1>
          <p className="text-muted-foreground mb-8">Please login to access the admin panel.</p>
          <Button onClick={() => navigate({ to: '/' })}>Go to Home</Button>
        </div>
      </div>
    );
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewProduct({ ...newProduct, imageFile: e.target.files[0] });
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newProduct.name || !newProduct.description || !newProduct.priceInCents || !newProduct.imageFile) {
      toast.error('Please fill in all fields and select an image');
      return;
    }

    try {
      const imageBytes = new Uint8Array(await newProduct.imageFile.arrayBuffer());
      const imageBlob = ExternalBlob.fromBytes(imageBytes).withUploadProgress((percentage) => {
        setUploadProgress(percentage);
      });

      await addProduct.mutateAsync({
        id: BigInt(0),
        name: newProduct.name,
        description: newProduct.description,
        priceInCents: BigInt(Math.round(parseFloat(newProduct.priceInCents) * 100)),
        image: imageBlob,
      });

      toast.success('Product added successfully');
      setNewProduct({ name: '', description: '', priceInCents: '', imageFile: null });
      setUploadProgress(0);
    } catch (error: any) {
      console.error('Add product error:', error);
      toast.error(error.message || 'Failed to add product');
    }
  };

  const handleDeleteProduct = async (productId: bigint) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      await deleteProduct.mutateAsync(productId);
      toast.success('Product deleted successfully');
    } catch (error: any) {
      console.error('Delete product error:', error);
      toast.error(error.message || 'Failed to delete product');
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="contacts">Contact Forms</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add New Product</CardTitle>
                <CardDescription>Create a new product listing for your store</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddProduct} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Product Name</Label>
                      <Input
                        id="name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        placeholder="e.g., Classic Leather Sneaker"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="price">Price (USD)</Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        value={newProduct.priceInCents}
                        onChange={(e) => setNewProduct({ ...newProduct, priceInCents: e.target.value })}
                        placeholder="99.99"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newProduct.description}
                      onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                      placeholder="Describe the product..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Product Image</Label>
                    <Input id="image" type="file" accept="image/*" onChange={handleImageChange} required />
                  </div>

                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Uploading...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <Button type="submit" disabled={addProduct.isPending || uploadProgress > 0}>
                    <Plus className="mr-2 h-4 w-4" />
                    {addProduct.isPending ? 'Adding...' : 'Add Product'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product List</CardTitle>
                <CardDescription>Manage your product inventory</CardDescription>
              </CardHeader>
              <CardContent>
                {productsLoading ? (
                  <p className="text-muted-foreground">Loading products...</p>
                ) : products.length === 0 ? (
                  <p className="text-muted-foreground">No products yet. Add your first product above.</p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id.toString()}>
                          <TableCell>
                            <img
                              src={product.image.getDirectURL()}
                              alt={product.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                          </TableCell>
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell className="max-w-xs truncate">{product.description}</TableCell>
                          <TableCell>${(Number(product.priceInCents) / 100).toFixed(2)}</TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeleteProduct(product.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
                <CardDescription>View messages from customers</CardDescription>
              </CardHeader>
              <CardContent>
                {formsLoading ? (
                  <p className="text-muted-foreground">Loading contact forms...</p>
                ) : contactForms.length === 0 ? (
                  <p className="text-muted-foreground">No contact form submissions yet.</p>
                ) : (
                  <div className="space-y-4">
                    {contactForms.map((form, index) => (
                      <Card key={index}>
                        <CardContent className="pt-6">
                          <div className="space-y-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-semibold">{form.name}</p>
                                <p className="text-sm text-muted-foreground">{form.email}</p>
                              </div>
                            </div>
                            <p className="text-sm mt-4">{form.message}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
