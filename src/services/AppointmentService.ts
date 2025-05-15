
import { AppointmentData, AppointmentStats } from "../models/AppointmentTypes";

// Mock data for demonstration purposes
const mockAppointments: AppointmentData[] = [
  { id: "1", patientName: "John Doe", age: 35, gender: "male", department: "Medicine", doctor: "Dr. Arindam Roy Choudhury", date: "2025-05-20", time: "09:00", status: "confirmed" },
  { id: "2", patientName: "Jane Smith", age: 42, gender: "female", department: "Medicine", doctor: "Dr. Bikash Das", date: "2025-05-21", time: "10:00", status: "completed" },
  { id: "3", patientName: "Robert Johnson", age: 28, gender: "male", department: "General Surgery", doctor: "Dr. Gautam Das", date: "2025-05-22", time: "11:00", status: "cancelled" },
  { id: "4", patientName: "Emily Wilson", age: 56, gender: "female", department: "Obstetrics & Gynaecology", doctor: "Dr. Pinki Mazumdar", date: "2025-05-23", time: "14:00", status: "confirmed" },
  { id: "5", patientName: "Michael Brown", age: 62, gender: "male", department: "Medicine", doctor: "Dr. Annu Gupta", date: "2025-05-24", time: "15:00", status: "no-show" },
  { id: "6", patientName: "Sarah Davis", age: 45, gender: "female", department: "Pediatrics", doctor: "Dr. Trishna Moral", date: "2025-05-25", time: "16:00", status: "confirmed" },
  { id: "7", patientName: "David Miller", age: 39, gender: "male", department: "General Surgery", doctor: "Dr. Kailash Thakuria", date: "2025-05-26", time: "09:00", status: "completed" },
  { id: "8", patientName: "Lisa Anderson", age: 52, gender: "female", department: "Obstetrics & Gynaecology", doctor: "Dr. Sasindra Kr. Das", date: "2025-05-27", time: "10:00", status: "completed" },
  { id: "9", patientName: "Thomas White", age: 33, gender: "male", department: "Medicine", doctor: "Dr. Jogesh Kalita", date: "2025-05-28", time: "11:00", status: "no-show" },
  { id: "10", patientName: "Jessica Taylor", age: 27, gender: "female", department: "Pediatrics", doctor: "Dr. Pankaj Nath", date: "2025-05-29", time: "14:00", status: "confirmed" },
  { id: "11", patientName: "James Wilson", age: 48, gender: "male", department: "General Surgery", doctor: "Dr. Rubul Das", date: "2025-05-30", time: "15:00", status: "cancelled" },
  { id: "12", patientName: "Patricia Martin", age: 55, gender: "female", department: "Obstetrics & Gynaecology", doctor: "Dr. Dhiraj Das", date: "2025-05-31", time: "16:00", status: "confirmed" },
];

// Service for appointment data operations
export const AppointmentService = {
  // Get all appointments
  getAppointments: async (): Promise<AppointmentData[]> => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockAppointments), 500);
    });
  },

  // Calculate appointment statistics
  getAppointmentStats: async (): Promise<AppointmentStats> => {
    const appointments = await AppointmentService.getAppointments();
    
    const stats: AppointmentStats = {
      total: appointments.length,
      confirmed: 0,
      cancelled: 0,
      completed: 0,
      noShow: 0,
      byDepartment: {},
      byDoctor: {}
    };

    appointments.forEach(appointment => {
      // Count by status
      switch (appointment.status) {
        case 'confirmed': stats.confirmed++; break;
        case 'cancelled': stats.cancelled++; break;
        case 'completed': stats.completed++; break;
        case 'no-show': stats.noShow++; break;
      }

      // Count by department
      if (!stats.byDepartment[appointment.department]) {
        stats.byDepartment[appointment.department] = 0;
      }
      stats.byDepartment[appointment.department]++;

      // Count by doctor
      if (!stats.byDoctor[appointment.doctor]) {
        stats.byDoctor[appointment.doctor] = 0;
      }
      stats.byDoctor[appointment.doctor]++;
    });

    return stats;
  }
};
