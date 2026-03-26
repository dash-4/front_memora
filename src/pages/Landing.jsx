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
        isScrolled ? 'bg-white/90 backdrop-blur-lg border-b border-slate-100 py-3' : 'bg-transparent py-5'
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
        {/* Background blobs */}
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
          
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl opacity-60" />
            <div className="relative bg-white border border-slate-200 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
               <div className="p-8 space-y-6">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-400 flex items-center justify-center text-indigo-600 font-black">
                         {/* Аватарка питомца */}
                         😸
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-400">Питомец</p>
                        <p className="font-bold text-slate-900">Buddy Level 12</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-black uppercase tracking-tighter">
                      Streak 8 days
                    </div>
                 </div>
                 
                 <div className="h-48 bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex flex-col items-center justify-center text-center p-6 group">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl shadow-xl shadow-blue-200 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                       <Zap fill="currentColor" />
                    </div>
                    <p className="font-black text-slate-900">24 карточки</p>
                    <p className="text-xs text-slate-400 font-bold uppercase mt-1">Ждут повторения</p>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-900 rounded-2xl text-white">
                       <LineChart size={20} className="mb-2 text-blue-400" />
                       <p className="text-[10px] opacity-60 font-bold uppercase">Успех</p>
                       <p className="text-lg font-black">94%</p>
                    </div>
                    <div className="p-4 bg-indigo-600 rounded-2xl text-white">
                       <Award size={20} className="mb-2 text-indigo-300" />
                       <p className="text-[10px] opacity-60 font-bold uppercase">XP</p>
                       <p className="text-lg font-black italic">1000</p>
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