export interface PictureData {
    mimeType?: string;
    links?: string[];
    base64?: string;
}
export interface UserProfileData {
    displayName?: string;
    displayPicture?: PictureData;
    displayIcon?: PictureData;
    description?: string;
    organizationDid?: string;
    organizationName?: string;
    registrarDid?: string;
    registrarName?: string;
}
export declare class UserProfile {
    type?: string;
    category?: string;
    displayName?: string;
    displayPicture?: string;
    displayIcon?: string;
    description?: string;
    organizationDid?: string;
    organizationName?: string;
    registrarDid?: string;
    registrarName?: string;
}
