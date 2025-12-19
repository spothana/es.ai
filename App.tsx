
import { defineComponent, ref, computed } from 'vue';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import GeminiAssistant from './components/GeminiAssistant';
import { PROJECTS, Icons, SUMMARY_TEXT, COMPETENCIES, EXPERIENCE, PATENTS, EDUCATION } from './constants';

export default defineComponent({
  name: 'App',
  components: { 
    Navbar, 
    Hero, 
    ProjectCard, 
    GeminiAssistant, 
    Cpu: Icons.Cpu,
    Wifi: Icons.Wifi,
    Device: Icons.Device,
    Globe: Icons.Globe
  },
  setup() {
    const activeFilter = ref('All');
    const filteredProjects = computed(() => {
      if (activeFilter.value === 'All') return PROJECTS;
      return PROJECTS.filter(p => p.category === activeFilter.value);
    });

    return { activeFilter, filteredProjects, SUMMARY_TEXT, COMPETENCIES, EXPERIENCE, PATENTS, EDUCATION, currentYear: new Date().getFullYear() };
  },
  template: `
    <div class="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
      <Navbar />
      
      <main>
        <Hero />

        <!-- Executive Summary -->
        <section class="py-20 border-y border-slate-900 bg-slate-900/10">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-sm font-mono text-cyan-500 uppercase tracking-widest mb-6">// executive_summary</h2>
            <p class="text-2xl md:text-3xl font-light leading-relaxed text-slate-200 italic">
              "{{ SUMMARY_TEXT }}"
            </p>
          </div>
        </section>

        <!-- Core Competencies Grid -->
        <section id="expertise" class="py-24 bg-slate-900/30">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-16">
              <h2 class="text-3xl font-bold mb-4 tracking-tight">Core Competencies & Technical Skills</h2>
              <div class="h-1 w-20 bg-cyan-500"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="(comp, idx) in COMPETENCIES" :key="idx" class="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                <h3 class="text-cyan-400 font-bold mb-4 flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                  {{ comp.category }}
                </h3>
                <p class="text-slate-400 text-sm leading-relaxed">{{ comp.skills }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Patents & IP -->
        <section class="py-24 border-t border-slate-900">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-16 text-center">
              <h2 class="text-3xl font-bold mb-4 tracking-tight">Patents & Innovation</h2>
              <p class="text-slate-400">Pioneering core technologies in multimedia transport, buffer management, and ML analytics.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div v-for="patent in PATENTS" :key="patent.id" class="p-6 bg-slate-950 border border-cyan-900/30 rounded-xl relative overflow-hidden group">
                <div class="absolute -right-4 -top-4 text-slate-900/20 font-bold text-6xl group-hover:text-cyan-500/10 transition-colors">IP</div>
                <div class="flex justify-between items-start mb-4">
                  <span class="text-cyan-500 font-mono text-xs">{{ patent.id }}</span>
                  <span :class="['text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest', patent.type === 'Granted' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20']">
                    {{ patent.type }}
                  </span>
                </div>
                <h4 class="text-lg font-bold mb-3 leading-tight text-white">{{ patent.title }}</h4>
                <p class="text-sm text-slate-500 leading-relaxed">{{ patent.impact }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Professional Timeline -->
        <section class="py-24 bg-slate-900/20 border-t border-slate-900">
          <div class="max-w-4xl mx-auto px-4">
             <h2 class="text-3xl font-bold mb-16 tracking-tight text-center">Professional Path</h2>
             <div class="space-y-12">
                <div v-for="(exp, idx) in EXPERIENCE" :key="idx" class="flex gap-8 relative">
                   <div v-if="idx !== EXPERIENCE.length - 1" class="absolute left-[2.4rem] top-10 bottom-[-3rem] w-px bg-slate-800"></div>
                   <div class="w-20 shrink-0 text-xs font-mono text-slate-500 pt-1">{{ exp.years }}</div>
                   <div class="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 z-10">
                      <div class="w-2 h-2 rounded-full bg-cyan-500"></div>
                   </div>
                   <div>
                      <h4 class="text-xl font-bold text-white">{{ exp.company }}</h4>
                      <p class="text-cyan-400 text-sm font-mono mb-1">{{ exp.role }}</p>
                      <p class="text-slate-500 text-xs italic">{{ exp.location }}</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <!-- Educational Path -->
        <section id="education" class="py-24 border-t border-slate-900 bg-slate-900/40">
          <div class="max-w-4xl mx-auto px-4">
             <h2 class="text-3xl font-bold mb-16 tracking-tight text-center">Educational Path</h2>
             <div class="space-y-16">
                <div v-for="(edu, idx) in EDUCATION" :key="idx" class="flex gap-8 relative">
                   <div v-if="idx !== EDUCATION.length - 1" class="absolute left-[2.4rem] top-10 bottom-[-4rem] w-px bg-slate-800"></div>
                   <div class="w-20 shrink-0 text-xs font-mono text-slate-500 pt-1">{{ edu.years }}</div>
                   <div class="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center shrink-0 z-10">
                      <div class="w-2 h-2 rounded-full bg-cyan-400"></div>
                   </div>
                   <div class="flex-1">
                      <h4 class="text-xl font-bold text-white mb-1">{{ edu.institution }}</h4>
                      <p class="text-cyan-400 text-sm font-bold font-mono mb-4">{{ edu.degree }}</p>
                      <p class="text-slate-400 text-sm leading-relaxed bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                        {{ edu.description }}
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-24 border-t border-slate-900">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <h2 class="text-3xl font-bold mb-4 tracking-tight">Project Portfolio</h2>
                  <p class="text-slate-400 max-w-xl">From Broadcom production systems to Georgia Tech ML research.</p>
                </div>
                <div class="flex gap-4 overflow-x-auto pb-2">
                  <button 
                    v-for="cat in ['All', 'Router', 'STB', 'AndroidTV', 'IoT', 'Firmware']" 
                    :key="cat"
                    @click="activeFilter = cat"
                    :class="['whitespace-nowrap px-4 py-2 rounded-full border text-xs font-bold transition-colors', activeFilter === cat ? 'bg-cyan-500 border-cyan-500 text-white' : 'border-slate-800 hover:border-cyan-500 hover:text-cyan-400']"
                  >
                    {{ cat }}
                  </button>
                </div>
             </div>

             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
             </div>
          </div>
        </section>
      </main>

      <footer class="py-12 border-t border-slate-900 bg-slate-950 text-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-slate-500 text-sm font-mono mb-6">
            &copy; {{ currentYear }} embeddedsystems.ai | veteran engineered | silicon to cloud
          </div>
          <div class="flex justify-center gap-8">
            <a href="#" class="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
            <a href="#" class="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </footer>

      <GeminiAssistant />
    </div>
  `
});
