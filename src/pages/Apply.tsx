import { useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Upload,
  CheckCircle,
  ArrowLeft,
  FileText,
  X,
  Plus,
  Trash2,
} from "lucide-react";
import GreenButton from "@/components/GreenButton";

const applicationSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  street: z.string().min(5, "Street address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(5, "Zip code is required"),
  country: z.string().min(2, "Country is required"),
  currentSalary: z.string().min(1, "Current salary is required"),
  currentJobTitle: z.string().optional(),
  expectedSalary: z.string().min(1, "Expected salary is required"),
  linkedIn: z.string().optional(),
  employeeName: z.string().optional(),
  employeeCode: z.string().optional(),
  employeeEmail: z.string().optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

interface Experience {
  id: string;
  company: string;
  title: string;
  duration: string;
}

const Apply = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const position = searchParams.get("position") || "General Application";

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [education, setEducation] = useState<Education[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      country: "India",
    },
  });

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/rtf",
        "application/vnd.oasis.opendocument.text",
      ];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a .doc, .docx, .pdf, .odt, or .rtf file",
          variant: "destructive",
        });
        return;
      }
      setResumeFile(file);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a photo smaller than 2MB",
          variant: "destructive",
        });
        return;
      }
      setPhotoFile(file);
    }
  };

  const addEducation = () => {
    setEducation([
      ...education,
      { id: Date.now().toString(), degree: "", institution: "", year: "" },
    ]);
  };

  const removeEducation = (id: string) => {
    setEducation(education.filter((e) => e.id !== id));
  };

  const updateEducation = (
    id: string,
    field: keyof Education,
    value: string,
  ) => {
    setEducation(
      education.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    );
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      { id: Date.now().toString(), company: "", title: "", duration: "" },
    ]);
  };

  const removeExperience = (id: string) => {
    setExperience(experience.filter((e) => e.id !== id));
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: string,
  ) => {
    setExperience(
      experience.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    );
  };

  const onSubmit = async (data: ApplicationFormData) => {
    if (!resumeFile) {
      toast({
        title: "Resume required",
        description: "Please upload your resume to continue",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission - in production, send to backend
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);

    // Navigate to thank you page
    navigate(
      `/thank-you?type=application&position=${encodeURIComponent(position)}`,
    );
  };

  return (
    <div className="min-h-screen bg-[#253e35] py-10">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/careers")}
            className="flex items-center gap-2 text-[rgba(248,255,232,0.7)] hover:text-[#E2FEA5] mb-8 transition-colors font-bricolage"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Careers
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <GreenButton>Application Form</GreenButton>
            <h1 className="font-dela text-3xl md:text-4xl lg:text-5xl text-[#F8FFE8] mb-4 uppercase">
              Apply for <span style={{ color: "#E2FEA5" }}>{position}</span>
            </h1>
            <p className="text-xl text-[rgba(248,255,232,0.7)] max-w-2xl mx-auto font-bricolage">
              Upload your resume to auto-fill the form, or complete the fields
              below. Fields marked with * are mandatory.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Resume Upload - Primary */}
              <div className="bg-[#173229] rounded-2xl p-6 md:p-8 border border-[#E2FEA5]/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-[#F8FFE8] uppercase">
                    Upload Resume
                  </h2>
                  <span className="text-sm text-[rgba(248,255,232,0.5)] font-bricolage">
                    Autofill Application
                  </span>
                </div>

                <div className="border-2 border-dashed border-[#E2FEA5]/30 rounded-xl p-8 text-center hover:border-[#E2FEA5]/50 transition-colors">
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx,.odt,.rtf"
                    onChange={handleResumeChange}
                    className="hidden"
                  />
                  {resumeFile ? (
                    <div className="flex items-center justify-center gap-3">
                      <FileText className="w-6 h-6 text-[#E2FEA5]" />
                      <span className="text-[#E2FEA5] font-medium font-bricolage">
                        {resumeFile.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => setResumeFile(null)}
                        className="text-[rgba(248,255,232,0.5)] hover:text-red-400 ml-2"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <label htmlFor="resume" className="cursor-pointer">
                      <Upload className="w-12 h-12 text-[#E2FEA5]/50 mx-auto mb-4" />
                      <p className="text-[#F8FFE8] font-medium mb-2 font-bricolage">
                        Upload your resume or drag and drop it here
                      </p>
                      <p className="text-[rgba(248,255,232,0.5)] text-sm font-bricolage">
                        Only .doc, .docx, .pdf, .odt, .rtf
                      </p>
                    </label>
                  )}
                </div>
              </div>

              {/* Basic Info */}
              <div className="bg-[#173229] rounded-2xl p-6 md:p-8 border border-[#E2FEA5]/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-[#F8FFE8] uppercase">
                    Basic Info
                  </h2>
                  <button
                    type="button"
                    className="text-sm text-[#E2FEA5] hover:underline font-bricolage"
                  >
                    Clear
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-[#F8FFE8] font-bricolage"
                    >
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      placeholder="Enter your first name"
                      className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-sm">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-[#F8FFE8] font-bricolage"
                    >
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      placeholder="Enter your last name"
                      className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-sm">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-[#F8FFE8] font-bricolage"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="Enter your email"
                      className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-[#F8FFE8] font-bricolage"
                    >
                      Mobile * (+91)
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="Enter your mobile number"
                      className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="bg-[#173229] rounded-2xl p-6 md:p-8 border border-[#E2FEA5]/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-[#F8FFE8] uppercase">
                    Address Information
                  </h2>
                  <button
                    type="button"
                    className="text-sm text-[#E2FEA5] hover:underline font-bricolage"
                  >
                    Clear
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="street"
                      className="text-[#F8FFE8] font-bricolage"
                    >
                      Street *
                    </Label>
                    <Input
                      id="street"
                      {...register("street")}
                      placeholder="Enter your street address"
                      className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                    />
                    {errors.street && (
                      <p className="text-red-400 text-sm">
                        {errors.street.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="city"
                        className="text-[#F8FFE8] font-bricolage"
                      >
                        City *
                      </Label>
                      <Input
                        id="city"
                        {...register("city")}
                        placeholder="Enter your city"
                        className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                      />
                      {errors.city && (
                        <p className="text-red-400 text-sm">
                          {errors.city.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="state"
                        className="text-[#F8FFE8] font-bricolage"
                      >
                        State/Province *
                      </Label>
                      <Input
                        id="state"
                        {...register("state")}
                        placeholder="Enter your state"
                        className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                      />
                      {errors.state && (
                        <p className="text-red-400 text-sm">
                          {errors.state.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="zipCode"
                        className="text-[#F8FFE8] font-bricolage"
                      >
                        Zip/Postal Code *
                      </Label>
                      <Input
                        id="zipCode"
                        {...register("zipCode")}
                        placeholder="Enter your zip code"
                        className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                      />
                      {errors.zipCode && (
                        <p className="text-red-400 text-sm">
                          {errors.zipCode.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="country"
                        className="text-[#F8FFE8] font-bricolage"
                      >
                        Country *
                      </Label>
                      <Input
                        id="country"
                        {...register("country")}
                        placeholder="Enter your country"
                        className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                      />
                      {errors.country && (
                        <p className="text-red-400 text-sm">
                          {errors.country.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Details */}
              <div className="bg-[#173229] rounded-2xl p-6 md:p-8 border border-[#E2FEA5]/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-[#F8FFE8] uppercase">
                    Professional Details
                  </h2>
                  <button
                    type="button"
                    className="text-sm text-[#E2FEA5] hover:underline font-bricolage"
                  >
                    Clear
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="currentSalary"
                      className="text-[#F8FFE8] font-bricolage"
                    >
                      Current Salary (LPA) *
                    </Label>
                    <Input
                      id="currentSalary"
                      {...register("currentSalary")}
                      placeholder="e.g., 8 LPA"
                      className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                    />
                    {errors.currentSalary && (
                      <p className="text-red-400 text-sm">
                        {errors.currentSalary.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="currentJobTitle"
                      className="text-[#F8FFE8] font-bricolage"
                    >
                      Current Job Title
                    </Label>
                    <Input
                      id="currentJobTitle"
                      {...register("currentJobTitle")}
                      placeholder="Enter your current job title"
                      className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="expectedSalary"
                      className="text-[#F8FFE8] font-bricolage"
                    >
                      Expected Salary (LPA) *
                    </Label>
                    <Input
                      id="expectedSalary"
                      {...register("expectedSalary")}
                      placeholder="e.g., 12 LPA"
                      className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                    />
                    {errors.expectedSalary && (
                      <p className="text-red-400 text-sm">
                        {errors.expectedSalary.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Educational Details */}
              <div className="bg-[#173229] rounded-2xl p-6 md:p-8 border border-[#E2FEA5]/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-[#F8FFE8] uppercase">
                    Educational Details
                  </h2>
                  <button
                    type="button"
                    onClick={addEducation}
                    className="flex items-center gap-2 text-sm text-[#E2FEA5] hover:underline font-bricolage"
                  >
                    <Plus className="w-4 h-4" /> Add
                  </button>
                </div>

                {education.length === 0 ? (
                  <p className="text-[rgba(248,255,232,0.5)] text-center py-4 font-bricolage">
                    Click "Add" to add your educational details
                  </p>
                ) : (
                  <div className="space-y-4">
                    {education.map((edu) => (
                      <div
                        key={edu.id}
                        className="bg-[#253e35] rounded-xl p-4 border border-[#E2FEA5]/10"
                      >
                        <div className="flex justify-end mb-3">
                          <button
                            type="button"
                            onClick={() => removeEducation(edu.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Input
                            value={edu.degree}
                            onChange={(e) =>
                              updateEducation(edu.id, "degree", e.target.value)
                            }
                            placeholder="Degree/Qualification"
                            className="bg-[#173229] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)]"
                          />
                          <Input
                            value={edu.institution}
                            onChange={(e) =>
                              updateEducation(
                                edu.id,
                                "institution",
                                e.target.value,
                              )
                            }
                            placeholder="Institution"
                            className="bg-[#173229] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)]"
                          />
                          <Input
                            value={edu.year}
                            onChange={(e) =>
                              updateEducation(edu.id, "year", e.target.value)
                            }
                            placeholder="Year of Completion"
                            className="bg-[#173229] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Experience Details */}
              <div className="bg-[#173229] rounded-2xl p-6 md:p-8 border border-[#E2FEA5]/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-[#F8FFE8] uppercase">
                    Experience Details
                  </h2>
                  <button
                    type="button"
                    onClick={addExperience}
                    className="flex items-center gap-2 text-sm text-[#E2FEA5] hover:underline font-bricolage"
                  >
                    <Plus className="w-4 h-4" /> Add
                  </button>
                </div>

                {experience.length === 0 ? (
                  <p className="text-[rgba(248,255,232,0.5)] text-center py-4 font-bricolage">
                    Click "Add" to add your experience details
                  </p>
                ) : (
                  <div className="space-y-4">
                    {experience.map((exp) => (
                      <div
                        key={exp.id}
                        className="bg-[#253e35] rounded-xl p-4 border border-[#E2FEA5]/10"
                      >
                        <div className="flex justify-end mb-3">
                          <button
                            type="button"
                            onClick={() => removeExperience(exp.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Input
                            value={exp.company}
                            onChange={(e) =>
                              updateExperience(
                                exp.id,
                                "company",
                                e.target.value,
                              )
                            }
                            placeholder="Company Name"
                            className="bg-[#173229] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)]"
                          />
                          <Input
                            value={exp.title}
                            onChange={(e) =>
                              updateExperience(exp.id, "title", e.target.value)
                            }
                            placeholder="Job Title"
                            className="bg-[#173229] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)]"
                          />
                          <Input
                            value={exp.duration}
                            onChange={(e) =>
                              updateExperience(
                                exp.id,
                                "duration",
                                e.target.value,
                              )
                            }
                            placeholder="Duration (e.g., Jan 2022 - Present)"
                            className="bg-[#173229] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Employment Details (Referral) */}
              <div className="bg-[#173229] rounded-2xl p-6 md:p-8 border border-[#E2FEA5]/10 uppercase">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-[#F8FFE8]">
                    Employment Details (IJP/Referral)
                  </h2>
                  <button
                    type="button"
                    className="text-sm text-[#E2FEA5] hover:underline font-bricolage"
                  >
                    Clear
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="employeeName"
                      className="text-[#F8FFE8] font-bricolage"
                    >
                      Employee Name
                    </Label>
                    <Input
                      id="employeeName"
                      {...register("employeeName")}
                      placeholder="Referrer's name"
                      className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="employeeCode"
                      className="text-[#F8FFE8] font-bricolage"
                    >
                      Employee Code
                    </Label>
                    <Input
                      id="employeeCode"
                      {...register("employeeCode")}
                      placeholder="Employee code"
                      className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="employeeEmail"
                      className="text-[#F8FFE8] font-bricolage"
                    >
                      Employee Email
                    </Label>
                    <Input
                      id="employeeEmail"
                      type="email"
                      {...register("employeeEmail")}
                      placeholder="Referrer's email"
                      className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                    />
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#173229] rounded-2xl p-6 md:p-8 border border-[#E2FEA5]/10 uppercase">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-[#F8FFE8]">
                    Social Links
                  </h2>
                  <button
                    type="button"
                    className="text-sm text-[#E2FEA5] hover:underline font-bricolage"
                  >
                    Clear
                  </button>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="linkedIn"
                    className="text-[#F8FFE8] font-bricolage"
                  >
                    LinkedIn
                  </Label>
                  <Input
                    id="linkedIn"
                    {...register("linkedIn")}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="bg-[#253e35] border-[#E2FEA5]/20 text-[#F8FFE8] placeholder:text-[rgba(248,255,232,0.4)] focus:border-[#E2FEA5]"
                  />
                </div>
              </div>

              {/* Attachment Information */}
              <div className="bg-[#173229] rounded-2xl p-6 md:p-8 border border-[#E2FEA5]/10 uppercase">
                <h2 className="font-dela text-2xl text-[#F8FFE8] mb-6">
                  Attachment Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[#F8FFE8] font-bricolage">
                      Photo (Optional)
                    </Label>
                    <div className="flex items-center gap-4">
                      <input
                        type="file"
                        id="photo"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="photo"
                        className="px-4 py-2 bg-[#253e35] border border-[#E2FEA5]/20 rounded-lg text-[#F8FFE8] cursor-pointer hover:border-[#E2FEA5]/40 transition-colors font-bricolage"
                      >
                        Browse
                      </label>
                      {photoFile && (
                        <span className="text-[#E2FEA5] text-sm font-bricolage">
                          {photoFile.name}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[#F8FFE8] font-bricolage">
                      Resume * (Already uploaded above)
                    </Label>
                    <p className="text-[rgba(248,255,232,0.5)] text-sm font-bricolage">
                      {resumeFile
                        ? `✓ ${resumeFile.name}`
                        : "Please upload your resume above"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => navigate("/careers")}
                  className="rounded-full px-8 py-6 text-base font-semibold font-bricolage"
                  style={{
                    backgroundColor: "transparent",
                    color: "#F8FFE8",
                    border: "2px solid rgba(248, 255, 232, 0.3)",
                  }}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="group rounded-full px-10 py-6 text-base font-semibold font-bricolage hover:translate-y-0.5 hover:shadow-none transition-all duration-150"
                  style={{
                    backgroundColor: "#FCFAC2",
                    color: "#0a0a0a",
                    border: "3px solid #0a0a0a",
                    boxShadow: "0 4px 0 #0a0a0a",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#0a0a0a] border-t-transparent rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>

      <EnhancedFooter showCTA={false} />
    </div>
  );
};

export default Apply;
