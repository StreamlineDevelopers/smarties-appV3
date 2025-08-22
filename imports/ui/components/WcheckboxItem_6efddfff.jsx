import React, { useEffect, useRef, useState } from 'react';

const WcheckboxItem_6efddfff = ({ status = "approved" }) => {
  const [checked, setChecked] = useState(false);
  const instanceIdRef = useRef(`toggle-${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    setChecked(status === "approved");
  }, [status]);

  return (
    <div
      role="switch"
      aria-checked={checked}
      onClick={() => setChecked((prev) => !prev)}
      data-instance-id={instanceIdRef.current}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        userSelect: 'none'
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 40,
          minWidth: 40,
          height: 20,
          minHeight: 20,
          borderRadius: 100,
          backgroundColor: checked ? '#ff752b' : '#ced7e0',
          transition: 'background-color .2s'
        }}
      >
        <span
          aria-hidden
          style={{
            position: 'absolute',
            top: '50%',
            left: checked ? 23 : 3,
            transform: 'translateY(-50%)',
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: '#fff',
            boxShadow: '0 0 0 1px rgba(255,117,43,0.25)',
            transition: 'left .2s'
          }}
        />
      </div>
      <div style={{ color: '#333c', fontSize: 12, lineHeight: 1.2 }}>
        {checked ? 'Active' : 'Inactive'}
      </div>
    </div>
  );
};

export default WcheckboxItem_6efddfff;
