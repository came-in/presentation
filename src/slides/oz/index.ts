import Slide01Title from './Slide01Title';
import Slide02Recap from './Slide02Recap';
import Slide03WhatsNew from './Slide03WhatsNew';
import Slide04Redesign from './Slide04Redesign';
import Slide05Infra from './Slide05Infra';
import Slide05bAIAgents from './Slide05bAIAgents';
import Slide06Sessions from './Slide06Sessions';
import Slide07Pilot from './Slide07Pilot';
import Slide08Learnings from './Slide08Learnings';
import Slide09Roadmap from './Slide09Roadmap';
import Slide10Closing from './Slide10Closing';

export const ozSlides = [
  { component: Slide01Title, name: 'Title', template: 'title' },
  { component: Slide02Recap, name: 'Recap v1', template: 'three-up' },
  { component: Slide03WhatsNew, name: "What's New", template: 'overview' },
  { component: Slide04Redesign, name: 'Redesign', template: 'comparison' },
  { component: Slide05Infra, name: 'Infrastructure', template: 'comparison' },
  { component: Slide05bAIAgents, name: 'AI Agents', template: 'four-up' },
  { component: Slide06Sessions, name: 'Sessions', template: 'three-up' },
  { component: Slide07Pilot, name: 'Pilot', template: 'three-up' },
  { component: Slide08Learnings, name: 'Learnings', template: 'three-up' },
  { component: Slide09Roadmap, name: 'Roadmap', template: 'two-by-two' },
  { component: Slide10Closing, name: 'Closing', template: 'cta' },
];
