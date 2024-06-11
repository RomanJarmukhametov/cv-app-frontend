import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { postData } from "@/data/loaders";

/* The `const FormSchema` declaration is creating a schema using the Zod library for validating form
data in the FeedbackDataForm component. Here's a breakdown of what each field in the schema
represents: */
const FormSchema = z.object({
  review: z
    .string()
    .min(10, {
      message: "Review must be at least 10 characters.",
    })
    .max(3000, {
      message: "Review must not be longer than 3000 characters.",
    }),
  name: z.string().min(1, { message: "Name is required." }),
  position: z.string().min(1, { message: "Position is required." }),
  linkedinProfile: z
    .string()
    .url({ message: "LinkedIn profile must be a valid URL." })
    .refine((url) => url.startsWith("https://www.linkedin.com"), {
      message: "LinkedIn profile must start with 'https://www.linkedin.com'",
    }),
  image: z.instanceof(File, { message: "Please attach your avatar." }),
});

/**
 * The `FeedbackDataForm` component is a form that allows users to submit feedback data, including an
 * image, which is then sent to an API endpoint for processing.
 * @param data - The `data` parameter in the `onSubmit` function refers to the form data that will be
 * submitted when the user clicks the "Submit" button. This data includes the review, name, position,
 * LinkedIn profile URL, and optionally an image uploaded by the user.
 */
export default function FeedbackDataForm({ onClose }: { onClose: () => void }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      review: "",
      name: "",
      position: "",
      linkedinProfile: "",
    },
  });

  /**
   * The function onSubmit asynchronously sends form data, including an image if provided, to a specified
   * API endpoint and handles success and error cases accordingly.
   * @param data - The `data` parameter in the `onSubmit` function is of type `z.infer<typeof
   * FormSchema>`. The `data` object contains various fields and values based on the
   * structure
   */
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    if (data.image) {
      formData.append("files.image", data.image);
    }

    try {
      const responseData = await postData("/api/feedbacks-data", formData);
      console.log("Successfully submitted:", responseData);
      onClose();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    field.onChange(file);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="review"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Review</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me a little bit about your experience with me"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter position"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="linkedinProfile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LinkedIn Profile</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter LinkedIn profile URL"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
