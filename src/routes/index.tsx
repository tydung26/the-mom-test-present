import { createFileRoute } from '@tanstack/react-router'
import { SlideDeck } from '../components/slide-deck.tsx'

export const Route = createFileRoute('/')({ component: SlideDeck })
