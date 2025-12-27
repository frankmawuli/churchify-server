// schemas/memberCsv.schema.ts
import { z } from "zod";

export const memberCsvSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().optional(),
  address: z.string().optional(),
  relationshipStatus: z.enum(["SINGLE", "MARRIED", "DIVORCED", "WIDOWED"]),
  spouseName: z.string().optional(),
  childrenNames: z.string().optional(),
  dateOfBirth: z.string().optional(),
});
