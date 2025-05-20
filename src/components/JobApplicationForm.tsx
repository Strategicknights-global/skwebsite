import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Briefcase, Calendar, Mail, Phone, Send, Upload, User } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  position: z.string().min(2, { message: "Position is required." }),
  experience: z.string().min(1, { message: "Experience is required." }),
  resume: z.string().min(10, { message: "Resume text or link is required." }),
});

type FormValues = z.infer<typeof formSchema>;

const JobApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      resume: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("access_key", "a5706106-8fd3-4d11-8f24-ca6ebb91ef0d"); // Web3Forms access key
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success('Application submitted successfully!');
        setIsOpen(false);
        form.reset();
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to submit application.');
      }
    } catch (error) {
      console.error('Error sending application:', error);
      toast.error('Failed to submit application. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-sk-primary hover:bg-sk-primary/90 text-white py-3 px-6">
          Apply Now
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 mb-4">
            Job Application
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Fill out the form below to apply. We'll review your application and get back to you soon.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {['name', 'email', 'phone', 'position', 'experience'].map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field as keyof FormValues}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      {field.name === "name" && <User className="h-4 w-4" />}
                      {field.name === "email" && <Mail className="h-4 w-4" />}
                      {field.name === "phone" && <Phone className="h-4 w-4" />}
                      {field.name === "position" && <Briefcase className="h-4 w-4" />}
                      {field.name === "experience" && <Calendar className="h-4 w-4" />}
                      {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={`Enter your ${field.name}`}
                        {...field}
                        type={field.name === "email" ? "email" : field.name === "phone" ? "tel" : "text"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    Resume (Text or Link)
                  </FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Paste your resume text or link here"
                      {...field}
                      className="border rounded px-3 py-2 w-full h-28 resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-sk-primary hover:bg-sk-primary/90"
              disabled={isSubmitting}
            >
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationForm;
