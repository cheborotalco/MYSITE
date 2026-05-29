import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional().default(""),
  message: z.string().min(8),
  locale: z.enum(["it", "ru", "en"]),
  source: z.string().optional().default("contact-form"),
});

export const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional().default(""),
  notes: z.string().optional().default(""),
  service: z.string().min(2),
  date: z.string().min(1),
  time: z.string().min(1),
  locale: z.enum(["it", "ru", "en"]),
});

export const leadMagnetSchema = z.object({
  email: z.string().email(),
  name: z.string().optional().default(""),
  locale: z.enum(["it", "ru", "en"]),
});

export const stripeSchema = z.object({
  serviceId: z.string().min(1),
  locale: z.enum(["it", "ru", "en"]),
});
