export default interface Invoice {
    id: string,
    url: string,
    description: string,
    created: number,
    quantity: number,
    price: number,
    currency: string,
    total: number,
    paid: boolean,
    status: string,
};