import {z} from "zod";
import { insertProductSchema , insertCartSchema, cartItemSchema } from "@/lib/constants/validators";

export type Product = z.infer<typeof insertProductSchema> & {
    id: string;
    rating: number;
    createdAt: Date;
}

export type Cart = z.infer<typeof cartItemSchema>;
export type CartItem = z.infer<typeof insertCartSchema>;
