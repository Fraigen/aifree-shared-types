export enum ProjectStatus {
  DRAFT = "draft",
  OPEN = "open",
  PENDING_FREELANCER_ACCEPTANCE = "pending_freelancer_acceptance",
  IN_PROGRESS = "in_progress",
  PENDING_VALIDATION = "pending_validation",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export interface IAttachment {
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  uploadedAt: Date;
}

export interface IFreelancerApplications {
  _id: string;
  conversationId?: string;
  freelancerId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Client information for projects
export interface IProjectClient {
  _id: string;
  name: string;
  companyName?: string;
  companyLogo?: string;
}

export interface IProject {
  _id: string;
  title: string;
  description: string;
  jobFamilyId: string;
  jobCategoryId: string;
  startDate: Date;
  endDate?: Date;
  needsHumanValidation?: boolean;
  freelancerApplications?: IFreelancerApplications[];
  agentName?: string;
  freelancerId?: string;
  validationInstructions?: string;
  status: ProjectStatus;
  createdAt: Date;
  updatedAt: Date;
  clientId: string;
  budget: number;
  attachments?: IAttachment[];
  conversationId?: string;
  taskId?: string;
  // Organization fields
  organizationId?: string;
  assignedToUserId?: string; // Team member assigned to this project
  // Optional populated client information
  client?: IProjectClient;
  // Optional populated assigned user information
  assignedTo?: {
    _id: string;
    name: string;
    email: string;
    photo?: string;
  };
}
