import type { ComponentType } from 'react'
import { lazy } from 'react'

export interface SectionConfig {
  id: number
  title: string
  component: React.LazyExoticComponent<React.ComponentType> | ComponentType
}

// 12-section discovery story structure
// Two core messages: (1) Truth is uncomfortable (2) Seek commitment
export const sections: SectionConfig[] = [
  { id: 1, title: 'Hook', component: lazy(() => import('../slides/section-01-hook.tsx')) },
  { id: 2, title: 'The Fail', component: lazy(() => import('../slides/section-02-the-fail.tsx')) },
  { id: 3, title: 'Truth is Uncomfortable', component: lazy(() => import('../slides/section-03-message-one.tsx')) },
  { id: 4, title: "Why We're Fooled", component: lazy(() => import('../slides/section-04-why-fooled.tsx')) },
  { id: 5, title: 'The Fix', component: lazy(() => import('../slides/section-05-the-fix.tsx')) },
  { id: 6, title: 'The Pass', component: lazy(() => import('../slides/section-06-the-pass.tsx')) },
  { id: 7, title: 'Seek Commitment', component: lazy(() => import('../slides/section-07-message-two.tsx')) },
  { id: 8, title: 'The Currencies', component: lazy(() => import('../slides/section-08-currencies.tsx')) },
  { id: 9, title: 'Product vs Market Risk', component: lazy(() => import('../slides/section-09-risk.tsx')) },
  { id: 10, title: 'Customer Slicing', component: lazy(() => import('../slides/section-10-slicing.tsx')) },
  { id: 11, title: 'Good vs Bad Meeting', component: lazy(() => import('../slides/section-11-meetings.tsx')) },
  { id: 12, title: 'One Thing Monday', component: lazy(() => import('../slides/section-12-action.tsx')) },
]
