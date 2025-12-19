import { Brain } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 rounded-lg">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-700">OracleFutures</span>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              AI-Powered Crypto Futures Trading Assistant
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © {currentYear} OracleFutures. For educational purposes only.
            </p>
          </div>

          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-700 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Disclaimer
            </a>
          </div>

          <p className="text-xs text-gray-400 text-center max-w-2xl">
            Trading cryptocurrencies carries risk. This tool is for informational purposes only and does not constitute financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
