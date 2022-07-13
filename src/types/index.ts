export type Project = {
  name: string;
  image: string;
  stack: string[];
  summary: string;
  github: string;
  site: string;
  imageAttribute?: {
    link: string;
    text: string;
  };
};
