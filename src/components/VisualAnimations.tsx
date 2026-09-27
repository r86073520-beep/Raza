import React from 'react';
import { VisualType } from '../types/book';

interface VisualProps {
  type: VisualType;
  title?: string;
}

export const VisualAnimation: React.FC<VisualProps> = ({ type, title }) => {
  switch (type) {
    case 'atom':
      return <AtomAnimation />;
    case 'molecule':
      return <MoleculeAnimation />;
    case 'mixture':
      return <MixtureAnimation />;
    case 'electronegativity':
      return <ElectronegativityAnimation />;
    case 'photosynthesis':
      return <PhotosynthesisAnimation />;
    case 'hydrogen_bonding':
      return <HydrogenBondingAnimation />;
    case 'capillary_action':
      return <CapillaryActionAnimation />;
    case 'acid_rain':
      return <AcidRainAnimation />;
    case 'ozone_depletion':
      return <OzoneDepletionAnimation />;
    case 'global_warming':
      return <GlobalWarmingAnimation />;
    case 'atmosphere_layers':
      return <AtmosphereLayersAnimation />;
    case 'biodegradable':
      return <BiodegradableAnimation />;
    case 'water_hardness':
      return <WaterHardnessAnimation />;
    case 'solvay_process':
      return <SolvayProcessAnimation />;
    case 'dynamic_equilibrium':
      return <DynamicEquilibriumAnimation />;
    case 'ph_scale':
      return <PhScaleAnimation />;
    case 'lewis_adduct':
      return <LewisAdductAnimation />;
    case 'quadratic_curve':
      return <QuadraticCurveAnimation />;
    case 'discriminant':
      return <DiscriminantAnimation />;
    case 'venn_diagram':
      return <VennDiagramAnimation />;
    case 'trigonometry_triangle':
      return <TrigonometryTriangleAnimation />;
    case 'variation_graph':
      return <VariationGraphAnimation />;
    case 'simple_harmonic_motion':
      return <SimpleHarmonicMotionAnimation />;
    case 'total_internal_reflection':
      return <TotalInternalReflectionAnimation />;
    default:
      return null;
  }
};

/* 1. Atom Visual: Nucleus (protons + neutrons) with animated orbiting electrons */
const AtomAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-indigo-300 mb-2 uppercase tracking-wider">
        Atom Structure · Nucleus & Electron Shells
      </div>
      <svg className="w-48 h-48" viewBox="0 0 200 200">
        {/* Orbital 1 */}
        <ellipse
          cx="100"
          cy="100"
          rx="75"
          ry="30"
          fill="none"
          stroke="#4f46e5"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          transform="rotate(0 100 100)"
        />
        {/* Orbital 2 */}
        <ellipse
          cx="100"
          cy="100"
          rx="75"
          ry="30"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          transform="rotate(60 100 100)"
        />
        {/* Orbital 3 */}
        <ellipse
          cx="100"
          cy="100"
          rx="75"
          ry="30"
          fill="none"
          stroke="#a855f7"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          transform="rotate(120 100 100)"
        />

        {/* Orbiting electron 1 */}
        <circle cx="100" cy="70" r="5" fill="#38bdf8" className="animate-ping opacity-75" />
        <circle cx="100" cy="70" r="4.5" fill="#38bdf8">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Orbiting electron 2 */}
        <circle cx="165" cy="100" r="4.5" fill="#818cf8">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="60 100 100"
            to="420 100 100"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Orbiting electron 3 */}
        <circle cx="35" cy="100" r="4.5" fill="#c084fc">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="120 100 100"
            to="480 100 100"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Nucleus cluster */}
        <g>
          <circle cx="95" cy="97" r="10" fill="#ef4444" />
          <text x="95" y="100" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">p⁺</text>
          
          <circle cx="107" cy="98" r="9.5" fill="#f59e0b" />
          <text x="107" y="101" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">n⁰</text>
          
          <circle cx="100" cy="108" r="9" fill="#ef4444" />
          <text x="100" y="111" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">p⁺</text>
        </g>
      </svg>
      <div className="flex gap-4 text-xs text-slate-300 mt-2">
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" /> Protons</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" /> Neutrons</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block" /> Electrons (e⁻)</span>
      </div>
    </div>
  );
};

/* 2. Molecule Visual: H2O with covalent bonds */
const MoleculeAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-indigo-300 mb-2 uppercase tracking-wider">
        Water Molecule (H₂O) · Covalent Bonding
      </div>
      <svg className="w-48 h-40" viewBox="0 0 200 160">
        {/* Bonds */}
        <line x1="100" y1="60" x2="55" y2="115" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
        <line x1="100" y1="60" x2="145" y2="115" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
        
        {/* Bond Angle Marker */}
        <path d="M 80 84 A 25 25 0 0 0 120 84" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
        <text x="100" y="96" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">104.5°</text>

        {/* Oxygen Atom */}
        <circle cx="100" cy="55" r="24" fill="#dc2626" />
        <text x="100" y="59" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">O</text>
        <text x="100" y="24" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">δ⁻ (Partial -)</text>

        {/* Left Hydrogen Atom */}
        <circle cx="50" cy="120" r="16" fill="#3b82f6" />
        <text x="50" y="124" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">H</text>
        <text x="32" y="145" fill="#93c5fd" fontSize="9" fontWeight="bold" textAnchor="middle">δ⁺</text>

        {/* Right Hydrogen Atom */}
        <circle cx="150" cy="120" r="16" fill="#3b82f6" />
        <text x="150" y="124" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">H</text>
        <text x="168" y="145" fill="#93c5fd" fontSize="9" fontWeight="bold" textAnchor="middle">δ⁺</text>
      </svg>
      <div className="text-xs text-slate-300 mt-1 text-center">
        Shared electron pairs form stable chemical bonds between atoms.
      </div>
    </div>
  );
};

