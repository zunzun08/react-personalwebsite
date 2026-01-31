/**
 * Work Experience Data
 *
 * HOW TO ADD A NEW EXPERIENCE:
 * 1. Copy an existing entry
 * 2. Update all fields with your new experience
 * 3. Add it to the array (most recent first)
 *
 * FIELD GUIDE:
 * - id: unique identifier (lowercase, no spaces)
 * - company: company name
 * - role: your job title
 * - startDate: 'YYYY-MM' format
 * - endDate: 'YYYY-MM' format or null if current job
 * - description: 2-4 sentences about what you did
 * - technologies: array of tools/skills used
 * - url: company website (optional)
 */

import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'gamma',
    company: 'GammaQ',
    role: 'Data Analyst',
    startDate: '2025-09',
    endDate: '',
    description: 'Build and maintain ETL pipelines from various API and scraper sources thorugh the use of PowerBI dashboards to support trading & strategy decisions for agricultural commodities with a special focus on Corn, Soybeans, and Wheat.',
    technologies: ['Python', 'SQL', 'Spark', 'Microsoft Fabric', 'Azure', 'PowerBI'],
    url: 'https://www.gammaq.com'
  },

  {
    id: 'embark',
    company: 'Embark',
    role: 'Data Science Intern',
    startDate: '2024-06',
    endDate: '2025-01',
    description: 'Supported data operations for the growth team by conducting exploratory data analysis and statistical analysis on various project metrics (e.g., revenue generated, hours billed, consultants assigned) to support optimal pricing strategy decisions. Cleaned, updated, and verified data accuracy across various CRM data storages using Pandas library for Python along with Matplotlib and Seaborn for data visualization and presentation.',
    technologies: ['Python', 'SQL', 'Snowflake', 'Tableau', 'Salesforce'],
    url: 'https://www.embarkwithus.com',
  }
  // Add more experiences here following the same structure
  // Example:
  // {
  //   id: 'company-name',
  //   company: 'Company Name',
  //   role: 'Your Role',
  //   startDate: '2023-01',
  //   endDate: '2023-12',
  //   description: 'What you did...',
  //   technologies: ['Skill1', 'Skill2'],
  //   url: 'https://company.com',
  // },
];
