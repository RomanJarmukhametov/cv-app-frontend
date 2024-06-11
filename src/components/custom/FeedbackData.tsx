import { getFeedbackData } from "@/data/loaders";
import Link from "next/link";
import BodyText from "@/components/custom/BodyText";
import Avatar from "@/components/custom/Avatar";

import FeedbackDataProps from "@/types/FeedbackDataProps";

/* This code snippet is defining an asynchronous function named `FeedbackData` that fetches feedback
data using the `getFeedbackData` function. It then processes the response data to display feedback
information on a webpage. */
export default async function FeedbackData() {
  const response = await getFeedbackData();
  const strapiData: FeedbackDataProps[] = response.data;

  if (!Array.isArray(strapiData) || strapiData.length === 0) {
    return (
      <BodyText>
        No feedback found. Be the first to share your thoughts.
      </BodyText>
    );
  }

  return (
    <>
      {strapiData.map((feedback, index) => (
        <div
          className="flex flex-col gap-4 mb-10"
          key={index}>
          <div className="bg-gallery rounded p-4 mb-4">
            <BodyText>{feedback.review}</BodyText>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-2">
            {feedback.image && (
              <Avatar
                src={feedback.image.url}
                alt={feedback.image.alternativeText}
                size={50}
              />
            )}
            <p className="text-gray-800 text-base font-normal">
              {feedback.name}, {feedback.position}
            </p>

            <Link
              href={feedback.linkedinProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-base font-normal hover:underline">
              LinkedIn Profile
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
