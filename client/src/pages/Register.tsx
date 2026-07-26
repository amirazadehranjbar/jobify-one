import * as React from "react"
import {zodResolver} from "@hookform/resolvers/zod"
import {Controller, useForm} from "react-hook-form"
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
} from "@/components/ui/field"
import {Input} from "@/components/ui/input"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import {Link} from "react-router-dom";

const formSchema = z.object({

    email: z.email(),
    password: z.string().min(6)

})

export default function Register() {
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
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <Card className="w-2/3 -translate-y-1/4">
                <CardHeader className={undefined}>
                    <CardTitle className={undefined}>register</CardTitle>
                    <CardDescription className={undefined}>
                        register now for more information
                    </CardDescription>
                </CardHeader>
                <CardContent className={undefined}>
                    <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                        <FieldGroup className={undefined}>


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
                                                        children={undefined}/>
                                        )}
                                    </Field>
                                )}
                            />


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
                                                        children={undefined}/>
                                        )}
                                    </Field>
                                )}
                            />

                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter className={undefined}>
                    <Field orientation="horizontal" className={undefined}>
                        <Button type="button" variant="outline" onClick={() => form.reset()} className="myBtn">
                            Reset
                        </Button>
                        <Button type="submit" form="form-rhf-demo" className="myBtn">
                            register
                        </Button>
                    </Field>
                    <Link to="login" className="text-text-two text-nowrap">have you an account?</Link>
                </CardFooter>
            </Card>
        </div>
    )
}
