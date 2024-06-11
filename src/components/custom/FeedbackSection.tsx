"use client";

import { useState } from "react";

import Wrapper from "@/components/custom/Wrapper";
import TheHeading from "@/components/custom/TheHeading";
import BodyText from "@/components/custom/BodyText";
import FeedbackDataForm from "@/components/custom/FeedbackDataForm";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import FeedbackData from "@/components/custom/FeedbackData";

import FeedbackSectionProps from "@/types/FeedbackSectionProps";

/**
 * This function renders a feedback section component in a TypeScript React application, including a
 * title, description, button to open a dialog for adding feedback, and feedback data display.
 * @param  - The `FeedbackSection` component takes in a `data` prop which should be an object with the
 * following shape:
 * @returns The `FeedbackSection` component is being returned. It renders a section with a title,
 * description, and a button that triggers a dialog for adding feedback. The dialog contains a form for
 * submitting feedback.
 */
export function FeedbackSection({
  data,
}: {
  readonly data: FeedbackSectionProps;
}) {
  const { title, sectionId, description, buttonText } = data;

  /* The code snippet `const [isDialogOpen, setIsDialogOpen] = useState(false);` is using the
  `useState` hook from React to create a state variable `isDialogOpen` and a corresponding function
  `setIsDialogOpen` to update the state. The initial value of `isDialogOpen` is set to `false`. */
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <Wrapper
      as="section"
      id={sectionId}
      className="mb-8">
      <TheHeading level="2">{title}</TheHeading>
      <FeedbackData />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mt-10 bg-primary/10 p-5 rounded">
        <BodyText>{description}</BodyText>
        <Dialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setIsDialogOpen(true)}>{buttonText}</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add some feedback</DialogTitle>
              <DialogDescription>
                <FeedbackDataForm onClose={closeDialog} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </Wrapper>
  );
}
