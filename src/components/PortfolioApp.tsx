import React from "react";
import "../styles/global.css";
import { ThemeProvider } from "../../components/theme-provider";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";
import { Skills } from "../../components/skills";
import { Experience } from "../../components/experience";
import { Projects } from "../../components/projects";
import { Contact } from "../../components/contact";

export function PortfolioApp() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
