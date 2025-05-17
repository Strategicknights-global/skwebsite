import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Briefcase, Calendar, Mail, Phone, Upload, User, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from 'emailjs-com';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  position: z.string().min(2, { message: "Position is required." }),
  experience: z.string().min(1, { message: "Experience is required." }),
  resume: z.instanceof(FileList).refine(files => files.length > 0, {
    message: "Resume is required."
  })
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
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init("ZVjXM3qF-gALzLIio");
      
      // Convert resume to base64 for email attachment
      const file = data.resume[0];
      const reader = new FileReader();
      
      reader.onload = async (event) => {
        if (event.target && event.target.result) {
          const base64File = event.target.result.toString().split(',')[1];
          
          // Prepare the template parameters - use proper parameter names that match your template
          const templateParams = {
            from_name: data.name,
            reply_to: data.email,
            phone_number: data.phone,
            position: data.position,
            experience: data.experience,
            resume_name: file.name,
            resume_content: base64File
            // We don't need to_email here as it should be configured in the EmailJS template
          };
          
          console.log("Sending job application with params:", {
            ...templateParams,
            resume_content: '[BASE64_FILE_CONTENT_TRUNCATED]'
          });
          
          // Send the email using EmailJS
          const response = await emailjs.send(
            'service_85qrmwy',
            'template_1jeutkn',
            templateParams
          );
          
          console.log("Job application sent successfully:", response);
          toast.success('Application submitted successfully!');
          setIsOpen(false);
          form.reset();
        }
      };
      
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
        toast.error('Error reading the resume file.');
        setIsSubmitting(false);
      };
      
      reader.readAsDataURL(file);
      
    } catch (error) {
      console.error('Error sending application:', error);
      toast.error('Failed to submit application. Please try again later.');
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
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
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
                  <FormLabel className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Position Applied For
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the position you're applying for" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Years of Experience
                  </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter years of experience" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="resume"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    Resume
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => onChange(e.target.files)}
                      {...field}
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
