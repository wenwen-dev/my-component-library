'use client'

import Breadcrumbs from '../components/Breadcrumbs';
import Crumb from '@/components/Crumb';


export default function HomePage() {
  return (
    <>
    <Breadcrumbs>
      <Crumb href="/">Home</Crumb>
      <Crumb href="/living">Living Room</Crumb>
      <Crumb href="/living/couch">Couches</Crumb>
      <Crumb href="/living/couch/sectional" isCurrentPage={true}>
        Sectionals
      </Crumb>
  </Breadcrumbs>
    </>
  )
}