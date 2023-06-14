export interface ITimeLineArrData {
    title?: string | undefined;
    link?: {
        url?: string | undefined;
        text?: string | undefined;
    };
    description: {
        date_from: string,
        date_until?: string | undefined,
        subtitle: string,
        text: string,
        link?: string | undefined,
    }[]
}
