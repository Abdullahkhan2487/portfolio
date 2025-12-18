import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
    useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, []);

    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Hero Section */}
                <section className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-primary-500/10 opacity-20 pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-primary-500/10 to-transparent opacity-30 pointer-events-none" />

                    <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
                        <div className="text-secondary-500 mb-4 flex items-center">
                            <div className="h-px w-16 bg-secondary-500 mr-4" />
                            <span>SOFTWARE ENGINEER</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                                Abdullah
                            </span>{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                                Khan
                            </span>{' '}
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mb-10 opacity-90">
                            Crafting digital experiences that push boundaries. I architect solutions at the intersection
                            of technology and human potential.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-primary-500 hover:bg-primary-600 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/20"
                            >
                                View Work
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 border border-primary-500 text-primary-500 hover:bg-primary-500/10 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                        <i data-feather="chevron-down" className="text-secondary-500" />
                    </div>
                </section>

                {/* About Section */}
                {/* About Section */}
                <section id="about" className="py-20 relative">
                    <div className="absolute -left-28 md:-left-36 top-1/3 md:top-1/4 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl -z-10" />
                    <div className="absolute -right-20 bottom-1/4 w-64 h-64 rounded-full bg-secondary-500/10 blur-3xl -z-10" />

                    <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative lg:-translate-y-4 lg:-translate-x-6">
                            {/* Background squares */}
                            <div className="absolute -inset-0 border-2 border-primary-500/30 rounded-xl rotate-6" />
                            <div className="absolute -inset-0 border-2 border-secondary-500/30 rounded-xl rotate-12" />

                            {/* Profile Image */}
                            <img
                                src="/meai.png"
                                alt="Profile"
                                className="relative z-10 rounded-3xl w-72 h-72 lg:w-76 lg:h-76 object-cover translate-x-20"
                            />
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">
                                <span className="text-primary-500">//</span> About Me
                            </h2>
                            <div className="space-y-6 text-lg opacity-90">
                                <p>
                                    I&apos;m a passionate software engineer with expertise in building scalable,
                                    performant applications that solve real-world problems. My approach combines
                                    technical excellence with creative problem-solving.
                                </p>
                                <p>
                                    With 3+ years of experience, I&apos;ve worked across the stack - from crafting
                                    pixel-perfect UIs to designing robust backend architectures. I thrive in
                                    environments that challenge me to grow and innovate.
                                </p>
                                <p>
                                    When I&apos;m not coding, you can find me contributing to open-source, exploring new
                                    technologies, or mentoring aspiring developers.
                                </p>
                            </div>
                            {/* ...rest of About Section */}
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section id="tech-stack" className="py-20 relative">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
                    <div className="max-w-5xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            <span className="text-primary-500">//</span> Tech{' '}
                            <span className="text-secondary-500">Stack</span>
                        </h2>
                        <p className="text-center max-w-2xl mx-auto text-lg opacity-90 mb-12">
                            A snapshot of the technologies and practices I use to design, build, and ship robust
                            software.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Frontend */}
                            <div className="bg-dark-800/80 border border-dark-700 rounded-xl p-6 hover:border-primary-500 transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <i data-feather="monitor" className="text-secondary-500" />
                                    <h3 className="text-xl font-semibold">Frontend</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'React.js',
                                        'Angular',
                                        'AngularJS',
                                        'JavaScript',
                                        'TypeScript',
                                        'HTML5',
                                        'CSS3',
                                        'Tailwind',
                                        'Bootstrap',
                                        'jQuery',
                                        'AJAX',
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 rounded-full text-sm bg-primary-500/10 text-primary-200 border border-primary-500/40"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="bg-dark-800/80 border border-dark-700 rounded-xl p-6 hover:border-primary-500 transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <i data-feather="server" className="text-secondary-500" />
                                    <h3 className="text-xl font-semibold">Backend</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        '.NET Framework',
                                        '.NET Core',
                                        'ASP.NET Core',
                                        'MVC',
                                        'WCF',
                                        'WWF',
                                        'Node.js',
                                        'Express.js',
                                        'FastAPI',
                                        'Flask',
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 rounded-full text-sm bg-secondary-500/10 text-secondary-100 border border-secondary-500/40"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile */}
                            <div className="bg-dark-800/80 border border-dark-700 rounded-xl p-6 hover:border-primary-500 transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <i data-feather="smartphone" className="text-secondary-500" />
                                    <h3 className="text-xl font-semibold">Mobile</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Flutter', 'Dart', 'BLoC', 'GetX', 'Firebase', 'BLE', 'MQTT'].map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 rounded-full text-sm bg-primary-500/10 text-primary-200 border border-primary-500/40"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Databases */}
                            <div className="bg-dark-800/80 border border-dark-700 rounded-xl p-6 hover:border-primary-500 transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <i data-feather="database" className="text-secondary-500" />
                                    <h3 className="text-xl font-semibold">Databases</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['SQL Server', 'MySQL', 'MSSQL', 'PostgreSQL', 'MongoDB', 'MariaDB'].map(
                                        (item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1 rounded-full text-sm bg-primary-500/10 text-primary-200 border border-primary-500/40"
                                            >
                                                {item}
                                            </span>
                                        ),
                                    )}
                                </div>
                            </div>

                            {/* Web Technologies */}
                            <div className="bg-dark-800/80 border border-dark-700 rounded-xl p-6 hover:border-primary-500 transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <i data-feather="globe" className="text-secondary-500" />
                                    <h3 className="text-xl font-semibold">Web Technologies</h3>
                                </div>
                                <ul className="space-y-2 text-sm md:text-base text-gray-200 leading-relaxed list-disc list-inside">
                                    <li>XHTML</li>
                                    <li>Responsive UI</li>
                                    <li>SEO-friendly markup</li>
                                </ul>
                            </div>

                            {/* CMS / Platforms */}
                            <div className="bg-dark-800/80 border border-dark-700 rounded-xl p-6 hover:border-primary-500 transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <i data-feather="grid" className="text-secondary-500" />
                                    <h3 className="text-xl font-semibold">CMS / Platforms</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['WordPress', 'Joomla', 'Microsoft Dynamics CRM'].map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 rounded-full text-sm bg-secondary-500/10 text-secondary-100 border border-secondary-500/40"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Reporting */}
                            <div className="bg-dark-800/80 border border-dark-700 rounded-xl p-6 hover:border-primary-500 transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <i data-feather="bar-chart-2" className="text-secondary-500" />
                                    <h3 className="text-xl font-semibold">Reporting</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Crystal Reports', 'SQL Reporting Services'].map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 rounded-full text-sm bg-primary-500/10 text-primary-200 border border-primary-500/40"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* DevOps */}
                            <div className="bg-dark-800/80 border border-dark-700 rounded-xl p-6 hover:border-primary-500 transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <i data-feather="settings" className="text-secondary-500" />
                                    <h3 className="text-xl font-semibold">DevOps</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'Docker',
                                        'Kubernetes',
                                        'Git',
                                        'GitHub Actions',
                                        'Jenkins',
                                        'CI/CD',
                                        'Azure DevOps',
                                        'Microsoft Azure',
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 rounded-full text-sm bg-secondary-500/10 text-secondary-100 border border-secondary-500/40"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Architecture */}
                            <div className="bg-dark-800/80 border border-dark-700 rounded-xl p-6 hover:border-primary-500 transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <i data-feather="aperture" className="text-secondary-500" />
                                    <h3 className="text-xl font-semibold">Architecture</h3>
                                </div>
                                <ul className="space-y-2 text-sm md:text-base text-gray-200 leading-relaxed list-disc list-inside">
                                    <li>SOLID principles</li>
                                    <li>Clean Architecture</li>
                                    <li>SDLC, requirement analysis, solution design</li>
                                </ul>
                            </div>

                            {/* Other Skills */}
                            <div className="bg-dark-800/80 border border-dark-700 rounded-xl p-6 hover:border-primary-500 transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <i data-feather="cpu" className="text-secondary-500" />
                                    <h3 className="text-xl font-semibold">Other Skills</h3>
                                </div>
                                <ul className="space-y-2 text-sm md:text-base text-gray-200 leading-relaxed list-disc list-inside">
                                    <li>AI fundamentals</li>
                                    <li>IoT development</li>
                                    <li>API integrations</li>
                                    <li>Documentation standards</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20">
                    <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="text-primary-500">//</span> Selected{' '}
                            <span className="text-secondary-500">Projects</span>
                        </h2>
                        <p className="max-w-2xl mx-auto mt-4 opacity-90">
                            A showcase of my most impactful work. Each project represents a unique challenge and
                            innovative solution.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <div className="group relative overflow-hidden rounded-xl border border-dark-700 hover:border-primary-500 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900/80 z-10" />
                            <img
                                src="/applivity.jpg"
                                alt="Project"
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                                <div className="flex items-center mb-2">
                                    <span className="bg-primary-500 text-xs px-2 py-1 rounded mr-2">.NET</span>
                                    <span className="bg-secondary-500 text-xs px-2 py-1 rounded mr-2">React</span>
                                    <span className="bg-blue-500 text-xs px-2 py-1 rounded">Azure</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Software House LMS</h3>
                                <p className="text-sm opacity-90 mb-4">
                                    Empowering Workflow through smart, intuitive, and scalable LMS solutions deployed
                                    directly on Azure
                                </p>
                                <a
                                    href="https://siqasoftwaresystem-frontend.netlify.app/"
                                    className="text-primary-500 hover:text-primary-400 text-sm font-medium flex items-center"
                                >
                                    View
                                    <i data-feather="arrow-right" className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="group relative overflow-hidden rounded-xl border border-dark-700 hover:border-primary-500 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900/80 z-10" />
                            <img
                                src="http://static.photos/technology/640x360/102"
                                alt="Project"
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                                <div className="flex items-center mb-2">
                                    <span className="bg-primary-500 text-xs px-2 py-1 rounded mr-2">Flutter</span>
                                    <span className="bg-secondary-500 text-xs px-2 py-1 rounded mr-2">.Net</span>
                                    <span className="bg-gray-500 text-xs px-2 py-1 rounded mr-2">MongoDb</span>
                                    <span className="bg-yellow-500 text-xs px-2 py-1 rounded mr-2">FireBase</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Kookit</h3>
                                <p className="text-sm opacity-90 mb-4">
                                    A Flutter app with a .NET backend, letting users sync with a cooking robot via QR
                                    code to follow or customize recipes
                                </p>
                                <a
                                    href="#"
                                    className="text-primary-500 hover:text-primary-400 text-sm font-medium flex items-center"
                                >
                                    View
                                    <i data-feather="arrow-right" className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="group relative overflow-hidden rounded-xl border border-dark-700 hover:border-primary-500 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900/80 z-10" />
                            <img
                                src="/techhaven.png"
                                alt="Project"
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                                <div className="flex items-center mb-2">
                                    <span className="bg-primary-500 text-xs px-2 py-1 rounded mr-2">WordPress</span>
                                    <span className="bg-secondary-500 text-xs px-2 py-1 rounded mr-2">PHP</span>
                                    <span className="bg-yellow-500 text-xs px-2 py-1 rounded">JS</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Tech Haven</h3>
                                <p className="text-sm opacity-90 mb-4">
                                    Wordpress based E-Commerece site with custom PHP and JS
                                </p>
                                <a
                                    href="https://techhaven.com.pk/"
                                    className="text-primary-500 hover:text-primary-400 text-sm font-medium flex items-center"
                                >
                                    View
                                    <i data-feather="arrow-right" className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </div>
                        {/* Project 4 */}
                        <div className="group relative overflow-hidden rounded-xl border border-dark-700 hover:border-primary-500 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900/80 z-10" />
                            <img
                                src="/goodtime.png"
                                alt="Project"
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                                <div className="flex items-center mb-2">
                                    <span className="bg-primary-500 text-xs px-2 py-1 rounded mr-2">WordPress</span>
                                    <span className="bg-secondary-500 text-xs px-2 py-1 rounded mr-2">PHP</span>
                                    <span className="bg-yellow-500 text-xs px-2 py-1 rounded">JS</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Good Time Jewellers</h3>
                                <p className="text-sm opacity-90 mb-4">
                                    Wordpress based E-Commerece site for a canadian client with custom PHP and JS
                                </p>
                                <a
                                    href="https://goodtimejewellers.com/"
                                    className="text-primary-500 hover:text-primary-400 text-sm font-medium flex items-center"
                                >
                                    View
                                    <i data-feather="arrow-right" className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center mt-16">
                        <a
                            href="https://github.com/Abdullahkhan2487"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center px-6 py-3 border border-primary-500 text-primary-500 hover:bg-primary-500/10 rounded-full font-medium transition-all duration-300"
                        >
                            View All Projects
                            <i data-feather="arrow-right" className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 relative">
                    <div className="absolute -left-20 top-1/4 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl -z-10" />
                    <div className="absolute -right-20 bottom-1/4 w-64 h-64 rounded-full bg-secondary-500/10 blur-3xl -z-10" />

                    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 bg-dark-800 rounded-xl border border-dark-700 p-8 md:p-12 shadow-xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                            <span className="text-primary-500">//</span> Get In{' '}
                            <span className="text-secondary-500">Touch</span>
                        </h2>
                        <p className="text-lg opacity-90 mb-10">
                            Have a project in mind or want to discuss potential opportunities? I&apos;d love to hear
                            from you.
                        </p>

                        <form className="space-y-6" action="https://formspree.io/f/xkowwdzg" method="POST">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="What's this about?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/20"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
