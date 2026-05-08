import {useState} from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
function Login() {

  const[role, setRole] = useState('Citizen')
  const [showPassword, setShowPassword] = useState(false);
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

  {/* LEFT */}
    <div className="h-screen hidden md:block">
      <img 
        src="/loginImage.png" 
        alt="login" 
        className="w-full h-full object-cover"
      />
    </div>

  {/* RIGHT */}
  <div className="flex items-center justify-center bg-secondary">
    <div className="w-full max-w-md p-4">
      <div className='mb-6 py-4'>
        <h2 className="text-3xl font-sans font-bold mb-1 text-blackf">
          Welcome Back
        </h2>

        <p className='text-sm text-gray-600'>
          Please enter your details to sign in
        </p>
      </div>

      <p className="text-sm font-sans mb-2 text-gray-700">
        SELECT ROLE
      </p>

      <div className="flex bg-white rounded-xl p-1 border border-gray-400 mb-6">
          {["Citizen", "Volunteer", "Admin"].map((item) => (
            <button
              key={item}
              onClick={() => setRole(item)}
              className={`flex-1 py-2 rounded-lg text-sm font-small transition-all duration-300 ${
                role === item
                  ? "bg-primary text-white"
                  : "text-neutral hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

      <form>
        <label className="block text-sm font-medium mb-2 text-neutral">
          Email Address
        </label>

        <div className="flex items-center border border-gray-400 rounded-xl px-3 py-3 mb-5 bg-white">
          <Mail className="text-neutral mr-2" size={18} />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* PASSWORD */}
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-neutral">
            Password
          </label>
          <button className="text-sm text-primary hover:underline">
            Forgot Password?
          </button>
        </div>

        <div className="flex items-center border border-gray-400 rounded-xl px-3 py-3 mb-6 bg-white">
          <Lock className="text-neutral mr-2" size={18} />
          <input
             type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="w-full outline-none text-sm"
          />
          {/* ICON */}
          {showPassword ? (
            <Eye
              className="ml-2 cursor-pointer text-neutral"
              size={18}
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <EyeOff
              className="ml-2 cursor-pointer text-neutral"
              size={18}
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>

        {/* BUTTON */}
        <button className="w-full bg-primary text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300">
          Sign In <ArrowRight size={18} />
        </button>
      </form>

    </div>
  </div>

</div>
  )
}

export default Login