/* 3. Mixture Visual: Different particles without chemical bonding */
const MixtureAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-indigo-300 mb-2 uppercase tracking-wider">
        Mixture · Physical Combination
      </div>
      <svg className="w-48 h-36" viewBox="0 0 200 140">
        <rect x="20" y="10" width="160" height="110" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2" />
        
        {/* Component A (Blue particles) */}
        <circle cx="45" cy="35" r="7" fill="#38bdf8" />
        <circle cx="130" cy="30" r="7" fill="#38bdf8" />
        <circle cx="85" cy="70" r="7" fill="#38bdf8" />
        <circle cx="150" cy="85" r="7" fill="#38bdf8" />
        <circle cx="40" cy="100" r="7" fill="#38bdf8" />

        {/* Component B (Orange particles) */}
        <rect x="75" y="25" width="12" height="12" rx="2" fill="#fb923c" />
        <rect x="150" y="45" width="12" height="12" rx="2" fill="#fb923c" />
        <rect x="40" y="65" width="12" height="12" rx="2" fill="#fb923c" />
        <rect x="110" y="85" width="12" height="12" rx="2" fill="#fb923c" />
        <rect x="80" y="100" width="12" height="12" rx="2" fill="#fb923c" />

        {/* Component C (Green particles) */}
        <polygon points="105,40 112,52 98,52" fill="#4ade80" />
        <polygon points="60,80 67,92 53,92" fill="#4ade80" />
        <polygon points="135,100 142,112 128,112" fill="#4ade80" />
      </svg>
      <div className="text-xs text-slate-300 mt-2 text-center">
        Particles retain their individual chemical properties without bonding.
      </div>
    </div>
  );
};

/* 4. Electronegativity Visual: Unequal pull of electron cloud */
const ElectronegativityAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-indigo-300 mb-2 uppercase tracking-wider">
        Electronegativity · Dipole Pull
      </div>
      <svg className="w-52 h-36" viewBox="0 0 220 140">
        {/* Electron density cloud (asymmetric gradient) */}
        <ellipse cx="120" cy="70" rx="75" ry="38" fill="url(#densityGrad)" opacity="0.65" />
        
        <defs>
          <radialGradient id="densityGrad" cx="65%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Pull direction arrow */}
        <line x1="90" y1="35" x2="140" y2="35" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#arrow)" />
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
          </marker>
        </defs>
        <text x="115" y="28" fill="#fda4af" fontSize="9" fontWeight="bold" textAnchor="middle">Electron Attraction</text>

        {/* Low electronegativity atom (H) */}
        <circle cx="65" cy="70" r="16" fill="#3b82f6" />
        <text x="65" y="74" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">H</text>
        <text x="65" y="102" fill="#93c5fd" fontSize="10" fontWeight="bold" textAnchor="middle">δ⁺ (2.1)</text>

        {/* High electronegativity atom (Cl or O) */}
        <circle cx="155" cy="70" r="26" fill="#10b981" />
        <text x="155" y="75" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Cl</text>
        <text x="155" y="112" fill="#6ee7b7" fontSize="10" fontWeight="bold" textAnchor="middle">δ⁻ (3.0)</text>
      </svg>
      <div className="text-xs text-slate-300 mt-1 text-center">
        Electronegative atoms pull shared bonding electrons closer to themselves.
      </div>
    </div>
  );
};

/* 5. Photosynthesis Visual: Light + CO2 + H2O -> Glucose + O2 */
const PhotosynthesisAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wider">
        Photosynthesis · Solar Conversion
      </div>
      <svg className="w-52 h-40" viewBox="0 0 220 160">
        {/* Sun & Light Rays */}
        <circle cx="35" cy="30" r="15" fill="#facc15" />
        <line x1="45" y1="42" x2="85" y2="75" stroke="#fde047" strokeWidth="2.5" strokeDasharray="3 3" />
        <text x="35" y="58" fill="#fef08a" fontSize="8" fontWeight="bold" textAnchor="middle">Sunlight</text>

        {/* Leaf */}
        <path d="M 80 110 C 60 50, 160 50, 160 110 C 160 140, 100 135, 80 110 Z" fill="#16a34a" />
        <path d="M 80 110 Q 120 90 155 105" stroke="#15803d" strokeWidth="2" fill="none" />

        {/* Inputs */}
        <g>
          <rect x="5" y="85" width="45" height="20" rx="4" fill="#334155" />
          <text x="27" y="99" fill="#93c5fd" fontSize="9" fontWeight="bold" textAnchor="middle">CO₂ + H₂O</text>
          <line x1="50" y1="95" x2="80" y2="95" stroke="#93c5fd" strokeWidth="1.5" />
        </g>

        {/* Outputs */}
        <g>
          <line x1="160" y1="95" x2="180" y2="95" stroke="#4ade80" strokeWidth="1.5" />
          <rect x="175" y="85" width="42" height="20" rx="4" fill="#065f46" />
          <text x="196" y="99" fill="#86efac" fontSize="9" fontWeight="bold" textAnchor="middle">O₂ + Sugar</text>
        </g>
      </svg>
      <div className="text-xs text-slate-300 mt-1 text-center">
        6CO₂ + 6H₂O + Solar Energy → C₆H₁₂O₆ (Glucose) + 6O₂
      </div>
    </div>
  );
};

