import { Link } from 'react-router-dom';
import { 
  Brain, Target, Zap, BookOpen, CheckCircle, 
  Sparkles, Gamepad2, LineChart, ShieldCheck, 
  ChevronRight, Award, Menu, X, Rocket
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFBFF] text-slate-900 selection:bg-blue-100 font-sans overflow-x-hidden">
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white/90  border-b border-slate-100 py-3' : ' py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2.5 group relative z-[101]">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-blue-200 shadow-lg group-hover:rotate-6 transition-all">
              <Brain className="text-white" size={22} />
            </div>
            <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-600">
              Memora
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[13px] font-bold uppercase tracking-wider text-slate-500">
            <a href="#modes" className="hover:text-blue-600 transition-colors">Режимы</a>
            <a href="#pet" className="hover:text-blue-600 transition-colors">Питомец</a>
            <Link to="/faq" className="hover:text-blue-600 transition-colors">Методика</Link>
            <div className="h-4 w-px bg-slate-200" />
            <Link to="/login" className="text-slate-900 hover:text-blue-600 transition-colors">Войти</Link>
            <Link to="/register">
              <Button className="rounded-2xl px-8 shadow-lg shadow-blue-100 active:scale-95 transition-all">Попробовать</Button>
            </Link>
          </div>

          <button className="md:hidden p-2 z-[101]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-[100] flex flex-col p-10 pt-32 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-8 text-2xl font-black text-slate-900">
              <a href="#modes" onClick={() => setMobileMenuOpen(false)}>Режимы</a>
              <a href="#pet" onClick={() => setMobileMenuOpen(false)}>Питомец</a>
              <Link to="/faq" onClick={() => setMobileMenuOpen(false)}>Методика</Link>
              <hr className="border-slate-100" />
              <Link to="/login" className="text-blue-600">Войти</Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button size="lg" className="w-full rounded-2xl">Создать аккаунт</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-8 border border-blue-100 animate-bounce-slow">
              <Rocket size={14} />Когнитивный форсаж
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-[0.95] mb-8 tracking-tighter text-slate-900">
              Знания <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">навсегда.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              Memora превращает хаотичное обучение в систему. Запоминай 90% материала с помощью научно доказанных интервалов повторения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/register">
                <Button size="lg" className="h-16 px-10 rounded-[1.5rem] text-lg font-black shadow-2xl shadow-blue-200 transition-all hover:-translate-y-1">
                  Начать бесплатно
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative group/container">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/15 rounded-full blur-[100px] animate-bounce duration-[10s]" />
            </div>

            <div className="relative max-w-sm mx-auto">
              <div className="relative bg-white/80 backdrop-blur-2xl border border-white rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-700 hover:shadow-[0_50px_100px_-20px_rgba(79,70,229,0.15)] hover:-translate-y-2 lg:rotate-3 hover:rotate-0">
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                <div className="p-8 space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center text-3xl shadow-inner border border-indigo-200/50">
                          😸
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 border-4 border-white rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Level 12</p>
                        <p className="font-black text-slate-900 text-lg">Buddy</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <span className="flex items-center gap-1 text-orange-500 font-black text-sm">
                        <span className="animate-bounce">🔥</span> 8 дней
                      </span>
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Ударный режим</p>
                    </div>
                  </div>

                  <div className="relative group/action cursor-pointer">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] opacity-0 group-hover/action:opacity-10 transition-opacity blur-xl" />
                    
                    <div className="relative h-52 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-[2rem] border border-slate-200/60 flex flex-col items-center justify-center text-center p-6 transition-all duration-500 group-hover/action:bg-white group-hover/action:shadow-xl group-hover/action:shadow-indigo-500/10">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 group-hover/action:opacity-40 transition-opacity" />
                        <div className="relative w-20 h-20 bg-blue-600 rounded-[2rem] shadow-2xl shadow-blue-300 flex items-center justify-center text-white transform group-hover/action:rotate-[10deg] transition-transform duration-500">
                          <Zap size={32} fill="currentColor" />
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-2xl font-black text-slate-900">24 карточки</p>
                        <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest">Пора закрепить знания</p>
                      </div>

                      <div className="absolute bottom-4 inset-x-8 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-blue-600 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="group/stat p-5 bg-slate-900 rounded-[1.5rem] text-white transition-all hover:scale-[1.02] active:scale-95">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-3 group-hover/stat:bg-blue-500 transition-colors">
                        <LineChart size={16} className="text-blue-400 group-hover/stat:text-white" />
                      </div>
                      <p className="text-[9px] opacity-50 font-black uppercase tracking-wider">Точность</p>
                      <p className="text-2xl font-black">94%</p>
                    </div>

                    <div className="group/stat p-5 bg-indigo-600 rounded-[1.5rem] text-white transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-indigo-200">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-3 group-hover/stat:bg-white group-hover/stat:text-indigo-600 transition-colors">
                        <Award size={16} className="text-indigo-200 group-hover/stat:text-indigo-600" />
                      </div>
                      <p className="text-[9px] opacity-60 font-black uppercase tracking-wider">Очки опыта</p>
                      <p className="text-2xl font-black tabular-nums">1,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modes" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter italic">Учись иначе.</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-20 text-lg font-medium">Мы объединили когнитивистику и геймификацию, чтобы сделать учебу зависимостью.</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-left">
            {[
              { icon: Zap, title: "SM-2 Алгоритм", desc: "Умная система сама знает, когда ты начнешь забывать.", color: "bg-orange-50 text-orange-600", border: "hover:border-orange-200" },
              { icon: Gamepad2, title: "Матч-Игра", desc: "Соединяй пары на время. Скорость — залог автоматизма.", color: "bg-emerald-50 text-emerald-600", border: "hover:border-emerald-200" },
              { icon: BookOpen, title: "Фри-мод", desc: "Просматривай колоды в любое время без стресса.", color: "bg-blue-50 text-blue-600", border: "hover:border-blue-200" },
              { icon: Target, title: "Экзамен", desc: "Симуляция реального теста с вариантами ответов.", color: "bg-purple-50 text-purple-600", border: "hover:border-purple-200" }
            ].map((mode, i) => (
              <div key={i} className={`group p-8 rounded-[2.5rem] border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] ${mode.border}`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${mode.color}`}>
                  <mode.icon size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black mb-3 text-slate-900 tracking-tight">{mode.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pet" className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3.5rem] p-8 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px]" />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/40 text-white">
                <Sparkles size={28} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                Преврати знания в <span className="text-blue-400">эволюцию.</span>
              </h2>
              <div className="space-y-6">
                {[
                  'XP за каждую пройденную карточку',
                  'Разблокировка новых обликов питомца',
                  'Запоминай быстрее'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-300 font-bold uppercase tracking-widest text-[11px]">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                       <CheckCircle size={14} className="text-blue-400" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-blue-600/20 rounded-full flex items-center justify-center animate-pulse">
                 <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.5)]">
                    <Brain size={100} className="text-white opacity-90 animate-bounce-slow" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 text-center px-6 bg-[#FAFBFF]">
        <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter text-slate-900">
          Начни свою <br /> <span className="text-blue-600 underline decoration-blue-100">стрик-историю.</span>
        </h2>
        <Link to="/register">
          <Button size="lg" className="h-20 px-16 rounded-[2rem] text-xl font-black group shadow-2xl shadow-blue-200">
            Создать колоду 
            <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
          </Button>
        </Link>
        <p className="mt-8 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
          Доказано: повторения переводят до 90% информации в долгосрочный актив.
        </p>
      </section>

      <footer className="py-16 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Brain className="text-blue-600" size={32} />
              <span className="font-black text-2xl tracking-tighter text-slate-900 italic">Memora</span>
            </Link>
            <p className="text-slate-400 text-sm font-medium">Science of memory, art of learning.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
            <Link to="/faq" className="hover:text-blue-600">Методика</Link>
          </div>
          
          <p className="text-slate-300 text-xs font-bold">© 2026. Designed for Excellence.</p>
        </div>
      </footer>
    </div>
  );
}