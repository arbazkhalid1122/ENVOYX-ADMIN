# EnvoyX Admin Dashboard

A comprehensive admin dashboard for managing the EnvoyX invoice financing platform.

## Features

### 🏠 Home Dashboard
- System overview with key metrics
- Recent activities and system health
- Quick action buttons for common tasks
- Pending tasks and alerts

### 📄 Invoice Financing
- **Available for financing**: View and manage invoices ready for approval
- **Under review**: Monitor invoices currently being reviewed
- **Overview & Insights**: Analytics and performance metrics
- **History**: Complete invoice processing history

### 📊 Reports & Insights
- **Overview**: Comprehensive analytics dashboard
- **Claims intelligence**: Advanced reporting and insights

### 👥 User Management
- **Businesses**: Manage registered business accounts
- **Financiers**: Administer financier profiles
- **Insurers & TPAs**: Manage insurance and TPA relationships
- **Admin users**: System administrator management

### ⚙️ Workflows
- Monitor automated system workflows
- Performance metrics and health status
- Workflow execution history

### 🔧 Core Configuration
- System settings and preferences
- Security configurations
- Email and database settings
- Integration management

## Technology Stack

- **Frontend**: Next.js 14 with React
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Custom component library with Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React hooks and context

## Design System

The admin dashboard uses a consistent design system with:

- **Primary Color**: `#03a84e` (Green)
- **Background**: `#f7f7f7` (Light Gray)
- **Text Colors**: 
  - Primary: `#272635`
  - Secondary: `#5f6057`
- **Borders**: `#e4e4e7`

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
envoyx-admin/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Main dashboard
│   ├── invoice-financing/ # Invoice management
│   ├── reports/          # Analytics and reports
│   ├── user-management/  # User administration
│   ├── workflows/        # System workflows
│   └── core-config/      # System configuration
├── components/           # Reusable components
│   ├── ui/              # Base UI components
│   ├── layout/          # Layout components
│   └── invoices/        # Invoice-specific components
└── lib/                 # Utilities and helpers
```

## Key Components

### Sidebar Navigation
- Collapsible navigation with nested menu items
- Active state management
- Icon-based navigation

### Dashboard Cards
- Metric cards with trends
- Status indicators
- Interactive elements

### Data Tables
- Sortable and filterable tables
- Action buttons
- Status badges

### Configuration Forms
- Tabbed interface for different settings
- Form validation
- Real-time updates

## Backend Integration

The admin dashboard is designed to integrate with the existing EnvoyX backend APIs:

- **Users API**: `/users` - User management
- **Companies API**: `/companies` - Business management
- **Invoices API**: `/invoices` - Invoice processing
- **Claims API**: `/claims` - Claims management

## Development

### Adding New Pages
1. Create a new directory in `app/`
2. Add a `page.jsx` file
3. Import and use the Sidebar component
4. Follow the existing design patterns

### Styling Guidelines
- Use the established color palette
- Maintain consistent spacing (6px grid)
- Follow the component hierarchy
- Use Tailwind utility classes

### Component Development
- Create reusable components in `components/ui/`
- Use TypeScript for type safety
- Follow the established naming conventions
- Include proper documentation

## Deployment

The admin dashboard can be deployed using:

```bash
npm run build
npm start
```

## Contributing

1. Follow the existing code style
2. Add proper documentation
3. Test thoroughly before submitting
4. Use meaningful commit messages

## License

This project is part of the EnvoyX platform and follows the same licensing terms.