/* 6. Hydrogen Bonding Visual: Water Dipoles interacting with dashed lines */
const HydrogenBondingAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-sky-400 mb-2 uppercase tracking-wider">
        Intermolecular Hydrogen Bonding
      </div>
      <svg className="w-52 h-40" viewBox="0 0 220 160">
        {/* Molecule 1 (Left Top) */}
        <g transform="translate(45, 45)">
          <circle cx="0" cy="0" r="16" fill="#ef4444" />
          <text x="0" y="4" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">O(δ⁻)</text>
          <circle cx="-16" cy="18" r="8" fill="#3b82f6" />
          <text x="-16" y="21" fill="white" fontSize="7" textAnchor="middle">H</text>
          <circle cx="16" cy="18" r="8" fill="#3b82f6" />
          <text x="16" y="21" fill="white" fontSize="7" textAnchor="middle">H(δ⁺)</text>
        </g>

        {/* Hydrogen Bond (Dashed line) */}
        <line x1="61" y1="63" x2="135" y2="90" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 3" />
        <text x="100" y="70" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">H-Bond</text>

        {/* Molecule 2 (Right Bottom) */}
        <g transform="translate(150, 100)">
          <circle cx="0" cy="0" r="16" fill="#ef4444" />
          <text x="0" y="4" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">O(δ⁻)</text>
          <circle cx="-16" cy="-18" r="8" fill="#3b82f6" />
          <text x="-16" y="-15" fill="white" fontSize="7" textAnchor="middle">H(δ⁺)</text>
          <circle cx="18" cy="-14" r="8" fill="#3b82f6" />
          <text x="18" y="-11" fill="white" fontSize="7" textAnchor="middle">H</text>
        </g>
      </svg>
      <div className="text-xs text-slate-300 mt-1 text-center">
        Electrostatic attraction between δ⁺ hydrogen and δ⁻ oxygen of adjacent water molecules.
      </div>
    </div>
  );
};

/* 7. Capillary Action: Rising liquid meniscus in narrow tube */
const CapillaryActionAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
        Capillary Action · Water Ascent
      </div>
      <svg className="w-48 h-40" viewBox="0 0 200 160">
        {/* Beaker */}
        <path d="M 40 40 L 40 140 Q 40 145 45 145 L 155 145 Q 160 145 160 140 L 160 40" fill="none" stroke="#94a3b8" strokeWidth="3" />
        
        {/* Bulk Water */}
        <rect x="42" y="105" width="116" height="38" fill="#0284c7" opacity="0.75" />

        {/* Capillary Tube */}
        <rect x="92" y="30" width="16" height="110" fill="none" stroke="#e2e8f0" strokeWidth="2" />
        
        {/* Elevated Water Column inside tube */}
        <rect x="93" y="55" width="14" height="88" fill="#38bdf8" opacity="0.9" />
        
        {/* Meniscus Curve */}
        <path d="M 93 55 Q 100 60 107 55" fill="none" stroke="#0284c7" strokeWidth="2" />

        {/* Upward Arrows */}
        <path d="M 120 90 L 120 65 M 116 70 L 120 65 L 124 70" stroke="#facc15" strokeWidth="2" fill="none" />
        <text x="145" y="75" fill="#facc15" fontSize="8" fontWeight="bold">Rising Column</text>
      </svg>
      <div className="text-xs text-slate-300 mt-1 text-center">
        Adhesive forces with glass walls overcome gravity, pulling water upward.
      </div>
    </div>
  );
};

/* 8. Acid Rain: Emissions -> clouds -> acid rain on soil */
const AcidRainAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-rose-400 mb-2 uppercase tracking-wider">
        Acid Rain Formation (pH &lt; 5.6)
      </div>
      <svg className="w-52 h-40" viewBox="0 0 220 160">
        {/* Factory Smokestack */}
        <rect x="25" y="100" width="22" height="45" fill="#475569" />
        <line x1="36" y1="100" x2="60" y2="55" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="36" y="92" fill="#f43f5e" fontSize="7" fontWeight="bold">SO₂ / NOₓ</text>

        {/* Acid Cloud */}
        <path d="M 75 45 Q 85 25 110 30 Q 135 20 150 40 Q 165 45 160 60 Q 150 70 85 70 Q 70 65 75 45 Z" fill="#64748b" />
        <text x="115" y="52" fill="#fca5a5" fontSize="8" fontWeight="bold" textAnchor="middle">H₂SO₄ + HNO₃</text>

        {/* Acid rain drops */}
        <line x1="95" y1="75" x2="90" y2="110" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="120" y1="75" x2="115" y2="110" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="145" y1="75" x2="140" y2="110" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Dying Tree & Soil */}
        <line x1="15" y1="145" x2="205" y2="145" stroke="#78350f" strokeWidth="3" />
        <line x1="180" y1="145" x2="180" y2="115" stroke="#a16207" strokeWidth="3" />
        <line x1="180" y1="125" x2="170" y2="115" stroke="#a16207" strokeWidth="2" />
        <line x1="180" y1="120" x2="190" y2="110" stroke="#a16207" strokeWidth="2" />
        <text x="180" y="105" fill="#f87171" fontSize="7" fontWeight="bold" textAnchor="middle">Soil Acidity</text>
      </svg>
      <div className="text-xs text-slate-300 mt-1 text-center">
        Atmospheric SO₂ & NOₓ react with water vapor to form corrosive sulfuric and nitric acids.
      </div>
    </div>
  );
};

