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
		name: "HashiCorp Certified: Terraform Associate (004)",
		issuer: "HashiCorp",
		credlyUrl: "https://www.credly.com/badges/80c1655c-a985-4979-86b3-aebaf04b7c3b",
		dateIssued: "15 avril 2026",
		expirationDate: "15 avril 2028",
		badgeImageUrl: "https://img-c.udemycdn.com/open-badges/v2/badge-class/1256144051/d0da6cb2-8edb-438f-b6b2-abaf0acf6f0b11682161235118687450.png",
	},
	{
		name: "Microsoft Certified: Azure Administrator Associate",
		issuer: "Microsoft",
		credlyUrl: "https://learn.microsoft.com/api/credentials/share/fr-fr/julienparrot-2391/62F5DB12CAD5DB9A?sharingId=E44D1F0F723FACE2",
		dateIssued: "9 mars 2026",
		expirationDate: "10 mars 2027",
		badgeImageUrl: az104Badge.src,
	},
];
