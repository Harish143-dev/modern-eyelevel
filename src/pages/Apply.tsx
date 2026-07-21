import { useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload, ArrowLeft, FileText, X, Plus, Trash2 } from "lucide-react";
import GreenButton from "@/components/shared/GreenButton";
import SEO from "@/components/utils/SEO";

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
  noticePeriod: z.string().min(1, "Notice period is required"),
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

const createEducation = (): Education => ({
  id: Date.now().toString(),
  degree: "",
  institution: "",
  year: "",
});

const createExperience = (): Experience => ({
  id: Date.now().toString(),
  company: "",
  title: "",
  duration: "",
});

const isEducationFilled = (edu: Education) =>
  Boolean(edu.degree.trim() && edu.institution.trim() && edu.year.trim());

const isExperienceFilled = (exp: Experience) =>
  Boolean(exp.company.trim() && exp.title.trim() && exp.duration.trim());

const SOCIAL_PLATFORMS = [
  { value: "linkedin", label: "LinkedIn" },
  { value: "behance", label: "Behance" },
  { value: "dribbble", label: "Dribbble" },
  { value: "artstation", label: "ArtStation" },
  { value: "deviantart", label: "DeviantArt" },
  { value: "adobe-portfolio", label: "Adobe Portfolio" },
  { value: "personal-website", label: "Personal Website / Portfolio" },
  { value: "github", label: "GitHub" },
  { value: "blogger", label: "Blogger" },
  { value: "youtube", label: "YouTube" },
  { value: "instagram", label: "Instagram" },
  { value: "pinterest", label: "Pinterest" },
  { value: "x-twitter", label: "X (Twitter)" },
  { value: "facebook", label: "Facebook" },
  { value: "reddit", label: "Reddit" },
  { value: "quora", label: "Quora" },
] as const;

type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number]["value"];

interface SocialLink {
  id: string;
  platform: SocialPlatform;
  url: string;
}

const JOB_APPLY_WEBHOOK_URL =
  "https://automate.eyelevelstudio.in/webhook/job-apply";

