export default function getPriceId(price: string) {
    switch (price) {
        case 'premium':
            return 'price_1L0lJJGEbXkm4zaAIjmKyswS';
        case 'enterprise':
            return 'price_1L0lJJGEbXkm4zaAIjmKyswS';
        default:
            return undefined;
    }
}
