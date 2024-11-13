import { messages } from '@config/messages';
import { z } from 'zod';
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from './common-rules';

export const signUpSchema = z.object({
  firstName: z.string().min(1, { message: messages.firstNameRequired }),
  lastName: z.string().min(1, { message: messages.lastNameRequired }),
  email: validateEmail,
  password: validatePassword,
  confirmPassword: validateConfirmPassword,
  isAgreed: z.boolean().refine((val) => val === true, {
    message: messages.isAgreedRequired,
  }),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
