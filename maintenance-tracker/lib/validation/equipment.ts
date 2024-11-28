import { z } from 'zod';

export const equipmentSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  location: z.string().min(1, 'Location is required'),
  department: z.enum(['Machining', 'Assembly', 'Packaging', 'Shipping']),
  model: z.string().min(1, 'Model is required'),
  serialNumber: z.string().regex(/^[a-zA-Z0-9]+$/, 'Serial number must be alphanumeric'),
  installDate: z.date().max(new Date(), 'Install date must be in the past'),
  status: z.enum(['Operational', 'Down', 'Maintenance', 'Retired'])
});