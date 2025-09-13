import React from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'

const MEDICAL_SPECIALTIES = [
  {
    name: 'General Medicine',
    description: 'Primary healthcare and general consultations',
    icon: '🩺'
  },
  {
    name: 'Cardiology', 
    description: 'Heart and cardiovascular system',
    icon: '❤️'
  },
  {
    name: 'Dermatology',
    description: 'Skin, hair, and nail conditions', 
    icon: '🧴'
  },
  {
    name: 'Orthopedics',
    description: 'Bones, joints, and muscles',
    icon: '🦴'
  },
  {
    name: 'Pediatrics',
    description: 'Healthcare for infants and children',
    icon: '👶'
  },
  {
    name: 'Gynecology',
    description: 'Women\'s reproductive health',
    icon: '👩‍⚕️'
  },
  {
    name: 'Neurology',
    description: 'Brain and nervous system',
    icon: '🧠'
  },
  {
    name: 'Ophthalmology',
    description: 'Eye and vision care',
    icon: '👁️'
  },
  {
    name: 'ENT',
    description: 'Ear, nose, and throat',
    icon: '👂'
  },
  {
    name: 'Psychiatry',
    description: 'Mental health and wellness',
    icon: '🧠'
  }
]

interface SpecialtyStepProps {
  selectedSpecialty: string
  onSpecialtyChange: (specialty: string) => void
}

export function SpecialtyStep({ selectedSpecialty, onSpecialtyChange }: SpecialtyStepProps) {
  return (
    <div className="space-y-4">
      <p className="text-gray-600 text-center mb-6">
        Choose the medical specialty you need
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {MEDICAL_SPECIALTIES.map((specialty) => (
          <Card 
            key={specialty.name}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedSpecialty === specialty.name 
                ? 'ring-2 ring-blue-500 bg-blue-50' 
                : 'hover:bg-gray-50'
            }`}
            onClick={() => onSpecialtyChange(specialty.name)}
          >
            <div className="p-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">{specialty.icon}</div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{specialty.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{specialty.description}</p>
                </div>
                {selectedSpecialty === specialty.name && (
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedSpecialty && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800">
            <span className="font-medium">Selected Specialty:</span> {selectedSpecialty}
          </p>
        </div>
      )}
    </div>
  )
}