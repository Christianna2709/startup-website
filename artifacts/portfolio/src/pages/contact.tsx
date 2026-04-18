import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useSubmitContact } from "@workspace/api-client-react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const submitContact = useSubmitContact();

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitContact.mutate(
      { data: values },
      {
        onSuccess: () => {
          toast.success("Message sent successfully. We'll be in touch.");
          form.reset();
        },
        onError: () => {
          toast.error("Failed to send message. Please try again later.");
        }
      }
    );
  }

  return (
    <div className="container mx-auto px-6 py-24 min-h-[80vh] flex items-center">
      <div className="grid lg:grid-cols-2 gap-16 w-full items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Let's build something <span className="text-secondary text-neon-purple">unreasonable.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-lg font-light mb-12 leading-relaxed">
            Have a project in mind? We're currently accepting new clients for Q3. Drop us a line and let's talk about the impossible.
          </p>
          
          <div className="space-y-6 text-zinc-300">
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest mb-1">Email</p>
              <a href="mailto:hello@studio.dev" className="text-lg hover:text-primary transition-colors">hello@studio.dev</a>
            </div>
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest mb-1">Location</p>
              <p className="text-lg">San Francisco, CA / Global</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel p-8 md:p-12 rounded-[2rem]"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-400">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-black/20 border-white/10 text-white h-12 focus:border-primary/50 transition-colors" {...field} />
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
                      <FormLabel className="text-zinc-400">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" type="email" className="bg-black/20 border-white/10 text-white h-12 focus:border-primary/50 transition-colors" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-400">Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Project Inquiry" className="bg-black/20 border-white/10 text-white h-12 focus:border-primary/50 transition-colors" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-400">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your project..." 
                        className="bg-black/20 border-white/10 text-white min-h-[150px] resize-none focus:border-primary/50 transition-colors" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full h-14 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl transition-all"
                disabled={submitContact.isPending}
              >
                {submitContact.isPending ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}
