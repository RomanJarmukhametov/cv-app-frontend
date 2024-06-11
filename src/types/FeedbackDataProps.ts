import ImageProps from "@/types/ImageProps";
/* This TypeScript code defines an interface named `FeedbackDataProps`. This interface specifies the
structure of an object that should have the following properties: */

interface FeedbackDataProps {
  id: string;
  review: string;
  name: string;
  position: string;
  linkedinProfile: string;
  image: ImageProps;
}

export default FeedbackDataProps;