const Apply = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const position = searchParams.get("position") || "General Application";

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [education, setEducation] = useState<Education[]>(() => [
    createEducation(),
  ]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [isFresher, setIsFresher] = useState(false);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [selectedSocialPlatform, setSelectedSocialPlatform] =
    useState<SocialPlatform>();

  const {
    register,
    handleSubmit,
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

  const addEducation = () => {
    setEducation([...education, createEducation()]);
  };

  // The section is mandatory, so the last row always stays.
  const removeEducation = (id: string) => {
    setEducation(
      education.length <= 1 ? education : education.filter((e) => e.id !== id),
    );
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
    setExperience([...experience, createExperience()]);
  };

  // Freshers have no experience to list, so drop any rows they already added.
  const toggleFresher = (fresher: boolean) => {
    setIsFresher(fresher);
    if (fresher) setExperience([]);
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

  const addSocialLink = () => {
    if (!selectedSocialPlatform) return;

    setSocialLinks([
      ...socialLinks,
      { id: Date.now().toString(), platform: selectedSocialPlatform, url: "" },
    ]);
    setSelectedSocialPlatform(undefined);
  };

  const removeSocialLink = (id: string) => {
    setSocialLinks(socialLinks.filter((link) => link.id !== id));
  };

  const updateSocialUrl = (id: string, url: string) => {
    setSocialLinks(
      socialLinks.map((link) => (link.id === id ? { ...link, url } : link)),
    );
  };

  const clearSocialLinks = () => {
    setSocialLinks([]);
    setSelectedSocialPlatform(undefined);
  };

  const onSubmit = async (data: ApplicationFormData) => {
    if (!resumeFile) {
      toast({
        title: "Resume required",
        description: "Please upload your resume",
        variant: "destructive",
      });
      return;
    }

    if (!education.every(isEducationFilled)) {
      toast({
        title: "Educational details required",
        description:
          "Please fill in the degree, institution, and year for each qualification",
        variant: "destructive",
      });
      return;
    }

    if (!isFresher && experience.length === 0) {
      toast({
        title: "Experience required",
        description:
          'Add at least one experience, or tick "I\'m a fresher" if this is your first job',
        variant: "destructive",
      });
      return;
    }

    if (!isFresher && !experience.every(isExperienceFilled)) {
      toast({
        title: "Experience details required",
        description:
          "Please fill in the company, job title, and duration for each experience",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      const cleanedSocialLinks = socialLinks
        .filter((link) => link.url.trim())
        .map((link) => ({
          platform: link.platform,
          label:
            SOCIAL_PLATFORMS.find(
              (platform) => platform.value === link.platform,
            )?.label ?? link.platform,
          url: link.url.trim(),
        }));
      const linkedIn =
        cleanedSocialLinks.find((link) => link.platform === "linkedin")?.url ??
        "";

      // `id` is a UI-only React key, so keep it out of the webhook payload.
      const cleanedEducation = education.map((edu) => ({
        degree: edu.degree.trim(),
        institution: edu.institution.trim(),
        year: edu.year.trim(),
      }));
      const cleanedExperience = isFresher
        ? []
        : experience.map((exp) => ({
            company: exp.company.trim(),
            title: exp.title.trim(),
            duration: exp.duration.trim(),
          }));

      formData.append(
        "payload",
        JSON.stringify({
          ...data,
          position,
          education: cleanedEducation,
          isFresher,
          experience: cleanedExperience,
          socialLinks: cleanedSocialLinks,
          linkedIn,
        }),
      );

      formData.append("resume", resumeFile);

      const response = await fetch(JOB_APPLY_WEBHOOK_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || (result && result.ok === false)) {
        throw new Error(result?.message || "Failed");
      }

      toast({
        title: "Application submitted successfully",
        description: `Thank you for applying to ${position}. Our HR team will get in touch with you soon.`,
      });
      navigate(
        `/thank-you?type=application&position=${encodeURIComponent(position)}`,
      );
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-secondary py-10">
      <SEO
        title="Apply for Careers | Eyelevel Growth Studio"
        description="Submit your application to join Eyelevel Growth Studio team."
        keywords={[
          "apply for marketing job",
          "career application",
          "eyelevel studio application",
          "creative agency application",
          "job application form",
        ]}
        canonical="https://theeyelevelstudio.com/apply"
        url="https://theeyelevelstudio.com/apply"
      />
      <Header />

      <main className="pt-40 pb-[100px]">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/careers")}
            className="flex items-center gap-2 text-[rgba(248,255,232,0.7)] hover:text-primary mb-8 transition-colors font-bricolage"
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
            <h1 className="font-dela text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 uppercase">
              Apply for <span className="text-primary">{position}</span>
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
              <div className="bg-background rounded-2xl p-6 md:p-8 border border-primary/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-foreground uppercase">
                    Upload Resume
                  </h2>
                  <span className="text-sm text-[rgba(248,255,232,0.5)] font-bricolage">
                    Autofill Application
                  </span>
                </div>

                <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx,.odt,.rtf"
                    onChange={handleResumeChange}
                    className="hidden"
                  />
                  {resumeFile ? (
                    <div className="flex items-start justify-start gap-3">
                      <FileText className="w-6 h-6 text-primary" />
                      <span className="text-primary font-medium font-bricolage">
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
                      <Upload className="w-12 h-12 text-primary/50 mx-auto mb-4" />
                      <p className="text-foreground font-medium mb-2 font-bricolage">
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
              <div className="bg-background rounded-2xl p-6 md:p-8 border border-primary/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-foreground uppercase">
                    Basic Info
                  </h2>
                  <button
                    type="button"
                    className="text-sm text-primary hover:underline font-bricolage"
                  >
                    Clear
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-foreground font-bricolage"
                    >
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      placeholder="Enter your first name"
                      className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
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
                      className="text-foreground font-bricolage"
                    >
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      placeholder="Enter your last name"
                      className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
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
                      className="text-foreground font-bricolage"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="Enter your email"
                      className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
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
                      className="text-foreground font-bricolage"
                    >
                      Mobile * (+91)
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="Enter your mobile number"
                      className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
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
              <div className="bg-background rounded-2xl p-6 md:p-8 border border-primary/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-foreground uppercase">
                    Address Information
                  </h2>
                  <button
                    type="button"
                    className="text-sm text-primary hover:underline font-bricolage"
                  >
                    Clear
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="street"
                      className="text-foreground font-bricolage"
                    >
                      Street *
                    </Label>
                    <Input
                      id="street"
                      {...register("street")}
                      placeholder="Enter your street address"
                      className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
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
                        className="text-foreground font-bricolage"
                      >
                        City *
                      </Label>
                      <Input
                        id="city"
                        {...register("city")}
                        placeholder="Enter your city"
                        className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
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
                        className="text-foreground font-bricolage"
                      >
                        State/Province *
                      </Label>
                      <Input
                        id="state"
                        {...register("state")}
                        placeholder="Enter your state"
                        className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
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
                        className="text-foreground font-bricolage"
                      >
                        Zip/Postal Code *
                      </Label>
                      <Input
                        id="zipCode"
                        {...register("zipCode")}
                        placeholder="Enter your zip code"
                        className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
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
                        className="text-foreground font-bricolage"
                      >
                        Country *
                      </Label>
                      <Input
                        id="country"
                        {...register("country")}
                        placeholder="Enter your country"
                        className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
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
              <div className="bg-background rounded-2xl p-6 md:p-8 border border-primary/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-foreground uppercase">
                    Professional Details
                  </h2>
                  <button
                    type="button"
                    className="text-sm text-primary hover:underline font-bricolage"
                  >
                    Clear
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="currentSalary"
                      className="text-foreground font-bricolage"
                    >
                      Current Salary (LPA) *
                    </Label>
                    <Input
                      id="currentSalary"
                      {...register("currentSalary")}
                      placeholder="e.g., 8 LPA"
                      className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
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
                      className="text-foreground font-bricolage"
                    >
                      Current Job Title
                    </Label>
                    <Input
                      id="currentJobTitle"
                      {...register("currentJobTitle")}
                      placeholder="Enter your current job title"
                      className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="expectedSalary"
                      className="text-foreground font-bricolage"
                    >
                      Expected Salary (LPA) *
                    </Label>
                    <Input
                      id="expectedSalary"
                      {...register("expectedSalary")}
                      placeholder="e.g., 12 LPA"
                      className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
                    />
                    {errors.expectedSalary && (
                      <p className="text-red-400 text-sm">
                        {errors.expectedSalary.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="noticePeriod"
                      className="text-foreground font-bricolage"
                    >
                      Notice Period *
                    </Label>
                    <Input
                      id="noticePeriod"
                      {...register("noticePeriod")}
                      placeholder="e.g., Immediate, 15 days, 30 days"
                      className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
                    />
                    {errors.noticePeriod && (
                      <p className="text-red-400 text-sm">
                        {errors.noticePeriod.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Educational Details */}
              <div className="bg-background rounded-2xl p-6 md:p-8 border border-primary/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-foreground uppercase">
                    Educational Details *
                  </h2>
                  <button
                    type="button"
                    onClick={addEducation}
                    className="flex items-center gap-2 text-sm text-primary hover:underline font-bricolage"
                  >
                    <Plus className="w-4 h-4" /> Add
                  </button>
                </div>

                <div className="space-y-4">
                  {education.map((edu) => (
                    <div
                      key={edu.id}
                      className="bg-secondary rounded-xl p-4 border border-primary/10"
                    >
                      {education.length > 1 && (
                        <div className="flex justify-end mb-3">
                          <button
                            type="button"
                            onClick={() => removeEducation(edu.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input
                          value={edu.degree}
                          onChange={(e) =>
                            updateEducation(edu.id, "degree", e.target.value)
                          }
                          placeholder="Degree/Qualification"
                          className="bg-background border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)]"
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
                          className="bg-background border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)]"
                        />
                        <Input
                          value={edu.year}
                          onChange={(e) =>
                            updateEducation(edu.id, "year", e.target.value)
                          }
                          placeholder="Year of Completion"
                          className="bg-background border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Details */}
              <div className="bg-background rounded-2xl p-6 md:p-8 border border-primary/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-foreground uppercase">
                    Experience Details *
                  </h2>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="fresher"
                        checked={isFresher}
                        onCheckedChange={(checked) =>
                          toggleFresher(checked === true)
                        }
                        className="border-primary/40 data-[state=checked]:bg-primary data-[state=checked]:text-background"
                      />
                      <Label
                        htmlFor="fresher"
                        className="text-foreground font-bricolage cursor-pointer"
                      >
                        I'm a fresher
                      </Label>
                    </div>
                    {!isFresher && (
                      <button
                        type="button"
                        onClick={addExperience}
                        className="flex items-center gap-2 text-sm text-primary hover:underline font-bricolage"
                      >
                        <Plus className="w-4 h-4" /> Add
                      </button>
                    )}
                  </div>
                </div>

                {isFresher ? (
                  <p className="text-[rgba(248,255,232,0.5)] text-center py-4 font-bricolage">
                    No experience needed — we'll take it from here.
                  </p>
                ) : experience.length === 0 ? (
                  <p className="text-[rgba(248,255,232,0.5)] text-center py-4 font-bricolage">
                    Click "Add" to add your experience details, or tick "I'm a
                    fresher"
                  </p>
                ) : (
                  <div className="space-y-4">
                    {experience.map((exp) => (
                      <div
                        key={exp.id}
                        className="bg-secondary rounded-xl p-4 border border-primary/10"
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
                            className="bg-background border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)]"
                          />
                          <Input
                            value={exp.title}
                            onChange={(e) =>
                              updateExperience(exp.id, "title", e.target.value)
                            }
                            placeholder="Job Title"
                            className="bg-background border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)]"
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
                            className="bg-background border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Employment Details (Referral) */}
              <div className="bg-background rounded-2xl p-6 md:p-8 border border-primary/10 uppercase">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-foreground">
                    Employment Details (IJP/Referral)
                  </h2>
                  <button
                    type="button"
                    className="text-sm text-primary hover:underline font-bricolage"
                  >
                    Clear
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="employeeName"
                      className="text-foreground font-bricolage"
                    >
                      Employee Name
                    </Label>
                    <Input
                      id="employeeName"
                      {...register("employeeName")}
                      placeholder="Referrer's name"
                      className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="employeeCode"
                      className="text-foreground font-bricolage"
                    >
                      Employee Code
                    </Label>
                    <Input
                      id="employeeCode"
                      {...register("employeeCode")}
                      placeholder="Employee code"
                      className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="employeeEmail"
                      className="text-foreground font-bricolage"
                    >
                      Employee Email
                    </Label>
                    <Input
                      id="employeeEmail"
                      type="email"
                      {...register("employeeEmail")}
                      placeholder="Referrer's email"
                      className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-background rounded-2xl p-6 md:p-8 border border-primary/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-dela text-2xl text-foreground">
                    Social Links
                  </h2>
                  <button
                    type="button"
                    onClick={clearSocialLinks}
                    className="text-sm text-primary hover:underline font-bricolage"
                  >
                    Clear
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3 items-end">
                    <div className="space-y-2">
                      <Label className="text-foreground font-bricolage">
                        Choose Platform
                      </Label>
                      <Select
                        value={selectedSocialPlatform}
                        onValueChange={(value) =>
                          setSelectedSocialPlatform(value as SocialPlatform)
                        }
                      >
                        <SelectTrigger className="bg-secondary border-primary/20 text-foreground focus:ring-[#E2FEA5]/30 focus:ring-offset-0">
                          <SelectValue placeholder="Choose social media" />
                        </SelectTrigger>
                        <SelectContent className="z-[10000] bg-secondary border-primary/20 text-foreground">
                          {SOCIAL_PLATFORMS.map((platform) => {
                            const isSelected = socialLinks.some(
                              (link) => link.platform === platform.value,
                            );

                            return (
                              <SelectItem
                                key={platform.value}
                                value={platform.value}
                                disabled={isSelected}
                                className="focus:bg-primary focus:text-forest-dark"
                              >
                                {platform.label}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="button"
                      onClick={addSocialLink}
                      disabled={
                        !selectedSocialPlatform ||
                        socialLinks.length >= SOCIAL_PLATFORMS.length
                      }
                      className="h-10 rounded-lg px-5 bg-primary text-forest-dark hover:bg-[#FCFAC2] font-bricolage disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Plus className="w-4 h-4" /> Add Field
                    </Button>
                  </div>

                  {socialLinks.length === 0 ? (
                    <p className="text-[rgba(248,255,232,0.5)] text-center py-4 font-bricolage normal-case">
                      Choose a platform first, then add its profile link field.
                    </p>
                  ) : (
                    socialLinks.map((socialLink) => (
                      <div
                        key={socialLink.id}
                        className="grid grid-cols-1 md:grid-cols-[220px_1fr_auto] gap-3 items-end"
                      >
                        <div className="space-y-2">
                          <Label className="text-foreground font-bricolage">
                            Platform
                          </Label>
                          <div className="flex h-10 items-center rounded-md border border-primary/20 bg-secondary px-3 text-sm text-foreground font-bricolage">
                            {SOCIAL_PLATFORMS.find(
                              (platform) =>
                                platform.value === socialLink.platform,
                            )?.label ?? socialLink.platform}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor={`social-url-${socialLink.id}`}
                            className="text-foreground font-bricolage"
                          >
                            Profile Link
                          </Label>
                          <Input
                            id={`social-url-${socialLink.id}`}
                            value={socialLink.url}
                            onChange={(e) =>
                              updateSocialUrl(socialLink.id, e.target.value)
                            }
                            placeholder="https://"
                            className="bg-secondary border-primary/20 text-foreground placeholder:text-[rgba(248,255,232,0.4)] focus:border-primary"
                          />
                        </div>

                        <button
                          type="button"
                          onClick={() => removeSocialLink(socialLink.id)}
                          className="h-10 w-10 rounded-lg border border-red-400/30 text-red-400 hover:text-red-300 hover:border-red-300 transition-colors flex items-center justify-center"
                          aria-label="Remove social link"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Attachment Information */}
              <div className="bg-background rounded-2xl p-6 md:p-8 border border-primary/10 uppercase">
                <h2 className="font-dela text-2xl text-foreground mb-6">
                  Attachment Information
                </h2>

                <div className="space-y-2">
                  <Label className="text-foreground font-bricolage">
                    Resume * (Already uploaded above)
                  </Label>
                  <p className="text-[rgba(248,255,232,0.5)] text-sm font-bricolage">
                    {resumeFile
                      ? `Uploaded: ${resumeFile.name}`
                      : "Please upload your resume above"}
                  </p>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-start pt-6">
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
                  className="group rounded-full px-10 py-6 text-base font-semibold "
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

      <EnhancedFooter showCTA={false} mascotBgClass="bg-secondary" />
    </div>
  );
};

export default Apply;
