"use server";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
// import { PrismaClient } from "../generated/prisma";
import { prisma } from "@/db/prisma"
import { convertToPlainObject } from "../utils";

// Get latest products

export async function getLatestProducts() {
  // const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  const formatted = data.map(product => ({
    ...product,
    rating: Number(product.rating),
  }));

  return convertToPlainObject(formatted);
}


// get single product by it's slug

export async function getProductBySlug(slug: string){
  return await prisma.product.findFirst({
    where: {slug: slug},
  })
}