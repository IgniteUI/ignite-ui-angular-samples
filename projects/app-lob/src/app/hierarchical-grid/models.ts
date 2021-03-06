/* eslint-disable @typescript-eslint/naming-convention */
export interface Song {
    // eslint-disable-next-line id-blacklist
    Number: number;
    Title: string;
    Released: Date;
    Genre: string;
    Album: string;
}
export interface Tour {
    Tour: string;
    StartedOn: string;
    Location: string;
    Headliner: string;
    TouredBy: string;
}
export interface Album {
    Album: string;
    LaunchDate: Date;
    BillboardReview: number;
    USBillboard200: number;
    Artist: string;
    Songs?: Song[];
}

export interface Singer {
    Artist: string;
    Photo?: string;
    Debut: number;
    GrammyNominations: number;
    GrammyAwards: number;
    HasGrammyAward: boolean;
    Tours?: Tour[];
    Albums?: Album[];
}
