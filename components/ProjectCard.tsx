
import { defineComponent, PropType } from 'vue';
import { Project } from '../types';

export default defineComponent({
  name: 'ProjectCard',
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true
    }
  },
  setup(props) {
    const statusClasses: Record<string, string> = {
      Completed: 'bg-green-500/10 text-green-400 border-green-500/20',
      Ongoing: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      Planned: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    };

    return { statusClasses };
  },
  template: `
    <div class="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
      <div class="h-48 overflow-hidden relative">
        <img 
          :src="project.imageUrl" 
          :alt="project.title" 
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
        />
        <div class="absolute top-3 right-3">
          <span :class="['text-[10px] font-bold px-2 py-1 rounded border uppercase tracking-wider', statusClasses[project.status]]">
            {{ project.status }}
          </span>
        </div>
        <div class="absolute bottom-3 left-3">
           <span class="text-xs bg-slate-950/80 text-cyan-400 px-2 py-1 rounded border border-cyan-900/50 font-mono">
            {{ project.category }}
           </span>
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{{ project.title }}</h3>
        <p class="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-2">
          {{ project.description }}
        </p>
        <div class="space-y-2">
          <div v-for="(detail, idx) in project.technicalDetails.slice(0, 3)" :key="idx" class="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span class="text-cyan-500">{{ '>' }}</span> {{ detail }}
          </div>
        </div>
      </div>
    </div>
  `
});
