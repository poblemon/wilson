import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const API_KEY = import.meta.env.VITE_OPENROUTER_KEY;
const APP_URL = window.location.origin;

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setLoading(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
          'HTTP-Referer': APP_URL,
          'X-Title': 'WealthWise Financial Education'
        },
        body: JSON.stringify({
          model: 'anthropic/claude-3-haiku',
          temperature: 0.3,
          max_tokens: 500,
          messages: [
            {
              role: 'system',
              content: `Eres Wilson, un asistente financiero experto que responde siempre en español de manera clara, profesional y amable. Nunca respondas en otro idioma ni uses mensajes de error genéricos. Si no sabes la respuesta, responde con "Lo siento, no tengo esa información en este momento." Sigue estas reglas:

1. Responde de manera natural y amable a cualquier pregunta inicial.
2. Si la pregunta no es financiera, después de responder, guía suavemente la conversación hacia temas financieros.
3. Para preguntas financieras:
   - Proporciona información precisa y actualizada (Q2 2024)
   - Usa formato claro con viñetas cuando sea apropiado
   - Incluye datos concretos (métricas, porcentajes, comparativas)
   - Mantén un tono profesional pero accesible

4. Responde siempre en español, sin usar otro idioma.

5. Ejemplos de respuestas ideales:
   P: "Hola, ¿qué puedes hacer?"
   R: "¡Hola! Soy Wilson, tu experto en finanzas. Puedo ayudarte con análisis de inversiones, mercados, planificación financiera y más. ¿Tienes alguna pregunta específica sobre tus finanzas o el mercado actual?"

   P: "¿Qué sabes de tecnología?"
   R: "Como asistente financiero, mi especialidad son las finanzas tecnológicas. Por ejemplo, puedo analizar el rendimiento de acciones de empresas tech, tendencias del NASDAQ o valoraciones de startups. ¿Te interesa algún aspecto financiero del sector tecnológico?"

   P: "Análisis de Tesla"
   R: "**TSLA Q2 2024 - Análisis clave**  
   - Margen bruto: 18.3% (vs 21.4% sector automotriz)  
   - Flujo de caja libre: $1.2B (-14% interanual)  
   - Entrega de vehículos: 450K (+9% trimestral)  
   - Precio objetivo promedio: $210 (12% potencial)"
`
            },
            ...messages.slice(-6).filter(msg => msg.sender === 'user' || msg.sender === 'bot').map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text
            })),
            { role: 'user', content: inputText }
          ]
        })
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      let botResponse = data.choices?.[0]?.message?.content || "No pude procesar tu pregunta. ¿Podrías reformularla?";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Disculpa, estoy teniendo dificultades técnicas para conectar con el servicio de chat. Por favor intenta nuevamente más tarde o contacta al soporte.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-emerald-700 transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat financiero"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed ${isMobile ? 'inset-0' : 'bottom-24 right-6'} bg-white rounded-xl shadow-xl overflow-hidden flex flex-col z-40 ${isMobile ? 'm-2' : 'w-96 h-[70vh]'}`}
          >
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4 flex items-center justify-between text-white">
              <div className="flex items-center">
                <Bot className="h-6 w-6 mr-2" />
                <h3 className="font-semibold">Asesor Financiero Wilson</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-emerald-100 transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center p-4 text-gray-500">
                  <Bot className="h-12 w-12 mb-4 text-emerald-500" />
                  <h4 className="font-medium text-lg mb-2">Asesoría Financiera Inteligente</h4>
                  <p className="text-sm max-w-xs">
                    Puedes preguntarme cualquier cosa, pero mi especialidad son las finanzas y inversiones.
                  </p>
                  <div className="mt-6 text-left text-sm text-gray-600 w-full">
                    <p className="font-medium mb-1">Ejemplos de preguntas:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>"¿Cómo empezar a invertir?"</li>
                      <li>"Explícame qué son los fondos indexados"</li>
                      <li>"Análisis de las acciones de Apple"</li>
                      <li>"¿Qué está pasando con el mercado crypto?"</li>
                    </ul>
                  </div>
                </div>
              )}

              {messages.map(message => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, x: message.sender === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl p-3 ${
                      message.sender === 'user'
                        ? 'bg-emerald-600 text-white rounded-br-none'
                        : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-emerald-100' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString('es-ES', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {loading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-xl p-3 bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      <span className="text-sm ml-2">Analizando tu consulta...</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Escribe tu pregunta aquí..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                  disabled={loading}
                />
                <button
                  onClick={handleSendMessage}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${
                    inputText.trim() ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-gray-100 text-gray-400'
                  } transition-colors`}
                  disabled={loading || !inputText.trim()}
                >
                  {loading ? (
                    <div className="animate-spin">
                      <ArrowUp className="h-4 w-4" />
                    </div>
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Wilson - Asesoría financiera Q2 2025
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAssistant;
