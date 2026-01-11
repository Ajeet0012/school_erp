/**
 * Data mappers - Transform raw API data to frontend models
 * All API responses must be transformed via mappers before use in UI
 */

// Example mapper structure - extend as needed
export const mapUser = (data: any) => ({
  id: data.id,
  email: data.email,
  firstName: data.firstName || data.first_name,
  lastName: data.lastName || data.last_name,
  role: data.role,
  schoolId: data.schoolId || data.school_id,
  phone: data.phone,
  avatar: data.avatar,
});

// Add more mappers as needed
export const mapStudent = (data: any) => ({
  id: data.id,
  firstName: data.firstName || data.first_name,
  lastName: data.lastName || data.last_name,
  email: data.email,
  phone: data.phone,
  admissionNumber: data.admissionNumber || data.admission_number,
  classId: data.classId || data.class_id,
  class: data.class ? { id: data.class.id, name: data.class.name } : undefined,
  sectionId: data.sectionId || data.section_id,
  // Add more fields as needed
});

export const mapTeacher = (data: any) => ({
  id: data.id,
  firstName: data.firstName || data.first_name,
  lastName: data.lastName || data.last_name,
  email: data.email,
  phone: data.phone,
  employeeId: data.employeeId || data.employee_id,
  subjects: data.subjects || [],
  // Add more fields as needed
});

// Generic mapper for arrays
export const mapArray = <T>(mapper: (item: any) => T) => (data: any[]): T[] => {
  return (data || []).map(mapper);
};
