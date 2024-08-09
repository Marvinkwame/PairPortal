"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createRoomFunction } from "./actions";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Room name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  gitHubRepository: z.string().min(2, {
    message: "Git Hub Repository is required",
  }),
  languages: z.string().min(2, {
    message: "Tools is required",
  }),
});

const CreateRoomForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      gitHubRepository: "",
      languages: "",
    },
  });

  const router = useRouter()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    const room = await createRoomFunction(values);

    router.push("/")
  }

  return (
    <div className="mt-16">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name Of Room</FormLabel>
                <FormControl>
                  <Input placeholder="Learning Rust" {...field} />
                </FormControl>
                <FormDescription>Your Room Name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Learning Rust to make more money"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Give a brief description of the project you are working on.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gitHubRepository"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Git Hub Repository</FormLabel>
                <FormControl>
                  <Input placeholder="Project link goes here" {...field} />
                </FormControl>
                <FormDescription>
                  Kindly put the link to the git hub repository
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="languages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Languages or Tools</FormLabel>
                <FormControl>
                  <Input placeholder="Rust, Python, etc" {...field} />
                </FormControl>
                <FormDescription>
                  Programming Languages and Tools to be used in your room.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateRoomForm;
