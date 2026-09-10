import { House, ListOrdered, ShoppingBasket } from "lucide-react";

export const userSidebarItems = [
  {
    title: "Home",
    url: `/`,
    icon: House,
    isNotCollapsible: true,
    isActive: true,
  },
  {
    title: "My Orders",
    url: `/user/dashboard`,
    icon: ListOrdered,
    isNotCollapsible: true,
    isActive: true,
  },
];

export const adminSidebarItems = [
  {
    title: "Home",
    url: `/`,
    icon: House,
    isNotCollapsible: true,
    isActive: true,
  },
  {
    title: "Manage Products",
    url: `/admin/dashboard/products`,
    icon: ShoppingBasket,
    isNotCollapsible: true,
    isActive: true,
  },
  {
    title: "Manage Orders",
    url: `/admin/dashboard/orders`,
    icon: ListOrdered,
    isNotCollapsible: true,
    isActive: true,
  },
];
