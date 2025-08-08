import { Badge, Button } from "./ui";

export const Hero = () => {
  return (
    <section className="container mx-auto text-center space-y-5 py-20">
      <Badge>Digital Competency Assessment Platform</Badge>

      <h1>
        Master Your Digital Skills with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
          Skill Certify
        </span>
      </h1>

      <p className="max-w-3xl mx-auto">
        Progressive 3-step assessment system to evaluate and certify your
        digital competencies from A1 to C2 levels. Secure, timed, and
        comprehensive evaluation platform.
      </p>

      <div className="flex gap-5 justify-center">
        <Button size="lg">Start Assessment</Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
    </section>
  );
};
