import { useState } from "react";
import { createClient } from '../../lib/supabase/client'
import { useRouter } from 'next/navigation'

type NavbarProps = {
  onToggleForm: () => void;
};

export default function Navbar({ onToggleForm }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()

    await supabase.auth.signOut()

    router.refresh()
    router.push('/auth/login')
  }

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-xl font-bold">
            NPC Library
          </div>

          <div className="flex justify-center items-center gap-6">
            <button 
              className="flex items-center justify-between cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              onClick={onToggleForm}
            >
              <svg 
                className="w-5 h-5" 
                viewBox="0 0 20 20" 
                fill="currentColor">
                <path 
                  fillRule="evenodd" 
                  d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z" 
                  clipRule="evenodd">
                </path>
              </svg>
              <span>ADD NPC</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <button className="hover:text-gray-300 cursor-pointer" onClick={handleLogout}>Logout</button>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
              >
                ☰
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block hover:text-gray-300">Home</a>
          <a href="#" className="block hover:text-gray-300">About</a>
          <a href="#" className="block hover:text-gray-300">Services</a>
          <a href="#" className="block hover:text-gray-300">Contact</a>
        </div>
      )}
    </nav>
  );
}