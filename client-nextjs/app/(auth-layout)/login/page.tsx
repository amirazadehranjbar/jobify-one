"use client"
import * as React from "react"
import {zodResolver} from "@hookform/resolvers/zod"
import {toast} from "sonner"
import * as z from "zod"

import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Controller, useForm} from "react-hook-form";

const formSchema = z.object({


    email: z.email(),
    password: z.string().min(6)

})

export default function Login() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",

        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast("You submitted the following values:", {
            description: (
                <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
            ),
            position: "bottom-right",
            classNames: {
                content: "flex flex-col gap-2",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
        })
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Card className="w-2/3 bg-surface-bg">
                <CardHeader className="text-text-two">
                    <CardTitle className="text-text-two">login</CardTitle>
                    <CardDescription className={undefined}>
                        login with your account
                    </CardDescription>
                </CardHeader>
                <CardContent className={undefined}>
                    <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                        <FieldGroup className={undefined}>


                            {/*region email*/}
                            <Controller
                                name="email"
                                control={form.control}
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid} className={undefined}>
                                        <FieldLabel htmlFor="email" className={undefined}>
                                            email
                                        </FieldLabel>
                                        <Input
                                            className={undefined} type="text" {...field}
                                            id="email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="test@gmail.com"
                                            autoComplete="off"/>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} className={undefined}
                                            />
                                        )}
                                    </Field>
                                )}
                            />
                            {/*endregion*/}

                            {/*region password*/}
                            <Controller
                                name="password"
                                control={form.control}
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid} className={undefined}>
                                        <FieldLabel htmlFor="password" className={undefined}>
                                            password
                                        </FieldLabel>
                                        <Input
                                            className={undefined} type="text" {...field}
                                            id="password"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="*****"
                                            autoComplete="off"/>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} className={undefined}
                                            />
                                        )}
                                    </Field>
                                )}
                            />
                            {/*endregion*/}

                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter className={undefined}>
                    <Field orientation="horizontal" className={undefined}>
                        <Button type="button" variant="outline" onClick={() => form.reset()} className="myBtn">
                            Reset
                        </Button>
                        <Button type="submit" form="form-rhf-demo" className="myBtn">
                            login
                        </Button>
                    </Field>
                    <Link href="/" className="text-text-two text-nowrap">not member yet ?</Link>
                </CardFooter>
            </Card>
        </div>
    )
}
