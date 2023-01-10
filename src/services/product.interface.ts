export interface Product {
    id: number;
    name: string;
    qty: number;
    price: number;
    productDetails: ProductDetails
}

export interface UpdateProduct {
    name: string;
    qty: number;
    price: number;
}

export interface ProductDetails {
    dimension?: string;
    partNumber: string;
    weight?: number;
    manufacturer?: string;
    origin?: string;
}

