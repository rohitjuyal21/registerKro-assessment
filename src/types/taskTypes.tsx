export type TSTATUS = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
export type TPRIORITY = "HIGH" | "MEDIUM" | "LOW";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TSTATUS;
  priority: TPRIORITY;
  createdAt: Date;
}
