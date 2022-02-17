import React from 'react'
import { isMobile } from 'react-device-detect'
import timeline from '@/assets/images/timeline.png'
import timelineMobile from '@/assets/images/timeline_mobile.png'

function Timeline () {
  return (
    <div className='timeline'>
      <div className='title'>Time line</div>
      <img src={isMobile ? timelineMobile : timeline} alt='timeline' />
    </div>
  )
}

export default Timeline
