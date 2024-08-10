"use client";

import React, { useEffect } from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";

const formSchema = z.object({
  search: z.string(),
});

const SearchBar = () => {
  const query = useSearchParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: query.get("search") ?? "", //either we get what is from the url(the search value) or we set it to an empty string
    },
  });

  const router = useRouter();

  const search = query.get("search");

  //when the component mounts for the first time
  useEffect(() => {
    form.setValue("search", search ?? "");
  }, [form, search]); //this runs when both search and form change

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (values.search) {
      router.push(`/search-room?search=${values.search}`);
    } else {
      router.push(`/search-room`);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-4 mt-8"
        >
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Filter rooms such as rust, erlang"
                    className="w-[500px]"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Search room</Button>
          <Button onClick={() => {
            form.setValue("search", "")
            router.push("/search-room")
          }}>Clear</Button>
        </form>
      </Form>
    </div>
  );
};

export default SearchBar;