/* 9. Ozone Depletion: CFC -> Cl free radical -> O3 split */
const OzoneDepletionAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-purple-400 mb-2 uppercase tracking-wider">
        Ozone Depletion by CFCs
      </div>
      <svg className="w-52 h-40" viewBox="0 0 220 160">
        {/* UV Ray */}
        <line x1="20" y1="20" x2="55" y2="55" stroke="#c084fc" strokeWidth="2" strokeDasharray="2 2" />
        <text x="25" y="15" fill="#c084fc" fontSize="8" fontWeight="bold">UV Light</text>

        {/* CFC molecule breaking */}
        <rect x="45" y="55" width="40" height="22" rx="4" fill="#334155" />
        <text x="65" y="70" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">CFCl₃</text>

        {/* Free Radical Cl */}
        <circle cx="110" cy="66" r="10" fill="#f59e0b" />
        <text x="110" y="70" fill="black" fontSize="9" fontWeight="bold" textAnchor="middle">•Cl</text>

        {/* Ozone O3 Molecule */}
        <g transform="translate(160, 66)">
          <circle cx="-10" cy="-6" r="8" fill="#38bdf8" />
          <circle cx="10" cy="-6" r="8" fill="#38bdf8" />
          <circle cx="0" cy="8" r="8" fill="#38bdf8" />
          <text x="0" y="24" fill="#7dd3fc" fontSize="8" fontWeight="bold" textAnchor="middle">O₃ (Ozone)</text>
        </g>

        {/* Arrow to reaction */}
        <path d="M 122 66 L 140 66" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrow)" />

        <text x="110" y="115" fill="#cbd5e1" fontSize="9" textAnchor="middle">
          •Cl + O₃ → •ClO + O₂
        </text>
        <text x="110" y="130" fill="#f43f5e" fontSize="8" fontWeight="bold" textAnchor="middle">
          1 Cl radical destroys up to 100,000 O₃ molecules!
        </text>
      </svg>
    </div>
  );
};

/* 10. Global Warming: Infrared trapping */
const GlobalWarmingAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-amber-400 mb-2 uppercase tracking-wider">
        Greenhouse Effect & Global Warming
      </div>
      <svg className="w-52 h-40" viewBox="0 0 220 160">
        {/* Earth Horizon */}
        <path d="M 10 145 Q 110 120 210 145" stroke="#10b981" strokeWidth="3" fill="#047857" opacity="0.3" />

        {/* Greenhouse Layer (CO2, H2O, CH4) */}
        <path d="M 10 75 Q 110 50 210 75" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4 2" fill="none" />
        <text x="110" y="58" fill="#fcd34d" fontSize="8" fontWeight="bold" textAnchor="middle">CO₂ & Greenhouse Gas Blanket</text>

        {/* Incoming solar visible rays */}
        <line x1="30" y1="15" x2="70" y2="130" stroke="#facc15" strokeWidth="2" />
        <text x="35" y="30" fill="#fef08a" fontSize="7">Incoming Solar</text>

        {/* Outgoing IR Trapped & Bounced Back */}
        <path d="M 90 135 L 120 75 L 150 135" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="3 2" />
        <text x="135" y="105" fill="#fca5a5" fontSize="7" fontWeight="bold">Trapped IR Heat</text>
      </svg>
      <div className="text-xs text-slate-300 mt-1 text-center">
        Greenhouse blanket lets sunlight enter but stops outgoing heat radiation from escaping.
      </div>
    </div>
  );
};

/* 11. Atmosphere Layers Visual */
const AtmosphereLayersAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-indigo-400 mb-2 uppercase tracking-wider">
        Atmospheric Regions by Altitude
      </div>
      <div className="w-full max-w-xs space-y-1 text-xs">
        <div className="p-2 bg-indigo-950/80 border border-indigo-700/50 rounded flex justify-between items-center">
          <span className="font-semibold text-indigo-300">Thermosphere</span>
          <span className="text-slate-400">85 – 500 km</span>
        </div>
        <div className="p-2 bg-cyan-950/80 border border-cyan-700/50 rounded flex justify-between items-center">
          <span className="font-semibold text-cyan-300">Mesosphere</span>
          <span className="text-slate-400">50 – 85 km (-93°C)</span>
        </div>
        <div className="p-2 bg-emerald-950/80 border border-emerald-600/50 rounded flex justify-between items-center">
          <span className="font-semibold text-emerald-300">Stratosphere (Ozone Layer)</span>
          <span className="text-slate-400">12 – 50 km</span>
        </div>
        <div className="p-2 bg-blue-900/80 border border-blue-500/50 rounded flex justify-between items-center shadow-inner">
          <span className="font-semibold text-blue-200">Troposphere (All Weather & Planes)</span>
          <span className="text-slate-300 font-mono">0 – 12 km (75% mass)</span>
        </div>
      </div>
    </div>
  );
};

/* 12. Biodegradable vs Non-Biodegradable */
const BiodegradableAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wider">
        Decomposition Comparison
      </div>
      <div className="grid grid-cols-2 gap-2 w-full max-w-xs text-center text-xs">
        <div className="p-3 bg-emerald-950/60 border border-emerald-700 rounded-lg">
          <div className="font-bold text-emerald-300 mb-1">Biodegradable</div>
          <div className="text-[11px] text-slate-300">Organic matter, wood, food waste</div>
          <div className="mt-2 text-emerald-400 font-semibold text-[10px]">Decomposed by bacteria ✔</div>
        </div>
        <div className="p-3 bg-rose-950/60 border border-rose-700 rounded-lg">
          <div className="font-bold text-rose-300 mb-1">Non-Biodegradable</div>
          <div className="text-[11px] text-slate-300">Plastics, rubber, detergents</div>
          <div className="mt-2 text-rose-400 font-semibold text-[10px]">Cannot be decomposed ❌</div>
        </div>
      </div>
    </div>
  );
};

/* 13. Water Hardness: Ca2+ / Mg2+ + soap -> Scum */
const WaterHardnessAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">
        Hard Water vs Soft Water
      </div>
      <div className="grid grid-cols-2 gap-2 w-full max-w-xs text-xs">
        <div className="p-2.5 bg-blue-950 border border-blue-700/60 rounded-lg text-center">
          <div className="font-bold text-sky-300">Soft Water</div>
          <div className="text-[11px] text-slate-300 mt-1">Free of Ca²⁺/Mg²⁺</div>
          <div className="text-emerald-400 text-[10px] font-semibold mt-1">Rich Lather & Suds 🫧</div>
        </div>
        <div className="p-2.5 bg-amber-950 border border-amber-700/60 rounded-lg text-center">
          <div className="font-bold text-amber-300">Hard Water</div>
          <div className="text-[11px] text-slate-300 mt-1">Contains Ca²⁺, Mg²⁺</div>
          <div className="text-amber-400 text-[10px] font-semibold mt-1">Forms Insoluble Scum ❌</div>
        </div>
      </div>
    </div>
  );
};

