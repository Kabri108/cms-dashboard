"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../InputField";
import { assignmentSchema, AssignmentSchema } from "@/lib/formValidationSchemas";
import { createAssignment, updateAssignment } from "@/lib/actions";
import { useActionState } from "react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AssignmentForm = ({
  type,
  data,
  setOpen,
  relatedData,
}: {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssignmentSchema>({
    resolver: zodResolver(assignmentSchema),
  });

  const [state, formAction] = useActionState(
    type === "create" ? createAssignment : updateAssignment,
    { success: false, error: false }
  );

  const onSubmit = handleSubmit((formData) => {
    formAction(formData);
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast(`Assignment has been ${type === "create" ? "created" : "updated"}!`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, setOpen, type]);

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new assignment" : "Update the assignment"}
      </h1>

      <InputField
        label="Title"
        name="title"
        defaultValue={data?.title}
        register={register}
        error={errors.title}
      />

      <InputField
        label="Start Date"
        name="startDate"
        type="date"
        defaultValue={data?.startDate?.split("T")[0]}
        register={register}
        error={errors.startDate}
      />

      <InputField
        label="Due Date"
        name="dueDate"
        type="date"
        defaultValue={data?.dueDate?.split("T")[0]}
        register={register}
        error={errors.dueDate}
      />

      <div className="flex flex-col gap-2">
        <label className="text-xs text-gray-500">Lesson</label>
        <select
          {...register("lessonId")}
          defaultValue={data?.lessonId}
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
        >
          {relatedData?.lessons?.map((lesson: any) => (
            <option key={lesson.id} value={lesson.id}>
              {lesson.name}
            </option>
          ))}
        </select>
        {errors.lessonId && (
          <p className="text-xs text-red-400">{errors.lessonId.message}</p>
        )}
      </div>

      {data?.id && (
        <input type="hidden" value={data.id} {...register("id")} />
      )}

      {state.error && (
        <span className="text-red-500">Something went wrong!</span>
      )}

      <button className="bg-sky-300 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default AssignmentForm;
