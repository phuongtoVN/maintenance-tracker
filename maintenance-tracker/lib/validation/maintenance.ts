import { z } from 'zod';

export const maintenanceSchema = z.object({
  equipmentId: z.string().min(1, 'Equipment selection is required'),
  date: z.date().max(new Date(), 'Date cannot be in the future'),
  type: z.enum(['Preventive', 'Repair', 'Emergency']),
  technician: z.string().min(2, 'Technician name must be at least 2 characters'),
  hoursSpent: z.number().positive().max(24, 'Hours must be between 0 and 24'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  partsReplaced: z.array(z.string()).optional(),
  priority: z.enum(['Low', 'Medium', 'High']),
  completionStatus: z.enum(['Complete', 'Incomplete', 'Pending Parts'])
});