"use server";

import { prisma } from "@/prisma/prisma-client";

export const getCategories = async () => {
  const categories = await prisma.category.findMany();

  return categories;
};
