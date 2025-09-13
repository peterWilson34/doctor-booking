import React from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './figma/ImageWithFallback'
import type { BookingData } from './booking-flow'

interface BookingConfirmationProps {
  bookingData: BookingData
  onNewBooking: () => void
}

export function BookingConfirmation({ bookingData, onNewBooking }: BookingConfirmationProps) {
  const bookingId = `BK${Math.random().toString(36).substr(2, 9).toUpperCase()}`
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="space-y-6">
      {/* Success Message */}
      <div className="text-center py-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="text-green-600 text-2xl">✓</div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600">Your appointment has been successfully booked</p>
        <div className="mt-2">
          <Badge variant="secondary" className="text-sm">
            Booking ID: {bookingId}
          </Badge>
        </div>
      </div>

      {/* Appointment Details */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Appointment Details</h3>
        
        {/* Doctor Info */}
        <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
            <ImageWithFallback
              src={bookingData.doctor?.image || ''}
              alt={bookingData.doctor?.name || ''}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{bookingData.doctor?.name}</h4>
            <p className="text-sm text-gray-600">{bookingData.doctor?.specialization}</p>
            <div className="flex items-center space-x-1 mt-1">
              <span className="text-yellow-500 text-sm">⭐</span>
              <span className="text-sm">{bookingData.doctor?.rating}</span>
            </div>
          </div>
        </div>

        {/* Appointment Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500 font-medium">Location</p>
              <p className="text-gray-900">{bookingData.location}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 font-medium">Specialty</p>
              <p className="text-gray-900">{bookingData.specialty}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500 font-medium">Date</p>
              <p className="text-gray-900">{formatDate(bookingData.date)}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 font-medium">Time</p>
              <p className="text-gray-900">{bookingData.time} (30 minutes)</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Important Information */}
      <Card className="p-4 bg-yellow-50 border-yellow-200">
        <h4 className="font-medium text-yellow-900 mb-2">Important Information</h4>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Please arrive 15 minutes before your appointment</li>
          <li>• Bring your Emirates ID and insurance card</li>
          <li>• You can reschedule up to 2 hours before the appointment</li>
          <li>• A confirmation SMS will be sent to your registered number</li>
        </ul>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={() => window.print()}
        >
          Print Confirmation
        </Button>
        <Button 
          className="flex-1"
          onClick={onNewBooking}
        >
          Book Another Appointment
        </Button>
      </div>

      {/* Contact Info */}
      <div className="text-center text-sm text-gray-500 pt-4 border-t">
        <p>For any changes or queries, please contact us at:</p>
        <p className="font-medium">+971-4-XXX-XXXX | info@healthcarecenter.ae</p>
      </div>
    </div>
  )
}