/* 14. Solvay Process / Haber Process */
const SolvayProcessAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-indigo-400 mb-2 uppercase tracking-wider">
        Solvay Process · Closed Recycling Loop
      </div>
      <div className="w-full max-w-xs space-y-1.5 text-xs text-slate-200">
        <div className="flex items-center justify-between p-2 bg-slate-800 rounded border border-slate-700">
          <span>Brine + NH₃ + CO₂</span>
          <span className="text-indigo-400 font-semibold font-mono">→ NaHCO₃(s) ↓</span>
        </div>
        <div className="flex items-center justify-between p-2 bg-slate-800 rounded border border-slate-700">
          <span>Calcination (Heat)</span>
          <span className="text-emerald-400 font-semibold font-mono">→ Na₂CO₃ (Soda Ash)</span>
        </div>
        <div className="flex items-center justify-between p-2 bg-slate-800 rounded border border-slate-700">
          <span>NH₄Cl + Ca(OH)₂</span>
          <span className="text-cyan-400 font-semibold font-mono">→ NH₃ Recycled ♻</span>
        </div>
      </div>
    </div>
  );
};

/* 15. Dynamic Equilibrium Visual: Forward and Reverse Reaction Balancing */
const DynamicEquilibriumAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-amber-400 mb-2 uppercase tracking-wider">
        Dynamic Equilibrium · Rf = Rr
      </div>
      <svg className="w-56 h-36" viewBox="0 0 240 140">
        {/* Reactants Box */}
        <rect x="15" y="45" width="65" height="40" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        <text x="47" y="68" fill="#7dd3fc" fontSize="11" fontWeight="bold" textAnchor="middle">Reactants</text>
        <text x="47" y="80" fill="#94a3b8" fontSize="8" textAnchor="middle">N₂ + 3H₂</text>

        {/* Products Box */}
        <rect x="160" y="45" width="65" height="40" rx="8" fill="#1e293b" stroke="#4ade80" strokeWidth="2" />
        <text x="192" y="68" fill="#86efac" fontSize="11" fontWeight="bold" textAnchor="middle">Products</text>
        <text x="192" y="80" fill="#94a3b8" fontSize="8" textAnchor="middle">2NH₃</text>

        {/* Forward Reaction Arrow (Top) */}
        <path d="M 85 55 L 150 55" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrow-cyan)" />
        <text x="117" y="48" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Forward (Rf)</text>

        {/* Reverse Reaction Arrow (Bottom) */}
        <path d="M 155 75 L 90 75" stroke="#4ade80" strokeWidth="2.5" markerEnd="url(#arrow-green)" />
        <text x="122" y="92" fill="#4ade80" fontSize="8" fontWeight="bold" textAnchor="middle">Reverse (Rr)</text>

        <defs>
          <marker id="arrow-cyan" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
          </marker>
          <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#4ade80" />
          </marker>
        </defs>

        {/* Equilibrium Formula banner */}
        <rect x="50" y="105" width="140" height="22" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
        <text x="120" y="120" fill="#facc15" fontSize="9" fontWeight="bold" textAnchor="middle">
          Rate of Forward = Rate of Reverse
        </text>
      </svg>
      <div className="text-[11px] text-slate-300 mt-1 text-center">
        Reactions do not stop; both proceed at identical speeds in opposite directions.
      </div>
    </div>
  );
};

/* 16. pH Scale Visual: 0 (Acidic Red) to 7 (Neutral Green) to 14 (Basic Violet) */
const PhScaleAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-rose-400 mb-2 uppercase tracking-wider">
        pH &amp; pOH Scale (0 to 14)
      </div>
      <div className="w-full max-w-sm space-y-2">
        {/* Color Gradient Bar */}
        <div className="h-6 w-full rounded-lg bg-gradient-to-r from-red-600 via-yellow-400 via-green-500 via-cyan-500 to-purple-700 shadow-inner flex items-center justify-between px-2 text-[10px] font-bold text-white">
          <span>0 (Strong Acid)</span>
          <span className="text-slate-900 bg-white/80 px-1 rounded">7 (Neutral)</span>
          <span>14 (Strong Base)</span>
        </div>

        {/* Markers */}
        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
          <div className="p-1.5 bg-red-950/70 border border-red-800 rounded">
            <span className="text-red-300 font-bold block">pH &lt; 7 (Acidic)</span>
            <span className="text-slate-400 text-[9px]">[H⁺] &gt; 10⁻⁷ M</span>
          </div>
          <div className="p-1.5 bg-emerald-950/70 border border-emerald-800 rounded">
            <span className="text-emerald-300 font-bold block">pH = 7 (Water)</span>
            <span className="text-slate-400 text-[9px]">[H⁺] = [OH⁻]</span>
          </div>
          <div className="p-1.5 bg-purple-950/70 border border-purple-800 rounded">
            <span className="text-purple-300 font-bold block">pH &gt; 7 (Basic)</span>
            <span className="text-slate-400 text-[9px]">[OH⁻] &gt; 10⁻⁷ M</span>
          </div>
        </div>

        <div className="text-center text-[11px] text-amber-300 font-mono font-semibold pt-0.5">
          pH + pOH = 14 (at 25°C)
        </div>
      </div>
    </div>
  );
};

