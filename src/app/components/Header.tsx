'use client';

import Link from 'next/link';

export default function Header() {
  const socialLinks = [
    { name: 'Email', path: 'mailto:cleoreyes@uw.edu' },
    { name: 'LinkedIn', path: 'https://linkedin.com/in/cleoreyes' },
    { name: 'GitHub', path: 'https://github.com/cleoreyes' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold">
              Cleo Reyes
            </Link>
          </div>
          <nav className="flex space-x-6">
            {socialLinks.map((item) => (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
} 