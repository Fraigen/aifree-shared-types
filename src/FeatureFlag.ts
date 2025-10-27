// Feature flag types
export type FeatureFlagTarget = 'built-in-agent' | 'custom-agent' | 'feature';

export interface FeatureFlag {
  _id?: string;
  key: string; // Unique identifier (e.g., 'agent.translator', 'agent.writer')
  name: string; // Display name
  description?: string;
  target: FeatureFlagTarget;
  targetId?: string; // For specific entities (e.g., agent endpoint or ID)
  enabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  updatedBy?: string; // Admin user ID who last updated
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

