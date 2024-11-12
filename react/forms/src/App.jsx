import { useForm, useFieldArray } from 'react-hook-form';
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'inputsInfinitos',
  });

  const handleData = (data) => {
    data.fecha = new Date(data.fecha).toLocaleDateString();
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleData)} >
        <input
          type="text"
          {...register('nombre', {
            required: 'Este campo es requerido',
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Ingresa solo letras',
            },
          })}
          style={{ borderColor: errors.nombre ? 'red' : 'initial' }}
          placeholder={
            errors.nombre ? errors.nombre.message : 'Ingresa un nombre'
          }
        />
        {errors?.nombre?.type === 'pattern' && (
          <span style={{ color: 'red' }}>{errors.nombre.message}</span>
        )}
        <input
          type="number"
          {...register('cantidad')}
          placeholder="Ingresa una cantidad"
        />
        {fields.map((field, index) => (
          <div key={field.id}>
            <input
              type="text"
              {...register(`inputsInfinitos.${index}.value`, {
                required: 'Este campo es requerido',
              })}
            />
            <button type="button" onClick={() => remove(index)}>
              Eliminar
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            append({ value: '' });
            console.log(fields);
          }}
        >
          {' '}
          añadir input{' '}
        </button>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default App;
