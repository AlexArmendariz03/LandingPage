import type { FormEvent } from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

export type WorkerFormData = {
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  email: string;
  phone: string;
  area: string;
  charge: string;
  salary: string;
};

type FormProps = {
  onClose: () => void;
  register: UseFormRegister<WorkerFormData>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  errors: FieldErrors<WorkerFormData>;
  isVisible: boolean;
};

const Form = ({ onClose, register, onSubmit, errors, isVisible }: FormProps) => {
  const onCancel = () => {
    onClose();
  };

  return (
    <div className={`${isVisible ? "flex" : "hidden"}  justify-center items-center  h-screen `}>
      <div className="h-[calc(90vh-7rem)] flex justify-center items-center md: w-1/2 content-center">
        <form onSubmit={onSubmit} className="w-h flex flex-wrap">
          <h1 className="text-black-200 font-bold text-xl mb-4 w-full">Registrarse</h1>
          <div className="w-full flex flex-col mb-5">
            <label htmlFor={"nombre"} className="text-slate-500 ">
              Nombre:
              {errors.name && <span className="text-xs text-red-500 block mt-1">{errors.name.message}</span>}
            </label>
            <input
              type="text"
              className="p-3 rounded bg-white"
              placeholder="Jonas"
              {...register("name", {
                required: {
                  value: true,
                  message: "Nombre requerido",
                },
              })}
            />
          </div>
          <div className="w-1/2 flex flex-col mb-5">
            <label htmlFor={"apellidoP"} className="text-slate-500">
              Apellido Paterno:
              {errors.paternalSurname && (
                <span className="text-xs text-red-500 block mt-1">{errors.paternalSurname.message}</span>
              )}
            </label>
            <input
              type="text"
              className="p-3 rounded bg-white mr-1"
              placeholder="Suarez"
              {...register("paternalSurname", {
                required: {
                  value: true,
                  message: "Apellido paterno requerido",
                },
              })}
            />
          </div>
          <div className="w-1/2 flex flex-col mb-5">
            <label htmlFor={"apellidoM"} className="text-slate-500 ml-1">
              Apellido Materno:
              {errors.maternalSurname && (
                <span className="text-xs text-red-500 block mt-1">{errors.maternalSurname.message}</span>
              )}
            </label>
            <input
              type="text"
              className="p-3 rounded bg-white ml-1"
              placeholder="Gomez"
              {...register("maternalSurname", {
                required: {
                  value: true,
                  message: "Apellido materno requerido",
                },
              })}
            />
          </div>
          <div className="w-1/2 flex flex-col mb-5">
            <label htmlFor={"email"} className="text-slate-500">
              Email:
              {errors.email && <span className="text-xs text-red-500 block mt-1">{errors.email.message}</span>}
            </label>
            <input
              type="email"
              className="p-3 rounded bg-white mr-1"
              placeholder="jona@outlook.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "Correo requerido",
                },
              })}
            />
          </div>
          <div className="w-1/2 flex flex-col mb-5">
            <label htmlFor={"phone"} className="text-slate-500 ml-1">
              Telefono:
              {errors.phone && <span className="text-xs text-red-500 block mt-1">{errors.phone.message}</span>}
            </label>
            <input
              type="tel"
              className="p-3 rounded bg-white ml-1"
              placeholder="+52"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Telefono requerido",
                },
              })}
            />
          </div>
          <div className="w-1/2 flex flex-col mb-5">
            <label htmlFor="area" className="text-slate-500 mr-1">
              Área:
              {errors.area && <span className="text-xs text-red-500 block mt-1">{errors.area.message}</span>}
            </label>
            <select
              name="area"
              className="p-3 rounded bg-white mr-1"
              {...register("area", {
                required: "Seleccione un área",
              })}
            >
              <option value="">Seleccione un área</option>
              <option value="Ventas">Ventas y Marketing</option>
              <option value="RH">Recursos Humanos</option>
              <option value="Admin">Administración y Finanzas</option>
            </select>
          </div>
          <div className="w-1/2 flex flex-col mb-5">
            <label htmlFor="charge" className="text-slate-500 ml-1">
              Rol:
              {errors.charge && <span className="text-xs text-red-500 block mt-1">{errors.charge.message}</span>}
            </label>
            <select
              name="charge"
              className="p-3 rounded bg-white ml-1"
              {...register("charge", {
                required: "Seleccione un rol",
              })}
            >
              <option value="">Seleccione un rol</option>
              <option value="Desarrollador">Desarrollador de Software</option>
              <option value="Arquitecto de software">Arquitecto de software</option>
              <option value="Tester">Tester</option>
              <option value="Diseñador">Diseñador gráfico</option>
              <option value="Analista">Analista de Requerimientos</option>
            </select>
          </div>
          <div className="w-full flex flex-col mb-5">
            <label htmlFor={"salary"} className="text-slate-500">
              Salario:
              {errors.salary && <span className="text-xs text-red-500 block mt-1">{errors.salary.message}</span>}
            </label>
            <input
              type="text"
              className="p-3 rounded  bg-white "
              placeholder="$$"
              {...register("salary", {
                required: {
                  value: true,
                  message: "Salario requerido",
                },
              })}
            />
          </div>
          <div className="w-full flex gap-3">
            <button type="reset" onClick={onCancel} className="w-1/2 bg-red-500 text-white p-3 rounded-lg mt-2">
              Cancelar
            </button>
            <button type="submit" className="w-1/2 bg-blue-500 text-white p-3 rounded-lg mt-2">
              Registrarme
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
