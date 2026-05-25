import { useState } from 'react';
// eslint-disable-next-line
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  User,
} from 'lucide-react';

const formVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export default function Reserve() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    tier: '',
    fullName: '',
    email: '',
    passportId: '',
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className='mx-auto flex w-full max-w-3xl grow flex-col justify-center overflow-x-hidden px-6 py-12 md:px-8'>
      <div className='border-border/40 bg-surface/30 w-full rounded-3xl border p-6 shadow-xl backdrop-blur-sm sm:p-10'>
        <StepIndicator currentStep={step} />

        <div className='mt-8 flex min-h-95 flex-col justify-between'>
          <AnimatePresence mode='wait'>
            {step === 1 && (
              <DestinationSelection
                key='step1'
                selected={formData.destination}
                onSelect={val => handleSelect('destination', val)}
                onNext={nextStep}
              />
            )}

            {step === 2 && (
              <VesselTierSelection
                key='step2'
                selected={formData.tier}
                onSelect={val => handleSelect('tier', val)}
                onNext={nextStep}
                onPrev={prevStep}
              />
            )}

            {step === 3 && (
              <PassengerCredentials
                key='step3'
                formData={formData}
                onChange={handleInputChange}
                onNext={nextStep}
                onPrev={prevStep}
              />
            )}

            {step === 4 && <SuccessScreen key='step4' formData={formData} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 1. PROGRESSIVE STEP INDICATOR
// ==========================================
function StepIndicator({ currentStep }) {
  const steps = ['Destination', 'Tier Matrix', 'Credentials', 'Confirmation'];

  return (
    <div className='border-border/20 w-full border-b pb-6'>
      <div className='flex items-center justify-between'>
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep >= stepNumber;
          return (
            <div
              key={index}
              className='relative flex flex-1 flex-col items-center'
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-accent text-bg shadow-sm'
                    : 'bg-surface border-border text-muted border'
                }`}
              >
                {currentStep > stepNumber ? '✓' : stepNumber}
              </div>
              <span
                className={`mt-2 hidden text-[11px] font-medium tracking-wide uppercase transition-colors sm:block ${
                  isActive ? 'text-main font-semibold' : 'text-muted'
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// 2. STEP 1: DESTINATION SELECTION
// ==========================================
function DestinationSelection({ selected, onSelect, onNext }) {
  const options = [
    {
      id: 'leo',
      title: 'Low Earth Orbit',
      price: '$250,000',
      detail: '400km Altitude Gradients',
    },
    {
      id: 'lunar',
      title: 'Lunar Lagrange Point',
      price: '$1,200,000',
      detail: 'Translunar Module Habitat',
    },
    {
      id: 'station',
      title: 'Orbital Station Hubs',
      price: '$450,000',
      detail: 'Atmospheric Micro-Modules',
    },
  ];

  return (
    <motion.div
      variants={formVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      className='flex grow flex-col justify-between space-y-6'
    >
      <div className='space-y-4'>
        <div>
          <h2 className='text-main text-xl font-bold tracking-tight sm:text-2xl'>
            Select Flight Horizon
          </h2>
          <p className='text-muted text-sm'>
            Select your destination vector trajectory from our active orbital
            routes.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-4'>
          {options.map(opt => (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.id)}
              className={`flex cursor-pointer flex-col items-start justify-between gap-4 rounded-2xl border p-5 text-left transition-all select-none sm:flex-row sm:items-center ${
                selected === opt.id
                  ? 'border-accent bg-accent/5 ring-accent ring-1'
                  : 'border-border/60 bg-surface/40 hover:bg-surface'
              }`}
            >
              <div>
                <h3 className='text-main text-base font-bold tracking-tight'>
                  {opt.title}
                </h3>
                <p className='text-muted text-xs'>{opt.detail}</p>
              </div>
              <span className='text-accent font-mono text-sm font-bold'>
                {opt.price}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className='flex justify-end pt-6'>
        <button
          onClick={onNext}
          disabled={!selected}
          className='bg-text-main text-bg flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-medium shadow-md transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40'
        >
          Continue <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}

// ==========================================
// 3. STEP 2: VESSEL TIER SELECTION
// ==========================================
function VesselTierSelection({ selected, onSelect, onNext, onPrev }) {
  const tiers = [
    {
      id: 'executive',
      title: 'Executive Lounge',
      amenities: 'Panoramic Dome Access • Microgravity Dining Allocation',
    },
    {
      id: 'sovereign',
      title: 'Sovereign Suite',
      amenities:
        'Private Quarter Stabilization • Artificial Gravity Allocation',
    },
    {
      id: 'voyager',
      title: 'Voyager Deck',
      amenities: 'Integrated Logistics Pod • Shared Observational Platforms',
    },
  ];

  return (
    <motion.div
      variants={formVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      className='flex grow flex-col justify-between space-y-6'
    >
      <div className='space-y-4'>
        <div>
          <h2 className='text-main text-xl font-bold tracking-tight sm:text-2xl'>
            Select Berth Allocation Matrix
          </h2>
          <p className='text-muted text-sm'>
            Select your preferred suite density configuration and structural
            layer parameters.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-4'>
          {tiers.map(tier => (
            <button
              key={tier.id}
              onClick={() => onSelect(tier.id)}
              className={`cursor-pointer rounded-2xl border p-5 text-left transition-all select-none ${
                selected === tier.id
                  ? 'border-accent bg-accent/5 ring-accent ring-1'
                  : 'border-border/60 bg-surface/40 hover:bg-surface'
              }`}
            >
              <h3 className='text-main text-base font-bold tracking-tight'>
                {tier.title}
              </h3>
              <p className='text-muted mt-1 text-xs leading-relaxed'>
                {tier.amenities}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className='flex items-center justify-between gap-4 pt-6'>
        <button
          onClick={onPrev}
          className='border-border hover:bg-surface text-main flex cursor-pointer items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors'
        >
          <ArrowLeft size={16} /> Back
        </button>
        <button
          onClick={onNext}
          disabled={!selected}
          className='bg-text-main text-bg flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-medium shadow-md transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40'
        >
          Continue <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}

// ==========================================
// 4. STEP 3: PASSENGER CREDENTIALS
// ==========================================
function PassengerCredentials({ formData, onChange, onNext, onPrev }) {
  const isFormValid =
    formData.fullName && formData.email && formData.passportId;

  return (
    <motion.div
      variants={formVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      className='flex grow flex-col justify-between space-y-6'
    >
      <div className='space-y-4'>
        <div>
          <h2 className='text-main text-xl font-bold tracking-tight sm:text-2xl'>
            Passenger Manifest Registry
          </h2>
          <p className='text-muted text-sm'>
            Input your legal credentials below to sync configuration
            documentation fields.
          </p>
        </div>

        <div className='space-y-4 text-xs sm:text-sm'>
          <div className='space-y-1.5'>
            <label className='text-muted font-medium' htmlFor='fullName'>
              Full Legal Name
            </label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={formData.fullName}
              onChange={onChange}
              placeholder='e.g., Yusuf Oyinlola'
              className='border-border/60 bg-surface/40 text-main focus:border-accent w-full rounded-xl border px-4 py-3 transition-colors focus:outline-none'
              required
            />
          </div>

          <div className='space-y-1.5'>
            <label className='text-muted font-medium' htmlFor='email'>
              Secure Communication Routing Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={onChange}
              placeholder='developer@yuzstack.com'
              className='border-border/60 bg-surface/40 text-main focus:border-accent w-full rounded-xl border px-4 py-3 transition-colors focus:outline-none'
              required
            />
          </div>

          <div className='space-y-1.5'>
            <label className='text-muted font-medium' htmlFor='passportId'>
              Global Identification Reference ID
            </label>
            <input
              type='text'
              id='passportId'
              name='passportId'
              value={formData.passportId}
              onChange={onChange}
              placeholder='e.g., ORB-X942001'
              className='border-border/60 bg-surface/40 text-main focus:border-accent w-full rounded-xl border px-4 py-3 transition-colors focus:outline-none'
              required
            />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between gap-4 pt-6'>
        <button
          onClick={onPrev}
          className='border-border hover:bg-surface text-main flex cursor-pointer items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors'
        >
          <ArrowLeft size={16} /> Back
        </button>
        <button
          onClick={onNext}
          disabled={!isFormValid}
          className='bg-text-main text-bg flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-medium shadow-md transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40'
        >
          Validate Allocation <Rocket size={16} />
        </button>
      </div>
    </motion.div>
  );
}

// ==========================================
// 5. STEP 4: SUCCESS CONSOLE SCREEN
// ==========================================
function SuccessScreen({ formData }) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
      }}
      initial='initial'
      animate='animate'
      className='flex grow flex-col items-center justify-center space-y-6 py-4 text-center'
    >
      <div className='bg-accent/10 text-accent flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm'>
        <CheckCircle2 size={36} />
      </div>

      <div className='max-w-md space-y-2'>
        <h2 className='text-main text-2xl font-black tracking-tight sm:text-3xl'>
          Berth Allocation Secured
        </h2>
        <p className='text-muted text-xs leading-relaxed sm:text-sm'>
          Congratulations,{' '}
          <span className='text-main font-semibold'>{formData.fullName}</span>.
          Your flight manifest credentials have been successfully updated inside
          our real-time database registers.
        </p>
      </div>

      <div className='border-border/40 bg-surface/40 w-full max-w-md space-y-3 rounded-2xl border p-5 text-left text-xs font-normal shadow-sm'>
        <div className='text-accent border-border/20 flex items-center gap-1.5 border-b pb-2 font-mono text-[10px] tracking-wider uppercase'>
          <ShieldCheck size={14} /> Allocation Security Matrix Verified
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-muted flex items-center gap-1'>
            <User size={12} /> Registry ID
          </span>
          <span className='text-main font-mono font-semibold uppercase'>
            {formData.passportId}
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-muted'>Destination Class</span>
          <span className='text-main font-medium capitalize'>
            {formData.destination} Class Vector
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-muted'>Communication Hook</span>
          <span className='text-main font-medium'>{formData.email}</span>
        </div>
      </div>
    </motion.div>
  );
}
