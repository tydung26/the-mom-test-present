import { lazy } from 'react'

interface SlideConfig {
  id: number
  title: string
  component: React.LazyExoticComponent<React.ComponentType>
}

export const slides: SlideConfig[] = [
  { id: 1, title: 'Title', component: lazy(() => import('../slides/slide-01-title.tsx')) },
  { id: 2, title: 'The Problem', component: lazy(() => import('../slides/slide-02-the-problem.tsx')) },
  { id: 3, title: 'The Story', component: lazy(() => import('../slides/slide-03-the-story.tsx')) },
  { id: 4, title: 'Failing the Mom Test', component: lazy(() => import('../slides/slide-04-failing-mom-test.tsx')) },
  { id: 5, title: 'Passing the Mom Test', component: lazy(() => import('../slides/slide-05-passing-mom-test.tsx')) },
  { id: 6, title: 'The 3 Rules', component: lazy(() => import('../slides/slide-06-three-rules.tsx')) },
  { id: 7, title: 'Good vs Bad Questions', component: lazy(() => import('../slides/slide-07-good-vs-bad-questions.tsx')) },
  { id: 8, title: 'Rules of Thumb', component: lazy(() => import('../slides/slide-08-rules-of-thumb.tsx')) },
  { id: 9, title: '3 Types of Bad Data', component: lazy(() => import('../slides/slide-09-bad-data-types.tsx')) },
  { id: 10, title: 'Deflecting Compliments', component: lazy(() => import('../slides/slide-10-deflecting-compliments.tsx')) },
  { id: 11, title: 'Anchoring Fluff', component: lazy(() => import('../slides/slide-11-anchoring-fluff.tsx')) },
  { id: 12, title: 'Digging Beneath Ideas', component: lazy(() => import('../slides/slide-12-digging-beneath-ideas.tsx')) },
  { id: 13, title: 'Embrace the Uncomfortable', component: lazy(() => import('../slides/slide-13-embrace-uncomfortable.tsx')) },
  { id: 14, title: 'Keep It Casual', component: lazy(() => import('../slides/slide-14-keep-it-casual.tsx')) },
  { id: 15, title: 'Conferences & Events', component: lazy(() => import('../slides/slide-15-conferences-and-events.tsx')) },
  { id: 16, title: 'Meeting Framework', component: lazy(() => import('../slides/slide-16-meeting-framework-vfwpa.tsx')) },
  { id: 17, title: 'Commitment & Advancement', component: lazy(() => import('../slides/slide-17-commitment-advancement.tsx')) },
  { id: 18, title: 'Meeting Outcomes', component: lazy(() => import('../slides/slide-18-meeting-outcomes.tsx')) },
  { id: 19, title: 'Product vs Market Risk', component: lazy(() => import('../slides/slide-19-product-vs-market-risk.tsx')) },
  { id: 20, title: 'Finding Conversations', component: lazy(() => import('../slides/slide-20-finding-conversations.tsx')) },
  { id: 21, title: 'Choose Your Customers', component: lazy(() => import('../slides/slide-21-choose-customers.tsx')) },
  { id: 22, title: 'Customer Slicing', component: lazy(() => import('../slides/slide-22-customer-slicing.tsx')) },
  { id: 23, title: 'Cheat Sheet', component: lazy(() => import('../slides/slide-23-cheat-sheet.tsx')) },
  { id: 24, title: 'Q&A', component: lazy(() => import('../slides/slide-24-qa.tsx')) },
]
