
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
  template: `
    <nav class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center font-bold text-slate-950">
              ES
            </div>
            <span class="text-xl font-bold font-mono tracking-tighter">
              embeddedsystems<span class="text-cyan-400">.ai</span>
            </span>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="#hero" class="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Expertise</a>
              <a href="#projects" class="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
              <a href="#future" class="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Roadmap</a>
              <button class="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-md text-sm font-bold transition-all transform hover:scale-105">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `
});
