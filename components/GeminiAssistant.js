
import { defineComponent, ref, nextTick, watch } from 'vue';
import { getTechnicalExplanation } from '../services/geminiService.js';

export default defineComponent({
  name: 'GeminiAssistant',
  setup() {
    const isOpen = ref(false);
    const messages = ref([
      { role: 'model', text: 'CONNECTION ESTABLISHED. SYSTEM READY. ASK ABOUT EMBEDDED ARCHITECTURE, KERNEL PORTING, OR PROJECT SPECS.' }
    ]);
    const input = ref('');
    const isLoading = ref(false);
    const scrollRef = ref(null);

    const scrollToBottom = async () => {
      await nextTick();
      if (scrollRef.value) {
        scrollRef.value.scrollTop = scrollRef.value.scrollHeight;
      }
    };

    watch(messages, scrollToBottom, { deep: true });

    const handleSend = async () => {
      if (!input.value.trim() || isLoading.value) return;
      const userText = input.value;
      messages.value.push({ role: 'user', text: userText });
      input.value = '';
      isLoading.value = true;
      const response = await getTechnicalExplanation(userText, messages.value);
      messages.value.push({ role: 'model', text: response });
      isLoading.value = false;
    };

    return { isOpen, messages, input, isLoading, scrollRef, handleSend };
  },
  template: `
    <div class="fixed bottom-6 right-6 z-[60] font-mono">
      <div v-if="isOpen" class="bg-slate-900 border border-cyan-500/30 rounded-lg w-80 sm:w-96 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col max-h-[500px]">
        <div class="p-4 border-b border-cyan-500/30 flex justify-between bg-slate-950 rounded-t-lg items-center">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span class="text-xs font-bold text-cyan-400">ES_AI_SYSTEM_v4.2</span>
          </div>
          <button @click="isOpen = false" class="text-slate-400 hover:text-white transition-colors">[_X_]</button>
        </div>
        
        <div ref="scrollRef" class="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] text-xs">
          <div v-for="m in messages" :class="['flex', m.role === 'user' ? 'justify-end' : 'justify-start']">
            <div :class="['max-w-[90%] p-3 rounded border', m.role === 'user' ? 'bg-cyan-900/20 border-cyan-500/50 text-cyan-100' : 'bg-slate-950 border-slate-800 text-slate-300']">
              <span class="block mb-1 text-[10px] opacity-50">{{ m.role === 'user' ? 'USER_INPUT' : 'SYSTEM_OUT' }}</span>
              {{ m.text }}
            </div>
          </div>
          <div v-if="isLoading" class="flex justify-start">
            <div class="bg-slate-950 border border-slate-800 p-3 rounded animate-pulse text-cyan-500">
              ANALYZING_REQUEST...
            </div>
          </div>
        </div>

        <div class="p-4 bg-slate-950 rounded-b-lg border-t border-cyan-500/30">
          <div class="flex gap-2">
            <input 
              v-model="input" 
              @keydown.enter="handleSend" 
              class="flex-1 bg-slate-900 border border-slate-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors" 
              placeholder="QUERY CONSOLE..." 
            />
            <button @click="handleSend" class="px-3 py-1 bg-cyan-600 text-white rounded text-xs font-bold hover:bg-cyan-500">EXEC</button>
          </div>
        </div>
      </div>
      
      <button v-else @click="isOpen = true" class="w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-110 transition-all border-2 border-cyan-400/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
      </button>
    </div>
  `
});
