import { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Mail, Lock, ArrowRight } from "lucide-react";
import { authService } from "@/services/auth";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";

export default function Login() {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await authService.login(formData.username, formData.password);
      toast.success("Вход выполнен успешно!", { id: "login-success" });
      window.location.href = "/dashboard";
    } catch (error) {
      const errorData = error.response?.data;

      if (errorData && typeof errorData === "object") {
        setErrors(errorData);

        const firstErrorKey = Object.keys(errorData)[0];
        const firstError = errorData[firstErrorKey];
        const errorMessage = Array.isArray(firstError)
          ? firstError[0]
          : firstError;

        toast.error(errorMessage || "Неверные данные для входа", {
          id: "login-error",
        });
      } else {
        toast.error("Ошибка входа. Проверьте данные.", { id: "login-error" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
    //   <div className="max-w-md w-full">
    //     <div className="text-center mb-8">
    //       <Link to="/" className="inline-block">
    //         <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg hover:shadow-xl transition-shadow">
    //           <Brain className="text-white" size={32} />
    //         </div>
    //       </Link>
    //       <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Memora</h1>
    //       <p className="text-gray-600 mt-2">Войдите в свой аккаунт</p>
    //     </div>

    //     <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
    //       <form onSubmit={handleSubmit} className="space-y-5">
    //         <div>
    //           <label className="block text-sm font-semibold text-gray-700 mb-2">
    //             Имя пользователя или Email
    //           </label>
    //           <div className="relative">
    //             <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
    //             <input
    //               type="text"
    //               name="username"
    //               value={formData.username}
    //               onChange={handleChange}
    //               placeholder="Введите логин"
    //               className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
    //                 errors.username || errors.detail ? 'border-red-500' : 'border-gray-300'
    //               }`}
    //               required
    //             />
    //           </div>
    //           {errors.username && (
    //             <p className="mt-1 text-sm text-red-600">{errors.username}</p>
    //           )}
    //         </div>

    //         <div>
    //           <label className="block text-sm font-semibold text-gray-700 mb-2">
    //             Пароль
    //           </label>
    //           <div className="relative">
    //             <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
    //             <input
    //               type="password"
    //               name="password"
    //               value={formData.password}
    //               onChange={handleChange}
    //               placeholder="Введите пароль"
    //               className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
    //                 errors.password || errors.detail ? 'border-red-500' : 'border-gray-300'
    //               }`}
    //               required
    //             />
    //           </div>
    //           {errors.password && (
    //             <p className="mt-1 text-sm text-red-600">{errors.password}</p>
    //           )}
    //           {errors.detail && (
    //             <p className="mt-1 text-sm text-red-600">{errors.detail}</p>
    //           )}
    //         </div>

    //         <Button
    //           type="submit"
    //           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 shadow-lg hover:shadow-xl"
    //           disabled={loading}
    //         >
    //           {loading ? (
    //             <span className="flex items-center justify-center">
    //               <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
    //               Вход...
    //             </span>
    //           ) : (
    //             <span className="flex items-center justify-center">
    //               Войти
    //               <ArrowRight size={20} className="ml-2" />
    //             </span>
    //           )}
    //         </Button>
    //       </form>

    //       <div className="mt-6 text-center">
    //         <p className="text-gray-600 text-sm sm:text-base">
    //           Нет аккаунта?{' '}
    //           <Link
    //             to="/register"
    //             className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
    //           >
    //             Зарегистрироваться
    //           </Link>
    //         </p>
    //       </div>
    //     </div>

    //     <div className="mt-6 text-center">
    //       <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
    //         ← Вернуться на главную
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full perspective-1000">
        <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Link to="/" className="inline-block group">
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-3xl mb-6 shadow-2xl shadow-blue-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Brain className="text-white" size={40} />
              <div className="absolute inset-0 rounded-3xl bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
          </Link>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">
            Memora
          </h1>
          <p className="text-gray-500 mt-3 font-medium">
            С возвращением! Мы вас заждались.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] p-8 sm:p-10 border border-white/20 animate-in fade-in zoom-in-95 duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                Логин или Email
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <Mail size={20} />
                </div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`w-full pl-12 pr-5 py-4 bg-gray-50/50 border-2 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all duration-200 ${
                    errors.username || errors.detail
                      ? "border-red-200 bg-red-50/30"
                      : "border-transparent focus:border-blue-500"
                  }`}
                  required
                />
              </div>
              {errors.username && (
                <p className="text-xs font-medium text-red-500 ml-1">
                  {errors.username}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                Пароль
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full pl-12 pr-5 py-4 bg-gray-50/50 border-2 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none transition-all duration-200 ${
                    errors.password || errors.detail
                      ? "border-red-200 bg-red-50/30"
                      : "border-transparent focus:border-blue-500"
                  }`}
                  required
                />
              </div>
              {(errors.password || errors.detail) && (
                <p className="text-xs font-medium text-red-500 ml-1">
                  {errors.password || errors.detail}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-200 hover:shadow-blue-300 transform active:scale-[0.98] transition-all duration-200"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white mr-3" />
                  Загрузка...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Войти в систему
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </span>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 font-medium">
              Впервые у нас?{" "}
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-800 font-bold underline-offset-4 hover:underline transition-all"
              >
                Создать аккаунт
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center animate-in fade-in duration-1000 delay-300">
          <Link
            to="/"
            className="group inline-flex items-center text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            На главную страницу
          </Link>
        </div>
      </div>
    </div>
  );
}
