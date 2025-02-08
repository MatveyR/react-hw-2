export interface Product {
    id: string;
    name: string;
    description?: string;
    category?: string;
    quantity: number;
    price: number;
    unit: string;
    image?: string | null;
}