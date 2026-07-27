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

    firstName: z.string().min(5).max(30),
    lastName: z.string().min(5).max(30),
    location: z.optional(z.string()),
    email: z.email(),
    password: z.string().min(6)

})

export default function Register() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            location: ""
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
            <Card className="w-2/3 mt-2 h-full mb-2 flex flex-col p-2">
                <CardHeader className="text-text-two shrink-0">
                    <CardTitle className="text-text-two">register</CardTitle>
                    <CardDescription className={undefined}>
                        register now for more information
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 min-h-0 overflow-y-auto">
                    <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                        <FieldGroup className={undefined}>


                            {/*region firstName*/}
                            <Controller
                                name="firstName"
                                control={form.control}
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid} className={undefined}>
                                        <FieldLabel htmlFor="firstName" className={undefined}>
                                            first name
                                        </FieldLabel>
                                        <Input
                                            className={undefined} type="text" {...field}
                                            id="firstName"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="amir"
                                            autoComplete="off"/>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} className={undefined}
                                                        children={undefined}/>
                                        )}
                                    </Field>
                                )}
                            />
                            {/*endregion*/}

                            {/*region lastName*/}
                            <Controller
                                name="lastName"
                                control={form.control}
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid} className={undefined}>
                                        <FieldLabel htmlFor="lastName" className={undefined}>
                                            first name
                                        </FieldLabel>
                                        <Input
                                            className={undefined} type="text" {...field}
                                            id="lastName"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="ranjbar"
                                            autoComplete="off"/>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} className={undefined}
                                                        children={undefined}/>
                                        )}
                                    </Field>
                                )}
                            />
                            {/*endregion*/}

                            {/*region location*/}
                            <Controller
                                name="location"
                                control={form.control}
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid} className={undefined}>
                                        <FieldLabel htmlFor="location" className={undefined}>
                                            first name
                                        </FieldLabel>
                                        <Input
                                            className={undefined} type="text" {...field}
                                            id="location"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="karaj"
                                            autoComplete="off"/>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} className={undefined}
                                                        children={undefined}/>
                                        )}
                                    </Field>
                                )}
                            />
                            {/*endregion*/}

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
                                                        children={undefined}/>
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
                                                        children={undefined}/>
                                        )}
                                    </Field>
                                )}
                            />
                            {/*endregion*/}

                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter className="grid grid-cols-2 items-center max-sm:grid-cols-1 shrink-0">
                    <Field orientation="horizontal" className={undefined}>
                        <Button type="button" variant="outline" onClick={() => form.reset()} className="myBtn">
                            Reset
                        </Button>
                        <Button type="submit" form="form-rhf-demo" className="myBtn max-sm:p-1">
                            register
                        </Button>
                    </Field>
                    <Link to="/login" className="text-text-two text-nowrap">have you an account?</Link>
                </CardFooter>
            </Card>
        </div>
    )
}
