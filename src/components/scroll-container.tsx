import { Suspense } from 'react'
import { sections } from '../lib/sections-data.ts'
import { useStoryNavigation } from '../hooks/use-story-navigation.ts'
import { StorySection } from './story-section.tsx'
import { FloatingNav } from './floating-nav.tsx'
import { sectionParallax } from '../lib/parallax-presets.tsx'

export function ScrollContainer() {
  const { currentSection, totalSections, setSectionRef, scrollToSection } =
    useStoryNavigation()

  return (
    <div className="relative bg-[#0f0f0f]">
      {sections.map((section, index) => (
        <StorySection
          key={section.id}
          ref={setSectionRef(index)}
          id={`section-${section.id}`}
          className="bg-[#0f0f0f]"
          parallaxLayers={sectionParallax[section.id]}
        >
          <Suspense
            fallback={
              <div className="flex h-32 items-center justify-center">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#E0527E] border-t-transparent" />
              </div>
            }
          >
            <section.component />
          </Suspense>
        </StorySection>
      ))}

      <FloatingNav
        current={currentSection}
        total={totalSections}
        titles={sections.map((s) => s.title)}
        onNavigate={scrollToSection}
      />
    </div>
  )
}
