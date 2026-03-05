export interface ServiceCategory {
    id: string;
    name: string;
    icon: string;
    description: string;
}

export interface Professional {
    id: string;
    name: string;
    expertise: string;
    rating: number;
    reviewsCount: number;
    priceStart: number;
    profilePic?: string;
    services: string[];
}
