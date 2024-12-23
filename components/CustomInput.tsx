import React from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';

const formSchema = authFormSchema('sign-up');


interface CustomInput {
  control: Control<z.infer<typeof formSchema>>,
  name:FieldPath<z.infer <typeof formSchema>>,
  placeholder:string,
  label:string
}

const CustomInput = ( { control, name, label, placeholder }: CustomInput ) => {
  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <div className='form-item'>
              <FormLabel>
                {label}
              </FormLabel>
              <div className="flex w-full flex-col">
                <FormControl>
                  <Input placeholder={placeholder} type={name === 'password' ? 'password':'text'} className='input-class' {...field}>
                  </Input>
                </FormControl>
                <FormMessage className='form-message mt-2' />
              </div>
            </div>
          )}
        />
  )
}

export default CustomInput