import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import SubjectsSection from "@/components/home/SubjectsSection";
import TutorShowcase from "@/components/home/TutorShowcase";
import CTASection from "@/components/home/CTASection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <SubjectsSection />
      <TutorShowcase />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
