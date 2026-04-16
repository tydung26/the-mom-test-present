import type { ComponentType } from 'react'
import { lazy } from 'react'

export interface SectionConfig {
  id: number
  title: string
  component: React.LazyExoticComponent<React.ComponentType> | ComponentType
}

// 14-section discovery story structure
// Intro + Agenda + 12 content sections
// Two core messages: (1) Truth is uncomfortable (2) Seek commitment
export const sections: SectionConfig[] = [
  { id: 0, title: 'The Mom Test', component: lazy(() => import('../slides/section-00-intro.tsx')) },
  { id: 1, title: 'Agenda', component: lazy(() => import('../slides/section-00-agenda.tsx')) },
  { id: 2, title: 'Hook', component: lazy(() => import('../slides/section-01-hook.tsx')) },
  { id: 3, title: 'The Fail', component: lazy(() => import('../slides/section-02-the-fail.tsx')) },
  { id: 4, title: 'Truth is Uncomfortable', component: lazy(() => import('../slides/section-03-message-one.tsx')) },
  { id: 5, title: "Why We're Fooled", component: lazy(() => import('../slides/section-04-why-fooled.tsx')) },
  { id: 6, title: 'The Fix', component: lazy(() => import('../slides/section-05-the-fix.tsx')) },
  { id: 7, title: 'The Pass', component: lazy(() => import('../slides/section-06-the-pass.tsx')) },
  { id: 8, title: 'Seek Commitment', component: lazy(() => import('../slides/section-07-message-two.tsx')) },
  { id: 9, title: 'The Currencies', component: lazy(() => import('../slides/section-08-currencies.tsx')) },
  { id: 10, title: 'Product vs Market Risk', component: lazy(() => import('../slides/section-09-risk.tsx')) },
  { id: 11, title: 'Customer Slicing', component: lazy(() => import('../slides/section-10-slicing.tsx')) },
  { id: 12, title: 'Good vs Bad Meeting', component: lazy(() => import('../slides/section-11-meetings.tsx')) },
  { id: 13, title: 'One Thing Monday', component: lazy(() => import('../slides/section-12-action.tsx')) },
]
