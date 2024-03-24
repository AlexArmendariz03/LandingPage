"use client"
import React, {useEffect, useRef, useState} from 'react';
import Table from "@/app/components/table";
import { PUT } from "@/app/api/workers/edit/route";
import { CSVLink } from "react-csv";
import Form from "@/app/components/form";
import {useForm} from "react-hook-form";

const CSV_HEADERS = [
  { label: "Nombre", key: "name" },
  { label: "Apellido paterno", key: "paternalSurname" },
  { label: "Apellido Materno", key: "maternalSurname" },
  { label: "Correo", key: "email" },
  { label: "Telefono", key: "phone" },
  { label: "Cargo", key: "charge" },
  { label: "Area", key: "area" },
  { label: "Salario", key: "salary" },
]

function App() {
  const [workers, setWorkers] = useState([]);
  const [workerToEditId ,setWorkerToEditId] = useState("")
  const [crudOpen, setCrudOpen] = useState(false);
  const { register, reset,setValue, handleSubmit,formState:{errors} } = useForm();

  const  fetchData = async () => {
    try {
      const response = await fetch('/api/workers');
      if (!response.ok) {
        throw new Error('La respuesta de la red no era correcta');
      }
      const data = await response.json();
      setWorkers(data);
    } catch (error) {
      console.error('Hubo un problema con su operación de obtención:', error);
    }
  }

  useEffect(() => {
    fetchData().then()
  },[]);

  const deleteClick = async (id) => {
    try {
      const deleteResponse = await fetch("/api/workers/delete", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!deleteResponse.ok) {
        throw new Error("Error al eliminar el trabajador");
      }
      setWorkers(prevWorkers => prevWorkers.filter(worker => worker.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const onEditWorker = async (workerId, data) => {
    try {
      const response = await fetch(`/api/workers/edit/${workerId}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        const updatedWorker = await response.json();
        console.log("Trabajador editado", updatedWorker);
        console.log(updatedWorker)
        return updatedWorker;
      } else {
        console.error("Error al editar trabajador", response.statusText);
        throw new Error("Error al editar trabajador");
      }
    } catch (error) {
      console.error("Error de red", error);
      throw new Error("Error de red al editar trabajador");
    }
  };

  const setEditWorker = (id) => {
    const workerToEdit = workers.find(worker => worker.id === id)
    Object.entries(workerToEdit).forEach(([key,value]) => {
      if (key === "id") return
      setValue(key,value)
  })
    setWorkerToEditId(workerToEdit.id)
    setCrudOpen(true)
  }

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = workerToEditId ? await updateWorker(data) : await createWorker(data)
      if (!res.ok) {
        throw new Error("Error al crear el trabajador");
      }
      await res.json()
      resetFormVisibility()
      await fetchData()
    } catch (error) {
      console.error("Error:", error);
    }
  });

  const updateWorker = async (data) => {
    const body = {
      id: workerToEditId,
      data
    }
    return await fetch("/api/workers/edit", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  const createWorker = async (data) => {
  return await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  const resetFormVisibility = () => {
    setWorkerToEditId("")
    setCrudOpen(false)
    reset()
  }


  return (
    <div className="container mx-auto mt-8">
      <div className="w-full flex justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Registro de empleados</h1>
        <button
          onClick={() => setCrudOpen(true)}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Registrar
        </button>
      </div>
      <Form
        isVisible={crudOpen}
        errors={errors}
        register={register}
        onSubmit={onSubmit}
        onClose={() => resetFormVisibility()} />
      <Table
        workers={workers}
        deleteClick={deleteClick}
        onEditWorker={onEditWorker}
        setEditWorker={setEditWorker}/>
      <div className="flex justify-center">
        <CSVLink
          headers={CSV_HEADERS}
          data={workers}
          filename="Registro_de_empleados.csv"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8">
          Descargar CSV
        </CSVLink>
      </div>
    </div>
  )
}

export default App;
