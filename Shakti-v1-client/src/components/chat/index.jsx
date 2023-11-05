import React, { useState } from 'react'
import ChatBody from '../chatbody'
import ChatInput from '../chatinput'

const Chat = ({chat , sendMessage , receiveMessage}) => {
  return (
    <section>
      <div className="h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between align-middle bg-gradient-to-r from-slate-900 to-blue-950">
        <div className='uppercase font-bold text-2xl text-center mb-3'>Shakti</div>
        <div className='h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center'><ChatBody chat={chat}/></div>
        <div className='w-full max-w-4xl min-w-[20rem] self-center'><ChatInput sendMessage={sendMessage} receiveMessage={receiveMessage}/></div>
    </div>
    </section>
  )
}

export default Chat
