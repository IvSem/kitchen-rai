import './bootstrap';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Asset loading
import.meta.glob(['../images/**', '../svg/**']);

// Alpine
Alpine.store('data', {
	menuIsOpen: false,
	toggleMenu() {
		this.menuIsOpen = !this.menuIsOpen;
	},
	closeMenu() {
		this.menuIsOpen = false;
	},
});

// GSAP
gsap.registerPlugin(ScrollTrigger);
window.ScrollTrigger = ScrollTrigger;
window.gsap = gsap;
window.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
