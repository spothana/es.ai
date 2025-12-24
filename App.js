
import { defineComponent, ref, computed, onMounted } from 'vue';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import ProjectCard from './components/ProjectCard.js';
import GeminiAssistant from './components/GeminiAssistant.js';
import { PROJECTS, Icons, SUMMARY_TEXT, COMPETENCIES, EXPERIENCE, PATENTS, EDUCATION, FUTURE_INITIATIVES, GA_TECH_RESEARCH } from './constants.js';

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
    const selectedResearch = ref(null);
    const currentPage = ref('home'); // 'home' or 'profile'

    const filteredProjects = computed(() => {
      if (activeFilter.value === 'All') return PROJECTS;
      return PROJECTS.filter(p => p.category === activeFilter.value);
    });

    const openResearchDetail = (res) => {
      selectedResearch.value = res;
      document.body.style.overflow = 'hidden';
    };

    const closeResearchDetail = () => {
      selectedResearch.value = null;
      document.body.style.overflow = 'auto';
    };

    const setPage = (page) => {
      currentPage.value = page;
      window.scrollTo(0, 0);
    };

    return { 
      activeFilter, 
      selectedResearch,
      currentPage,
      filteredProjects, 
      SUMMARY_TEXT, 
      COMPETENCIES, 
      EXPERIENCE, 
      PATENTS, 
      EDUCATION, 
      FUTURE_INITIATIVES,
      GA_TECH_RESEARCH,
      openResearchDetail,
      closeResearchDetail,
      setPage,
      currentYear: new Date().getFullYear() 
    };
  },
  template: `
    <div class="min-h-screen bg-slate-950/20 text-slate-100 selection:bg-cyan-500/30 flex flex-col">
      <!-- Custom Navbar with Routing -->
      <nav class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center gap-2 cursor-pointer" @click="setPage('home')">
              <div class="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center font-bold text-slate-950">ES</div>
              <span class="text-xl font-bold font-mono tracking-tighter">embeddedsystems<span class="text-cyan-400">.ai</span></span>
            </div>
            <div class="flex items-center gap-4 md:gap-8">
              <button 
                @click="setPage('home')" 
                :class="['text-sm font-bold font-mono tracking-wider transition-colors uppercase', currentPage === 'home' ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400']">
                Roadmap
              </button>
              <button 
                @click="setPage('profile')" 
                :class="['text-sm font-bold font-mono tracking-wider transition-colors uppercase', currentPage === 'profile' ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400']">
                Expert Profile
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <main class="flex-1">
        <!-- PAGE: HOME (Just the Roadmap Items) -->
        <div v-if="currentPage === 'home'" class="animate-fade-in">
          <section id="roadmap" class="py-24 relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.08),transparent_50%)]"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
              <div class="text-center mb-20">
                 <h2 class="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white uppercase tracking-tighter">Strategic Roadmap 2026</h2>
                 <p class="text-slate-400 font-mono text-base tracking-widest uppercase mb-12">// transitioning_to_intelligent_infrastructure</p>
                 <div class="h-1.5 w-32 bg-cyan-500 mx-auto rounded-full"></div>
              </div>
              
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                 <div v-for="init in FUTURE_INITIATIVES" :key="init.title" 
                      class="p-10 md:p-14 bg-slate-900/40 border border-slate-800 rounded-[3.5rem] relative group hover:border-cyan-500/30 transition-all backdrop-blur-sm flex flex-col h-full shadow-2xl">
                    <div class="absolute -top-4 right-10 bg-cyan-600 text-white px-6 py-2 rounded-2xl text-[12px] font-bold font-mono shadow-xl uppercase tracking-widest">{{ init.date }}</div>
                    
                    <h4 class="text-3xl md:text-4xl font-black mb-8 text-white group-hover:text-cyan-400 transition-colors leading-tight italic">{{ init.title }}</h4>
                    <p class="text-lg text-slate-300 mb-10 leading-relaxed font-medium italic opacity-90">"{{ init.description }}"</p>
                    
                    <div class="space-y-8 mb-12 flex-1">
                      <div v-for="point in (init.framework || init.pillars)" :key="point.title" class="flex gap-6">
                        <div class="shrink-0 w-2 h-2 rounded-full bg-cyan-500 mt-2.5 shadow-[0_0_12px_cyan]"></div>
                        <div>
                          <h5 class="text-xs font-black text-cyan-400 uppercase tracking-widest mb-2 font-mono">{{ point.title }}</h5>
                          <p class="text-sm text-slate-400 leading-relaxed font-medium">{{ point.content }}</p>
                        </div>
                      </div>
                    </div>

                    <div class="p-6 bg-slate-950/50 border border-slate-800 rounded-3xl mb-10">
                      <p class="text-xs font-mono text-cyan-500 font-bold uppercase leading-relaxed">
                        <span class="text-slate-500">Status_Update:</span> {{ init.status }}
                      </p>
                    </div>

                    <div class="flex flex-wrap gap-3 mt-auto">
                      <span v-for="tag in (init.tech || '').split(', ')" :key="tag" 
                            class="px-4 py-1.5 bg-slate-800 text-slate-400 text-[10px] font-black rounded-xl uppercase tracking-widest border border-slate-700">
                        #{{ tag }}
                      </span>
                    </div>
                 </div>
              </div>
            </div>
          </section>
        </div>

        <!-- PAGE: PROFILE (All "About Me" Content) -->
        <div v-if="currentPage === 'profile'" class="animate-fade-in">
          <Hero />

          <!-- Executive Summary -->
          <section class="py-20 border-y border-slate-900 bg-slate-900/40 relative">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 class="text-xs font-mono text-cyan-500 uppercase tracking-[0.3em] mb-8 font-bold">// professional_credo</h2>
              <p class="text-2xl md:text-3xl font-light leading-relaxed text-slate-200 italic">
                "{{ SUMMARY_TEXT }}"
              </p>
            </div>
          </section>

          <!-- Core Competencies -->
          <section id="expertise" class="py-24">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="mb-16">
                <h2 class="text-3xl font-bold mb-4 tracking-tight text-white uppercase tracking-tighter text-shadow-glow">Core Competencies</h2>
                <div class="h-1 w-20 bg-cyan-500"></div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(comp, idx) in COMPETENCIES" :key="idx" 
                     class="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all group backdrop-blur-sm shadow-xl">
                  <h3 class="text-cyan-400 font-bold mb-4 flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full bg-cyan-500"></span>
                    {{ comp.category }}
                  </h3>
                  <p class="text-slate-400 text-sm leading-relaxed font-medium">{{ comp.skills }}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Research Section -->
          <section id="research" class="py-24 border-t border-slate-900 bg-cyan-950/5">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="mb-16">
                <h2 class="text-3xl font-bold mb-4 tracking-tight text-white uppercase tracking-tighter">Academic Research</h2>
                <div class="h-1 w-20 bg-cyan-500"></div>
              </div>
              <div class="space-y-12">
                <div v-for="res in GA_TECH_RESEARCH" :key="res.id" 
                     class="bg-slate-950/60 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 hover:border-cyan-500/20 transition-all group">
                  <div class="flex-1">
                    <h3 class="text-2xl md:text-4xl font-black text-white leading-tight mb-4">{{ res.title }}</h3>
                    <p class="text-cyan-500 font-mono text-xs mb-8 uppercase">{{ res.subtitle }}</p>
                    <p class="text-slate-300 mb-10 leading-relaxed text-lg max-w-3xl font-medium">{{ res.description }}</p>
                    <button @click="openResearchDetail(res)" class="px-8 py-4 bg-slate-900 border border-slate-800 text-cyan-400 rounded-2xl font-bold hover:bg-cyan-600 hover:text-white transition-all">
                      Open Documentation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Portfolio -->
          <section id="projects" class="py-24 border-t border-slate-900 bg-slate-900/10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                  <div>
                    <h2 class="text-3xl font-bold mb-4 tracking-tight text-white uppercase tracking-tighter">Production Deployments</h2>
                  </div>
                  <div class="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    <button v-for="cat in ['All', 'Router', 'STB', 'AndroidTV', 'IoT']" :key="cat" @click="activeFilter = cat"
                      :class="['whitespace-nowrap px-6 py-2.5 rounded-full border text-[10px] font-black transition-all uppercase tracking-widest', activeFilter === cat ? 'bg-cyan-500 border-cyan-500 text-white' : 'border-slate-800 text-slate-500 hover:border-cyan-500 hover:text-cyan-400']">
                      {{ cat }}
                    </button>
                  </div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
               </div>
            </div>
          </section>

          <!-- Patents -->
          <section class="py-24 border-t border-slate-900 bg-slate-950">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="mb-16 text-center">
                <h2 class="text-3xl font-bold mb-4 tracking-tight text-white uppercase tracking-tighter">Intellectual Property</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <a v-for="patent in PATENTS" :key="patent.id" :href="patent.url" target="_blank"
                     class="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl flex flex-col gap-6 hover:border-cyan-500/40 transition-all group backdrop-blur-sm">
                  <div class="flex items-center gap-3">
                    <span class="text-xs font-mono text-cyan-500 font-bold">{{ patent.id }}</span>
                    <span class="text-[8px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-bold uppercase">{{ patent.type }}</span>
                  </div>
                  <h4 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{{ patent.title }}</h4>
                  <p class="text-sm text-slate-500 leading-relaxed font-medium italic opacity-80">{{ patent.impact }}</p>
                </a>
              </div>
            </div>
          </section>

          <!-- Experience & Education -->
          <section class="py-24 border-t border-slate-900 bg-slate-900/20">
            <div class="max-w-4xl mx-auto px-4">
              <h2 class="text-3xl font-black mb-16 text-center uppercase tracking-widest">Chronicle</h2>
              <div class="space-y-20">
                <div v-for="exp in EXPERIENCE" :key="exp.company" class="relative pl-12 border-l-2 border-slate-800 pb-12">
                   <div class="absolute -left-[11px] top-0 w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
                   <div class="text-xs font-mono text-cyan-500 mb-2 font-bold">{{ exp.years }}</div>
                   <h4 class="text-2xl font-black text-white">{{ exp.company }}</h4>
                   <p class="text-slate-400 font-bold">{{ exp.role }} <span class="text-slate-600 font-normal">| {{ exp.location }}</span></p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- SHARED: Research Detail Overlay -->
        <transition name="fade">
          <div v-if="selectedResearch" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
            <div class="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl" @click="closeResearchDetail"></div>
            <div class="bg-slate-900 border border-slate-800 w-full max-w-6xl h-full max-h-[95vh] rounded-[3rem] shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden relative flex flex-col animate-scale-in">
              <button @click="closeResearchDetail" class="absolute top-8 right-8 z-[110] p-4 bg-slate-800/80 rounded-full text-slate-400 hover:text-white transition-all shadow-xl hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <div class="flex-1 overflow-y-auto scroll-smooth snap-y snap-mandatory bg-slate-950">
                <div v-for="(slide, index) in selectedResearch.slides" :key="index"
                     class="min-h-full w-full flex flex-col items-center justify-center p-8 md:p-24 snap-start border-b border-slate-800/50 relative overflow-hidden group/slide">
                  <div class="absolute bottom-12 right-12 text-[12rem] font-black text-white/5 font-mono select-none pointer-events-none">{{ String(index + 1).padStart(2, '0') }}</div>
                  <h3 class="text-4xl md:text-6xl font-black text-white tracking-tighter text-center mb-10 max-w-5xl leading-tight uppercase italic">{{ slide.title }}</h3>
                  <div class="max-w-4xl w-full">
                    <div class="p-10 md:p-16 bg-slate-900 border border-slate-800 rounded-[3rem] shadow-2xl relative">
                       <p class="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">{{ slide.content }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </main>

      <!-- Footer -->
      <footer class="py-20 border-t border-slate-900 bg-slate-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div class="text-2xl font-black font-mono mb-8 text-white tracking-tighter cursor-pointer" @click="setPage('home')">
            embeddedsystems<span class="text-cyan-400">.ai</span>
          </div>
          <p class="text-slate-800 text-[9px] uppercase tracking-tighter font-bold font-mono">&copy; {{ currentYear }} silicon solutions group.</p>
        </div>
      </footer>

      <GeminiAssistant />
    </div>
  `
});
