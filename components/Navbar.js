
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
  template: `
    <nav class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center font-bold text-slate-950">ES</div>
            <span class="text-xl font-bold font-mono tracking-tighter">embeddedsystems<span class="text-cyan-400">.ai</span></span>
          </div>
          <div class="hidden md:flex items-center gap-8">
            <a href="#expertise" class="text-slate-400 hover:text-cyan-400 text-sm font-bold font-mono tracking-wider transition-colors uppercase">Expertise</a>
            <a href="#projects" class="text-slate-400 hover:text-cyan-400 text-sm font-bold font-mono tracking-wider transition-colors uppercase">Portfolio</a>
            <a href="#roadmap" class="text-slate-400 hover:text-cyan-400 text-sm font-bold font-mono tracking-wider transition-colors uppercase">Roadmap</a>
          </div>
        </div>
      </div>
    </nav>
  `
});
