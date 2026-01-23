import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const services = [
  "Growth Strategy",
  "Performance Marketing",
  "AI & Automation",
  "Creative & Branding",
  "Digital Infrastructure",
  "Full-Service Partnership",
];

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
];

interface AppointmentDialogProps {
  children: React.ReactNode;
}

const AppointmentDialog = ({ children }: AppointmentDialogProps) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    companySize: "",
    service: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast.error("Please select a date for your appointment");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Appointment request submitted! We'll get back to you within 24 hours.");
    setOpen(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      companySize: "",
      service: "",
    });
    setDate(undefined);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-card-foreground">
            Book Your Free Consultation
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Date Picker */}
          <div className="space-y-2">
            <Label htmlFor="date" className="text-card-foreground">Select Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-background border-border",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-card border-border z-50" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-card-foreground">Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Your full name"
              className="bg-background border-border"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-card-foreground">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+91 98765 43210"
              className="bg-background border-border"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-card-foreground">Email ID *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="you@company.com"
              className="bg-background border-border"
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company" className="text-card-foreground">Company *</Label>
            <Input
              id="company"
              required
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder="Your company name"
              className="bg-background border-border"
            />
          </div>

          {/* Company Size */}
          <div className="space-y-2">
            <Label htmlFor="companySize" className="text-card-foreground">Company Size *</Label>
            <Select
              value={formData.companySize}
              onValueChange={(value) => handleInputChange("companySize", value)}
              required
            >
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border z-50">
                {companySizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Service */}
          <div className="space-y-2">
            <Label htmlFor="service" className="text-card-foreground">Service You're Looking For *</Label>
            <Select
              value={formData.service}
              onValueChange={(value) => handleInputChange("service", value)}
              required
            >
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border z-50">
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-bold mt-6"
          >
            {isSubmitting ? "Submitting..." : "Book Appointment"}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
