# Basic Maintenance Tracking System Challenge

## Overview
Create a simple maintenance tracking system that allows technicians to log maintenance activities on equipment and visualize basic maintenance metrics.

## Phase 1 (Required)

### Technical Requirements
- Next.js with TypeScript
- Tailwind CSS for styling
- Tanstack Table
- Recharts for visualization
- Zod for form validation

### Core Features

#### 1. Equipment Management
Equipment should be tracked with the following details:
```typescript
interface Equipment {
  id: string;
  name: string;
  location: string;
  department: 'Machining' | 'Assembly' | 'Packaging' | 'Shipping';
  model: string;
  serialNumber: string;
  installDate: Date;
  status: 'Operational' | 'Down' | 'Maintenance' | 'Retired';
}
```

#### 2. Maintenance Records
Each maintenance record should include:
```typescript
interface MaintenanceRecord {
  id: string;
  equipmentId: string;
  date: Date;
  type: 'Preventive' | 'Repair' | 'Emergency';
  technician: string;
  hoursSpent: number;
  description: string;
  partsReplaced?: string[];
  priority: 'Low' | 'Medium' | 'High';
  completionStatus: 'Complete' | 'Incomplete' | 'Pending Parts';
}
```

#### 3. Required Features

##### Equipment Form
Create a form with Zod validation:
- Name (required, min 3 chars)
- Location (required)
- Department (dropdown from enum)
- Model (required)
- Serial Number (required, alphanumeric)
- Install Date (required, must be past date)
- Status (dropdown from enum)

##### Maintenance Record Form
Create a form with Zod validation:
- Equipment (dropdown selection, required)
- Date (required, not future date)
- Type (dropdown from enum)
- Technician (required, min 2 chars)
- Hours Spent (required, positive number, max 24)
- Description (required, min 10 chars)
- Parts Replaced (optional, dynamic array of strings)
- Priority (dropdown from enum)
- Completion Status (dropdown from enum)

##### Equipment Table
- Display all equipment with columns for all fields
- Implement sorting and filtering
- Add status-based row coloring
- Enable bulk status updates

##### Maintenance Records Table
- Show all maintenance records
- Include equipment name (joined from equipment data)
- Implement sorting and filtering
- Group by equipment option

##### Dashboard
Create a simple dashboard with:
- Equipment status breakdown (pie chart)
- Maintenance hours by department (bar chart)
- Recent maintenance activities

## Phase 2 (Extra Credit)

### Database Integration
- Set up a simple SQL database with two tables
- Implement Prisma schema
- Create basic CRUD endpoints
- Include proper relationships

### Reporting
Add ability to:
- Generate a PDF maintenance report for selected equipment
- Include maintenance history
- Show total maintenance hours
- Format tables nicely for printing

## Evaluation Criteria

### Phase 1
- Form validation implementation
- Table functionality
- Chart creation
- Type safety
- Code organization
- Error handling

### Phase 2
- Database schema design
- Print layout quality