export type Project = {
  name: string;
  image: string;
  stack: string[];
  summary: string;
  github: string;
  site: string;
  imageAttribution?: {
    link: string;
    text: string;
  };
};
