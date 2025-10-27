import { ApiResponse } from "./common.js";

// Transaction Analytics Types
export interface SpendingSummary {
  totalSpent: number;
  totalTransactions: number;
  averageSpending: number;
}

export interface MonthlyTrend {
  _id: {
    year: number;
    month: number;
  };
  spent: number;
  transactions: number;
}

export interface TopAgent {
  _id: string;
  agentName?: string;
  totalSpent: number;
  usageCount: number;
  lastUsed: Date;
}

export interface RecentActivity {
  _id: string;
  amount: number;
  description: string;
  createdAt: Date;
  agentType?: string;
  translationKey?: string;
}

export interface PurchaseVsUsage {
  _id: string;
  total: number;
  count: number;
}

export interface TransactionAnalytics {
  spendingSummary: SpendingSummary;
  monthlyTrends: MonthlyTrend[];
  topAgents: TopAgent[];
  recentActivity: RecentActivity[];
  purchaseVsUsage: PurchaseVsUsage[];
}

// Project Analytics Types
export interface ProjectSummaryItem {
  _id: string;
  count: number;
  totalBudget: number;
}

export interface MonthlyProjectTrend {
  _id: {
    year: number;
    month: number;
  };
  projectsCreated: number;
  totalBudget: number;
}

export interface RecentProject {
  _id: string;
  title: string;
  status: string;
  budget: number;
  createdAt: Date;
  freelancerId?: {
    _id: string;
    name: string;
    email: string;
  };
}

export interface BudgetAnalysis {
  totalBudget: number;
  averageBudget: number;
  minBudget: number;
  maxBudget: number;
  projectCount: number;
}

export interface TopFreelancer {
  _id: string;
  projectCount: number;
  totalBudget: number;
  avgBudget: number;
}

export interface ProjectAnalytics {
  projectSummary: ProjectSummaryItem[];
  monthlyProjectTrends: MonthlyProjectTrend[];
  recentProjects: RecentProject[];
  budgetAnalysis: BudgetAnalysis;
  topFreelancers: TopFreelancer[];
}

// Dashboard User Data
export interface DashboardUser {
  id: string;
  name?: string;
  email: string;
  balance: number;
  type: string;
}

// Complete Dashboard Response
// Performance Metrics
export interface PerformanceMetrics {
  completionRate: number;
  averageProjectDuration: number; // in days
  successRate: number;
  onTimeDeliveryRate: number;
  clientSatisfactionScore: number;
}

// Freelancer Insights
export interface FreelancerInsight {
  freelancerId: string;
  name: string;
  email: string;
  photoUrl?: string;
  imageUrl?: string;
  photo?: string;
  projectsCompleted: number;
  totalEarned: number;
  averageRating: number;
  repeatCollaborations: number;
  lastProjectDate: Date;
}

// Financial Insights


// Comparative Analytics
export interface ComparativeAnalytics {
  currentPeriod: {
    spending: number;
    projects: number;
    freelancers: number;
  };
  previousPeriod: {
    spending: number;
    projects: number;
    freelancers: number;
  };
  growthRates: {
    spending: number;
    projects: number;
    freelancers: number;
  };
}

// Activity Timeline
export interface ActivityTimelineItem {
  _id: string;
  type: 'project_created' | 'project_completed' | 'payment_made' | 'freelancer_hired' | 'milestone_achieved' | 'activity_03';
  title: string;
  translationKey?: string;
  description: string;
  amount?: number;
  timestamp: Date;
  relatedEntityId?: string;
  relatedEntityType?: 'project' | 'freelancer' | 'transaction';
  icon?: string;
}

// Dashboard Filters
export interface DashboardFilters {
  dateRange?: {
    start: Date;
    end: Date;
  };
  freelancerIds?: string[];
  budgetRange?: {
    min: number;
    max: number;
  };
}

export interface ClientDashboardData {
  user: DashboardUser;
  transactions: TransactionAnalytics;
  projects: ProjectAnalytics;
  performance: PerformanceMetrics;
  freelancerInsights: FreelancerInsight[];

  comparativeAnalytics: ComparativeAnalytics;
  activityTimeline: ActivityTimelineItem[];
  totalSpent: number;
  totalProjects: number;
  freelancersHired: number;
}

export interface ClientDashboardResponse
  extends ApiResponse<ClientDashboardData> {
  success: boolean;
}
