import { features } from "@/assets/features.ts";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui";
import { cn } from "../lib/utils";

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container space-y-10">
        <div className="space-y-3.5 text-center">
          <h2>Why Choose Skill Certify?</h2>

          <p className="max-w-2xl mx-auto">
            Our platform offers a comprehensive and secure assessment experience
            designed to accurately evaluate your digital competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features?.map((item) => {
            const Icon = item?.icon;

            return (
              <Card
                key={item?.title}
                className="shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div
                    className={cn(
                      "rounded-lg size-12 flex items-center justify-center mb-3.5",
                      item?.iconBg
                    )}
                  >
                    <Icon className={cn("size-7", item?.iconColor)} />
                  </div>

                  <div className="space-y-1.5">
                    <CardTitle>{item?.title}</CardTitle>
                    <CardDescription>{item?.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
