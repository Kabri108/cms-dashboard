import { z } from "zod";
import { Day } from "@prisma/client";
export const subjectSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Subject name is required!" }),
  teachers: z.array(z.string()), //teacher ids
});

export type SubjectSchema = z.infer<typeof subjectSchema>;

export const classSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Subject name is required!" }),
  capacity: z.coerce.number().min(1, { message: "Capacity name is required!" }),
  gradeId: z.coerce.number().min(1, { message: "Grade name is required!" }),
  supervisorId: z.coerce.string().optional(),
});

export type ClassSchema = z.infer<typeof classSchema>;

export const teacherSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "First name is required!" }),
  surname: z.string().min(1, { message: "Last name is required!" }),
  email: z
    .string()
    .email({ message: "Invalid email address!" })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string(),
  img: z.string().optional(),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.coerce.date({ message: "Birthday is required!" }),
  sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),
  subjects: z.array(z.string()).optional(), // subject ids
});

export type TeacherSchema = z.infer<typeof teacherSchema>;

export const studentSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "First name is required!" }),
  surname: z.string().min(1, { message: "Last name is required!" }),
  email: z
    .string()
    .email({ message: "Invalid email address!" })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string(),
  img: z.string().optional(),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.coerce.date({ message: "Birthday is required!" }),
  sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),
  gradeId: z.coerce.number().min(1, { message: "Grade is required!" }),
  classId: z.coerce.number().min(1, { message: "Class is required!" }),
  parentId: z.string().min(1, { message: "Parent Id is required!" }),
});

export type StudentSchema = z.infer<typeof studentSchema>;

export const examSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(1, { message: "Title name is required!" }),
  startTime: z.coerce.date({ message: "Start time is required!" }),
  endTime: z.coerce.date({ message: "End time is required!" }),
  lessonId: z.coerce.number({ message: "Lesson is required!" }),
});

export type ExamSchema = z.infer<typeof examSchema>;


export const assignmentSchema = z
  .object({
    id: z.coerce.number().optional(),
    title: z.string().min(1, { message: "Assignment title is required!" }),

    // If your inputs already give ISO strings you can switch to z.string()
    startDate: z.coerce.date({ message: "Start date is required!" }),
    dueDate:  z.coerce.date({ message: "Due date is required!" }),

    lessonId: z.coerce.number({
      required_error: "Lesson is required!",
      invalid_type_error: "Lesson ID must be a number",
    }),
  })
  .refine(
    ({ startDate, dueDate }) => dueDate > startDate,
    {
      path: ["dueDate"],
      message: "Due date must be after start date!",
    }
  );

export type AssignmentSchema = z.infer<typeof assignmentSchema>;






export const lessonSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "Lesson name is required"),
  subjectId: z
    .string({ required_error: "Subject is required" })
    .min(1)
    .pipe(z.number()), // ✅ Ensures the inferred type is number
  classId: z
    .string({ required_error: "Class is required" })
    .min(1)
    .pipe(z.number()), // ✅ Ensures the inferred type is number
  teacherId: z.string({ required_error: "Teacher is required" }),
  day: z.nativeEnum(Day, { required_error: "Day is required" }),
  startTime: z.string(),
  endTime: z.string(),
});

export type LessonSchema = z.infer<typeof lessonSchema>;


// export const lessonSchema = z.object({
//   id: z.number().optional(),
//   name: z.string().min(1, "Lesson name is required"),
//   subjectId: z
//     .string({ required_error: "Subject is required" })
//     .min(1)
//     .transform((val) => parseInt(val)),
//   classId: z
//     .string({ required_error: "Class is required" })
//     .min(1)
//     .transform((val) => parseInt(val)),
//   teacherId: z.string({ required_error: "Teacher is required" }),
//   day: z.nativeEnum(Day, { required_error: "Day is required" }),
//   startTime: z.string(),
//   endTime: z.string(),
// });