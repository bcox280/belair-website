import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  HoverableCard,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const Skills = () => (
  <HoverableCard>
    <CardHeader className="space-y-0 pb-2">
      <CardTitle className="text-4xl">Skills</CardTitle>
    </CardHeader>
    <CardContent></CardContent>
    <CardFooter className="flex-col items-start gap-1">
      <div className="text-xl font-semibold tracking-tight">Languages</div>
      <Separator />
      <div className="px-4 py-1 text-sm text-muted-foreground">
        TypeScript, JavaScript, CSS, HTML, Java
      </div>

      <div className="text-xl font-semibold tracking-tight">
        Frontend Frameworks
      </div>
      <Separator />
      <div className="px-4 py-1 text-sm text-muted-foreground">
        React, Next.js, Tailwind CSS, Jest, Cypress
      </div>

      <div className="text-xl font-semibold tracking-tight">
        Backend & Devops
      </div>
      <Separator />
      <div className="px-4 py-1 text-sm text-muted-foreground">
        GraphQL, AWS (Lambdas, SQS), Express.js, Relational Databases
      </div>

      <div className="text-xl font-semibold tracking-tight">Concepts</div>
      <Separator />
      <div className="px-4 py-1 text-sm text-muted-foreground">
        Clean Architecture, Asynchronous Programming, API Design, User-Centered
        Design
      </div>
    </CardFooter>
  </HoverableCard>
);