/* 17. Lewis Adduct Visual: Coordinate Covalent Bond H+ + :NH3 -> [H<-NH3]+ */
const LewisAdductAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-purple-400 mb-2 uppercase tracking-wider">
        Lewis Acid-Base Adduct Formation
      </div>
      <svg className="w-56 h-36" viewBox="0 0 240 140">
        {/* H+ Cation (Lewis Acid - Electron Pair Acceptor) */}
        <g transform="translate(45, 60)">
          <circle cx="0" cy="0" r="16" fill="#ef4444" />
          <text x="0" y="4" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">H⁺</text>
          <text x="0" y="26" fill="#fca5a5" fontSize="8" textAnchor="middle">Lewis Acid</text>
          <text x="0" y="36" fill="#94a3b8" fontSize="7" textAnchor="middle">(Acceptor)</text>
        </g>

        {/* Plus Sign */}
        <text x="80" y="64" fill="#fbbf24" fontSize="16" fontWeight="bold" textAnchor="middle">+</text>

        {/* NH3 (Lewis Base with Lone Pair Donated) */}
        <g transform="translate(125, 60)">
          <circle cx="0" cy="0" r="20" fill="#3b82f6" />
          <text x="0" y="4" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">:NH₃</text>
          <text x="0" y="28" fill="#93c5fd" fontSize="8" textAnchor="middle">Lewis Base</text>
          <text x="0" y="38" fill="#94a3b8" fontSize="7" textAnchor="middle">(Donor Pair)</text>
        </g>

        {/* Arrow to Adduct */}
        <path d="M 155 60 L 175 60" stroke="#facc15" strokeWidth="2" markerEnd="url(#arrow-cyan)" />

        {/* Adduct [H <- NH3]+ */}
        <g transform="translate(205, 60)">
          <rect x="-24" y="-22" width="48" height="44" rx="6" fill="#1e1b4b" stroke="#a855f7" strokeWidth="2" />
          <text x="0" y="5" fill="#e9d5ff" fontSize="10" fontWeight="bold" textAnchor="middle">[H←NH₃]⁺</text>
          <text x="0" y="32" fill="#c084fc" fontSize="8" fontWeight="bold" textAnchor="middle">Adduct</text>
        </g>
      </svg>
      <div className="text-[11px] text-slate-300 mt-1 text-center">
        The base donates a lone pair to the electron-deficient acid, creating a coordinate covalent bond.
      </div>
    </div>
  );
};

/* 18. Quadratic Curve Visual: Parabola, vertex, axis of symmetry, real roots */
const QuadraticCurveAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-cyan-300 mb-2 uppercase tracking-wider">
        Quadratic Parabola · y = ax² + bx + c
      </div>
      <svg className="w-56 h-40" viewBox="0 0 240 160">
        {/* Grid lines */}
        <line x1="20" y1="100" x2="220" y2="100" stroke="#475569" strokeWidth="1.5" />
        <line x1="120" y1="10" x2="120" y2="150" stroke="#475569" strokeWidth="1.5" />
        {/* Axis arrows */}
        <polygon points="225,100 218,96 218,104" fill="#94a3b8" />
        <polygon points="120,5 116,12 124,12" fill="#94a3b8" />
        <text x="225" y="115" fill="#94a3b8" fontSize="9">x</text>
        <text x="128" y="15" fill="#94a3b8" fontSize="9">y</text>

        {/* Parabola curve: Vertex at (120, 130), passing through roots (60, 100) and (180, 100) */}
        <path
          d="M 35,25 Q 120,150 205,25"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="3"
        />

        {/* Axis of Symmetry */}
        <line x1="120" y1="20" x2="120" y2="140" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />

        {/* Roots on x-axis */}
        <circle cx="68" cy="100" r="5" fill="#ef4444" className="animate-pulse" />
        <text x="68" y="90" fill="#fca5a5" fontSize="10" fontWeight="bold" textAnchor="middle">Root α</text>

        <circle cx="172" cy="100" r="5" fill="#10b981" className="animate-pulse" />
        <text x="172" y="90" fill="#6ee7b7" fontSize="10" fontWeight="bold" textAnchor="middle">Root β</text>

        {/* Vertex */}
        <circle cx="120" cy="128" r="4" fill="#fbbf24" />
        <text x="120" y="146" fill="#fde68a" fontSize="9" fontWeight="bold" textAnchor="middle">Vertex (-b/2a, -Δ/4a)</text>
      </svg>
      <div className="text-[11px] text-cyan-200 mt-1 font-mono text-center">
        x = (-b ± √(b² - 4ac)) / (2a)
      </div>
      <div className="text-[10px] text-slate-400 text-center">
        The points where the parabola intersects the x-axis represent the roots of the equation.
      </div>
    </div>
  );
};

