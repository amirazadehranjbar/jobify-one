"use client"

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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

enum jobStatusEnum {
    pending = 'pending',
    took = 'took'
};

enum jobTypeEnum {
    fullTime = "fullTime"
};

const formSchema = z.object({
    position: z.string().trim().min(1, "Position is required"),
    company: z.string().trim().min(1, "Company is required"),
    jobLocation: z.string().trim().min(1, "Job location is required"),
    jobStatus: z.enum(jobStatusEnum, { error: "Please select a job status" }),
    jobType: z.enum(jobTypeEnum , { error: "Please select a job type" }),
});

export default function AddJobPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            position: "",
            company: "",
            jobLocation: "",
            jobStatus: undefined as unknown as jobStatusEnum, // no default → reset clears it, forces user to pick
            jobType: jobTypeEnum.fullTime
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
        <Card className="w-1/2 max-md:w-3/4">
            <CardHeader>
                <CardTitle className="text-text-two text-xl font-bold">add job</CardTitle>
                <CardDescription>
                    add new job here...
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup className="grid grid-cols-2 max-md:grid-cols-1">

                        {/*region position*/}
                        <Controller
                            name="position"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="position">
                                        position
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="position"
                                        aria-invalid={fieldState.invalid}
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]}/>
                                    )}
                                </Field>
                            )}
                        />
                        {/*endregion*/}

                        {/*region company*/}
                        <Controller
                            name="company"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="company">
                                        company
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="company"
                                        aria-invalid={fieldState.invalid}
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]}/>
                                    )}
                                </Field>
                            )}
                        />
                        {/*endregion*/}

                        {/*region job Location*/}
                        <Controller
                            name="jobLocation"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="jobLocation">
                                        job location
                                    </FieldLabel>
                                    {/* using Radix's onValueChange/value instead of spreading {...field},
                                         since shadcn's Select doesn't take a native onChange event like Input does */}
                                    <Select key={field.value} value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger className="w-full " id="jobLocation">
                                            <SelectValue placeholder="select job location"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Job Status</SelectLabel>
                                                {Object.values(jobStatusEnum).map((status) => (
                                                    <SelectItem key={status} value={status}>
                                                        {status}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]}/>
                                    )}
                                </Field>
                            )}
                        />
                        {/*endregion*/}

                        {/*region job Status*/}
                        <Controller
                            name="jobStatus"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="jobStatus">
                                        job Status
                                    </FieldLabel>
                                    {/* using Radix's onValueChange/value instead of spreading {...field},
                                         since shadcn's Select doesn't take a native onChange event like Input does */}
                                    <Select key={field.value} value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger className="w-full" id="jobStatus">
                                            <SelectValue placeholder="Select job status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Job Status</SelectLabel>
                                                {Object.values(jobStatusEnum).map((status) => (
                                                    <SelectItem key={status} value={status}>
                                                        {status}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]}/>
                                    )}
                                </Field>
                            )}
                        />
                        {/*endregion*/}

                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Reset
                    </Button>
                    <Button type="submit" form="form-rhf-demo">
                        Submit
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    )
}
