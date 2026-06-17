import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ApplicationFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  positionTitle: string;
}

const ApplicationFormDialog = ({ isOpen, onClose, positionTitle }: ApplicationFormDialogProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedIn: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success state
    // In a real app, this would send to an API
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", linkedIn: "", message: "" });
      onClose();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-forest border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-foreground">
            Apply for {positionTitle}
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="w-16 h-16 text-primary mb-4" />
              </motion.div>
              <h3 className="text-xl font-display text-foreground mb-2">Application Submitted!</h3>
              <p className="text-foreground/70 text-center">
                We'll review your application and get back to you soon.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4 mt-4"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground/80">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/10 border-primary/20 text-foreground placeholder:text-foreground/40"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground/80">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/10 border-primary/20 text-foreground placeholder:text-foreground/40"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground/80">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-background/10 border-primary/20 text-foreground placeholder:text-foreground/40"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedIn" className="text-foreground/80">LinkedIn Profile</Label>
                <Input
                  id="linkedIn"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  className="bg-background/10 border-primary/20 text-foreground placeholder:text-foreground/40"
                  placeholder="https://linkedin.com/in/johndoe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground/80">Why do you want to join EyeLevel? *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-background/10 border-primary/20 text-foreground placeholder:text-foreground/40 resize-none"
                  placeholder="Tell us about yourself and why you'd be a great fit..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full group"
              >
                Submit Application
                <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationFormDialog;
