
import { defineComponent, ref, computed } from 'vue';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import ProjectCard from './components/ProjectCard.js';
import GeminiAssistant from './components/GeminiAssistant.js';
import { PROJECTS, Icons, SUMMARY_TEXT, COMPETENCIES, EXPERIENCE, PATENTS, EDUCATION, FUTURE_INITIATIVES } from './constants.js';

export default defineComponent({
  name: 'App',
  components: { 
    Navbar, 
    Hero, 
    ProjectCard, 
    GeminiAssistant
  },
  setup() {
    const activeFilter = ref('All');
    const filteredProjects = computed(() => {
      if (activeFilter.value === 'All') return PROJECTS;
      return PROJECTS.filter(p => p.category === activeFilter.value);
    });

    return { 
      activeFilter, 
      filteredProjects, 
      SUMMARY_TEXT, 
      COMPETENCIES, 
      EXPERIENCE, 
      PATENTS, 
      EDUCATION, 
      FUTURE_INITIATIVES,
      currentYear: new Date().getFullYear() 
    };
  },
  template: `
    <div class="min-h-screen bg-slate-950/20 text-slate-100 selection:bg-cyan-500/30">
      <Navbar />
      
      <main>
        <Hero />

        <!-- Executive Summary -->
        <section class="py-20 border-y border-slate-900 bg-slate-900/40 relative">
          <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-xs font-mono text-cyan-500 uppercase tracking-[0.3em] mb-8 font-bold">// executive_summary</h2>
            <p class="text-2xl md:text-3xl font-light leading-relaxed text-slate-200 italic">
              "{{ SUMMARY_TEXT }}"
            </p>
          </div>
        </section>

        <!-- Core Competencies -->
        <section id="expertise" class="py-24">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-16">
              <h2 class="text-3xl font-bold mb-4 tracking-tight text-white uppercase tracking-tighter">Core Competencies</h2>
              <div class="h-1 w-20 bg-cyan-500"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div v-for="(comp, idx) in COMPETENCIES" :key="idx" 
                   class="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all group backdrop-blur-sm">
                <h3 class="text-cyan-400 font-bold mb-4 flex items-center gap-3">
                  <span class="w-2 h-2 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform"></span>
                  {{ comp.category }}
                </h3>
                <p class="text-slate-400 text-sm leading-relaxed font-medium">{{ comp.skills }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Project Portfolio -->
        <section id="projects" class="py-24 border-t border-slate-900 bg-slate-900/20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <h2 class="text-3xl font-bold mb-4 tracking-tight text-white uppercase tracking-tighter">Production Deployments</h2>
                  <p class="text-slate-400 max-w-xl">Proven expertise in shipping silicon-integrated software for millions of devices.</p>
                </div>
                <div class="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  <button 
                    v-for="cat in ['All', 'Router', 'STB', 'AndroidTV', 'IoT']" 
                    :key="cat"
                    @click="activeFilter = cat"
                    :class="['whitespace-nowrap px-5 py-2 rounded-full border text-xs font-bold transition-all', activeFilter === cat ? 'bg-cyan-500 border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'border-slate-800 text-slate-400 hover:border-cyan-500 hover:text-cyan-400']"
                  >
                    {{ cat }}
                  </button>
                </div>
             </div>
             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
             </div>
          </div>
        </section>

        <!-- Future Roadmap -->
        <section id="roadmap" class="py-24 border-t border-slate-900 bg-slate-950 relative overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-20">
               <h2 class="text-3xl font-bold mb-4 tracking-tight text-white uppercase tracking-tighter">Future Initiatives</h2>
               <p class="text-slate-400">Emerging research and projects under development for 2025.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div v-for="init in FUTURE_INITIATIVES" :key="init.title" 
                    class="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl relative group hover:border-cyan-500/30 transition-all">
                  <div class="absolute -top-4 right-8 bg-cyan-600 text-white px-3 py-1 rounded-lg text-[10px] font-bold font-mono">{{ init.date }}</div>
                  <h4 class="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{{ init.title }}</h4>
                  <p class="text-sm text-slate-400 mb-6 leading-relaxed">{{ init.description }}</p>
                  <div class="flex items-center gap-2 text-[10px] font-mono text-cyan-500/70 uppercase font-bold">
                    <span class="w-1 h-1 rounded-full bg-cyan-500"></span>
                    {{ init.tech }}
                  </div>
               </div>
            </div>
          </div>
        </section>

        <!-- Patents -->
        <section class="py-24 border-t border-slate-900 bg-slate-900/10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-16 text-center">
              <h2 class="text-3xl font-bold mb-4 tracking-tight text-white uppercase tracking-tighter">Innovation & IP</h2>
              <p class="text-slate-400 font-mono text-sm">// 6_granted_patents // broadcom_ip_portfolio</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <a v-for="patent in PATENTS" :key="patent.id" 
                   :href="patent.url" 
                   target="_blank"
                   class="p-6 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col gap-6 items-start hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all group relative">
                <div class="absolute top-4 right-4 text-slate-700 group-hover:text-cyan-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
                <div class="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800 text-cyan-500 group-hover:bg-cyan-500/10 transition-colors">
                  <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <div>
                  <div class="flex items-center gap-3 mb-2">
                    <span class="text-xs font-mono text-cyan-500 font-bold tracking-wider">{{ patent.id }}</span>
                    <span class="text-[9px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-bold uppercase">{{ patent.type }}</span>
                  </div>
                  <h4 class="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors leading-tight">{{ patent.title }}</h4>
                  <p class="text-sm text-slate-500 leading-relaxed italic">{{ patent.impact }}</p>
                </div>
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer class="py-16 border-t border-slate-900 bg-slate-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div class="text-xl font-bold font-mono mb-6 text-white">
            embeddedsystems<span class="text-cyan-400">.ai</span>
          </div>
          <div class="text-slate-500 text-xs font-mono mb-8 tracking-widest uppercase">
            // silicon_to_cloud // expert_verified // {{ currentYear }}
          </div>
          <p class="text-slate-700 text-[10px]">&copy; All Rights Reserved. Engineered for Resilience.</p>
        </div>
      </footer>

      <GeminiAssistant />
    </div>
  `
});
