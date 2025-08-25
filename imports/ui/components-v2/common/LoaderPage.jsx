import React from 'react'
import { Loader } from 'lucide-react';

export const LoaderPage = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: '#f8f9fa',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <Loader
                data-testid="loader-icon"
                width={48}
                height={48}
                color="#007bff"
                className="loader-spin"
            />
            <div style={{
                fontSize: '18px',
                color: '#6c757d',
                fontWeight: '500'
            }}>
                Please wait while we connect to the server...
            </div>
        </div>
    );
};