import './bootstrap';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Asset loading
import.meta.glob(['../images/**', '../svg/**']);

// GSAP
gsap.registerPlugin(ScrollTrigger);
window.ScrollTrigger = ScrollTrigger;
window.gsap = gsap;
window.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
