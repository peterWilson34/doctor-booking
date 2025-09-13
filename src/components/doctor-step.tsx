import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Mock doctor data - in real app this would come from database
const MOCK_DOCTORS = [
  // General Medicine (2 doctors)
  {
    id: "1",
    name: "Dr. Ahmed Al-Rashid",
    specialization: "General Medicine",
    experience: "15 years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?w=400",
    languages: ["English", "Arabic"],
    education: "MBBS, MD Internal Medicine",
  },
  {
    id: "2",
    name: "Dr. Maria Rodriguez",
    specialization: "General Medicine",
    experience: "11 years",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=400",
    languages: ["English", "Spanish"],
    education: "MBBS, MD Family Medicine",
  },

  // Cardiology (2 doctors)
  {
    id: "3",
    name: "Dr. Sarah Johnson",
    specialization: "Cardiology",
    experience: "12 years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=400",
    languages: ["English"],
    education: "MD Cardiology, FACC",
  },
  {
    id: "4",
    name: "Dr. Khalid Al-Mansouri",
    specialization: "Cardiology",
    experience: "16 years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?w=400",
    languages: ["English", "Arabic"],
    education: "MD Cardiology, FESC",
  },

  // Dermatology (2 doctors)
  {
    id: "5",
    name: "Dr. Fatima Al-Zahra",
    specialization: "Dermatology",
    experience: "10 years",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=400",
    languages: ["English", "Arabic", "French"],
    education: "MBBS, MD Dermatology",
  },
  {
    id: "6",
    name: "Dr. Jennifer Park",
    specialization: "Dermatology",
    experience: "9 years",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1645066928295-2506defde470?w=400",
    languages: ["English", "Korean"],
    education: "MD Dermatology, FAAD",
  },

  // Orthopedics (2 doctors)
  {
    id: "7",
    name: "Dr. Omar Hassan",
    specialization: "Orthopedics",
    experience: "18 years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?w=400",
    languages: ["English", "Arabic"],
    education: "MBBS, MS Orthopedics",
  },
  {
    id: "8",
    name: "Dr. Michael Thompson",
    specialization: "Orthopedics",
    experience: "14 years",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?w=400",
    languages: ["English"],
    education: "MD Orthopedic Surgery",
  },

  // Pediatrics (2 doctors)
  {
    id: "9",
    name: "Dr. Lisa Chen",
    specialization: "Pediatrics",
    experience: "8 years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1645066928295-2506defde470?w=400",
    languages: ["English", "Mandarin"],
    education: "MD Pediatrics, FAAP",
  },
  {
    id: "10",
    name: "Dr. Nadia Al-Zahra",
    specialization: "Pediatrics",
    experience: "12 years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=400",
    languages: ["English", "Arabic"],
    education: "MBBS, MD Pediatrics",
  },

  // Gynecology (2 doctors)
  {
    id: "11",
    name: "Dr. Amira Khalil",
    specialization: "Gynecology",
    experience: "14 years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=400",
    languages: ["English", "Arabic"],
    education: "MBBS, MD Obstetrics & Gynecology",
  },
  {
    id: "12",
    name: "Dr. Rebecca Smith",
    specialization: "Gynecology",
    experience: "10 years",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=400",
    languages: ["English"],
    education: "MD Obstetrics & Gynecology",
  },

  // Neurology (2 doctors)
  {
    id: "13",
    name: "Dr. Hassan Al-Mahmoud",
    specialization: "Neurology",
    experience: "20 years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?w=400",
    languages: ["English", "Arabic"],
    education: "MD Neurology, FAAN",
  },
  {
    id: "14",
    name: "Dr. Emily Watson",
    specialization: "Neurology",
    experience: "13 years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=400",
    languages: ["English"],
    education: "MD Neurology, PhD",
  },

  // Ophthalmology (2 doctors)
  {
    id: "15",
    name: "Dr. Yuki Tanaka",
    specialization: "Ophthalmology",
    experience: "15 years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1645066928295-2506defde470?w=400",
    languages: ["English", "Japanese"],
    education: "MD Ophthalmology, FRCSC",
  },
  {
    id: "16",
    name: "Dr. Layla Al-Rashid",
    specialization: "Ophthalmology",
    experience: "11 years",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=400",
    languages: ["English", "Arabic"],
    education: "MBBS, MS Ophthalmology",
  },

  // ENT (2 doctors)
  {
    id: "17",
    name: "Dr. David Kumar",
    specialization: "ENT",
    experience: "17 years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?w=400",
    languages: ["English", "Hindi"],
    education: "MS ENT, FRCS",
  },
  {
    id: "18",
    name: "Dr. Maryam Al-Kindi",
    specialization: "ENT",
    experience: "9 years",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=400",
    languages: ["English", "Arabic"],
    education: "MBBS, MS ENT",
  },

  // Psychiatry (2 doctors)
  {
    id: "19",
    name: "Dr. Robert Williams",
    specialization: "Psychiatry",
    experience: "22 years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?w=400",
    languages: ["English"],
    education: "MD Psychiatry, MRCPsych",
  },
  {
    id: "20",
    name: "Dr. Aisha Al-Mansouri",
    specialization: "Psychiatry",
    experience: "7 years",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=400",
    languages: ["English", "Arabic"],
    education: "MD Psychiatry, CBT Certified",
  },
];

interface DoctorStepProps {
  selectedDoctor: any;
  specialty: string;
  location: string;
  onDoctorChange: (doctor: any) => void;
}

export function DoctorStep({
  selectedDoctor,
  specialty,
  location,
  onDoctorChange,
}: DoctorStepProps) {
  // Filter doctors by specialty
  const availableDoctors = MOCK_DOCTORS.filter(
    (doctor) => specialty === "" || doctor.specialization === specialty
  );

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <p className="text-gray-600">
          Select a doctor for{" "}
          <span className="font-medium text-blue-600">{specialty}</span> in{" "}
          <span className="font-medium text-blue-600">{location}</span>
        </p>
      </div>

      <div className="space-y-4">
        {availableDoctors.map((doctor) => (
          <Card
            key={doctor.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedDoctor?.id === doctor.id
                ? "ring-2 ring-blue-500 bg-blue-50"
                : "hover:bg-gray-50"
            }`}
            onClick={() => onDoctorChange(doctor)}
          >
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <ImageWithFallback
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {doctor.specialization}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {doctor.education}
                      </p>
                    </div>

                    {selectedDoctor?.id === doctor.id && (
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 mt-3">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm font-medium">
                        {doctor.rating}
                      </span>
                    </div>

                    <div className="text-sm text-gray-500">
                      {doctor.experience} experience
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {doctor.languages.map((language) => (
                      <Badge
                        key={language}
                        variant="secondary"
                        className="text-xs"
                      >
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {availableDoctors.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">
            No doctors available for {specialty} in {location}
          </p>
        </div>
      )}

      {selectedDoctor && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800">
            <span className="font-medium">Selected Doctor:</span>{" "}
            {selectedDoctor.name}
          </p>
        </div>
      )}
    </div>
  );
}
