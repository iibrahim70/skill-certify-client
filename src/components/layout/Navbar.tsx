import { Button } from "../ui";

export const Navbar = () => {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto py-3.5 flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <div className="size-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SC</span>
          </div>

          <h5>Skill Certify</h5>
        </div>

        <div className="flex items-center gap-5">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};
