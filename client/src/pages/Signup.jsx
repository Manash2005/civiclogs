import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react';
import {User, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { register } from '../services/authServices';

function Signup() {
  const navigate = useNavigate();
  const[role, setRole] = useState('Citizen')
  const [showPassword, setShowPassword] = useState(false);   
  const[showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await register({ 
        name, 
        email, 
        password,
        role: role.toLowerCase()
      });
      // Store token in localStorage
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response));
      // Redirect to dashboard or home
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Signup failed');
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
                Report issues, collaborate with volunteers,
                and improve your community together.
              </p>
          </div>
        </div>
      </div>

  {/* RIGHT */}
  <div className="flex items-center justify-center bg-secondary">
    <div className="w-full max-w-md p-4">
      <div className='mb-6 py-4'>
        <h2 className="text-5xl font-script font-bold mb-1 text-black">
          Create Your Account
        </h2>

        <p className='text-sm text-gray-600'>
          Join civiclogs and be a part of the change
        </p>
      </div>

      <div className="flex bg-white rounded-xl p-1 border border-gray-400 mb-6">
          {["Citizen", "Volunteer"].map((item) => (
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
          Full Name
        </label>

        <div className='flex items-center border border-gray-400 rounded-xl px-3 py-3 mb-5 bg-white'>
          <User className="text-neutral mr-2" size={18} />
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full outline-none text-sm"
            required
          />
        </div>

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
        {/* CONFIRM PASSWORD */}
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-neutral">
            Confirm Password
          </label>
        </div>

        <div className="flex items-center border border-gray-400 rounded-xl px-3 py-3 mb-6 bg-white">
          <Lock className="text-neutral mr-2" size={18} />
          <input
             type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full outline-none text-sm"
            required
          />
          {/* ICON */}
          {showConfirmPassword ? (
            <Eye
              className="ml-2 cursor-pointer text-neutral"
              size={18}
              onClick={() => setShowConfirmPassword(false)}
            />
          ) : (
            <EyeOff
              className="ml-2 cursor-pointer text-neutral"
              size={18}
              onClick={() => setShowConfirmPassword(true)}
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
          {loading ? 'Creating Account...' : 'Sign Up'} <ArrowRight size={18} />
        </button>
      </form>
      
      <p className="text-sm text-center text-gray-600 mt-4">
        Already have an account?{" "}
        <Link to="/" className="text-primary font-medium hover:underline">
          Log In
        </Link>
      </p>
    </div>
  </div>

</div>
  )
}

export default Signup