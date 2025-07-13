import { Link, Outlet, useLocation } from 'wouter';
import { ShieldAlert, Activity, Cpu, FileSearch } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { label: 'Dashboard', href: '/', icon: <Cpu size={18} /> },
  { label: 'Real-Time Monitor', href: '/monitor', icon: <Activity size={18} /> },
  { label: 'Threat Alerts', href: '/alerts', icon: <ShieldAlert size={18} /> },
  { label: 'File Analyzer', href: '/analyzer', icon: <FileSearch size={18} /> },
];

export default function Layout() {
  const [location] = useLocation();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm">
        <div className="p-6 font-bold text-xl text-blue-600">CyberGuard AI</div>
        <nav className="flex flex-col gap-1 p-2">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              <a
                className={clsx(
                  'flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-100',
                  location === item.href ? 'bg-blue-200 font-semibold' : 'text-gray-700'
                )}
              >
                {item.icon}
                {item.label}
              </a>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
