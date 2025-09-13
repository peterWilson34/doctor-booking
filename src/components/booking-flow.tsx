import React, { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Progress } from './ui/progress'
import { LocationStep } from './location-step'
import { SpecialtyStep } from './specialty-step'
import { DoctorStep } from './doctor-step'
import { DateTimeStep } from './datetime-step'
import { BookingConfirmation } from './booking-confirmation'

export interface BookingData {
  location: string
  specialty: string
  doctor: {
    id: string
    name: string
    specialization: string
    image: string
    rating: number
    experience: string
  } | null
  date: string
  time: string
}

export function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>({
    location: '',
    specialty: '',
    doctor: null,
    date: '',
    time: ''
  })

  const totalSteps = 5

  const updateBookingData = (key: keyof BookingData, value: any) => {
    setBookingData(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const resetBooking = () => {
    setCurrentStep(1)
    setBookingData({
      location: '',
      specialty: '',
      doctor: null,
      date: '',
      time: ''
    })
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Select Location'
      case 2: return 'Choose Specialty'
      case 3: return 'Select Doctor'
      case 4: return 'Pick Date & Time'
      case 5: return 'Booking Confirmation'
      default: return 'Book Appointment'
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1: return bookingData.location !== ''
      case 2: return bookingData.specialty !== ''
      case 3: return bookingData.doctor !== null
      case 4: return bookingData.date !== '' && bookingData.time !== ''
      default: return false
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-center text-3xl mb-4 text-gray-900">Book Your Appointment</h1>
          <div className="w-full bg-white rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-gray-600">{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <Progress value={(currentStep / totalSteps) * 100} className="w-full" />
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">{getStepTitle()}</CardTitle>
          </CardHeader>
          <CardContent>
            {currentStep === 1 && (
              <LocationStep
                selectedLocation={bookingData.location}
                onLocationChange={(location) => updateBookingData('location', location)}
              />
            )}
            
            {currentStep === 2 && (
              <SpecialtyStep
                selectedSpecialty={bookingData.specialty}
                onSpecialtyChange={(specialty) => updateBookingData('specialty', specialty)}
              />
            )}
            
            {currentStep === 3 && (
              <DoctorStep
                selectedDoctor={bookingData.doctor}
                specialty={bookingData.specialty}
                location={bookingData.location}
                onDoctorChange={(doctor) => updateBookingData('doctor', doctor)}
              />
            )}
            
            {currentStep === 4 && (
              <DateTimeStep
                selectedDate={bookingData.date}
                selectedTime={bookingData.time}
                onDateChange={(date) => updateBookingData('date', date)}
                onTimeChange={(time) => updateBookingData('time', time)}
                doctor={bookingData.doctor}
              />
            )}
            
            {currentStep === 5 && (
              <BookingConfirmation
                bookingData={bookingData}
                onNewBooking={resetBooking}
              />
            )}

            {currentStep < 5 && (
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={!canProceed()}
                >
                  {currentStep === 4 ? 'Confirm Booking' : 'Next'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}