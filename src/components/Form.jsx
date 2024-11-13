import { useState } from "react";

export default function Form() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'
  
    if (status === 'success') {
      return <p className="text-green-600 text-xl">That's the right answer 😁</p>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success')
        } catch (error) {
            setStatus('typing');
            setError(error);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }
  
    return (
      <>
        <div className='flex flex-col gap-2'>
          <p>In which city is there a billboard that turns air into drinkable water?</p>
          <form className='flex' onSubmit={handleSubmit}>
            <textarea
              value={answer}
              onChange={handleTextareaChange}
              disabled={status === 'submitting'}
              className='w-full bg-white text-black px-2 py-2 border border-slate-300 rounded-md disabled:bg-slate-200' name="" id=""></textarea>
            <br />
            <button 
              disabled={answer.length === 0 || status === 'submitting'}
              className='w-1/3 py-3 bg-red-900 rounded-md font-bold text-xl disabled:bg-red-400'>Submit</button>
          </form>
          {error !== null &&
            <p className="text-red-600">{error.message}</p>}
        </div>
      </>
    )
  }

  function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'jakarta';
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    })
  }