import az104Badge from "../assets/AZ104.png";

export interface Certification {
	name: string;
	issuer: string;
	credlyUrl: string;
	dateIssued: string;
	expirationDate?: string;
	inProgress?: boolean;
	badgeImageUrl?: string;
}

export const certifications: Certification[] = [
	{
		name: "Microsoft Certified: Azure Administrator Associate",
		issuer: "Microsoft",
		credlyUrl: "https://www.credly.com/badges/your-credly-link",
		dateIssued: "9 mars 2026",
		expirationDate: "10 mars 2027",
		badgeImageUrl: az104Badge.src,
	},
];
