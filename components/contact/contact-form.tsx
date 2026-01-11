"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  phone: z.string().min(8, {
    message: "El teléfono debe tener al menos 10 dígitos.",
  }),
  subject: z.string().min(1, {
    message: "Por favor selecciona un asunto.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);

    const { name, phone, subject, message } = data;

    // 1. Construimos el mensaje con saltos de línea (\n) y formato
    // Nota: Los asteriscos (*) hacen que el texto se vea en negrita en WhatsApp
    const whatsappText = `*Hola, tengo una consulta desde la web.*
    
*Nombre:* ${name}
*Teléfono:* ${phone}
*Asunto:* ${subject}

*Mensaje:*
${message}`;

    // 2. Codificamos el mensaje para URL
    const encodedText = encodeURIComponent(whatsappText);

    // 3. Definimos el número (puedes sacarlo a una constante si prefieres)
    const phoneNumber = "59178859999";

    await new Promise((resolve) => setTimeout(resolve, 1500));

    window.open(
      `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedText}&type=phone_number&app_absent=0`,
      "_blank"
    );
    toast({
      title: "Mensaje listo",
      description: "Te estamos redirigiendo a WhatsApp para enviar el mensaje.",
    });

    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre completo</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="78859999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asunto</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un asunto" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="info">Información general</SelectItem>
                    <SelectItem value="sales">Ventas</SelectItem>
                    <SelectItem value="support">Soporte técnico</SelectItem>
                    <SelectItem value="warranty">Garantía</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Escribe tu mensaje aquí... algo asi como: me interesa el instrumento ..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto bg-[#0F5FA6] hover:bg-[#147346]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar mensaje"
          )}
        </Button>
      </form>
    </Form>
  );
}
