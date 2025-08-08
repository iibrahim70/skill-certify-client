export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        <div className="grid lg:grid-cols-4 gap-3.5 py-10">
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="size-8 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <h5>Skill Certify</h5>
            </div>

            <p>
              Digital competency assessment platform for progressive skill
              evaluation and certification.
            </p>
          </div>

          <div className="space-y-3.5">
            <h4>Platform</h4>
            <ul>
              <li>Start Assessment</li>
              <li>View Results</li>
              <li>Certificates</li>
            </ul>
          </div>

          <div className="space-y-3.5">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="space-y-3.5">
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 text-center py-5">
          <p>&copy; 2025 Skill Certify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
