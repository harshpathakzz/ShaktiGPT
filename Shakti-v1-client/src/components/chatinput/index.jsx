import axios from 'axios';
import React, { useState } from 'react';

const ChatInput = ({ sendMessage, receiveMessage }) => {
  const [value, setValue] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const apiUrl = 'https://langchainjs-upstash-redis.onrender.com/process-input';

    if (value === "") return;

    sendMessage({ sender: "user", message: value });
    console.log(value);
    setValue("");
    setLoading(true);

    const requestBody = {
      API_KEY: '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',
      sessionId: '523',
      input: value
    };

    axios.post(apiUrl, requestBody)
      .then(response => {
        console.log(response.data);
        const aiResponseText = JSON.stringify(response.data.response.response)
          .replace(/"/g, '') 
          .replace(/\n/g, ''); 
        setAiResponse(aiResponseText);
        receiveMessage({ sender: "ai", message: aiResponseText });
        setAiResponse("");
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false); 
      });
  }

  return (
    <div className='w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4 py-4 overflow-auto relative'>
      <textarea
        onKeyDown={(e) => {
          e.keyCode === 13 && e.shiftKey === false && handleSubmit()
        }}
        rows={1}
        className='border-0 bg-transparent outline-none w-11/12 resize-none'
        value={value}
        type='text'
        onChange={(e) => setValue(e.target.value)}
        disabled={loading}
      />
      <img
        onClick={handleSubmit}
        src="/src/assets/send.png"
        alt='send-button'
        className={`absolute top-4 w-[20px] right-5 cursor-pointer ease-in duration-100 hover:scale-125 ${loading ? 'opacity-50 pointer-events-none' : ''}`}
      />
      {loading && (
        <div className="absolute top-6 right-14">
          <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-green-500 rounded-full"></div>
        </div>
      )}
    </div>
  )
}

export default ChatInput;
