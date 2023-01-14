interface EmailAttrs {
    from: string;
    to: string;
    subject: string;
    text: string;
    bookingAttrs: object;
    chamberAttrs: object;
}

export { EmailAttrs };