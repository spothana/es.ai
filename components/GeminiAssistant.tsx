
import { defineComponent, ref, nextTick, watch } from 'vue';
import { getTechnicalExplanation } from '../services/geminiService';
import { ChatMessage } from '../types';

export default defineComponent({
  name: 'GeminiAssistant',
  setup() {
    const isOpen = ref(false);
    const messages = ref<ChatMessage[]>([
      { role: 'model', text: 'Hello! I am the ES.ai Technical Assistant. Ask me anything about embedded systems, networking, or the projects showcased here.' }
    ]);
    const input = ref('');
    const isLoading = ref(false);
    const scrollRef = ref<HTMLDivElement | null>(null);

    const scrollToBottom = async () => {
      await nextTick();
      if (scrollRef.value) {
        scrollRef.value.scrollTop = scrollRef.value.scrollHeight;
      }
    };

    watch(messages, scrollToBottom, { deep: true });
    watch(isOpen, (newVal) => {
      if (newVal) scrollToBottom();
    });

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
    <div class="fixed bottom-6 right-6 z-[60]">
      <div v-if="isOpen" class="bg-slate-900 border border-slate-800 rounded-2xl w-80 sm:w-96 shadow-2xl flex flex-col max-h-[500px] overflow-hidden">
        <div class="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span class="text-sm font-bold font-mono">AI_ENGINE_v3.0</span>
          </div>
          <button @click="isOpen = false" class="text-slate-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div ref="scrollRef" class="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
          <div v-for="(m, i) in messages" :key="i" :class="['flex', m.role === 'user' ? 'justify-end' : 'justify-start']">
            <div :class="['max-w-[85%] p-3 rounded-lg text-sm', m.role === 'user' ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-slate-800 text-slate-200 rounded-bl-none']">
              {{ m.text }}
            </div>
          </div>
          <div v-if="isLoading" class="flex justify-start">
            <div class="bg-slate-800 p-3 rounded-lg rounded-bl-none flex gap-1">
              <div class="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></div>
              <div class="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-75"></div>
              <div class="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        </div>

        <div class="p-4 border-t border-slate-800 bg-slate-950">
          <div class="flex gap-2">
            <input 
              type="text" 
              v-model="input"
              @keydown.enter="handleSend"
              placeholder="Ask technical question..."
              class="flex-1 bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button 
              @click="handleSend"
              :disabled="isLoading"
              class="bg-cyan-600 p-2 rounded hover:bg-cyan-500 transition-colors disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <button 
        v-else
        @click="isOpen = true"
        class="w-14 h-14 bg-cyan-600 hover:bg-cyan-500 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 group relative"
      >
        <div class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-950"></div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  `
});
