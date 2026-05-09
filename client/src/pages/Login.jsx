import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { login } from '../services/authServices';

function Login() {
  const navigate = useNavigate();
  const[role, setRole] = useState('Citizen')
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await login({ email, password });
      // Store token in localStorage
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response));
      // Redirect to dashboard or home
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };



  return (
  <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

   {/* LEFT */}
    <div className="relative h-screen hidden md:block">
        {/* Image */}
        <img 
            src="/loginImage.png" 
            alt="login" 
            className="w-full h-full object-cover"
        />

        {/* Green overlay */}
        <div className="absolute inset-0 bg-green-950/50"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-between p-10 text-white">

          {/* TOP LOGO */}
          <div>
              <img src="/logo.png" alt="CivicLogs Logo" className='w-46 rounded-full' />
          </div>

          {/* BOTTOM MESSAGE */}
          <div>
              <h2 className="text-4xl font-script mb-4 leading-tight">
                Connecting Citizens <br /> Building Communities
              </h2>
              <p className="text-lg text-gray-200 max-w-md">
                Thank you for being a part of our community! Together, we can make a differenc.
              </p>
          </div>
        </div>
      </div>
  {/* RIGHT */}
  <div className="flex items-center justify-center bg-secondary">
    <div className="w-full max-w-md p-4">
      <div className='mb-6 py-4'>
        <p className="text-5xl font-script font-bold mb-1 text-blackf">
          Welcome Back
        </p>

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

      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium mb-2 text-neutral">
          Email Address
        </label>

        <div className="flex items-center border border-gray-400 rounded-xl px-3 py-3 mb-5 bg-white">
          <Mail className="text-neutral mr-2" size={18} />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full outline-none text-sm"
            required
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none text-sm"
            required
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

        {error && <p className="text-danger text-sm mb-4">{error}</p>}

        {/* BUTTON */}
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-primary text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? 'Signing In...' : 'Sign In'} <ArrowRight size={18} />
        </button>
      </form>
      
      <p className="text-sm text-gray-600 mt-4">
        Don't have an account?{" "}
        <Link to="/signup" className="text-primary font-medium hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  </div>

</div>
  )
}

export default Login