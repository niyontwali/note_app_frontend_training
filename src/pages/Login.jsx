import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const { VITE_BASE_API_URL } = import.meta.env;

const Login = () => {
  // useForm from react-hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Define state
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // handle submit function
  const onSubmit = async (data) => {
    try {
      // start our loading state
      setIsLoading(true);
      // use fetch
      const result = await fetch(`${VITE_BASE_API_URL}/login`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });
      const response = await result.json();

      // condition
      if (!response.ok) {
        toast.error(response.message);
      } else {
        // store token in LS
        localStorage.setItem('note-token', response.token);
        // navigate use to home
        navigate('/');
      }

    } catch (error) {
      // overall errors
      toast.error(error.message || 'Error occured, please retry!');
    } finally {
      setIsLoading(false);
    }

  };

  return (
    <main className="bg-black h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[300px] bg-[#282626] flex flex-col justify-center  py-16 px-12 space-y-3 rounded-2xl shadow-lg shadow-black/30">
        <h1 className="text-2xl font-bold text-white mb-6">Login Page</h1>
        <Input
          moreStyle="py-1 text-white focus:ring-1 focus:ring-[#ccc] focus:ring-offset-[1px]"
          type="text"
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="text-red-500 -mt-2 text-sm">Email is required</span>}
        <Input
          moreStyle="py-1 text-white focus:ring-1 focus:ring-[#ccc] focus:ring-offset-[1px]"
          type="password"
          placeholder="Your Password"
          {...register("password", { required: true })}
        />
        {errors.password && <span className="text-red-500 -mt-2 text-sm">Password is required</span>}
        <Button title="Sign in" type="submit" isLoading={isLoading} moreStyles="text-white w-full" loadingText="signing in .." />
      </form>
    </main>
  );
};

export default Login;
