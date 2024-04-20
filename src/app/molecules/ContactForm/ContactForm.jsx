"use client";
import { StepNumber } from "@/app/atoms/StepNumber";
import {
  Input,
  Textarea,
} from "@/app/components/atoms/MaterialTailwindComponent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validators";
import { inputStyles } from "./helpers";
import { Button } from "@/app/components/atoms/Button";

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full  flex justify-center items-center flex-col mt-8 mb-6"
    >
      <div className="grid grid-cols-1 gap-5 w-4/5 md:grid-cols-2 md:w-3/4 lg:grid-cols-2 lg:w-3/6">
        <div className="flex h-12 w-full items-end">
          <StepNumber step="1" />
          <div className="w-full">
            {errors.name && (
              <strong className="text-sm text-orange">
                {errors.name.message}
              </strong>
            )}
            <Input
              style={{ fontSize: "16px" }}
              className={inputStyles}
              id="name"
              {...register("name")}
              errors={errors.name}
              placeholder="Name"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
        </div>
        <div className="flex h-12 items-end ml-9 md:ml-0">
          <div className="w-full">
            {errors.lastName && (
              <strong className="text-sm text-orange">
                {errors.lastName.message}
              </strong>
            )}
            <Input
              style={{ fontSize: "16px" }}
              className={inputStyles}
              id="lastName"
              {...register("lastName")}
              errors={errors.lastName}
              placeholder="Last Name"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
        </div>
        <div className="flex h-12 items-end">
          <StepNumber step="2" />
          <div className="w-full">
            {errors.email && (
              <strong className="text-sm text-orange">
                {errors.email.message}
              </strong>
            )}
            <Input
              style={{ fontSize: "16px" }}
              className={inputStyles}
              id="email"
              placeholder="E-mail"
              {...register("email")}
              errors={errors.email}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
        </div>
        <div className="flex h-12 items-end ml-9 md:ml-0">
          <div className="w-full">
            {errors.phone && (
              <strong className="text-sm text-orange">
                {errors.phone.message}
              </strong>
            )}
            <Input
              style={{ fontSize: "16px" }}
              className={inputStyles}
              id="phone"
              {...register("phone")}
              errors={errors.phone}
              placeholder="Phone"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  w-4/5  md:w-3/4 lg:w-3/6 pt-12">
        <div className="w-full h-fit">
          <div className="flex items-center">
            <StepNumber step="3" />
            <h5 className="text-xl font-light md:text-3xl pb-2">
              Tell us about your challenge or opportunity
            </h5>
          </div>
          <div className="ml-9">
            {errors.comment && (
              <strong className="text-sm text-orange">
                {errors.comment.message}
              </strong>
            )}

            <Textarea
              id="comment"
              className={inputStyles}
              {...register("comment")}
              rows={10}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <Button type="submit">SEND</Button>
        </div>
      </div>
    </form>
  );
};
