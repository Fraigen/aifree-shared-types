export type FeatureFlagTarget = 'built-in-agent' | 'custom-agent' | 'feature';
export interface FeatureFlag {
    _id?: string;
    key: string;
    name: string;
    description?: string;
    target: FeatureFlagTarget;
    targetId?: string;
    enabled: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    updatedBy?: string;
}
export interface CreateFeatureFlagDto {
    key: string;
    name: string;
    description?: string;
    target: FeatureFlagTarget;
    targetId?: string;
    enabled: boolean;
}
export interface UpdateFeatureFlagDto {
    name?: string;
    description?: string;
    enabled?: boolean;
}
export interface FeatureFlagResponse {
    flags: FeatureFlag[];
    total: number;
}
