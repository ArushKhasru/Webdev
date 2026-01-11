import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6">

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Help</li>
          <li className="hover:underline cursor-pointer">Press</li>
          <li className="hover:underline cursor-pointer">API</li>
          <li className="hover:underline cursor-pointer">Jobs</li>
          <li className="hover:underline cursor-pointer">Privacy</li>
          <li className="hover:underline cursor-pointer">Terms</li>
          <li className="hover:underline cursor-pointer">Locations</li>
        </ul>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 mt-4">
          © {new Date().getFullYear()} Instagram from Meta
        </div>

      </div>
    </footer>
  );
}
