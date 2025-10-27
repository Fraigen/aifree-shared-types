export interface Freelancer {
    _id: string;
    name?: string;
    surname?: string;
    email: string;
    photoUrl?: string;
    imageUrl?: string;
    photo?: string;
    experience?: string;
    yearsOfExperience?: string;
    headline?: string;
    category?: string;
    skills?: string[];
    links?: {
        title: string;
        url: string;
    }[];
    recommendations?: string[];
    website?: string;
    availability?: {
        status: "available" | "partially_available" | "unavailable";
        availableHours?: number;
        nextAvailableDate?: Date;
    };
    legalDocuments?: {
        id: string;
        type: string;
        verified: boolean;
        uploadDate: Date;
        expiryDate?: Date;
    }[];
    complianceStatus?: "pending" | "verified" | "rejected";
    experiences?: {
        title: string;
        company: string;
        description: string;
        startDate: Date;
        endDate?: Date;
        current: boolean;
    }[];
    userId: string;
    reviewSummary?: {
        averageRating: number;
        totalReviews: number;
    };
}
