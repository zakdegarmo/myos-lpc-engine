import { useState, useEffect } from 'react';
import registry from '../../public/models/registry.json';

export interface LpcManifest {
    bases: string[];
    bodies: string[];
    heads: string[];
    arms: string[];
    legs: string[];
    feet: string[];
}

export const useLpcManifest = (): LpcManifest => {
    const [manifest, setManifest] = useState<LpcManifest>({
        bases: [],
        bodies: [],
        heads: [],
        arms: [],
        legs: [],
        feet: []
    });

    useEffect(() => {
        // In a real app, this might be a fetch. 
        // Here we just use the imported JSON which is bundled.
        setManifest(registry as any);
    }, []);

    return manifest;
};
