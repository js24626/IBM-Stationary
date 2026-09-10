export type LocalProduct = {
  _id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  description: string;
  image_url: string;
  inStock: boolean;
  createdAt: string;
};

const STORAGE_KEY = "doodle_products";

export const defaultProducts: LocalProduct[] = [
  {
    _id: "demo-1",
    name: "Notebook Set",
    category: "Writing",
    price: 220,
    quantity: 20,
    description: "Premium notebook set for daily writing and sketching.",
    image_url:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    inStock: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "demo-2",
    name: "Color Pen Pack",
    category: "Art Supplies",
    price: 350,
    quantity: 12,
    description: "Colorful gel pens for drawing, journaling, and art work.",
    image_url:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
    inStock: true,
    createdAt: new Date().toISOString(),
  },
];

export const readProducts = (): LocalProduct[] => {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
    return defaultProducts;
  }

  try {
    const parsed = JSON.parse(raw) as LocalProduct[];
    return parsed.length ? parsed : defaultProducts;
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
    return defaultProducts;
  }
};

export const saveProducts = (products: LocalProduct[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const addLocalProduct = (product: Omit<LocalProduct, "_id" | "createdAt" | "inStock"> & { _id?: string }) => {
  const current = readProducts();
  const newProduct: LocalProduct = {
    ...product,
    _id: product._id || `${Date.now()}`,
    inStock: Number(product.quantity) > 0,
    createdAt: new Date().toISOString(),
  };

  const nextProducts = [newProduct, ...current];
  saveProducts(nextProducts);
  return nextProducts;
};

export const deleteLocalProduct = (id: string) => {
  const current = readProducts();
  const next = current.filter((product) => product._id !== id);
  saveProducts(next);
  return next;
};
