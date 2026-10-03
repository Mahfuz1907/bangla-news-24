"use client";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
  InputGroup
} from "@heroui/react";
import {Eye, EyeSlash} from "@gravity-ui/icons";
import { useState } from "react";
import Link from "next/link";
import { signUp } from "@/app/api/auth/[...all]/auth-client";


const SignUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries()) as Record<string, string>

    const { data, error } = await signUp.email({
    name: userData.name, 
    email: userData.email, 
    password: userData.password, 
    callbackURL: "/",
    });

    console.log('After sign up', data, error)
  };


    return (
        <div>
            <Form className="w-96 mx-auto my-10" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend className="text-center font-bold text-2xl text-emerald-800">সাইন আপ</Fieldset.Legend>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>নাম</Label>
            <Input className={'border border-gray-400 outline-none focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 transition-all'} />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>ইমেইল</Label>
            <Input className={'border border-gray-400 outline-none focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 transition-all'} />
            <FieldError />
          </TextField>
          <TextField 
          className="w-96" 
          name="password"
          isRequired
          minLength={8}
          type={isVisible ? "text" : "password"}
          validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
          >
      <Label>পাসওয়ার্ড</Label>
      <InputGroup className={'w-96 border border-gray-400 focus-within:border-emerald-700 focus-within:ring-2 focus-within:ring-emerald-700/20 transition-all'}>
        <InputGroup.Input
          className="w-full"
        />
        <InputGroup.Suffix className="pe-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
      <Description>১ টি নম্বর সহ অবশ্যই ৮ টি ক্যারেক্টার থাকতে হবে</Description>
          </TextField>
        </FieldGroup>
        <Fieldset.Actions className="flex flex-col">
          <Button className={'bg-emerald-800 hover:bg-emerald-700 w-full'} type="submit">
            সাইন আপ করুন 
          </Button>
          <p className="text-sm">অ্যাকাউন্ট আছে? <Link href={'/sign-in'} className="text-emerald-800 font-bold cursor-pointer hover:underline">সাইন ইন করুন</Link></p>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
        </div>
    );
};

export default SignUp;