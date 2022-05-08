import { ChatTeardropDots, CircleNotch } from 'phosphor-react'
import { useState } from 'react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';



export function Loading() {
    return (
        <div className='w-6 h-6 flex items-center justify-center overflow-hidden'>
            <CircleNotch weight='bold' className='w-4 h-4 animate-spin' />
        </div>
    )
}