/* 19. Discriminant Visual: 3 Cases of Nature of Roots */
const DiscriminantAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-amber-300 mb-2 uppercase tracking-wider">
        Discriminant Nature of Roots · Δ = b² - 4ac
      </div>
      <div className="grid grid-cols-3 gap-2 w-full text-center">
        {/* Case 1: Disc > 0 */}
        <div className="bg-slate-800/80 p-2 rounded-lg border border-emerald-500/30">
          <svg className="w-full h-16" viewBox="0 0 70 50">
            <line x1="5" y1="35" x2="65" y2="35" stroke="#64748b" strokeWidth="1" />
            <path d="M 10 10 Q 35 48 60 10" fill="none" stroke="#10b981" strokeWidth="2" />
            <circle cx="20" cy="35" r="2.5" fill="#10b981" />
            <circle cx="50" cy="35" r="2.5" fill="#10b981" />
          </svg>
          <div className="text-[11px] font-bold text-emerald-400">b² - 4ac &gt; 0</div>
          <div className="text-[9px] text-slate-300">2 Distinct Real Roots</div>
        </div>

        {/* Case 2: Disc = 0 */}
        <div className="bg-slate-800/80 p-2 rounded-lg border border-amber-500/30">
          <svg className="w-full h-16" viewBox="0 0 70 50">
            <line x1="5" y1="35" x2="65" y2="35" stroke="#64748b" strokeWidth="1" />
            <path d="M 10 10 Q 35 35 60 10" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="35" cy="35" r="2.5" fill="#f59e0b" />
          </svg>
          <div className="text-[11px] font-bold text-amber-400">b² - 4ac = 0</div>
          <div className="text-[9px] text-slate-300">1 Equal (Repeated) Root</div>
        </div>

        {/* Case 3: Disc < 0 */}
        <div className="bg-slate-800/80 p-2 rounded-lg border border-rose-500/30">
          <svg className="w-full h-16" viewBox="0 0 70 50">
            <line x1="5" y1="35" x2="65" y2="35" stroke="#64748b" strokeWidth="1" />
            <path d="M 10 8 Q 35 24 60 8" fill="none" stroke="#f43f5e" strokeWidth="2" />
          </svg>
          <div className="text-[11px] font-bold text-rose-400">b² - 4ac &lt; 0</div>
          <div className="text-[9px] text-slate-300">Complex (Imaginary)</div>
        </div>
      </div>
      <div className="text-[10px] text-slate-400 mt-2 text-center">
        The sign of the discriminant determines whether roots intersect the real number line.
      </div>
    </div>
  );
};

/* 20. Venn Diagram Visual: Set Union and Intersection */
const VennDiagramAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-purple-300 mb-2 uppercase tracking-wider">
        Venn Diagram · Sets A and B
      </div>
      <svg className="w-56 h-36" viewBox="0 0 220 140">
        {/* Universal Set Rectangle */}
        <rect x="10" y="10" width="200" height="120" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
        <text x="24" y="28" fill="#94a3b8" fontSize="12" fontWeight="bold">U</text>

        {/* Circle A */}
        <circle cx="85" cy="70" r="42" fill="#3b82f6" fillOpacity="0.4" stroke="#60a5fa" strokeWidth="2" />
        {/* Circle B */}
        <circle cx="135" cy="70" r="42" fill="#ec4899" fillOpacity="0.4" stroke="#f472b6" strokeWidth="2" />

        {/* Intersection Shading Overlay */}
        <clipPath id="circle-a-clip">
          <circle cx="85" cy="70" r="42" />
        </clipPath>
        <circle cx="135" cy="70" r="42" fill="#a855f7" fillOpacity="0.6" clipPath="url(#circle-a-clip)" />

        {/* Labels */}
        <text x="65" y="72" fill="#bfdbfe" fontSize="12" fontWeight="bold" textAnchor="middle">A</text>
        <text x="110" y="72" fill="#f5d0fe" fontSize="10" fontWeight="bold" textAnchor="middle">A ∩ B</text>
        <text x="155" y="72" fill="#fbcfe8" fontSize="12" fontWeight="bold" textAnchor="middle">B</text>
      </svg>
      <div className="flex items-center justify-center gap-4 text-[11px] text-slate-300 mt-2 font-mono">
        <span className="text-blue-300 font-semibold">Union: A ∪ B</span>
        <span className="text-purple-300 font-semibold">Intersection: A ∩ B</span>
      </div>
    </div>
  );
};

/* 21. Trigonometry Right Triangle Visual: Ratios & Angles */
const TrigonometryTriangleAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-emerald-300 mb-2 uppercase tracking-wider">
        Right-Angled Triangle · Trigonometric Ratios
      </div>
      <svg className="w-56 h-40" viewBox="0 0 220 150">
        {/* Triangle lines */}
        {/* Base (Adjacent) from (30, 120) to (170, 120) */}
        {/* Perpendicular (Opposite) from (170, 120) to (170, 30) */}
        {/* Hypotenuse from (30, 120) to (170, 30) */}
        <polygon points="30,120 170,120 170,30" fill="#047857" fillOpacity="0.2" stroke="#10b981" strokeWidth="2.5" />

        {/* Right-angle indicator at (170, 120) */}
        <rect x="156" y="106" width="14" height="14" fill="none" stroke="#6ee7b7" strokeWidth="1.5" />

        {/* Theta angle arc at (30, 120) */}
        <path d="M 60,120 A 30,30 0 0,0 52,106" fill="none" stroke="#f59e0b" strokeWidth="2" />
        <text x="68" y="112" fill="#fbbf24" fontSize="12" fontWeight="bold">θ</text>

        {/* Side labels */}
        <text x="100" y="136" fill="#93c5fd" fontSize="10" fontWeight="bold" textAnchor="middle">Base (Adjacent)</text>
        <text x="195" y="75" fill="#fca5a5" fontSize="10" fontWeight="bold" textAnchor="middle">Perpendicular</text>
        <text x="90" y="65" fill="#6ee7b7" fontSize="10" fontWeight="bold" textAnchor="middle">Hypotenuse</text>
      </svg>
      <div className="grid grid-cols-3 gap-2 w-full mt-2 text-center text-[10px] font-mono">
        <div className="bg-slate-800 p-1.5 rounded text-emerald-300">
          <span className="font-bold">sin θ</span> = Opp/Hyp
        </div>
        <div className="bg-slate-800 p-1.5 rounded text-blue-300">
          <span className="font-bold">cos θ</span> = Adj/Hyp
        </div>
        <div className="bg-slate-800 p-1.5 rounded text-amber-300">
          <span className="font-bold">tan θ</span> = Opp/Adj
        </div>
      </div>
    </div>
  );
};

