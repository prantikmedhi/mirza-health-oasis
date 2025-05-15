
export interface AppointmentData {
  id: string;
  patientName: string;
  age: number;
  gender: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  status: 'confirmed' | 'cancelled' | 'completed' | 'no-show';
}

export interface AppointmentStats {
  total: number;
  confirmed: number;
  cancelled: number;
  completed: number;
  noShow: number;
  byDepartment: Record<string, number>;
  byDoctor: Record<string, number>;
}
