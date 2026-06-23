export const featuredProjects = [
    {
        id: 'sanam',
        layout: 'sanam',
        name: 'Sanam',
        subtitle: 'Gaming Platform · Saudi Arabia',
        tags: ['.NET', 'Angular', 'Node.js', 'Next.js', 'Firebase'],
        description:
            'A full-scale gaming platform serving 600K+ registered and 100K+ active users across KSA, available on iOS and Google Play. Three integrated systems power the entire ecosystem with real-time Firebase sync.',
        highlights: [
            'Next.js public website for player acquisition and engagement',
            'Angular + .NET admin panel with RBAC for users, configs, leaderboards, and rewards',
            'Node.js backend API with real-time Firebase synchronization across all surfaces',
            'Scaled to 600K+ registered users and 100K+ monthly active players',
        ],
        stats: [
            { label: 'Registered Users', value: '600K+' },
            { label: 'Active Users', value: '100K+' },
            { label: 'Markets', value: 'KSA' },
            { label: 'Platforms', value: 'iOS · Android · Web' },
        ],
        surfaces: [
            {
                id: 'website',
                title: 'Public Website',
                description:
                    'Next.js marketing and player-facing website — the front door to the Sanam gaming ecosystem.',
                image: '/projects/sanam/Sanam-Website.png',
                link: '',
                linkLabel: 'Visit Website',
            },
            {
                id: 'game',
                title: 'Mobile Game',
                description:
                    'Native iOS and Android game clients — the core player experience on App Store and Google Play.',
                image: '/projects/sanam/sanam-mobile.jpeg',
                links: {
                    ios: '',
                    android: '',
                },
            },
        ],
        systems: [
            {
                id: 'backend',
                title: 'Backend API',
                description:
                    'Node.js API layer orchestrating game logic, user sessions, and real-time Firebase sync across website, mobile app, and admin panel.',
            },
            {
                id: 'admin',
                title: 'Admin Panel',
                description:
                    'Angular + .NET RBAC-enabled dashboard for managing users, game configs, leaderboards, and reward distribution at scale.',
            },
        ],
    },
    {
        id: 'osool',
        layout: 'showcase',
        name: 'Osool',
        subtitle: 'Property & Asset Management · Saudi Arabia',
        tags: ['PHP', 'Laravel', 'Blade', 'MySQL'],
        description:
            'A multi-module property management system for Saudi enterprise clients, managing thousands of users\' assets, leases, and financial records across KSA with full Arabic RTL support.',
        highlights: [
            'Asset registration, ownership transfers, lease management, and tenant portals',
            'Financial reporting modules with major query optimizations — up to 99% fewer queries',
            'Critical reporting response times reduced by up to 86% (7× speedup)',
            'Clean architecture with SOLID, repository pattern, and service layer',
        ],
        screenshots: [
            { src: '/projects/osool/osool-1.jpeg', caption: 'Platform Overview' },
            { src: '/projects/osool/osool-2.jpeg', caption: 'Module Interface' },
        ],
    },
    {
        id: 'abeelone',
        layout: 'showcase',
        name: 'AbeelOne',
        subtitle: 'Multi-Tenant AI Workspace Platform',
        tags: ['.NET', 'Next.js', 'Claude API', 'Gamma API'],
        description:
            'A multi-tenant SaaS platform enabling organizations to manage AI-powered workflows — context-aware chat, automated document generation, and intelligent meeting summaries from a single dashboard.',
        highlights: [
            'Claude API and Gamma API integration for in-app AI content and presentation generation',
            'CEO dashboard with real-time business intelligence feed from KSA and global procurement sources',
            'Clean Architecture .NET backend with Next.js App Router frontend',
            'Multi-tenant meeting scheduling with AI-assisted agendas and full Arabic RTL support',
        ],
        screenshots: [
            { src: '/projects/abeelone/1.png', caption: 'Workspace Dashboard' },
            { src: '/projects/abeelone/2.png', caption: 'AI Chat Interface' },
            { src: '/projects/abeelone/3.png', caption: 'Document Generation' },
            { src: '/projects/abeelone/4.png', caption: 'Meeting Summaries' },
        ],
    },
    {
        id: 'multi-agent',
        layout: 'showcase',
        name: 'Multi-Agent AI Software House',
        subtitle: 'Autonomous Agent Orchestration',
        tags: ['Next.js', 'Claude API', 'React.js', 'Multi-Agent'],
        description:
            'A fully AI-driven virtual software house where specialized autonomous agents — PM, Developer, QA, and Designer — collaborate to deliver software projects end-to-end from a single project brief.',
        highlights: [
            'Orchestration layer managing agent task delegation, inter-agent communication, and state persistence',
            'Next.js frontend for submitting briefs and receiving structured deliverables',
            'Streamed Claude API responses for real-time visibility into each agent\'s reasoning',
            'Outputs include architecture plans, code scaffolds, and test reports',
        ],
    },
    {
        id: 'geo-tracking',
        layout: 'showcase',
        name: 'Geo-Tracking Accuracy Model',
        subtitle: 'Final Year Project · FAST NUCES',
        tags: ['Python', 'TensorFlow', 'Scikit-learn', 'FastAPI'],
        description:
            'A machine learning pipeline to correct GPS distance measurement errors, comparing LSTM, Random Forest, and XGBoost models against manually surveyed ground truth data.',
        highlights: [
            'Compared LSTM, Random Forest, and XGBoost against surveyed ground truth',
            'Achieved measurable reduction in mean absolute error (MAE)',
            'Deployed correction model as a real-time FastAPI microservice',
        ],
    },
];