/* 22. Variation Graph Visual: Direct vs Inverse */
const VariationGraphAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-sky-300 mb-2 uppercase tracking-wider">
        Variations · Direct vs Inverse
      </div>
      <div className="grid grid-cols-2 gap-3 w-full">
        {/* Direct variation */}
        <div className="bg-slate-800/80 p-2 rounded-lg border border-sky-500/30">
          <div className="text-[10px] font-bold text-sky-300 mb-1 text-center">Direct: y = kx</div>
          <svg className="w-full h-24" viewBox="0 0 100 80">
            <line x1="10" y1="70" x2="90" y2="70" stroke="#64748b" strokeWidth="1.5" />
            <line x1="15" y1="10" x2="15" y2="75" stroke="#64748b" strokeWidth="1.5" />
            {/* Linear line through origin */}
            <line x1="15" y1="70" x2="85" y2="15" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="50" cy="42" r="3" fill="#fbbf24" className="animate-pulse" />
          </svg>
          <div className="text-[9px] text-slate-300 text-center">Straight Line through Origin</div>
        </div>

        {/* Inverse variation */}
        <div className="bg-slate-800/80 p-2 rounded-lg border border-purple-500/30">
          <div className="text-[10px] font-bold text-purple-300 mb-1 text-center">Inverse: xy = k</div>
          <svg className="w-full h-24" viewBox="0 0 100 80">
            <line x1="10" y1="70" x2="90" y2="70" stroke="#64748b" strokeWidth="1.5" />
            <line x1="15" y1="10" x2="15" y2="75" stroke="#64748b" strokeWidth="1.5" />
            {/* Hyperbola curve */}
            <path d="M 22 15 Q 26 55 85 64" fill="none" stroke="#c084fc" strokeWidth="2.5" />
            <circle cx="36" cy="46" r="3" fill="#fbbf24" className="animate-pulse" />
          </svg>
          <div className="text-[9px] text-slate-300 text-center">Rectangular Hyperbola</div>
        </div>
      </div>
      <div className="text-[10px] text-slate-400 mt-2 text-center">
        Direct variation increases linearly; inverse variation decreases hyperbolically.
      </div>
    </div>
  );
};

/* 23. Simple Harmonic Motion Visual: Oscillating pendulum & restoring force */
const SimpleHarmonicMotionAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-amber-300 mb-2 uppercase tracking-wider">
        Simple Pendulum SHM · a ∝ -x
      </div>
      <svg className="w-56 h-40" viewBox="0 0 200 150">
        {/* Support Ceiling */}
        <line x1="50" y1="20" x2="150" y2="20" stroke="#94a3b8" strokeWidth="3" />
        {/* Fixed pivot point */}
        <circle cx="100" cy="20" r="3" fill="#cbd5e1" />
        {/* Mean position dotted line */}
        <line x1="100" y1="20" x2="100" y2="120" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />

        {/* String displaced at angle */}
        <line x1="100" y1="20" x2="140" y2="105" stroke="#38bdf8" strokeWidth="2" />
        {/* Bob */}
        <circle cx="140" cy="105" r="10" fill="#f59e0b" className="animate-pulse" />

        {/* Restoring force vector arrow pointing toward mean position */}
        <line x1="135" y1="108" x2="115" y2="112" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
        <polygon points="112,113 118,110 119,116" fill="#ef4444" />
        <text x="135" y="128" fill="#fca5a5" fontSize="9" fontWeight="bold">F = -mg sin θ</text>

        {/* Labels */}
        <text x="100" y="138" fill="#94a3b8" fontSize="9" textAnchor="middle">Mean (x = 0)</text>
        <text x="160" y="100" fill="#fde68a" fontSize="9" fontWeight="bold">Extreme</text>
      </svg>
      <div className="text-[11px] text-amber-200 mt-1 font-mono text-center">
        T = 2π √(l / g)
      </div>
      <div className="text-[10px] text-slate-400 text-center">
        Restoring force always directs the bob back toward the central mean position.
      </div>
    </div>
  );
};

/* 24. Total Internal Reflection Visual: Critical angle & refracted vs reflected ray */
const TotalInternalReflectionAnimation: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-white select-none">
      <div className="text-xs font-semibold text-cyan-300 mb-2 uppercase tracking-wider">
        Total Internal Reflection · Angle i &gt; Critical Angle C
      </div>
      <svg className="w-56 h-36" viewBox="0 0 200 130">
        {/* Boundary line between glass (denser) and air (rarer) */}
        <line x1="10" y1="65" x2="190" y2="65" stroke="#38bdf8" strokeWidth="2" />
        {/* Normal line */}
        <line x1="100" y1="15" x2="100" y2="115" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />

        {/* Regions */}
        <text x="20" y="45" fill="#94a3b8" fontSize="9">Air (Rarer medium)</text>
        <text x="20" y="85" fill="#67e8f9" fontSize="9">Glass / Water (Denser medium)</text>

        {/* Incident Ray in denser medium */}
        <line x1="45" y1="110" x2="100" y2="65" stroke="#f59e0b" strokeWidth="2.5" />
        {/* Totally reflected ray back into denser medium */}
        <line x1="100" y1="65" x2="155" y2="110" stroke="#10b981" strokeWidth="2.5" />

        {/* Ray angle markings */}
        <text x="75" y="80" fill="#fde68a" fontSize="9" fontWeight="bold">i &gt; C</text>
        <text x="125" y="80" fill="#6ee7b7" fontSize="9" fontWeight="bold">r = i</text>
      </svg>
      <div className="text-[11px] text-cyan-200 mt-1 font-mono text-center">
        sin C = 1 / n
      </div>
      <div className="text-[10px] text-slate-400 text-center">
        When angle of incidence exceeds critical angle, 100% of light is reflected back inside.
      </div>
    </div>
  );
};

