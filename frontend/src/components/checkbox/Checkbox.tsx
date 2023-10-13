// 'use client';

// import React, { ReactNode } from 'react';
// import { createContext } from 'vm';

// interface CheckboxProps {
//   children: ReactNode;
//   disabled: boolean;
//   isChecked: boolean;
//   onChange: () => void;
// }

// export function Checkbox({ children, disabled, value, checked, onChange }) {
//   const CheckboxContext = createContext();
//   const context = React.useContext(CheckboxContext);

//   if (!context) {
//     return (
//       <label>
//         <input type="checkbox" disabled={disabled} checked={checked} onChange={({ target: { checked } }) => onChange(checked)} />
//         {children}
//       </label>
//     );
//   }

//   const { isDisabled, isChecked, toggleValue } = context;

//   return (
//     <label>
//       <input type="checkbox" disabled={isDisabled(disabled)} checked={isChecked(value)} onChange={({ target: { checked } }) => toggleValue({ checked, value })} />
//       {children}
//     </label>
//   );
// }
