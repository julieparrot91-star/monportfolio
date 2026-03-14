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
		credlyUrl: "https://learn.microsoft.com/api/credentials/share/fr-fr/julienparrot-2391/62F5DB12CAD5DB9A?sharingId=E44D1F0F723FACE2",
		dateIssued: "9 mars 2026",
		expirationDate: "10 mars 2027",
		badgeImageUrl: az104Badge.src,
	},
];
