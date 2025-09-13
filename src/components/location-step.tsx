import React from 'react'
import { Button } from './ui/button'

const UAE_LOCATIONS = [
  'Abu Dhabi',
  'Dubai', 
  'Ajman',
  'Sharjah',
  'Ras Al Khaima',
  'Al Ain',
  'Um Al Quwin'
]

interface LocationStepProps {
  selectedLocation: string
  onLocationChange: (location: string) => void
}

export function LocationStep({ selectedLocation, onLocationChange }: LocationStepProps) {
  return (
    <div className="space-y-4">
      <p className="text-gray-600 text-center mb-6">
        Please select your preferred branch location
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {UAE_LOCATIONS.map((location) => (
          <Button
            key={location}
            variant={selectedLocation === location ? "default" : "outline"}
            className="h-12 text-left justify-start"
            onClick={() => onLocationChange(location)}
          >
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>{location}</span>
            </div>
          </Button>
        ))}
      </div>

      {selectedLocation && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800">
            <span className="font-medium">Selected Location:</span> {selectedLocation}
          </p>
        </div>
      )}
    </div>
  )
}