import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 ">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section - Logo & Copyright */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex-shrink-0">

            <h2 className="myfont">YOUSSEF <br />MOUSSADDEQ</h2>
            </Link>
            <p className="text-gray-400 text-sm">
              © 2026 YM
            </p>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex gap-8">
            <a
              href="https://github.com/fcbysf"
              className="text-gray-400 hover:text-white transition-colors font-semibold text-sm"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/youssef-moussaddeq-1a8585352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="text-gray-400 hover:text-white transition-colors font-semibold text-sm"
            >
              LINKEDIN 
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
