/*
 * @version 1.0.0-alpha.13
 */
declare class Globalize {

    public static load(cldr: any);

    public static locale(locale: string);

    public static formatNumber(value: number, attributes?: {
        style?: string; /* decimal (default), or percent */
        minimumIntegerDigits?: number;
        minimumFractionDigits?: number;
        maximumFractionDigits?: number;
        minimumSignificantDigits?: number;
        maximumSignificantDigits?: number;
        round?: string /* ceil, floor, round (default), or truncate */
        useGrouping?: boolean;
    }, locale?: string);

    /*
     * @param skeleton - eg. "GyMMMd".
     */
    public static formatDate(value: Date, skeleton: string);

    /*
     * @param format.skeleton - eg. "GyMMMd".
     */
    public static formatDate(value: Date, format: { skeleton: string });

    /*
     * @param format.date - full, long, medium, or short.
     */
    public static formatDate(value: Date, format: { date: string });

    /*
     * @param format.time - full, long, medium, or short.
     */
    public static formatDate(value: Date, format: { time: string });

    /*
     * @param format.datetime - full, long, medium, or short.
     */
    public static formatDate(value: Date, format: { datetime: string });

    /*
     * @param format.pattern - raw pattern eg. { pattern: "dd/mm" }.
     */
    public static formatDate(value: Date, format: { pattern: string });

    public static parseNumber(value: number, options?: { style?: string }); /* decimal (default), or percent. */

    public static parseDate(value: string, skeleton: string);
    public static parseDate(value: string, format: { skeleton: string });
    public static parseDate(value: string, format: { date: string });
    public static parseDate(value: string, format: { time: string });
    public static parseDate(value: string, format: { datetime: string });
    public static parseDate(value: string, format: { pattern: string });
}