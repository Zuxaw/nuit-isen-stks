import { Temporal } from "@js-temporal/polyfill";

function getPlan(id: string) {
    switch (id) {
        case "price_1L0lJJGEbXkm4zaAIjmKyswS":
            return "premium";
        case "price_1L0q6tGEbXkm4zaAVJDInnFX":
            return "enterprise";
        default:
            return "free";
    }
}

function getNextPayment(created: number, interval: string, interval_count: number): number {
    if (isNaN(created) || isNaN(interval_count))
        return Temporal.Now.instant().epochSeconds;
    
    const createdAt = Temporal.Instant.fromEpochSeconds(created).toZonedDateTimeISO(Temporal.Now.timeZone());
    const next = createdAt.add({ [interval+"s"]: interval_count }).toInstant().round("millisecond").epochMilliseconds;
    return next;
}

export { getPlan, getNextPayment };
