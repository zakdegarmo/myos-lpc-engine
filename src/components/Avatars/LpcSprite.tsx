import React from 'react';

interface LpcSpriteProps {
    imageUrl: string;
    scale?: number;
    position?: [number, number, number];
    action?: string;
    frame?: number;
}

/**
 * LEGACY COMPONENT: Renders 2D LPC Sprites using the original compositing logic.
 * Offloaded to standalone repository as MyOS transitions to 3D GLB entities.
 */
export const LpcSprite: React.FC<LpcSpriteProps> = ({ 
    imageUrl, 
    scale = 1, 
    position = [0, 0, 0],
    action = 'walk',
    frame = 0
}) => {
    return (
        <group position={position}>
            <sprite scale={[scale, scale, 1]}>
                <spriteMaterial color="white" />
            </sprite>
            {/* 
                Original logic used CSS backgrounds or Canvas compositing.
                This component acts as a bridge for the new 3D world.
            */}
        </group>
    );
};
