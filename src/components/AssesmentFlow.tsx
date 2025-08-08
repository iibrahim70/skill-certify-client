import data from "@/assets/steps.json";
import { Card, CardContent, CardHeader, CardTitle } from "./ui";
import { cn } from "../lib/utils";

export const AssessmentFlow = () => {
  return (
    <section className="container mx-auto space-y-10 py-20">
      <div className="space-y-3.5 text-center">
        <h2>Assessment Flow</h2>

        <p className="max-w-3xl mx-auto">
          Our 3-step progressive evaluation system ensures accurate competency
          assessment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {data?.map((item) => (
          <Card
            key={item?.step}
            className="shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="text-center space-y-3.5">
              <div
                className={cn(
                  "text-white rounded-full size-14 flex items-center justify-center mx-auto text-xl font-bold drop-shadow-md",
                  item?.bgColor
                )}
              >
                {item?.step}
              </div>

              <CardTitle>{item?.title}</CardTitle>
            </CardHeader>

            <CardContent className="text-left">
              <ul className="list-disc list-inside">
                {item?.points?.map((point, i) => (
                  <li key={i} className="text-sm leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
