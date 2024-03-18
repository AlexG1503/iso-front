import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

type CustomCheckboxProps = {
  label: string;
  isParent?: boolean;
  childLabels?: string[];
  onCheckboxChange?: (checked: boolean) => void;  
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  isParent = false,
  childLabels = [],
  onCheckboxChange,
}) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    if (onCheckboxChange) {
      onCheckboxChange(newValue);  
    }
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {label}

      {isParent && childLabels.length > 0 && (
        <div style={{ marginLeft: '20px' }}>
          {childLabels.map((childLabel, index) => (
            <CustomCheckbox
              key={index}
              label={childLabel}
              onCheckboxChange={(childChecked) => {
                if (childChecked) {
                  setChecked(true); 
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomCheckbox;

