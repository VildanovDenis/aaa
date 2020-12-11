import React from 'react';

export type TLayoutWithShadowProps = {
    /**
     * children to render inside wrapper
     */
    children: React.ReactNode;
    /**
     * padding size for wrapper
     */
    spacing?: 'large' | 'medium' | 'small';
    /**
     * className for wrapper
     */
    className?: string;
}