export interface Work {
  id: string;
  name: string;
  description: string;
}

export const works: Work[] = [
  {
    id: "backend-engineering",
    name: "Backend Engineering",
    description: "Systems that hold up under load.",
  },
  {
    id: "freelancing",
    name: "Freelancing",
    description: "The bar is that it's genuinely interesting.",
  },
  {
    id: "financial-planning",
    name: "Financial Planning",
    description: "15+ families guided toward clearer financial decisions.",
  },
  {
    id: "building",
    name: "Building",
    description: "Try new things and technologies: pgqueue",
  },
];
