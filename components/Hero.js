
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Hero',
  template: `
    <section id="hero" class="relative py-32 overflow-hidden flex items-center justify-center min-h-[80vh]">
      <!-- Background Glows -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div class="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full"></div>
        <div class="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-block px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-8 animate-fade-in">
           <span class="text-cyan-400 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">Initializing Expert Sequence...</span>
        </div>
        
        <h1 class="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-white">
          Architecting <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">Smart Silicon.</span>
        </h1>
        
        <p class="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-medium">
          20+ years of high-performance firmware and system architecture for wireless routers, Android TV, and robust IoT ecosystems.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#projects" class="group relative px-10 py-4 bg-cyan-600 text-white rounded-xl font-bold transition-all hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] overflow-hidden">
            <span class="relative z-10 flex items-center gap-2">
              View Portfolio 
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </a>
          <a href="#roadmap" class="px-10 py-4 border border-slate-800 text-slate-300 rounded-xl font-bold hover:bg-slate-900 transition-all hover:border-slate-700">
            Roadmap 2025
          </a>
        </div>
      </div>
    </section>
  `
});
