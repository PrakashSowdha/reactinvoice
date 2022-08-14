import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { FaRegTrashAlt } from 'react-icons/fa';

export default function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  subtotal,
  setSubTotal,
  showInvoice,
  setshowInvoice,
}) {
  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount,
    };
    setDescription('');
    setQuantity('');
    setPrice('');
    setAmount('');
    setList([...list, newItems]);

    console.log(list);
  };

  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price);
    };

    calculateAmount(amount);
  }, [amount, price, quantity, setAmount]);

  // Calculate total amount of items in table
  useEffect(() => {
    let rows = document.querySelectorAll('.amount');
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === 'amount') {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setSubTotal(sum);
      }
    }
  });

  // Delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id));

  return (
    <>
      <div className='md:grid grid-cols-4 gap-5 md:mt-16 cborder'>
        <div className='flex flex-col'>
          <span className='font-bold'>DESCRIPTION</span>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold textright'>UNIT</span>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold textright'>PRICE(USD)</span>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold textright'>AMOUNT</span>
        </div>
      </div>
      {/* Table items */}
      <table width='100%' className='tablemargin'>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className='h-10'>
                <td className='col1'>{description}</td>
                <td className='col2'>{quantity}</td>
                <td className='col3'>{price}</td>
                <td className='amount'>{amount}</td>
                {!showInvoice && (
                  <td className='col5'>
                    <button onClick={() => deleteRow(id)} className='red'>
                      <FaRegTrashAlt />
                    </button>
                  </td>
                )}
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      {!showInvoice && (
        <form onSubmit={handleSubmit}>
          <div className='md:grid grid-cols-4 gap-5 md:mt-5'>
            <div className='flex flex-col'>
              <input
                type='text'
                name='description'
                id='description'
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className='flex flex-col'>
              <input
                type='text'
                name='quantity'
                id='quantity'
                placeholder='Unit'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className='flex flex-col'>
              <input
                type='text'
                name='price'
                id='price'
                placeholder='Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className='flex flex-col'>
              <p className='right'>{amount}</p>
            </div>
          </div>
          <button
            type='submit'
            className='mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'
          >
            Add
          </button>
        </form>
      )}

      {/* Item Details */}
      <div>
        <h2 className='flex items-end justify-end text-gray-800 text-2xl font-bold md:mb-8'>
          TOTAL $ {subtotal.toLocaleString()}
        </h2>
      </div>
    </>
  );
}
