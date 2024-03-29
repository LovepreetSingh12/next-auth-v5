"use client"

import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '../ui/input';
import { FormSuccess } from '../ui/form-success';
import { FormError } from '../ui/form-error';
import { Button } from '../ui/button';
import CardWrapper from './card-wrapper';

export default function RegisterForm() {

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name : "",
            email : "",
            password : ""
        }
    });

    const handleSubmit = (values : z.infer<typeof RegisterSchema>) => {
        console.log(values);
    }

    return (
        <CardWrapper
            headerLabel='Create an account'
            backButtonLabel="Already have an account?"
            backButtonHref='/auth/login'
            showSocial
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className='space-y-6'
                >
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) =>(
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                <Input
                                    {...field}
                                    placeholder='John Doe'
                                    type='name'
                                />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) =>(
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                <Input
                                    {...field}
                                    placeholder='john.doe@example.com'
                                    type='email'
                                />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) =>(
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                <Input
                                    {...field}
                                    placeholder='********'
                                    type='password'
                                />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                            )}
                        />
                    </div>
                    <FormSuccess message=''/>
                    <FormError message=''/>
                    <Button
                        type='submit'
                        className='w-full'
                    >
                        Create an account
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}