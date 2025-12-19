
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Hero',
  template: `
    <section id="hero" class="relative py-20 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500 via-transparent to-transparent blur-3xl"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <h2 class="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 animate-pulse">
            // system_init: initializing...
          </h2>
          <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Building the Brains of <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              Next-Gen Devices
            </span>
          </h1>
          <p class="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
            Expert in architecting and implementing high-performance firmware and software for intelligent wireless routers, 
            Android TV platforms, and large-scale IoT ecosystems.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" class="bg-white text-slate-950 px-8 py-4 rounded-lg font-bold hover:bg-cyan-50 transition-all">
              View All Projects
            </a>
            <a href="#future" class="border border-slate-700 px-8 py-4 rounded-lg font-bold hover:bg-slate-900 transition-all">
              Future Initiatives
            </a>
          </div>
        </div>
      </div>
    </section>
  `
});
