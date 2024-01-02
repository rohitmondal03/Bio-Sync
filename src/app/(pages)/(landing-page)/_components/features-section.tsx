import React from 'react'
import { type LucideIcon } from 'lucide-react';

import { WEBSITE_FEATURES } from '@/lib/constants/website-features';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'



type TFeatures = {
  title: string;
  description: string;
  Icon: LucideIcon
}


export default function FeatureSection() {
  return (
    <section className='space-y-5'>
      <h2 className="text-4xl font-bold">Features</h2>

      <div className='grid md:grid-cols-3 gap-5'>
        {WEBSITE_FEATURES.map((feat) => (
          <FeatureCard
            key={feat.description}
            title={feat.title}
            description={feat.description}
            Icon={feat.Icon}
          />
        ))}
      </div>
    </section>
  )
}


function FeatureCard(
  { title, description, Icon }: TFeatures
) {
  return (
    <Card className='shadow-lg border-2 border-zinc-400'>
      <CardHeader>
        <CardTitle className='text-3xl'>{title}</CardTitle>
      </CardHeader>

      <Icon className='scale-125 mx-auto' />

      <CardContent className='pt-6 text-muted-foreground'>
        {description}
      </CardContent>
    </Card>
  )
}