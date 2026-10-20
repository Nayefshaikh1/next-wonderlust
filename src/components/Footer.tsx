import Link from "next/link";
import { Globe, DollarSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20 text-xs text-gray-600">
      <div className="max-w-[1760px] mx-auto px-4 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-gray-900 mb-3 text-sm">Support</h4>
          <ul className="space-y-2.5">
            <li><Link href="#" className="hover:underline">Help Center</Link></li>
            <li><Link href="#" className="hover:underline">AirCover Safety</Link></li>
            <li><Link href="#" className="hover:underline">Anti-discrimination</Link></li>
            <li><Link href="#" className="hover:underline">Disability support</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-3 text-sm">Hosting</h4>
          <ul className="space-y-2.5">
            <li><Link href="/listings/new" className="hover:underline">Airbnb your home</Link></li>
            <li><Link href="#" className="hover:underline">AirCover for Hosts</Link></li>
            <li><Link href="#" className="hover:underline">Hosting resources</Link></li>
            <li><Link href="#" className="hover:underline">Community forum</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-3 text-sm">Wonderlust</h4>
          <ul className="space-y-2.5">
            <li><Link href="#" className="hover:underline">Newsroom</Link></li>
            <li><Link href="#" className="hover:underline">New features</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Investors</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6">
        <div className="max-w-[1760px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-600">
            <span>© 2026 Wonderlust, Inc.</span>
            <span>·</span>
            <Link href="#" className="hover:underline">Privacy</Link>
            <span>·</span>
            <Link href="#" className="hover:underline">Terms</Link>
            <span>·</span>
            <Link href="#" className="hover:underline">Sitemap</Link>
            <span>·</span>
            <Link href="#" className="hover:underline whitespace-nowrap">Company details</Link>
          </div>
          <div className="flex items-center gap-4 font-semibold text-gray-900 shrink-0">
            <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> English (US)</span>
            <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
