import React from 'react'
import { type LucideIcon } from 'lucide-react';

import { WEBSITE_FEATURES } from '@/lib/constants/website-features';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import classNames from 'classnames';



type TFeatures = {
  title: string;
  description: string;
  Icon: LucideIcon
}


export default function FeatureSection() {
  return (
    <section className='space-y-10'>
      <h2 className="text-4xl font-bold underline">Features</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
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
    <Card className={classNames({
      'shadow-[10px_10px_0] rounded-2xl border border-zinc-600': true,
    })}>
      <CardHeader>
        <CardTitle className='text-2xl xs:text-3xl'>{title}</CardTitle>
      </CardHeader>

      <Icon className='scale-150 mx-auto fill-slate-300' />

      <CardContent className='text-sm xs:text-base pt-6 text-muted-foreground'>
        {description}
      </CardContent>
    </Card>
  )
}