"use server";

import { prisma } from "@/prisma/prisma-client";

export const getUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
};
