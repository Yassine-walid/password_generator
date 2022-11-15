
import React,{ useState }  from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import { CopyToClipboard } from "react-copy-to-clipboard";



const Home = () => {

    const [password, setPassword] = useState('null')

    const apiUrl = 'https://passwordinator.herokuapp.com?num=true&char=true&caps=true&len=18'
    const fetchPassword = () => {
        fetch(apiUrl).then((response) =>response.json()).then((data) => {
            setPassword(data)  
        });     
    }

    function copyTextToClipboard(text) {
        if ('clipboard' in navigator) { 
          return  navigator.clipboard.writeText(password.data);
        } 
    }

  return (
    <div className=' bg-slate-900  w-full pt-10 h-screen transaction-height duration-75 ease-out'>
        <div className="grid gap-y-20 justify-center">
            <p className="text-5xl text-center text-white text-bold">
                Password Generator 1.0
            </p>
            <div className='grid gap-x-20'>
            </div>
            <button 
                className='w-full p-2.5 text-gray-500 text-2xl text-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 hover:bg-slate-900'
                onClick={() =>{
                    fetchPassword()
                }}
                >
                    Generate Random Password
            </button>
            <button 
                className='w-full p-2.5 text-gray-500 text-2xl text-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 hover:bg-slate-900'
                onClick={() =>{
                    if(typeof password.data === 'undefined'){
                        alert('Generate Password First')
                    }else{
                        
                        copyTextToClipboard()
                        alert(`Password Copied to Clipboard ${password.data}`)
                    }
                }}
                >
                    Copy
            </button>
        </div>
        
    </div>
  )
}

export default Home