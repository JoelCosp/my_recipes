import React from 'react'

const Create = () => {
  return (
    <section>
        <div className='max-w-[1240px] mx-auto px-5 flex justify-center'>
            <form className='flex flex-col' action="">
                <input className='w-[400px] px-5 py-5 mb-5 rounded-2xl outline-hidden bg-[#dadada]' type="text" placeholder='Nombre'/>
                <input className='w-[400px] px-5 py-5 mb-5 rounded-2xl outline-hidden bg-[#dadada]' type="text" placeholder='Descripción'/>
                <input className='w-[400px] px-5 py-5 mb-5 rounded-2xl outline-hidden bg-[#dadada]' type="number" min="0" placeholder='Duración'/>
                <input className='w-[400px] px-5 py-5 mb-5 rounded-2xl outline-hidden bg-[#dadada]' type="url" placeholder='Url'/>
                <input className='w-[400px] px-5 py-5 mb-5 rounded-2xl outline-hidden bg-[#dadada]' type="text" placeholder='Categoría'/>
                <div className='flex mb-5'>
                    <label className='mr-5'><input className='mr-1' type="radio" name="question" value="Baja"/>Baja</label>
                    <label className='mr-5'><input className='mr-1' type="radio" name="question" value="Media"/>Media</label>
                    <label className='mr-5'><input className='mr-1' type="radio" name="question" value="Alta"/>Alta</label>
                </div>
                <div className='flex justify-center gap-5 font-semibold'>
                    <button className='px-5 w-full rounded-2xl py-3 border-1 border-[red] text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white'>CANCELAR</button>
                    <button className='px-5 bg-[#4fa909] w-full rounded-2xl py-3 text-white hover:cursor-pointer hover:bg-[#3b8700]'>CREAR</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Create
