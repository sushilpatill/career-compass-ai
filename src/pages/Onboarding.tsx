import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Code, Heart, Target, ArrowRight, ArrowLeft, Check, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const steps = [
  { id: 1, title: "Education", icon: GraduationCap },
  { id: 2, title: "Skills", icon: Code },
  { id: 3, title: "Interests", icon: Heart },
  { id: 4, title: "Goals", icon: Target },
];

const educationOptions = [
  "High School", "Bachelor's Degree", "Master's Degree", "PhD", "Self-taught", "Bootcamp"
];

const skillSuggestions = [
  "JavaScript", "Python", "React", "Data Analysis", "Machine Learning", "UI/UX Design",
  "Communication", "Leadership", "Project Management", "Marketing", "Sales", "Writing"
];

const interestOptions = [
  "Technology", "Finance", "Healthcare", "Education", "Entertainment", "E-commerce",
  "Sustainability", "AI & ML", "Startups", "Creative Arts"
];

const goalOptions = [
  "Land my first job", "Career change", "Get a promotion", "Start a business",
  "Learn new skills", "Find my passion"
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);
  const navigate = useNavigate();

  const addSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const toggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const toggleGoal = (goal: string) => {
    if (goals.includes(goal)) {
      setGoals(goals.filter((g) => g !== goal));
    } else {
      setGoals([...goals, goal]);
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/dashboard");
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />

      <div className="w-full max-w-2xl">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  currentStep >= step.id
                    ? "bg-gradient-to-br from-primary to-accent"
                    : "bg-secondary border border-border"
                }`}
              >
                {currentStep > step.id ? (
                  <Check className="w-5 h-5 text-primary-foreground" />
                ) : (
                  <step.icon className={`w-5 h-5 ${currentStep >= step.id ? "text-primary-foreground" : "text-muted-foreground"}`} />
                )}
              </motion.div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-2 transition-colors duration-300 ${
                  currentStep > step.id ? "bg-primary" : "bg-border"
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Education */}
            {currentStep === 1 && (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary">Step 1 of 4</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-2">What's your education level?</h2>
                  <p className="text-muted-foreground">This helps us tailor career recommendations for you</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {educationOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setEducation(option)}
                      className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                        education === option
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50 bg-secondary/50"
                      }`}
                    >
                      <span className={education === option ? "text-primary" : "text-foreground"}>
                        {option}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Skills */}
            {currentStep === 2 && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary">Step 2 of 4</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-2">What are your skills?</h2>
                  <p className="text-muted-foreground">Add skills you have or want to develop</p>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type a skill and press Enter"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addSkill(skillInput)}
                      className="h-12 bg-secondary/50 border-border/50 focus:border-primary/50 rounded-xl"
                    />
                    <Button onClick={() => addSkill(skillInput)} variant="outline">Add</Button>
                  </div>
                  {skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm"
                        >
                          {skill}
                          <button onClick={() => removeSkill(skill)}>
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Suggestions:</p>
                    <div className="flex flex-wrap gap-2">
                      {skillSuggestions.filter(s => !skills.includes(s)).slice(0, 8).map((skill) => (
                        <button
                          key={skill}
                          onClick={() => addSkill(skill)}
                          className="px-3 py-1 rounded-full border border-border text-sm hover:border-primary/50 transition-colors"
                        >
                          + {skill}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Interests */}
            {currentStep === 3 && (
              <motion.div
                key="interests"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary">Step 3 of 4</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-2">What interests you?</h2>
                  <p className="text-muted-foreground">Select industries or fields that excite you</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                        interests.includes(interest)
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50 bg-secondary/50"
                      }`}
                    >
                      <span className={interests.includes(interest) ? "text-primary" : "text-foreground"}>
                        {interest}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Goals */}
            {currentStep === 4 && (
              <motion.div
                key="goals"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary">Step 4 of 4</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-2">What are your career goals?</h2>
                  <p className="text-muted-foreground">Select what you want to achieve</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {goalOptions.map((goal) => (
                    <button
                      key={goal}
                      onClick={() => toggleGoal(goal)}
                      className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                        goals.includes(goal)
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50 bg-secondary/50"
                      }`}
                    >
                      <span className={goals.includes(goal) ? "text-primary" : "text-foreground"}>
                        {goal}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <Button onClick={nextStep} className="gap-2 group">
              {currentStep === 4 ? "Complete" : "Continue"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Onboarding;
