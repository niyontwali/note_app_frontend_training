import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { Mail, Lock, PenTool, Eye, EyeOff } from "lucide-react";
import { useLoginMutation } from "../redux/api/apiSlice";
import { toastError } from "../utils";
import { setCredentials } from "../redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";

const { VITE_BASE_API_URL } = import.meta.env;

const Login = () => {
  // RTK Hooks
  const [login, { isLoading }] = useLoginMutation();

  // get token token from state
  const { userToken } = useSelector(state => state.auth);

  // useForm from react-hook form with email validation pattern
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Define state
  const [showPassword, setShowPassword] = useState(false);

  // store useNavigate into variable
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // handle submit function
  const onSubmit = async (data) => {
    try {
      // login logic
      const response = await login(data).unwrap();
      if (!response.ok) {
        toastError(response.message);
      } else {
        // navigate a user to notes
        navigate("/");
        dispatch(setCredentials(response.token));
      }
    } catch (error) {
      toastError(error.message || 'Server error');
    }
  };

  useEffect(() => {
    if (userToken) {
      navigate('/');
    }
  }, [navigate, userToken]);

  return (
    <main className="bg-black min-h-screen flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-md">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex p-4 rounded-full bg-[#282626] border border-gray-700 mb-4 ring-2 ring-gray-800 ring-offset-2 ring-offset-black">
            <PenTool className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to continue to Notes</p>
        </div>

        {/* Form Card */}
        <div className="w-full bg-[#282626] rounded-2xl shadow-lg shadow-black/30 overflow-hidden p-8">
          <h1 className="text-xl font-semibold text-white mb-6">Login</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-500" />
                </div>
                <Input
                  id="email"
                  className="w-full py-2 pl-10 text-white bg-[#282626] border border-gray-700 rounded-lg focus:ring-[1px] focus:ring-blue-400 focus:border-transparent"
                  type="text"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
              </div>
              {errors.email && <span className="text-red-500 text-sm block">{errors.email.message}</span>}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-400">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-500" />
                </div>
                <Input
                  id="password"
                  className="w-full py-2 pl-10 pr-10 text-white bg-[#282626] border border-gray-700 rounded-lg focus:ring-[1px] focus:ring-blue-400 focus:border-transparent"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  {...register("password", { required: "Password is required" })}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300 focus:outline-none cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
              {errors.password && <span className="text-red-500 text-sm block">{errors.password.message}</span>}
            </div>

            {/* Submit Button */}
            <Button
              title="Sign in"
              type="submit"
              isLoading={isLoading}
              moreStyles="text-white w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#282626] transition-all"
              loadingText="Signing in..."
            />

            {/* Register Link */}
            <div className="text-center pt-4 border-t border-gray-700 mt-6">
              <p className="text-gray-400">
                Don't have an account?
                <Link to="/register" className="text-blue-400 hover:text-blue-300 ml-2 font-medium hover:underline">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;