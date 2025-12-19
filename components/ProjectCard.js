
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectCard',
  props: {
    project: { type: Object, required: true }
  },
  setup(props) {
    const statusClasses = {
      Completed: 'bg-green-500/10 text-green-400 border-green-500/20',
      Ongoing: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      Planned: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    };
    return { statusClasses };
  },
  template: `
    <div class="group bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 flex flex-col h-full hover:translate-y-[-4px]">
      <div class="h-56 overflow-hidden relative">
        <img :src="project.imageUrl" class="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
        
        <div class="absolute top-4 left-4">
          <span class="text-[9px] font-bold px-2.5 py-1 rounded bg-slate-950/80 text-cyan-500 border border-cyan-500/20 uppercase tracking-widest font-mono">{{ project.category }}</span>
        </div>
        
        <div class="absolute top-4 right-4">
          <span :class="['text-[9px] font-bold px-2 py-1 rounded border uppercase tracking-widest font-mono shadow-sm', statusClasses[project.status]]">
            {{ project.status }}
          </span>
        </div>
      </div>
      
      <div class="p-8 flex-1 flex flex-col">
        <h3 class="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors text-white tracking-tight">{{ project.title }}</h3>
        <p class="text-slate-400 text-sm mb-6 line-clamp-2 font-medium leading-relaxed">{{ project.description }}</p>
        
        <div class="mt-auto space-y-3">
          <div v-for="detail in project.technicalDetails" :key="detail" class="flex items-center gap-3 text-[10px] font-mono text-slate-500">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
            {{ detail }}
          </div>
        </div>
      </div>
    </div>
  `
});
