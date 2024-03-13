import { Khmer } from 'next/font/google';
import { Jost } from 'next/font/google';
import { Orbitron } from 'next/font/google';

export const khmer = Khmer({
    weight:['400'],
    subsets:['khmer']
});

export const jost = Jost({
    weight:['400','500','600','700','800','900'],
    subsets:['latin']
});
export const orbitron = Orbitron({
    weight:['400','500','600','700','800','900'],
    subsets:['latin']
});
