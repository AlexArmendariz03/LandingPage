import React from 'react';
import { MdEdit, MdDelete } from "react-icons/md";


const Table = ({ workers, deleteClick,setEditWorker}) => {


  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border border-gray-300">Nombre</th>
          <th className="px-4 py-2 border border-gray-300">Apellido Paterno</th>
          <th className="px-4 py-2 border border-gray-300">Apellido Materno</th>
          <th className="px-4 py-2 border border-gray-300">Email</th>
          <th className="px-4 py-2 border border-gray-300">Teléfono</th>
          <th className="px-4 py-2 border border-gray-300">Cargo</th>
          <th className="px-4 py-2 border border-gray-300">Área</th>
          <th className="px-4 py-2 border border-gray-300">Salario</th>
          <th className="px-4 py-2 border border-gray-300">Acciones</th>
        </tr>
        </thead>
        <tbody>
        {workers.map(worker => (
          <tr key={worker.id} className="bg-white">
            <td className="px-4 py-2 border border-gray-300">{worker.name}</td>
            <td className="px-4 py-2 border border-gray-300">{worker.paternalSurname}</td>
            <td className="px-4 py-2 border border-gray-300">{worker.maternalSurname}</td>
            <td className="px-4 py-2 border border-gray-300">{worker.email}</td>
            <td className="px-4 py-2 border border-gray-300">{worker.phone}</td>
            <td className="px-4 py-2 border border-gray-300">{worker.charge}</td>
            <td className="px-4 py-2 border border-gray-300">{worker.area}</td>
            <td className="px-4 py-2 border border-gray-300">{worker.salary}</td>
            <td className="px-4 py-2 border border-gray-300">
              <div className="flex items-center">
                <button
                  className="bg-blue-500 hover:bg-yellow-500 text-white py-1 px-2 rounded mr-2"
                  onClick={() => setEditWorker(worker.id)}>
                  <MdEdit />
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 "
                  onClick={() => {
                    if (window.confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
                      deleteClick(worker.id);
                    }}}>
                  <MdDelete />
                </button>
              </div>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>

  );
};

export default Table