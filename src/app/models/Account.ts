import { Product } from "./Product";

export interface Account {
    accountId?: number,
    email?: string,
    password?: string,
    products?: Product[]
}