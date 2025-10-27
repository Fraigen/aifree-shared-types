import { ApiResponse } from "./common.js";

export type OrganizationRole = "admin" | "member";

export interface IOrganization {
  _id: string;
  name: string;
  description?: string;
  logo?: string;
  ownerId: string; // The original client who created the organization
  createdAt: Date;
  updatedAt: Date;
}

export interface ITeamMember {
  _id: string;
  organizationId: string;
  userId: string;
  role: OrganizationRole;
  joinedAt: Date;
  invitedBy: string; // User ID who sent the invitation
}

export interface IInvitation {
  _id: string;
  organizationId: string;
  email: string;
  role: OrganizationRole;
  invitedBy: string; // User ID who sent the invitation
  status: "pending" | "accepted" | "rejected" | "expired";
  token: string; // Unique token for accepting invitation
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Extended user interface for organization context
export interface IUserWithOrganization {
  _id: string;
  email: string;
  name?: string;
  type: string;
  organizationId?: string;
  organizationRole?: OrganizationRole;
  organization?: IOrganization;
}

// Request/Response types
export interface CreateOrganizationRequest {
  name: string;
  description?: string;
}

export interface InviteTeamMemberRequest {
  email: string;
  role: OrganizationRole;
}

export interface AcceptInvitationRequest {
  token: string;
  name: string;
  password: string;
  photo?: string;
}

export interface UpdateTeamMemberRoleRequest {
  userId: string;
  role: OrganizationRole;
}

// Response types
export interface OrganizationResponse extends ApiResponse<IOrganization> {}
export interface TeamMemberResponse extends ApiResponse<ITeamMember> {}
export interface InvitationResponse extends ApiResponse<IInvitation> {}

export interface OrganizationWithMembersResponse extends ApiResponse<{
  organization: IOrganization;
  members: (ITeamMember & {
    userId: {
      _id: string;
      email: string;
      name?: string;
      photo?: string;
    };
  })[];
  pendingInvitations: IInvitation[];
}> {}

export interface TeamDashboardData {
  totalMembers: number;
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalBudget: number;
  averageProjectDuration: number;
  recentActivity: {
    type: "project_created" | "project_assigned" | "member_joined" | "project_completed" | "project_updated" | "conversation_started";
    userId: string;
    userName?: string;
    projectId?: string;
    projectTitle?: string;
    timestamp: Date;
    metadata?: any;
  }[];
  memberStats: {
    userId: string;
    userName?: string;
    projectsCount: number;
    activeProjectsCount: number;
    completedProjectsCount: number;
    totalBudgetManaged: number;
    averageCompletionTime: number;
    lastActivity: Date;
    assignedProjects: {
      _id: string;
      title: string;
      status: string;
      budget: number;
      startDate: Date;
      endDate?: Date;
    }[];
  }[];
  projectDistribution: {
    status: string;
    count: number;
    totalBudget: number;
  }[];
  monthlyTrends: {
    month: string;
    projectsCreated: number;
    projectsCompleted: number;
    totalBudget: number;
  }[];
  teamWorkload: {
    userId: string;
    userName?: string;
    currentWorkload: number; // Number of active projects
    upcomingDeadlines: {
      projectId: string;
      projectTitle: string;
      daysUntilDeadline: number;
    }[];
  }[];
  collaborationMetrics: {
    totalConversations: number;
    activeConversations: number;
    averageResponseTime: number;
    sharedFavorites: number;
  };
}

export interface TeamDashboardResponse extends ApiResponse<TeamDashboardData> {}
