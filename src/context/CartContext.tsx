"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  product: Product;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  add: (product: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "suba-texnika-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.qty, 0);
    const total = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
    return {
      items,
      count,
      total,
      open,
      setOpen,
      add: (product, qty = 1) => {
        setItems((prev) => {
          const found = prev.find((item) => item.product.id === product.id);
          if (found) {
            return prev.map((item) =>
              item.product.id === product.id
                ? { ...item, qty: item.qty + qty }
                : item,
            );
          }
          return [...prev, { product, qty }];
        });
        setOpen(true);
      },
      remove: (id) => setItems((prev) => prev.filter((item) => item.product.id !== id)),
      setQty: (id, qty) => {
        if (qty < 1) {
          setItems((prev) => prev.filter((item) => item.product.id !== id));
          return;
        }
        setItems((prev) =>
          prev.map((item) => (item.product.id === id ? { ...item, qty } : item)),
        );
      },
      clear: () => setItems([]),
    };
  }, [items, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
