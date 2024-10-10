import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

function Forms() {
/*   const navigate = useNavigate();

  const estado = useState("hola")
  console.log(estado); */

  const [searchParams, setSearchParams] = useSearchParams();
  let params = useParams();

  console.log(params);

  useEffect(() => {
    console.log(searchParams.get("name"));
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

/*   let lista = ["nombre", "apellido", "edad", "carrera"];
  let [foo, bar, baz, waos] = lista;
  console.log(foo, bar, baz, waos); */
/* 
  let objeto = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    carrera: "Ingeniería en Sistemas",
  }

  let { nombre, apellido, edad, carrera } = objeto;

  console.log(nombre, apellido, edad, carrera); */

  const manejarEnvio = (data) => {
    navigate("/");
    console.log(data);
  };

  return (
    <div>
      <h1 className="mb-8">Formulario Básico</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(manejarEnvio)}
      >
        <div className="flex gap-10 items-center">
          <Label>Nombre</Label>
          <Input
            type="text"
            className={
              errors.name ? 'border-red-500 text-red-500 placeholder:text-red-500' : 'border-slate-100'
            }
            placeholder= {
              errors.name ? errors.name.message : ''
            }
            {...register('name', {
              required: 'Este campo es requerido',
            })}
          />
          {errors.name && (
            <span className="text-red-500">{`${errors.name.message}`}</span>
          )}
        </div>
        <div className="flex gap-10 items-center">
          <Label>Apellido</Label>
          <Input type="text" {...register('lastName')} />
        </div>
        <div className="flex gap-10 items-center">
          <Label>Edad</Label>
          <Input type="number" {...register('age')} />
        </div>
        <div className="flex gap-10 items-center">
          <Label>Carrera</Label>
          <Input type="text" {...register('major')} />
        </div>
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
}

export default Forms;
